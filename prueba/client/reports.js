// Card reports: kept on this phone first and then sent to the server (POST /api/reports) for review, so a report
// made without connection is not lost. Only cards of the bundled bank are accepted; a custom card stays local.
import { REPORT_REASONS } from '../content.js';
import { api } from './room.js';
import { isNative } from './platform.js';
import { loadReports, saveReports } from './store.js';

// Reports saved before sending existed only kept the reason's text.
const reasonId = report => report.reasonId || Object.keys(REPORT_REASONS).find(id => REPORT_REASONS[id] === report.reason);
let sending = null;

// Resolves to true when nothing is left waiting. Network or server trouble leaves the rest for the next try.
export function sendReports() {
  sending ||= (async () => {
    for (const report of loadReports().filter(item => !item.sent)) {
      let sent;
      try {
        await api('/api/reports', { method: 'POST', body: JSON.stringify({ cardId: report.id, reason: reasonId(report), mode: report.mode || null, comment: report.comment || '', platform: isNative() ? 'ios' : 'web' }) }, null);
        sent = true;
      } catch (error) {
        // 400: not a bank card (custom content) or an invalid old report. It stays only on this phone.
        if (error.status !== 400) return false;
        sent = 'local';
      }
      saveReports(loadReports().map(item => item.id === report.id && item.date === report.date ? { ...item, sent } : item));
    }
    return true;
  })().finally(() => { sending = null; });
  return sending;
}
