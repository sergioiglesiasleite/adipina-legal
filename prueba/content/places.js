// Lugares del mundo y monumentos. Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
export default {
  id: 'places', name: 'Lugares del mundo', icon: 'leaf', modes: 'DP',
  cards: `
f | Torre Eiffel | DMP | París, Francia, hierro, alta
f | Estatua de la Libertad | DMP | Nueva York, antorcha, verde, corona
f | Pirámides de Egipto | DMP | faraones, desierto, Giza, momias
f | Gran Muralla China | DMP | larga, muro, defensa, Pekín
f | Coliseo | DMP | Roma, gladiadores, anfiteatro, ruinas
f | Big Ben | DMP | Londres, reloj, torre, campana
f | Torre de Pisa | DMP | inclinada, Italia, torcida, foto
f | Sagrada Familia | DMP es | Barcelona, Gaudí, templo, obras
f | Polo Norte | | frío, Papá Noel, osos polares, hielo
f | Desierto del Sahara | | arena, dunas, camellos, África
f | Nueva York | | Manhattan, gran manzana, rascacielos, Times Square
f | París | | Francia, Torre Eiffel, Sena, capital
f | Londres | | Inglaterra, Big Ben, Támesis, capital
f | Roma | | Italia, Coliseo, Vaticano, capital
f | Japón | | Tokio, sushi, samuráis, sol naciente
f | China | | Pekín, muralla, palillos, panda
f | México | | tacos, mariachis, Aztecas, sombrero
f | Brasil | | Río de Janeiro, samba, fútbol, Amazonas
f | Argentina | | tango, Buenos Aires, Messi, asado
f | Australia | | canguros, Sídney, koalas, isla
f | Egipto | | pirámides, Nilo, faraones, El Cairo
f | Italia | | pizza, Roma, bota, pasta
f | Francia | | París, queso, croissant, Torre Eiffel
f | Alemania | | Berlín, salchichas, cerveza, Oktoberfest
f | Estados Unidos | | Washington, hamburguesa, barras y estrellas, Nueva York
f | Portugal | | Lisboa, bacalao, fado, vecino
f | Grecia | | Atenas, dioses, islas, yogur
f | Rusia | | Moscú, frío, matrioska, vodka
f | India | | Taj Mahal, curry, Bollywood, elefantes
f | Disneyland | k | Mickey, parque, castillo, atracciones
f | Hollywood | | cine, letras, estrellas, Los Ángeles
f | Las Vegas | t | casinos, desierto, apuestas, Nevada
f | Venecia | DMP | canales, góndolas, Italia, carnaval
f | Machu Picchu | DMP | Perú, incas, montaña, ruinas
f | Taj Mahal | DMP | India, mausoleo, blanco, amor
f | Cataratas del Niágara | DMP | agua, Canadá, caída, barco
f | Monte Everest | DMP | montaña, alta, Himalaya, cumbre
f | Amazonas | | río, selva, Brasil, largo
f | Antártida | | hielo, pingüinos, sur, frío
f | Hawái | | islas, surf, collares de flores, volcán
m | Ópera de Sídney | DMP
m | Cristo Redentor | DMP
m | Puerta de Brandeburgo | DMP
m | Acrópolis | DMP
m | Stonehenge | DMP
m | Kremlin | DMP
m | Moái de la Isla de Pascua | DMP
m | Petra | DMP
m | Chichén Itzá | DMP
m | Golden Gate | DMP
m | Burj Khalifa | DMP
m | Notre Dame | DMP
m | Arco del Triunfo | DMP
m | Palacio de Buckingham | DMP
m | Times Square |
m | Central Park |
m | Islandia |
m | Noruega |
m | Suecia |
m | Holanda |
m | Bélgica |
m | Suiza |
m | Austria |
m | Irlanda |
m | Escocia |
m | Marruecos |
m | Turquía |
m | Tailandia |
m | Corea del Sur |
m | Canadá |
m | Cuba |
m | Perú |
m | Chile |
m | Colombia |
m | Venezuela |
m | Sudáfrica |
m | Kenia |
m | Ámsterdam |
m | Berlín |
m | Lisboa |
m | Estambul |
m | Tokio |
m | Dubái |
m | Gran Cañón del Colorado | DMP
m | Monte Kilimanjaro | DMP
d | Angkor Wat | DMP
d | Santorini |
d | Ciudad Prohibida | DMP
d | Muro de las Lamentaciones |
d | Mont Saint-Michel | DMP
d | Partenón |
d | Neuschwanstein | DMP
d | Bahía de Ha Long |
d | Salar de Uyuni |
d | Capadocia |
d | Pompeya |
d | Museo del Louvre | DMP
d | Mongolia |
d | Nepal |
d | Bután |
d | Ciudad del Vaticano |
d | Montmartre |
d | Groenlandia |
d | Tasmania |
d | Kamchatka |
d | Patagonia |
d | Tierra del Fuego |
d | Islas Galápagos |
d | Bora Bora |
d | Maldivas |
d | Seychelles |
d | Mar Muerto |
d | Lago Titicaca |
d | Cataratas de Iguazú | DMP
d | Fiordos noruegos |
d | Dolomitas |
d | Montañas Rocosas |
d | Uluru | DMP
d | Valle de los Reyes |
d | Torre de Londres |
d | Sídney |
d | Kioto |
d | Marrakech |
d | Praga |
d | Budapest |
d | Viena |
d | Dubrovnik |
f | Pekín |  | China, capital, Ciudad Prohibida, Olimpiadas
f | Moscú |  | Rusia, Kremlin, Plaza Roja, frío
f | Río de Janeiro |  | Brasil, Cristo Redentor, Copacabana, samba
f | Buenos Aires |  | Argentina, tango, Obelisco, porteños
f | Ciudad de México |  | Zócalo, capital, tacos
f | Los Ángeles |  | Hollywood, California, playa, cine
f | San Francisco |  | Golden Gate, tranvía, California, cuestas
f | Miami |  | Florida, playa, calor, latinos
f | Chicago |  | rascacielos, viento, Estados Unidos, lago Míchigan
f | Toronto |  | Canadá, torre CN, ciudad, lago
f | Atenas |  | Grecia, Acrópolis, capital, Olimpiadas
f | Florencia |  | Italia, Duomo, David, Renacimiento
f | Milán |  | Italia, moda, catedral, Scala
f | Nápoles |  | Italia, pizza, Vesubio, Maradona
f | Edimburgo |  | Escocia, castillo, festival, gaitas
f | Dublín |  | Irlanda, Guinness, pubs, trébol
f | Bruselas |  | Bélgica, Atomium, Manneken Pis, Unión Europea
f | Copenhague |  | Dinamarca, Sirenita, bicicletas, Tivoli
f | Estocolmo |  | Suecia, islas, ABBA, Nobel
f | Oslo |  | Noruega, fiordo, capital, frío
f | Helsinki |  | Finlandia, capital, sauna, Báltico
f | El Cairo |  | Egipto, Nilo, pirámides, capital
f | Jerusalén |  | Muro de las Lamentaciones, ciudad santa, Israel, tres religiones
f | Bangkok |  | Tailandia, templos, tuk-tuk, capital
f | Singapur |  | ciudad-estado, Marina Bay, Asia, limpia
f | Hong Kong |  | China, rascacielos, puerto, isla
f | Seúl |  | Corea del Sur, K-pop, capital, Gangnam
f | Nueva Zelanda |  | kiwis, Hobbiton, maoríes, ovejas
f | Caribe |  | islas, playas, mar azul, piratas
f | Océano Pacífico |  | el más grande, agua, América, Asia
f | Océano Atlántico |  | Europa, América, Colón, cruzar
f | Himalaya |  | Everest, montañas, Nepal, nieve
f | Alpes |  | montañas, Suiza, esquí, nieve
f | Pirineos |  | montañas, España, Francia, Andorra
f | Andes |  | montañas, Sudamérica, cóndor, Perú
f | Río Nilo |  | Egipto, largo, cocodrilos, faraones
m | Ucrania |  | Kiev, Europa, girasoles, bandera azul y amarilla
m | Polonia |  | Varsovia, Cracovia, Chopin, Europa
m | Hungría |  | Budapest, Danubio, gulash, Europa
m | Croacia |  | Dubrovnik, Adriático, Split, Modrić
m | Finlandia |  | Helsinki, Laponia, saunas, lagos
m | Dinamarca |  | Copenhague, Lego, vikingos, Sirenita
m | República Checa |  | Praga, cerveza, Europa, Moldava
m | Rumanía |  | Transilvania, Drácula, Bucarest, Cárpatos
m | Bulgaria |  | Sofía, yogur, Europa, Mar Negro
m | Israel |  | Jerusalén, Tel Aviv, Mar Muerto, Oriente Medio
m | Jordania |  | Petra, Amán, desierto, Mar Muerto
m | Arabia Saudí |  | La Meca, desierto, petróleo, Riad
m | Irán |  | Persia, Teherán, alfombras, Oriente Medio
m | Indonesia |  | Bali, islas, Yakarta, volcanes
m | Filipinas |  | Manila, islas, Asia, playas
m | Vietnam |  | Hanói, Bahía de Ha Long, arroz, sombrero cónico
m | Camboya |  | Angkor Wat, Asia, templos, Nom Pen
m | Malasia |  | Kuala Lumpur, Torres Petronas, Asia, Borneo
m | Pakistán |  | Islamabad, K2, Asia, críquet
m | Etiopía |  | Adís Abeba, África, café, maratón
m | Nigeria |  | Lagos, África, Nollywood, petróleo
m | Senegal |  | Dakar, África, Atlántico, rally
m | Tanzania |  | Kilimanjaro, Serengueti, Zanzíbar, África
m | Uruguay |  | Montevideo, mate, fútbol, Sudamérica
m | Paraguay |  | Asunción, Sudamérica, guaraní, interior
m | Bolivia |  | La Paz, Uyuni, Andes, Sudamérica
m | Ecuador |  | Quito, Galápagos, mitad del mundo, Sudamérica
m | Costa Rica |  | pura vida, selva, Centroamérica, volcanes
m | Panamá |  | canal, Centroamérica, sombrero, istmo
m | Guatemala |  | mayas, Tikal, Centroamérica, volcanes
m | República Dominicana |  | Punta Cana, Caribe, merengue, Santo Domingo
m | Puerto Rico |  | Caribe, San Juan, Bad Bunny, isla
m | Jamaica |  | Bob Marley, reggae, Caribe, Usain Bolt
m | Mar Rojo |  | Egipto, buceo, corales, Moisés
m | Mar Caspio |  | lago más grande, Asia, caviar, Irán
m | Mar Báltico |  | Escandinavia, Polonia, frío, Europa
m | Canal de Suez |  | Egipto, barcos, Mediterráneo, Mar Rojo
m | Estrecho de Gibraltar |  | Peñón, África, Europa, separar
m | Río Danubio |  | Viena, Budapest, Europa, azul
m | Río Misisipi |  | Estados Unidos, barcos de vapor, Tom Sawyer, largo
m | Río Ganges |  | India, sagrado, Benarés, bañarse
m | Lago Ness |  | monstruo, Escocia, Nessie, aguas oscuras
m | Monte Fuji |  | Japón, volcán, nieve, sagrado
m | Monte Rushmore |  | presidentes, caras, piedra, Estados Unidos
m | Triángulo de las Bermudas |  | desapariciones, barcos, aviones, misterio
m | Silicon Valley |  | tecnología, California, Apple, Google
m | Wall Street |  | bolsa, Nueva York, dinero, toro
m | Broadway |  | musicales, teatros, Nueva York, espectáculos
m | Quinta Avenida |  | Nueva York, tiendas, compras, lujo
m | Champs-Élysées |  | París, avenida, Arco del Triunfo, tiendas
m | Plaza de San Marcos |  | Venecia, palomas, basílica, campanario
m | Fontana de Trevi |  | Roma, moneda, fuente, deseo
m | Basílica de San Pedro |  | Vaticano, papa, cúpula, plaza
d | Sri Lanka |  | Colombo, té, isla, Ceilán
d | Laos |  | Vientián, Mekong, Asia, budismo
d | Birmania |  | Myanmar, pagodas, Asia, Rangún
d | Kazajistán | | Astaná, estepa, Asia Central, Almaty
d | Uzbekistán |  | Samarcanda, Ruta de la Seda, Asia Central, Taskent
d | Georgia (el país) |  | Tiflis, Cáucaso, vino, Europa
d | Armenia |  | Ereván, Cáucaso, Ararat, monasterios
d | Azerbaiyán |  | Bakú, Cáucaso, petróleo, fuego
d | Estonia |  | Tallin, Báltico, digital, Europa
d | Letonia |  | Riga, Báltico, Europa, ámbar
d | Lituania |  | Vilna, Báltico, baloncesto, Europa
d | Eslovenia |  | Liubliana, lago Bled, Alpes, Europa
d | Eslovaquia |  | Bratislava, Europa, Tatras, Danubio
d | Montenegro |  | Kotor, Adriático, Balcanes, montañas
d | Albania |  | Tirana, Balcanes, Adriático, búnkeres
d | Macedonia del Norte |  | Skopie, Balcanes, Alejandro Magno, Ohrid
d | Moldavia |  | Chisináu, vino, Europa, Rumanía
d | Bielorrusia | | Minsk, Europa del Este, bosques, Belarús
d | Luxemburgo |  | Gran Ducado, pequeño, Unión Europea, bancos
d | Liechtenstein |  | principado, Alpes, Vaduz, pequeño
d | San Marino |  | república, Italia, monte Titano, pequeño
d | Malta |  | La Valeta, isla, Mediterráneo, caballeros
d | Chipre |  | Nicosia, isla, Mediterráneo, Afrodita
d | Mónaco |  | Montecarlo, casino, Fórmula 1, Grimaldi
d | Andorra |  | Pirineos, compras, esquí, principado
d | Gibraltar |  | Peñón, monos, británico, estrecho
d | Namibia |  | desierto, dunas rojas, Windhoek, África
d | Botsuana |  | Okavango, elefantes, safari, África
d | Mozambique |  | Maputo, África, Índico, portugués
d | Zimbabue |  | cataratas Victoria, Harare, África, ruinas
d | Ruanda |  | Kigali, gorilas, África, colinas
d | Ghana |  | Accra, África, cacao, Costa de Oro
d | Costa de Marfil |  | Abiyán, África, cacao, elefantes
d | Túnez |  | Cartago, Mediterráneo, África, desierto
d | Argelia |  | Argel, Sahara, África, Mediterráneo
d | Libia |  | Trípoli, desierto, África, Mediterráneo
d | Sudán |  | Jartum, Nilo, África, pirámides
d | Omán |  | Mascate, desierto, Golfo, árabe
d | Catar |  | Doha, Mundial 2022, Golfo, rascacielos
d | Kuwait |  | Golfo, petróleo, árabe, pequeño
d | Líbano |  | Beirut, cedros, Mediterráneo, Oriente Medio
d | Siria |  | Damasco, Palmira, Oriente Medio, Alepo
d | Fiyi |  | islas, Pacífico, rugby, playas
d | Samoa |  | Pacífico, islas, Polinesia, rugby
d | Tonga |  | Pacífico, reino, islas, Polinesia
d | Islas Feroe |  | Dinamarca, Atlántico, ovejas, acantilados
d | Svalbard |  | Ártico, osos polares, Noruega, semilla
d | Valle de la Muerte |  | desierto, calor, California, sal
d | Monument Valley |  | westerns, rocas rojas, Utah, Navajo
d | Gran Barrera de Coral |  | Australia, corales, buceo, arrecife
d | Atacama |  | desierto, Chile, seco, estrellas
d | Pantanal |  | humedal, Brasil, jaguares, inundado
`
};
