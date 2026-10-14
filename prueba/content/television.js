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
f | El rosco | es | Pasapalabra, letras, palabras, bote
f | Masterchef Junior | 10s es | niños, cocina, concurso, jueces
f | La Voz Kids | 10s es | niños, cantar, sillas giratorias, concurso
f | Operación Triunfo 2001 | 00s es | Bisbal, Bustamante, Rosa, academia
f | La isla de las tentaciones | t 20s es | parejas, infidelidad, hoguera, villa
f | Mujeres y hombres y viceversa | t 10s es | tronistas, citas, Emma García, pretendientes
f | El programa de Ana Rosa | es | matinal, Telecinco, Ana Rosa, periodismo
f | Espejo público | es | matinal, Antena 3, Susanna Griso, actualidad
f | Al rojo vivo | es | laSexta, Ferreras, política, debates
f | Telecinco | es | cadena, Mediaset, cinco, ojo
f | Antena 3 | es | cadena, Atresmedia, televisión, tres
f | La 1 | es | TVE, pública, cadena, primera
f | La 2 | es | TVE, documentales, pública, cadena
f | Cuatro | es | cadena, Mediaset, televisión, cuadrado
f | laSexta | es | cadena, Atresmedia, verde, televisión
f | Clan TVE | es | canal infantil, dibujos, niños, TVE
f | Disney Channel |  | canal, dibujos, niños
f | Boing | es | canal infantil, dibujos, Cartoon Network, niños
f | Nickelodeon |  | canal infantil, Bob Esponja, naranja, slime
f | Cartoon Network |  | canal, dibujos, Ben 10, Gumball
f | MTV |  | música, videoclips, canal, reality
f | HBO |  | series, Juego de Tronos, plataforma, cable
f | Disney+ | 20s | plataforma, Marvel, Star Wars, Pixar
f | Prime Video | 20s | Amazon, plataforma, series, películas
f | Telebasura |  | cotilleos, gritos, programas, morbo
f | Programa del corazón |  | cotilleos, famosos, exclusivas, revistas
f | Exclusiva |  | primicia, famoso, revista, entrevista
f | Paparazzi | M | fotos, famosos, persecución, cámara
m | Los Morancos | 90s es | humoristas, Sevilla, hermanos, imitaciones
m | Cruz y Raya | 90s es | humoristas, Juan Muñoz, José Mota, sketches
m | Faemino y Cansado | 90s es | humoristas, absurdo, dúo, El Club de la Comedia
m | Crackòvia | es | TV3, fútbol, parodia, imitaciones
m | El cazador | 20s es | concurso, cazadores, preguntas, La 1
m | Ramón García | es | presentador, capa, campanadas, Grand Prix
m | Anne Igartiburu | es | presentadora, Corazón, campanadas, TVE
m | Jordi Hurtado | es | Saber y ganar, presentador, eterno, TVE
m | Roberto Leal | 20s es | Pasapalabra, presentador, Operación Triunfo, Antena 3
m | Christian Gálvez | 10s es | Pasapalabra, presentador, Leonardo, Telecinco
m | Juanra Bonet | 10s es | Boom, presentador, Ahora caigo, Cataluña
m | Arturo Valls | 10s es | Ahora caigo, presentador, cómico, Valencia
m | Carlos Sobera | es | ¿Quién quiere ser millonario?, First Dates, presentador, Bilbao
m | Florentino Fernández | es | humorista, imitador, Flo, Crónicas Marcianas
m | Javier Sardá | es | Crónicas Marcianas, presentador, gafas, noche
m | Boris Izaguirre | es | Crónicas Marcianas, Venezuela, escritor, presentador
m | Emilio Aragón | es | Médico de familia, presentador, Miliki, músico
m | Mayra Gómez Kemp | 80s es | Un, dos, tres, presentadora, cubana, Ruperta
m | Chicho Ibáñez Serrador | es | Un, dos, tres, Historias para no dormir, creador, director
m | Ruperta | 80s es | calabaza, Un, dos, tres, mascota, cero
m | Ana Obregón | es | presentadora, actriz, Ana y los 7, campanadas
m | David Broncano | 10s es | La Resistencia, presentador, Jaén, entrevistas
m | Trancas y Barrancas | 10s es | El Hormiguero, hormigas, marionetas, Pablo Motos
m | Marron | 10s es | El Hormiguero, ciencia, experimentos, cabeza rapada
m | Josep Pedrerol | 10s es | El Chiringuito, presentador, fútbol, jugones
m | Tomás Roncero | 10s es | El Chiringuito, periodista, Real Madrid, As
m | Carrusel Deportivo | es | radio, fútbol, domingos, SER
m | El Larguero | es | radio, deportes, noche, Manu Carreño
m | José María García | 80s es | Butanito, radio, deportes, periodista
m | Andrés Montes | 00s es | comentarista, baloncesto, ¡Jugón!, gafas
m | Retransmisión deportiva | M | partido, comentarista, directo, gol
m | Comentarista de fútbol | M | narrar, partido, gol, micrófono
m | Moviola |  | repetición, jugada, árbitro, polémica
m | Repetición de la jugada | M | cámara lenta, gol, polémica, ver otra vez
m | Mesa de debate | M | tertulianos, discutir, opinar, plató
m | Tertuliano | M | opinar, debate, tertulia, mesa
m | Corresponsal | M | extranjero, informar, noticias, enviado
d | Estudio 1 | es | teatro, TVE, obras, clásico
d | La casa de la pradera |  | Laura Ingalls, granja, Walnut Grove, familia
d | Bonanza |  | Ponderosa, Cartwright, western, rancho
d | Starsky y Hutch |  | policías, coche rojo, Gran Torino, pareja
d | Los ángeles de Charlie |  | detectives, tres mujeres, voz, Bosley
d | Corrupción en Miami |  | Crockett, Tubbs, policías, Ferrari
d | Luz de luna |  | detectives, Bruce Willis, Maddie, agencia
d | Falcon Crest |  | viñedos, Angela Channing, culebrón, familia
d | Dallas |  | J. R., petróleo, Texas, Ewing
d | Dinastía |  | Carrington, ricos, culebrón, Denver
d | Fawlty Towers |  | hotel, Basil, John Cleese, Manuel
d | Allo, allo |  | café, Francia ocupada, Resistencia, René
d | Los payasos de la tele | es | Gaby, Fofó, Miliki, Fofito
d | Un globo, dos globos, tres globos | es | programa infantil, TVE, María Luisa Seco
d | Cajón desastre | es | infantil, Miriam Díaz Aroca, TVE, sábado
d | Xuxa | 90s | presentadora, infantil, Brasil, Ilarie
d | Carmen Sevilla | es | Telecupón, Cine de barrio, actriz, presentadora
d | Fin de emisión |  | himno, carta de ajuste, noche, cierre
d | Desconexión territorial |  | cadena, regional, informativo local, emisión
d | Audímetro |  | audiencia, medir, aparato, Kantar
d | Franja horaria |  | horario, emisión, mañana, noche
d | Late night |  | noche, entrevistas, humor, presentador
d | Sitcom |  | comedia, risas enlatadas, serie, episodios
d | Risas enlatadas |  | grabadas, sitcom, público falso, comedia
d | Spin-off |  | serie derivada, personaje, otra serie, nueva
d | Final de temporada | M | episodio, cliffhanger, intriga, esperar
d | Cliffhanger |  | intriga, final, suspense, episodio
d | Capítulo piloto |  | primer episodio, prueba, serie, cadena
d | Maratón de series | M | ver todo, sofá, capítulos, seguidos
d | Cabecera |  | inicio, sintonía, títulos, serie
d | Cameo |  | aparición breve, famoso, película, sorpresa
d | Doblaje | M | voces, actores, otro idioma, estudio
d | Subtítulos | D | leer, idioma original, texto, pantalla
d | Versión original |  | idioma, subtítulos, VO, sin doblar
`
};
