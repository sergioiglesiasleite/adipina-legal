// Navidad (tema de temporada). Los villancicos están en «# Canciones» para poder tararearlos.
// Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
export default {
  id: 'christmas', name: 'Navidad', icon: 'star', modes: 'DMP',
  cards: `
f | Árbol de Navidad | k | adornos, abeto, luces, estrella
f | Papá Noel | k | barba, rojo, regalos, jo jo jo
f | Reyes Magos | k es | Melchor, Gaspar, Baltasar, camellos
f | Belén | k es | pesebre, figuritas, Niño Jesús, portal
f | Turrón | es | almendra, Jijona, duro, blando
f | Polvorones | es | Estepa, deshacerse, manteca, harina
f | Mazapán | es | Toledo, almendra, figuras, dulce
f | Roscón de Reyes | es | sorpresa, haba, nata, corona
f | Las doce uvas | es | campanadas, Nochevieja, comer, suerte
f | Nochevieja | | treinta y uno, fin de año, fiesta, uvas
f | Nochebuena | | veinticuatro, cena, familia, Misa del Gallo
f | Día de Navidad | | veinticinco, diciembre, comida, regalos
f | Villancico | es | cantar, Navidad, zambomba, coro
f | Campanadas | es | Puerta del Sol, reloj, uvas, doce
f | Lotería de Navidad | es | Gordo, décimo, niños de San Ildefonso, bombo
f | El Gordo de la lotería | es | premio, millones, décimo, veintidós de diciembre
f | Rudolph, el reno de la nariz roja | k | trineo, Papá Noel, brillante, villancico
f | Trineo de Papá Noel | k | renos, volar, regalos, nieve
f | Calcetín de Navidad | k | chimenea, colgar, regalos, rojo
f | Bola de Navidad | k | árbol, adorno, brillante, colgar
f | Espumillón | k | árbol, brillante, adorno, guirnalda
f | Estrella de Belén | k | guía, Reyes Magos, cola, cielo
f | Muérdago | | besarse, debajo, colgar, hojas
f | Acebo | | bolitas rojas, hojas, pinchos, adorno
f | Flor de Pascua | | roja, planta, Navidad, hojas
f | Chimenea | k | fuego, Papá Noel, calcetines, bajar
f | Carta a los Reyes Magos | k | pedir, regalos, escribir, buzón
f | Cabalgata de Reyes | k es | caramelos, carrozas, cinco de enero, desfile
f | Carbón dulce | k es | malos, Reyes, negro, azúcar
f | Buey y mula | k es | belén, animales, portal, calentar
f | Niño Jesús | k | pesebre, recién nacido, María, belén
f | Melchor | k es | rey mago, barba blanca, oro, camello
f | Gaspar | k es | rey mago, incienso, barba, camello
f | Baltasar | k es | rey mago, mirra, negro, camello
f | Pastores | k | ovejas, belén, adorar, portal
f | El Grinch | 00s | verde, robar la Navidad, Villa Quién, gruñón
f | Polar Express | 00s | tren, Polo Norte, niño, billete
f | Muñeco de nieve | k | zanahoria, bolas, bufanda, invierno
f | Jersey de Navidad | | feo, renos, lana, punto
f | Gorro de Papá Noel | k | rojo, pompón, blanco, cabeza
f | Duende de Papá Noel | k | orejas, taller, juguetes, verde
f | Laponia | k | Papá Noel, Finlandia, nieve, renos
f | Amigo invisible | | regalo, sorteo, secreto, oficina
f | Cava | es t | burbujas, brindar, Cataluña, copa
f | Calendario de adviento | k | ventanas, chocolates, días, diciembre
f | Bola de nieve de cristal | k | agitar, figura, copos, adorno
f | Galletas de jengibre | k | muñeco, especias, horno, glaseado
f | Cascabeles | k | sonar, trineo, campanitas, Jingle Bells
f | Luces de Navidad | | calles, encender, bombillas, Vigo
f | Día de los Santos Inocentes | es | bromas, veintiocho, inocentada, monigote
f | Año Nuevo | | uno de enero, propósitos, resaca, calendario
m | Corona de adviento |
m | Rey Herodes |
m | San José |
m | La Virgen María |
m | Arcángel Gabriel |
m | Pastorcillo |
m | Caganer | es
m | Tió de Nadal | es
m | Olentzero | es
m | Zambomba | es
m | Misa del Gallo |
m | Discurso del Rey en Nochebuena | es
m | Concierto de Año Nuevo |
m | San Silvestre Vallecana | es
m | Paga extra | es
m | Cena de empresa |
m | Cesta de Navidad | es
m | Aguinaldo | es
m | Turrón de Jijona | es
m | Turrón de Alicante | es
m | Peladillas | es
m | Barquillos | es
m | Mantecados | es
m | Panettone |
m | Pavo relleno |
m | Sopa de galets | es
m | Besugo al horno | es
m | Cardo con almendras | es
m | Lombarda | es
m | Langostinos |
m | Cordero asado | es
m | Cochinillo asado | es
m | Bombones |
m | Champán | t
m | Matasuegras |
m | Cotillón |
m | Ropa interior roja | es
m | Love Actually | 00s
m | Pesadilla antes de Navidad | 90s
m | ¡Qué bello es vivir! |
m | Elf | 00s
m | Klaus | 10s es
m | Ebenezer Scrooge |
m | Mamá Noel |
m | Frosty, el muñeco de nieve |
m | El cascanueces (ballet) |
m | Belén viviente | es
m | Anuncio de la lotería de Navidad | es
d | Epifanía |
d | Adviento |
d | Día de la Candelaria |
d | Inocentada | es
d | Alfajores | es
d | Turrón de yema | es
d | Guirlache | es
d | Belén napolitano |
d | Oro, incienso y mirra |
d | Portal de Belén |
d | Huida a Egipto |
d | Paje real | es
d | Cartero real | es
d | Haba del roscón | es
d | Saltos de esquí de Año Nuevo |
d | Los cuartos antes de las campanadas | es
d | Sidra El Gaitero | es
d | Ponche Caballero | es t
d | Anís del Mono | es t
d | Mercadillo navideño |
d | Tarjeta de felicitación navideña |
d | Abeto |
d | Kwanzaa |
d | Krampus |
d | San Nicolás |
d | La Befana |
d | Pista de hielo navideña |
d | Gala de Nochevieja | es
d | Turrón de chocolate | es
# Canciones
f | Jingle Bells | k | cascabeles, trineo, nieve, campanas
f | Los peces en el río | k es | beben, Virgen, peinando, villancico
f | Campana sobre campana | k es | Belén, villancico, ángeles, tocar
f | Noche de paz | k | silenciosa, villancico, Belén, tranquila
f | Feliz Navidad (canción) | k | José Feliciano, próspero año, felicidad, villancico
f | All I Want for Christmas Is You | 90s | Mariah Carey, regalo, diciembre, pop
f | El tamborilero | k | ropopompom, tambor, Raphael, niño
f | Ande, ande, ande, la Marimorena | k es | villancico, Nochebuena, alegría, cantar
f | Hacia Belén va una burra | k es | villancico, rin rin, cargada, chocolate
f | Mi burrito sabanero | k | burro, Belén, sabana, villancico
f | Blanca Navidad | k | nieve, Bing Crosby, villancico, sueño
m | Last Christmas | 80s
m | Arre borriquito | es
m | Dime, niño, ¿de quién eres? | es
m | Los campanilleros | es
d | Adeste fideles |
d | Riu, riu, chiu | es
d | Gatatumba | es
d | Pastores, venid | es
d | Fum, fum, fum | es
d | Santa Claus llegó a la ciudad |
d | Rockin' Around the Christmas Tree |
d | Happy Xmas (War Is Over) | 70s
f | Regalos de Navidad | D | papel, lazo, árbol, abrir
f | Abrir los regalos | M | papel, ilusión, árbol, mañana
f | Envolver regalos | M | papel, celo, lazo, tijeras
f | Decorar el árbol | M | bolas, luces, espumillón, estrella
f | Montar el Belén | M | figuritas, musgo, portal, río
f | Copo de nieve de papel | D | recortar, ventana, doblar
f | Ángel de nieve | M | tumbarse, brazos, alas
f | Fábrica de juguetes | D | Polo Norte, elfos, regalos, Papá Noel
f | Galletas para Papá Noel | M | leche, plato, noche, dejar
f | Buzón real | D | cartas, Reyes Magos, paje, centro comercial
f | Zapatos junto al árbol | D | Reyes, noche, regalos, ventana
f | Agua para los camellos | M | Reyes, cubo, noche, beber
f | Camellos de los Reyes | D | Reyes Magos, desierto, joroba, cabalgata
f | Caramelos de la cabalgata | M | lanzar, coger, Reyes, bolsa
f | Corona del roscón | D | papel, rey, dorada
f | Cena de Nochebuena | M | familia, mesa, langostinos, cenar
f | Brindis de Navidad | M | copas, cava, familia, deseos
f | Bandeja de dulces navideños | D | turrones, polvorones, plato, mesa
f | Chocolate caliente | D | taza, invierno, churros, espeso
f | Gorro con pompón | D | invierno, lana, bola, cabeza
f | Vacaciones de Navidad | M | colegio, sin clase, diciembre, familia
f | Botella de anís | D | rascar, villancico, instrumento, Navidad
m | Casita de jengibre | D | galletas, caramelos, Hansel y Gretel, glaseado
m | Bastón de caramelo | D | rayas, rojo y blanco, gancho, dulce
m | Estrella del árbol | D | punta, arriba, brillar, decoración
m | Musgo del Belén | D | verde, suelo, campo
m | Río de papel de plata | D | Belén, brillante, agua, figuras
m | Castillo de Herodes | D | Belén, rey, malo, figuritas
m | Lavandera del Belén | D | figurita, río, ropa, lavar
m | Pastor con ovejas | D | Belén, figura, rebaño, cayado
m | Encendido de luces de Navidad | M | ciudad, alcalde, botón, inauguración
m | Luces de Vigo | 20s es | Abel Caballero, Navidad, Galicia
m | Mercado de Navidad de la Plaza Mayor | es | Madrid, puestos, figuritas, pelucas
m | Atragantarse con las uvas | M | Nochevieja, doce, prisa, toser
m | Felicitar el año | M | abrazos, llamar, mensajes, feliz año
m | Propósitos de Año Nuevo | M | gimnasio, dieta, promesas, enero
m | Cuesta de enero |  | gastos, dinero, sueldo, después de Navidad
m | Rebajas de enero | M | descuentos, colas, tiendas, ropa
m | Devolver un regalo | M | ticket, tienda, cambiar, enero
m | Regalo de última hora | M | prisa, centro comercial, 24, sin ideas
m | Consomé |  | caldo, Navidad, taza, primero
m | Canelones de San Esteban | es | Cataluña, 26 de diciembre, sobras, bechamel
m | San Esteban | es | 26 de diciembre, Cataluña, festivo, canelones
m | Escudella | es | Cataluña, sopa, galets, Navidad
m | Anguila de mazapán | es | Toledo, Navidad, dulce
d | Solsticio de invierno |  | día más corto, diciembre, sol, astronomía
d | Saturnales |  | romanos, fiesta, diciembre, regalos
d | Yule |  | fiesta nórdica, invierno, tronco, solsticio
d | Tronco de Navidad | D | bûche de Noël, pastel, chocolate, rollo
d | Pudin de Navidad | D | inglés, flambeado, frutas, acebo
d | Stollen |  | pan dulce, alemán, frutas, azúcar glas
d | Pandoro |  | italiano, dulce, estrella, azúcar glas
d | Posadas |  | México, Navidad, peregrinos, piñatas
d | Parranda |  | Puerto Rico, Navidad, música, casas
d | Jólabókaflóð |  | Islandia, libros, Nochebuena, regalar
d | Gato de Navidad islandés |  | Jólakötturinn, Islandia, ropa nueva, gigante
d | Santa Lucía |  | Suecia, corona de velas, 13 de diciembre, procesión
d | Sinterklaas |  | Países Bajos, 5 de diciembre, barco, España
d | Christkind |  | niño Jesús, Alemania, regalos, ángel
d | Ded Moroz |  | Abuelo Frío, Rusia, Snegúrochka, Año Nuevo
d | Hogmanay |  | Escocia, Año Nuevo, celebración, Auld Lang Syne
d | Auld Lang Syne |  | canción, Año Nuevo, escocesa, despedida
d | Árbol de Navidad del Rockefeller Center |  | Nueva York, pista de hielo, gigante, luces
d | Fantasmas de las Navidades | D | pasado, presente, futuro, Scrooge
d | Tiny Tim |  | Cuento de Navidad, Dickens, niño, muleta
d | Mirra |  | regalo, resina, Baltasar, perfume
d | Censo de Augusto |  | empadronarse, Belén, José, romanos
d | Pesebre | D | comedero, Niño Jesús, paja, Belén
`
};
