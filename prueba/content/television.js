// Televisión y programas. Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
export default {
  id: 'television', name: 'Televisión', icon: 'tv', modes: 'MP',
  cards: `
f | Pasapalabra | es | rosco, letras, Roberto Leal, bote
f | Operación Triunfo | es 00s | academia, cantantes, Bisbal, concursantes
f | MasterChef | 10s | cocina, jueces, delantal, eliminación
f | Gran Hermano | 00s | casa, concursantes, nominaciones, cámaras
f | Saber y ganar | es | Jordi Hurtado, concurso, La 2, preguntas
f | El Hormiguero | es 10s | Pablo Motos, hormigas, Trancas, Barrancas
f | Sálvame | es 10s | corazón, Jorge Javier, colaboradores, Telecinco
f | La ruleta de la suerte | es | panel, letras, gajos, comprar vocal
f | Supervivientes | es | isla, Honduras, concursantes, hambre
f | ¿Quién quiere ser millonario? | | preguntas, comodines, millón, público
f | Un, dos, tres... responda otra vez | es 70s | Chicho Ibáñez Serrador, Ruperta, calabaza, azafatas
f | El precio justo | es 80s | Joaquín Prat, a jugar, productos, adivinar
f | Telediario | es | noticias, TVE, presentador, mediodía
f | Grand Prix del verano | es 90s | Ramón García, vaquilla, pueblos, Cristina Lasvignes
f | Tu cara me suena | es 10s | imitar, cantantes, maquillaje, Manel Fuentes
f | La Voz | es 10s | sillas, girarse, coaches, cantar
f | Got Talent | 10s | talentos, jurado, pase de oro, actuaciones
f | First Dates | es 10s | citas, restaurante, Carlos Sobera, parejas
f | Pesadilla en la cocina | es 10s | Chicote, restaurantes, bronca, cocineros
f | Eurovisión | | festival, canciones, douze points, países
f | Cine de barrio | es | películas antiguas, sábados, TVE, nostalgia
f | Gala de los Goya | es | premios, cine español, cabezón, alfombra roja
f | Telecupón | es 90s | ONCE, sorteo, Carmen Sevilla, cupón
f | Aquí hay tomate | es 00s | corazón, Jorge Javier, Carmen Alcayde, cotilleos
f | Crónicas marcianas | es 90s | Javier Sardà, noche, Telecinco, tertulia
f | El coche fantástico | 80s | Kitt, Michael Knight, luz roja, Hasselhoff
f | Benidorm Fest | es 20s | Eurovisión, festival, candidatos, Alicante
f | La Resistencia | es 10s | Broncano, entrevistas, Movistar, preguntas
f | El Intermedio | es | Wyoming, noticias, humor, laSexta
f | Cuarto Milenio | es 00s | Iker Jiménez, misterio, ovnis, Carmen Porter
f | España directo | es | reportajes, pueblos, TVE, tarde
f | Teletienda | es 90s | productos, comprar, llame ya, anuncio
f | El Chiringuito de Jugones | es 10s | fútbol, tertulia, Pedrerol, gritos
f | Españoles en el mundo | es 00s | extranjero, vivir, reportaje, ciudades
m | Caiga quien caiga | es 90s
m | Noche de fiesta | es 90s
m | Lo que necesitas es amor | es 90s
m | Sorpresa, sorpresa | es 90s
m | Furor | es 90s
m | Callejeros | es 00s
m | Informe Semanal | es
m | El diario de Patricia | es 00s
m | Hola Raffaella | es 90s
m | La bola de cristal | es 80s
m | Club Super 3 | es
m | Estudio Estadio | es
m | Humor amarillo | es 90s
m | Vaya semanita | es 00s
m | El club de la comedia | es 90s
m | Quién sabe dónde | es 90s
m | Esta noche cruzamos el Mississippi | es 90s
m | Tómbola | es 90s
m | Hermano mayor | es 10s
m | Cifras y letras | es 90s
m | Waku waku | es 90s
m | Alta tensión | es 00s
m | Atrapa un millón | es 10s
m | Ahora caigo | es 10s
m | Boom | es 10s
m | El rival más débil | 00s
m | Allá tú | es 00s
m | Salvados | es 00s
m | Cambio radical | es 00s
m | Fama, ¡a bailar! | es 00s
m | Late Motiv | es 10s
m | Muchachada Nui | es 00s
d | Un país en la mochila | es 90s
d | La clave | es 70s
d | Tengo una pregunta para usted | es 00s
d | Mira quién baila | es 00s
d | Splunge | es 00s
d | El gran juego de la oca | es 90s
d | Si lo sé no vengo | es 80s
d | La hora de José Mota | es 00s
d | Homo Zapping | es 00s
d | Pasa la vida | es 90s
d | VIP Noche | es 90s
d | El Semáforo | es 90s
d | Corazón, corazón | es 90s
d | Saber vivir | es 00s
d | El tiempo es oro | es 80s
d | La edad de oro | es 80s
d | Si yo fuera presidente | es 80s
d | El show de Benny Hill | 70s
d | Monty Python | 70s
d | Saturday Night Live | 70s
d | Jeopardy! |
d | Arguiñano en tu cocina | es 90s
d | Con las manos en la masa | es 80s
d | Las noticias del guiñol | es 90s
d | Crónicas de un pueblo | es 70s
d | Telepasión | es 90s
d | ¿Qué apostamos? | es 90s
d | El peor programa de la semana | es 90s
d | La parodia nacional | es 90s
d | Inocente, inocente | es 90s
d | Lo + plus | es 90s
f | Dibujos animados del sábado | M | mañana, niños, tele, desayuno
f | Anuncios | | publicidad, pausa, tele, marcas
f | Presentador de televisión | M | micrófono, plató, programa, cámara
f | Hombre del tiempo | M | mapa, lluvia, borrascas, previsión
f | Concurso de la tele | | premio, preguntas, presentador, plató
f | Telenovela | M | drama, amor, capítulos, lágrimas
f | Plató de televisión | | cámaras, focos, público, programa
f | Público aplaudiendo | M | aplausos, plató, cartel, animar
f | Carta de ajuste | D | tele, colores, rayas, emisión
m | Directo | | en vivo, ahora, emisión, tiempo real
m | Reality show | | concursantes, casa, cámaras, expulsión
m | Programa de cocina | M | chef, recetas, plató, platos
m | Talent show | | jurado, cantar, actuar, votos
m | Campanadas de la Puerta del Sol | M es | uvas, reloj, presentadores, Nochevieja
m | Sintonía | | música, cabecera, programa, tararear
m | Audiencia | | share, espectadores, ranking, éxito
m | Prime time | | horario, noche, audiencia, estelar
m | Teleserie | | capítulos, temporada, ficción, emisión
m | Pantalla dividida | D | dos imágenes, conexión, plató, directo
m | Corte publicitario | | anuncios, pausa, volvemos, minutos
d | Share | | audiencia, porcentaje, cuota, espectadores
d | Teleprompter | | leer, presentador, pantalla, texto
d | Apagón analógico | es 10s | TDT, antena, señal, cambio
d | TDT | es | televisión digital, antena, canales, decodificador
d | Infocomercial | | anuncio largo, venta, teléfono, producto
d | Claqueta | D | rodaje, acción, toma, cine
`
};
