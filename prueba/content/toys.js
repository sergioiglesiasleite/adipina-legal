// Juegos y juguetes. Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
export default {
  id: 'toys', name: 'Juegos y juguetes', icon: 'game', modes: 'DMP', ages: 'kids',
  cards: `
f | Muñeca | | jugar, niña, vestir, pelo
f | Peonza | | girar, cuerda, bailar, punta
f | Yoyó | | cuerda, subir, bajar, trucos
f | Cometa | | viento, hilo, volar, cielo
f | Lego | | piezas, construir, bloques, encajar
f | Cubo de Rubik | 80s | colores, girar, caras, resolver
f | Parchís | | dados, fichas, comerse, casa
f | Juego de la oca | | de oca a oca, dados, casillas, tiro porque me toca
f | Damas | | fichas, tablero, comer, coronar
f | Dominó | | fichas, puntos, cerrar, bar
f | Monopoly | | casas, dinero, calles, cárcel
f | Puzle | | piezas, encajar, imagen, rompecabezas
f | Plastilina | | modelar, colores, blanda, figuras
f | Canicas | | bolitas, cristal, gua, tirar
f | Tres en raya | | cruces, círculos, línea, tablero
f | Columpio | | parque, balancearse, cadenas, empujar
f | Tobogán | | deslizarse, parque, subir, bajar
f | Balancín | | parque, dos niños, subir, bajar
f | Tiovivo | | caballitos, girar, feria, vueltas
f | Noria | | feria, girar, cabinas, alta
f | Montaña rusa | | atracción, vagones, gritar, loopings
f | Peluche | | blandito, abrazar, oso, dormir
f | Pistola de agua | | mojar, verano, disparar, chorro
f | Coche teledirigido | | mando, control remoto, pilas, carreras
f | Dron | | volar, cámara, hélices, mando
f | Hula hoop | | aro, cintura, girar, caderas
f | Frisbee | | disco, lanzar, playa, perro
f | Cubo y pala | | arena, playa, cavar, castillo
f | Castillo de arena | | playa, cubo, torres, mar
f | Piedra, papel o tijera | | mano, ganar, elegir, empate
f | Pilla pilla | | correr, tocar, ligar, perseguir
f | Polis y cacos | | ladrones, perseguir, cárcel, equipos
f | Veo veo | | qué ves, letra, adivinar, empieza por
f | Juego de la silla | | música, sillas, sentarse, eliminado
m | Trivial | | preguntas, quesitos, categorías, dado
m | Pictionary | | dibujar, adivinar, equipos, lápiz
m | Twister | | colores, manos, pies, enredarse
m | Jenga | | torre, bloques, madera, caer
m | Uno (cartas) | | colores, roba cuatro, cantar, baraja
m | Baraja española | es | oros, copas, espadas, bastos
m | Nenuco | es | muñeco, bebé, colonia, biberón
m | Playmobil | | muñecos, piezas, ciudad, pequeños
m | Scalextric | | coches, pista, carreras, mando
m | Tamagotchi | 90s | mascota virtual, huevo, pitar, alimentar
m | Game Boy | 90s | consola, Nintendo, portátil, Tetris
m | PlayStation | 90s | consola, Sony, mando, juegos
m | Nintendo Switch | 10s | consola, Joy-Con, portátil, Mario
m | Tazos | 90s es | Matutano, patatas, coleccionar, Pokémon
m | Marioneta | | hilos, muñeco, teatro, mover
m | Títeres | | guiñol, mano, teatro, muñecos
m | Caleidoscopio | | colores, mirar, girar, espejos
m | Diábolo | | cuerda, palos, girar, lanzar
m | Bumerán | | volver, lanzar, Australia, curva
m | Furby | 90s | peluche, hablar, ojos, orejas
m | Cartas Pokémon | 90s | coleccionar, Pikachu, sobres, intercambiar
m | Cromos | | álbum, coleccionar, repes, pegar
m | Chapas | es | carreras, tapones, ciclistas, dedo
m | Goma elástica | | saltar, patio, tobillos, cantar
m | Balón prisionero | | equipos, lanzar, eliminar, cementerio
m | Juego del pañuelo | es | números, correr, coger, equipos
m | Escondite inglés | | un, dos, tres, quietos
m | Teléfono escacharrado | | oreja, mensaje, cambiar, fila
m | Simón dice | | órdenes, hacer, perder, juego
m | Gallinita ciega | | ojos vendados, buscar, tocar, adivinar
m | Churro va | es | saltar, espalda, burro, media manga
m | Matrioska | | muñecas rusas, dentro, madera, Rusia
d | Tente | 80s es | construcciones, piezas, español, bloques
d | Exin Castillos | 80s es | piezas, construir, torres, almenas
d | Cinexín | 80s es | proyector, películas, manivela, pared
d | Operación | 80s | pinzas, pitido, paciente, piezas
d | Hundir la flota | | barcos, tocado, hundido, coordenadas
d | Cluedo | | asesino, mansión, arma, detective
d | Risk | | conquistar, mapa, ejércitos, dados
d | Catán | | colonos, recursos, ovejas, carreteras
d | Stratego | | ejército, piezas ocultas, bandera, mariscal
d | Scrabble | | letras, palabras, puntos, tablero
d | Mikado | | palillos, no mover, colores, quitar
d | Tangram | | piezas, figuras, siete, chino
d | Backgammon | | fichas, dados, tablero, puntas
d | Mahjong | | fichas, China, parejas, emparejar
d | Mus | es | cartas, órdago, envido, pareja
d | Chinchón | es | cartas, escaleras, tríos, cortar
d | Brisca | es | cartas, triunfo, arrastre, puntos
d | Tute | es | cartas, cantar las cuarenta, reyes, caballos
d | Zancos | | altos, palos, caminar, equilibrio
d | Pogo saltarín | | saltar, muelle, palo, botar
d | Quimicefa | 80s es | química, experimentos, tubos, niños
d | Magia Borrás | es | trucos, mago, caja, varita
d | Sombras chinescas | | manos, luz, pared, figuras
d | Caballito de balancín | | madera, mecerse, caballo, niños
d | Tren eléctrico | | vías, locomotora, maqueta, estación
d | Casa de muñecas | | miniatura, habitaciones, muebles, pequeña
d | Slime | 10s | viscoso, pegajoso, colores, moco
d | Fidget spinner | 10s | girar, dedos, rodamiento, moda
d | Pop it | 20s | burbujas, apretar, silicona, colores
d | Conecta 4 | | fichas, línea, cuatro, colores
d | Tragabolas | | hipopótamos, bolas, comer, palancas
f | Saltar a la pata coja | M | rayuela, cuadros, tiza, un pie
f | Barco de papel | D | doblar, agua, flotar, papiroflexia
f | Avión de papel | M | doblar, lanzar, volar, folio
f | Pompas de jabón | M | soplar, burbujas, aro, explotar
f | Tirachinas | M | goma, piedra, apuntar, horquilla
f | Robot de juguete | D | pilas, metal, caminar, botones
f | Coche de pedales | M | niño, pedalear, juguete, volante
f | Pelota saltarina | D | botar, goma, colores, rebotar
f | Juego de té | D | tazas, tetera, muñecas, merienda
f | Cocinita de juguete | M | fogones, cacharros, jugar, cocinar
m | Tragaperras de feria | M | monedas, palanca, premio, máquina
m | Futbolín | M | barras, muñecos, girar, gol
m | Mesa de air hockey | M | disco, aire, empujar, portería
m | Máquina de gancho | M | peluche, garra, moneda, atrapar
m | Juego de la escoba | | cartas, quince, sumar, baraja
m | Kinder Sorpresa | | huevo, chocolate, juguete, cápsula
m | Muñecas Barbie | D | rubia, Ken, ropa, juguete
m | Action Man | | soldado, muñeco, aventuras, cicatriz
m | Nancy | es 80s | muñeca, española, Famosa, ropa
m | Pin y Pon | es 90s | muñecos, pequeños, casita, Famosa
d | Juego de las chapas | M | ciclistas, tapones, dedo, circuito
d | Cerbatana | M | soplar, tubo, dardo, apuntar
d | Peonza de cuerda | M | lanzar, girar, punta, enrollar
d | Simon (juego electrónico) | 80s | colores, sonidos, memoria, secuencia
d | Lite-Brite | 80s | luces, clavijas, colores, dibujar
f | Osito de peluche | D | blando, abrazar, oso, dormir
f | Sonajero | D | bebé, sonido, agitar, plástico
f | Chupete | D | bebé, boca, chupar, dormir
f | Móvil de cuna | D | girar, colgar, bebé, música
f | Cubos apilables | D | torre, bebé, colores, encajar
f | Bloques de construcción | D | piezas, apilar, torre, madera
f | Tren de madera | D | vías, vagones, niños
f | Caballito de palo | D | cabeza de caballo, galopar, cabalgar
f | Espada de juguete | D | plástico, luchar, pirata, caballero
f | Pistola de burbujas | D | pompas, soplar, apretar, jabón
f | Garaje de juguete | D | coches, rampa, ascensor, aparcar
f | Pista de coches | D | circuito, curvas, carrera
f | Hot Wheels | D | coches pequeños, pistas, Mattel, metal
f | Carrito de muñecas | D | empujar, muñeca, pasear, ruedas
f | Supermercado de juguete | D | caja registradora, comida de plástico, vender, comprar
f | Maletín de médico de juguete | D | estetoscopio, jeringa, jugar a médicos, curar
f | Pizarra mágica | D | dibujar, borrar, magnética, lápiz
f | Telesketch | D | dibujar, ruedas, agitar, borrar
f | Arena mágica | D | moldear, niños, arena cinética, pegarse
f | Pinturas de dedos | D | manos, colores, mancharse, pintar
f | Cuaderno de colorear | D | dibujos, lápices, niños
f | Pegatinas | D | pegar, álbum, colecciones, papel
f | Álbum de cromos | D | pegar, sobres, repetidos, colección
f | Dados | D | lanzar, seis caras, puntos, suerte
f | Figuras de dinosaurios | D | plástico, T-Rex, colección, jugar
f | Granja de juguete | D | animales, establo, tractor, granjero
f | Teléfono de juguete | D | marcar, rueda, sonido, niños
f | Tambor de juguete | D | baquetas, ruido, golpear, desfile
f | Piano de juguete | D | teclas, pequeño, colores, música
m | Muñeca de trapo | D | tela, cosida, antigua, blanda
m | Muñeca de porcelana | D | frágil, antigua, vestido, cara blanca
m | Muñecas recortables | D | papel, vestidos, recortar, pestañas
m | Polly Pocket | 90s | muñeca pequeña, estuche, casita, bolsillo
m | Bratz | 00s | muñecas, labios, moda, cabezonas
m | Monster High | 10s | muñecas, monstruos, instituto, moda
m | LOL Surprise | 10s | bola, capas, sorpresa, muñeca
m | Cabbage Patch Kids | 80s | muñecos repollo, adopción, mofletes, certificado
m | Barriguitas | 70s es | muñecos, barriga, pequeños, Famosa
m | Madelman | 70s es | muñeco articulado, aventuras, soldado, España
m | Geyperman | 70s es | muñeco, Geyper, soldado, articulado
m | Airgam Boys | 80s es | muñecos, España, articulados, cascos
m | Sudoku |  | números, nueve, cuadrícula, lógica
m | Crucigrama |  | palabras, horizontales, verticales, periódico
m | Sopa de letras |  | buscar palabras, cuadrícula, rodear
m | Ahorcado | M | palabra, letras, dibujo, adivinar
m | Las siete diferencias | D | comparar, dibujos, buscar, encontrar
m | Unir los puntos | D | números, dibujo, lápiz, seguir
m | Trabalenguas | M | difícil, decir rápido, tres tristes tigres, lengua
m | Juego de las películas | M | mímica, títulos, adivinar, palabras
m | Quién es quién | D | caras, preguntas, adivinar, tablero
m | Mastermind | D | colores, código, adivinar, clavijas
m | Dobble | D | cartas redondas, símbolos, rapidez, igual
m | Dixit |  | cartas ilustradas, imaginación, narrador, conejos
m | Virus! | es | cartas, órganos, contagiar, Tranjis
m | Exploding Kittens |  | gatos, cartas, explotar, desactivar
m | Carcassonne |  | losetas, caminos, ciudades, meeples
m | Ticket to Ride |  | trenes, rutas, vagones, cartas
m | Party & Co |  | mímica, dibujo, tararear, equipos
m | Tabú |  | palabras prohibidas, cartas, describir, zumbador
m | Cranium |  | arcilla, tararear, dibujar, equipos
m | Time's Up |  | personajes, tres rondas, una palabra, mímica
m | Lince (juego) | D | tablero de imágenes, buscar, rápido, fichas
m | Cocodrilo dentista | M | dientes, morder, apretar, juego
m | Pie Face | 10s | nata, cara, girar, sorpresa
d | Kendama | D | Japón, bola, taza, palo
d | Taba | M | hueso, lanzar, juego antiguo, caras
d | Juego de los chinos | M es | monedas, manos, adivinar, total
d | Muñeco de ventrílocuo | D | boca, hablar, mano, cómico
d | Linterna mágica | D | proyectar, imágenes, cristal, antigua
d | Zoótropo | D | girar, animación, ranuras, ilusión
d | Taumatropo |  | disco, girar, ilusión óptica, hilos
d | Cajita de música | D | bailarina, girar, melodía, cuerda
d | Muñeco de cuerda | D | llave, girar, andar, mecanismo
d | Mono de los platillos | D | tambor, cuerda, chocar
d | Muñeco tentetieso | D | volver, levantarse, balancear, base
d | Caja sorpresa | D | resorte, muñeco, saltar, manivela
d | Spirograph | D | círculos, dibujos, ruedas dentadas, espiral
d | Meccano |  | piezas metálicas, tornillos, construir, grúa
d | Geomag | D | imanes, bolas, barras, construir
d | Robot programable | D | código, aprender, niños, órdenes
d | Detector de metales | D | playa, pitidos, tesoros, buscar
d | Walkie-talkie | D | hablar, antena, cambio, corto
d | Teléfono de vasos | D | cuerda, vasos de yogur, hablar, oír
d | Pistola láser | D | luz, juego, chaleco, disparar
d | Pinball | D | flippers, bola, máquina, puntos
d | Game & Watch | 80s | Nintendo, pantalla LCD, portátil, juego
d | Nintendo DS | 00s | consola portátil, dos pantallas, lápiz
d | Sega Mega Drive | 90s | consola, Sonic, 16 bits
d | Super Nintendo | 90s | consola, Mario, 16 bits, mando gris
d | Nintendo 64 | 90s | consola, cartuchos, Mario 64, mando con tres asas
d | Nintendo Wii | 00s | mando con movimiento, Wii Sports, consola, sensor
d | Xbox | 00s | Microsoft, consola, Halo, verde
d | Atari 2600 | 70s | consola, joystick, cartuchos, retro
d | ZX Spectrum | 80s | ordenador, cintas, Sinclair, goma
d | Amstrad CPC | 80s | ordenador, cintas, monitor verde, ochentero
d | MSX | 80s | ordenador, cartuchos, japonés, ochentero
`
};
