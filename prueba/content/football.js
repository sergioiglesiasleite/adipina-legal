// Fútbol: jugadores, equipos, estadios, jugadas y momentos. Formato: dificultad | respuesta | etiquetas | prohibidas.
// Messi, Cristiano, Iniesta, Casillas y otros están en Personajes famosos; penalti, VAR o fuera de juego, en Deportes.
export default {
  id: 'football', name: 'Fútbol', icon: 'ball', modes: 'MP',
  cards: `
f | Real Madrid | | blanco, Bernabéu, merengue, Champions
f | FC Barcelona | | Barça, azulgrana, Camp Nou, culé
f | Atlético de Madrid | | colchonero, Simeone, rojiblanco, Metropolitano
f | Sevilla FC | es | Nervión, Sánchez-Pizjuán, Europa League, rojo
f | Real Betis | es | verdiblanco, Villamarín, Sevilla, Joaquín
f | Athletic Club | es | Bilbao, San Mamés, leones, vascos
f | Valencia CF | es | Mestalla, murciélago, che, naranja
f | La Selección Española | es | La Roja, Mundial, Eurocopa, España
f | El Clásico | | Madrid, Barça, partido, rivalidad
f | Mundial de fútbol | | Copa del Mundo, selecciones, cuatro años, FIFA
f | Champions League | | Europa, Orejona, himno, clubes
f | Eurocopa | | Europa, selecciones, campeona, España
f | Balón de Oro | | premio, mejor jugador, France Football, trofeo
f | Portero | D | guantes, parada, portería, arquero
f | Córner | | esquina, saque, banderín, cabezazo
f | Saque de banda | M | línea, manos, lanzar, lateral
f | Tarjeta amarilla | D | árbitro, aviso, falta, roja
f | Gol en propia puerta | | autogol, error, defensa, portería
f | Tanda de penaltis | | empate, desempate, once metros, portero
f | Celebrar un gol | M | grito, abrazo, gol, rodillas
f | Silbar al árbitro | M | pitar, protesta, grada, colegiado
f | Bufanda del equipo | D | afición, colores, grada, abrigo
f | Espinilleras | D | piernas, protección, medias, golpe
f | Botas de tacos | D | césped, calzado, suela, jugador
f | Pelota de fútbol | D | balón, redonda, pentágonos, chutar
f | Estadio | D | grada, campo, aficionados, partido
f | Vinícius Júnior | | Real Madrid, Brasil, regate, baile
f | Lamine Yamal | 20s es | Barça, joven, Eurocopa, extremo
f | Pedri | 20s es | Barça, Canarias, centrocampista, joven
f | Erling Haaland | 20s | Noruega, Manchester City, goleador, rubio
f | Neymar | 10s | Brasil, PSG, Barça, regates
f | Sergio Ramos | 10s es | Real Madrid, defensa, Sevilla, cabezazo
f | Fernando Torres | 00s es | Niño, Atlético, Liverpool, Eurocopa
f | Zinedine Zidane | 00s | Francia, Real Madrid, entrenador, volea
f | Ronaldinho | 00s | Brasil, Barça, sonrisa, regates
f | Pep Guardiola | 10s es | entrenador, Barça, Manchester City, calvo
f | Diego Simeone | 10s | Cholo, Atlético, entrenador, Argentina
f | Gol de Iniesta en el Mundial | 10s es | Sudáfrica, 2010, final, Holanda
m | Real Sociedad | es | Anoeta, San Sebastián, txuri-urdin, vascos
m | Villarreal | es | submarino amarillo, Castellón, Cerámica, groguet
m | Celta de Vigo | es | Balaídos, celeste, Galicia, Aspas
m | Deportivo de La Coruña | 00s es | Superdepor, Riazor, Galicia, blanquiazul
m | Rayo Vallecano | es | Vallecas, franja, barrio, Madrid
m | Osasuna | es | Pamplona, El Sadar, rojillo, Navarra
m | Cádiz CF | es | Carranza, submarino amarillo, Andalucía, sur
m | Real Zaragoza | es | La Romareda, maño, Aragón, blanquillo
m | Sporting de Gijón | es | El Molinón, Asturias, rojiblanco, Quini
m | Manchester United | | Old Trafford, diablos rojos, Inglaterra, Ferguson
m | Liverpool | | Anfield, You'll Never Walk Alone, rojo, Inglaterra
m | Bayern de Múnich | | Alemania, bávaros, Allianz, rojo
m | Juventus | | Turín, Italia, bianconeri, rayas
m | Boca Juniors | | Bombonera, Argentina, Xeneize, azul y oro
m | Copa del Rey | es | torneo, final, eliminatoria, trofeo
m | Bota de Oro | | máximo goleador, Europa, premio, zapato
m | Pichichi | es | máximo goleador, Liga, premio, Bilbao
m | Remontada | | dar la vuelta, partido, ganar, épica
m | Tiki-taka | es | toque, pases, Barça, España
m | Chilena | M | tijera, espaldas, acrobacia, gol
m | Vaselina | | globo, portero, por encima, picar
m | Caño | | entre las piernas, regate, túnel, humillar
m | Rabona | | pierna cruzada, detrás, regate, chutar
m | Panenka | | penalti, picado, suave, checo
m | Barrera | M | falta, pared, defensas, saltar
m | Gol olímpico | | córner, directo, esquina, rosca
m | Fichaje | | traspaso, millones, firmar, nuevo
m | Cantera | | La Masía, juveniles, formar, jóvenes
m | Mercado de fichajes | | verano, invierno, traspasos, rumores
m | Luka Modrić | 10s | Croacia, Real Madrid, Balón de Oro, centrocampista
m | Karim Benzema | 10s | Francia, Real Madrid, delantero, Balón de Oro
m | Antoine Griezmann | 10s | Francia, Atlético, Barça, Fortnite
m | Jude Bellingham | 20s | Inglaterra, Real Madrid, centrocampista, joven
m | Aitana Bonmatí | 20s es | Barça, Balón de Oro, selección femenina, centrocampista
m | Rodri | 20s es | Manchester City, Balón de Oro, mediocentro, Atlético
m | Xavi Hernández | 00s es | Barça, centrocampista, entrenador, Terrassa
m | Carles Puyol | 00s es | Barça, defensa, melena, capitán
m | David Villa | 00s es | Guaje, Asturias, delantero, Valencia
m | Raúl González | 90s es | Real Madrid, siete, Ángel de Madrid, delantero
m | Ronaldo Nazário | 90s | Brasil, Fenómeno, Real Madrid, delantero
m | Luis Suárez | 10s | Uruguay, Barça, mordisco, delantero
m | Thibaut Courtois | 10s | Bélgica, portero, Real Madrid, alto
m | Jan Oblak | 10s | Atlético, portero, Eslovenia, paradas
m | Carlo Ancelotti | 10s | entrenador, ceja, italiano, Real Madrid
m | José Mourinho | 00s | entrenador, portugués, Special One, Chelsea
m | Luis Aragonés | 00s es | Sabio de Hortaleza, seleccionador, Eurocopa, Atlético
m | Vicente del Bosque | 10s es | bigote, seleccionador, Mundial, marqués
d | Alfredo Di Stéfano |  | Real Madrid, Saeta Rubia, argentino, Copas de Europa
d | Johan Cruyff | 70s | Holanda, Barça, Dream Team, catorce
d | Paco Gento | es | Real Madrid, extremo, seis Copas de Europa, Cantabria
d | Emilio Butragueño | 80s es | Buitre, Real Madrid, Quinta, delantero
d | La Quinta del Buitre | 80s es | Real Madrid, Butragueño, Míchel, Sanchís
d | Hugo Sánchez | 80s | México, Real Madrid, chilena, voltereta
d | Hristo Stoichkov | 90s | Bulgaria, Barça, Dream Team, carácter
d | Michael Laudrup | 90s | Dinamarca, Barça, Real Madrid, pases
d | Dream Team | 90s es | Cruyff, Barça, Wembley, Koeman
d | Mano de Dios | 80s | Maradona, Inglaterra, Mundial, México
d | Gol fantasma | | no entró, línea, polémica, árbitro
d | Gol de oro | | prórroga, muerte súbita, final, regla
d | Alineación indebida | | sanción, jugador, castigo, partido
d | Naranjito | 80s es | mascota, Mundial, 1982, fruta
d | Cobi | 90s es | mascota, Barcelona, 1992, perro
d | Wembley | | Londres, estadio, Inglaterra, catedral
d | Maracaná | | Río de Janeiro, Brasil, estadio, Maracanazo
d | La Bombonera | | Boca Juniors, Buenos Aires, estadio, azul y oro
d | San Mamés | es | Bilbao, catedral, Athletic, leones
d | Mestalla | es | Valencia, estadio, che, grada
d | Benito Villamarín | es | Betis, estadio, Heliópolis, verdiblanco
d | Riyadh Air Metropolitano | es | Atlético, estadio, Wanda, Madrid
d | La Masía | es | Barça, cantera, escuela, granja
d | La Orejona | | Champions, trofeo, asas, copa
d | Supercopa de España | es | Arabia, trofeo, cuatro equipos, enero
d | Cláusula de rescisión | | contrato, salir, pagar, millones
d | Doblete | | dos títulos, Liga, Copa, temporada
d | Triplete | | tres títulos, Liga, Copa, Champions
d | Zamora | es | trofeo, portero, menos goles, Ricardo
d | Kubala | es | Barça, húngaro, Ladislao, estatua
d | Telmo Zarra | es | Athletic, goleador, cabezazo, Pichichi
d | Gianluigi Buffon | 00s | Italia, portero, Juventus, Mundial
d | Paolo Maldini | 90s | Italia, Milan, defensa, capitán
d | Franz Beckenbauer | 70s | Alemania, Káiser, defensa, Bayern
d | Andrea Pirlo | 00s | Italia, Juventus, barba, pases
d | Iker Muniain | 10s es | Athletic, Navarra, extremo, Bilbao
d | Joaquín Sánchez | 10s es | Betis, humor, extremo, Puerto de Santa María
f | Gol | M | marcar, red, celebrar, portería
f | Golazo | M | gol espectacular, escuadra, celebrar, bonito
f | Falta | M | árbitro, pitar, golpe, tarjeta
f | Mano en el área | M | penalti, árbitro, brazo, balón
f | Saque de puerta | M | portero, área pequeña, chutar, inicio
f | Saque de centro | M | inicio, círculo central, empezar, pitido
f | Descanso del partido | M | vestuarios, quince minutos, mitad, bocadillo
f | Tiempo de descuento | M | minutos añadidos, árbitro, cartel, final
f | Pitido final | M | árbitro, terminar, silbato, partido
f | Empate | M | igualados, tablas, mismo marcador, partido
f | Marcador | D | resultado, goles, estadio, pantalla
f | Alineación | D | jugadores, once, entrenador, táctica
f | Banquillo | D | suplentes, entrenador, sentarse, cambio
f | Cambio de jugador | M | sustitución, cartel, banda, entrar
f | Suplente | M | banquillo, esperar, cambio, calentar
f | Capitán del equipo | M | brazalete, líder, sorteo
f | Brazalete de capitán | D | brazo, C, líder
f | Dorsal | D | número, espalda, camiseta, jugador
f | Número diez | M | crack, dorsal, estrella, mediapunta
f | Delantero centro | M | gol, atacante, nueve, área
f | Defensa central | M | defensor, zaga, despejar, alto
f | Lateral | M | banda, defensa, subir, carril
f | Centrocampista | M | medio, pases, campo, organizar
f | Extremo | M | banda, regate, rápido, centrar
f | Pizarra táctica | D | entrenador, flechas, jugadores
f | Afición | M | aficionados, grada, cantar, equipo
f | Grada | D | asientos, aficionados, estadio, gritar
f | Himno del equipo | M | cantar, afición, letra, estadio
f | Bandera del equipo | D | colores, ondear, afición, escudo
f | Escudo del equipo | D | emblema, camiseta, colores, club
f | Hincha | M | aficionado, animar, gritar, bufanda
f | Tifo | D | mosaico, grada, afición, gigante
f | Mascota del club | D | disfraz, animal, estadio, niños
f | Primera División |  | Liga, veinte equipos, máxima categoría, España
f | Segunda División |  | ascenso, Liga, categoría, equipos
f | Ascenso | M | subir, categoría, celebrar, equipo
f | Descenso | M | bajar, categoría, llorar, último
f | Fútbol femenino |  | mujeres, Liga F, Alexia, selección
m | Liga F | 20s es | fútbol femenino, Barça, España
m | Mundial femenino 2023 | 20s es | España campeona, Sídney, fútbol, selección
m | Olga Carmona | 20s es | gol, final del Mundial, lateral, Sevilla
m | Salma Paralluelo | 20s es | delantera, Barça, atleta, Zaragoza
m | Irene Paredes | 20s es | central, capitana, Barça, Legazpi
m | Unai Simón | 20s es | portero, Athletic, selección, Eurocopa
m | Dani Carvajal | 20s es | lateral, Real Madrid, selección, Leganés
m | Álvaro Morata | 20s es | delantero, capitán, Atlético, selección
m | Nico Williams | 20s es | extremo, Athletic, hermano, Eurocopa
m | Dani Olmo | 20s es | mediapunta, Barça, Leipzig, Terrassa
m | Fabián Ruiz | 20s es | centrocampista, PSG, Betis, Sevilla
m | Marc Cucurella | 20s es | lateral, pelo rizado, Chelsea, Eurocopa
m | Eurocopa 2024 | 20s es | España campeona, Alemania, Berlín, Lamine
m | Eurocopa 2012 | 10s es | España campeona, Kiev, Italia, cuatro goles
m | La Décima | 10s es | Real Madrid, Lisboa, Champions, Ramos
m | Cabezazo de Ramos en el 93 | 10s es | Lisboa, Champions, minuto 93, empate
m | Remontada del PSG | 10s es | Barça, 6-1, Sergi Roberto, Camp Nou
m | Sextete | 00s es | Barça, Guardiola, seis títulos, 2009
m | Iniestazo | 00s es | Stamford Bridge, Chelsea, Champions, gol
m | Volea de Zidane | 00s | Glasgow, Champions, Real Madrid, Leverkusen
m | Pase de la muerte |  | centro atrás, área, gol, rematar
m | Taconazo | M | tacón, pase, gol, espectacular
m | Bicicleta (regate) | M | piernas, balón, engañar
m | Elástica | M | regate, Ronaldinho, exterior, engañar
m | Ruleta marsellesa | M | girar, regate, Zidane, pisar
m | Sombrerito | M | regate, por encima, levantar, rival
m | Libre directo | M | falta, barrera, gol, chutar
m | Piscinazo | M | tirarse, fingir, falta, teatro
m | Doble amarilla | M | expulsión, segunda, roja, árbitro
m | Expulsión | M | tarjeta roja, salir, árbitro, vestuario
m | Ida y vuelta |  | eliminatoria, dos partidos, casa, fuera
m | Fase de grupos |  | Champions, liguilla, clasificar
m | Octavos de final |  | eliminatoria, dieciséis equipos, Champions, sorteo
m | Final de la Champions |  | trofeo, Orejona, mayo, partido
m | Sorteo de la Champions | M | bolas, bombos, Nyon, emparejamientos
m | Himno de la Champions | M | música, estrellas, inicio, cantar
m | Rueda de prensa | M | entrenador, periodistas, micrófonos, preguntas
m | Pretemporada |  | verano, preparación, amistosos, gira
d | Valdebebas | es | Real Madrid, ciudad deportiva, entrenamientos, Madrid
d | Ciutat Esportiva Joan Gamper | es | Barça, entrenamientos, Sant Joan Despí, ciudad deportiva
d | Lezama | es | Athletic, cantera, entrenamientos, Bizkaia
d | Zubieta | es | Real Sociedad, cantera, entrenamientos, Gipuzkoa
d | Ley Bosman |  | traspasos, libre circulación, comunitarios, 1995
d | Fair play financiero |  | UEFA, gastos, deudas, sanciones
d | Superliga europea | 20s | clubes, Florentino, UEFA, polémica
d | Socio del club | M | carné, votar, asamblea, abonado
d | Abonado | M | carné, temporada, asiento, estadio
d | Director deportivo |  | fichajes, club, planificar, mercado
d | Ojeador | M | descubrir talentos, jóvenes, viajar, informe
d | Agente de futbolistas |  | representante, contratos, comisión, traspasos
d | Jorge Mendes |  | agente, Portugal, Cristiano, representante
d | Cesión |  | préstamo, jugador, otro equipo, temporada
d | Los Galácticos | 00s es | Real Madrid, Florentino, Zidane, Figo
d | Centenariazo | 00s es | Deportivo, Copa del Rey, Bernabéu, 2002
d | Maracanazo |  | Uruguay, Brasil, 1950, Maracaná
d | Mineirazo |  | 7-1, Alemania, Brasil, 2014
d | Partido del siglo |  | Italia, Alemania, 1970, 4-3
d | Gol del siglo |  | Maradona, Inglaterra, 1986, regate
d | Milagro de Berna |  | Alemania, 1954, Mundial, Hungría
d | Ferenc Puskás |  | Hungría, Real Madrid, zurdo, Cañoncito pum
d | Eusébio |  | Portugal, Benfica, Pantera Negra, goleador
d | Lev Yashin |  | portero, Araña Negra, Unión Soviética, Balón de Oro
d | Garrincha |  | Brasil, extremo, piernas torcidas, alegría del pueblo
d | Zico |  | Brasil, Flamengo, número 10, Pelé blanco
d | Sócrates (futbolista) |  | Brasil, médico, taconazo, democracia corinthiana
d | Marco van Basten |  | Holanda, Milan, volea, Eurocopa 88
d | Ruud Gullit |  | Holanda, rastas, Milan, Eurocopa
d | Lothar Matthäus |  | Alemania, Mundial 90, Balón de Oro, capitán
d | Gerd Müller |  | Alemania, Torpedo, goleador, Bayern
d | Michel Platini |  | Francia, Juventus, Eurocopa 84, UEFA
d | Roberto Baggio |  | Italia, coleta, penalti fallado, 1994
d | Francesco Totti |  | Roma, capitán, cuchara, eterno
d | Alessandro Del Piero |  | Juventus, Italia, golazos, Pinturicchio
d | Fabio Cannavaro |  | Italia, Balón de Oro, Mundial 2006, defensa
d | Kaká |  | Brasil, Milan, Balón de Oro, Real Madrid
d | Thierry Henry |  | Francia, Arsenal, delantero, Barça
d | Didier Drogba |  | Costa de Marfil, Chelsea, delantero, Champions
d | Wayne Rooney |  | Inglaterra, Manchester United, delantero, potente
d | Steven Gerrard |  | Liverpool, capitán, Estambul, Inglaterra
d | Frank Lampard |  | Chelsea, Inglaterra, centrocampista, goles
d | Ryan Giggs |  | Manchester United, galés, extremo, títulos
d | Eric Cantona |  | Francia, Manchester United, cuello levantado, patada
d | Samuel Eto'o |  | Camerún, Barça, delantero, triplete
`
};
