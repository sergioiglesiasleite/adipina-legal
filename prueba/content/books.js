// Literatura y cuentos. Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
export default {
  id: 'books', name: 'Literatura y cuentos', icon: 'book', modes: 'MP',
  cards: `
f | Don Quijote de la Mancha | | Cervantes, Sancho, molinos, caballero
f | El principito | k | planeta, rosa, zorro, aviador
f | Caperucita Roja | k DMP | lobo, abuelita, bosque, cesta
f | Los tres cerditos | k DMP | lobo, casas, soplar, ladrillo
f | La Cenicienta | k DMP | zapato, calabaza, madrastra, baile
f | Blancanieves | k DMP | enanitos, manzana, espejo, bruja
f | Pinocho | k DMP | marioneta, nariz, mentiras, Gepetto
f | La bella durmiente | k DMP | princesa, huso, dormir, beso
f | Hansel y Gretel | k DMP | casa de chocolate, bruja, hermanos, migas
f | El patito feo | k DMP | cisne, pato, feo, granja
f | Ricitos de oro | k DMP | osos, sopa, cama, silla
f | Rapunzel | k DMP | torre, trenza, pelo, princesa
f | Peter Pan | k DMP | Nunca Jamás, Garfio, Campanilla, volar
f | Alicia en el país de las maravillas | k | conejo, Sombrerero, madriguera, Reina de Corazones
f | El gato con botas | k DMP | marqués de Carabás, sombrero, Perrault, astuto
f | Pulgarcito | k | pequeño, migas, ogro, hermanos
f | La ratita presumida | k | lazo, ratón, gato, barrer
f | Romeo y Julieta | | Shakespeare, amor, Verona, balcón
f | Harry Potter (los libros) | 90s | magia, Hogwarts, Rowling, varita
f | Robinson Crusoe | | isla, náufrago, Viernes, solo
f | Los tres mosqueteros | | D'Artagnan, espadas, Athos, todos para uno
f | La sirenita (el cuento) | k | Andersen, sirena, voz, mar
f | El soldadito de plomo | k | juguete, bailarina, una pierna, Andersen
f | Mowgli y el libro de la selva | k | Kipling, Baloo, Bagheera, Shere Khan
f | Heidi (el libro) | k | Alpes, abuelo, Clara, cabras
f | Mujercitas | | hermanas, Jo, March, guerra
f | Drácula | t | vampiro, Transilvania, conde, Stoker
f | Frankenstein | | monstruo, científico, Shelley, criatura
f | La Odisea | | Ulises, Homero, Ítaca, viaje
f | El Lazarillo de Tormes | es | ciego, pícaro, Lázaro, uvas
f | Manolito Gafotas | es 90s | Carabanchel, Elvira Lindo, abuelo, Imbécil
m | La isla del tesoro |
m | El diario de Ana Frank |
m | Matilda | k
m | Charlie y la fábrica de chocolate | k
m | La vuelta al mundo en ochenta días |
m | El libro de la selva |
m | Veinte mil leguas de viaje submarino |
m | Moby Dick |
m | Oliver Twist |
m | Cuento de Navidad |
m | El señor de los anillos (los libros) |
m | El hobbit |
m | Las crónicas de Narnia |
m | La historia interminable | 80s
m | Momo |
m | Los juegos del hambre (los libros) | 10s
m | Crepúsculo | 00s
m | El código Da Vinci | 00s
m | Platero y yo | es
m | La casa de Bernarda Alba | es
m | Bodas de sangre | es
m | La Celestina | es
m | Fuenteovejuna | es
m | Don Juan Tenorio | es
m | El Cantar de mio Cid | es
m | Marina | es
m | El niño con el pijama de rayas | 00s
m | Diario de Greg | k 00s
m | Gerónimo Stilton | k 00s
m | Los cinco | 70s
m | Fray Perico y su borrico | k es
d | Cien años de soledad |
d | La sombra del viento | es 00s
d | Rayuela |
d | La casa de los espíritus |
d | Crónica de una muerte anunciada |
d | Orgullo y prejuicio |
d | 1984 |
d | Un mundo feliz |
d | Fahrenheit 451 |
d | Cumbres borrascosas |
d | Jane Eyre |
d | Madame Bovary |
d | Ana Karénina |
d | Crimen y castigo |
d | En busca del tiempo perdido |
d | Ulises de Joyce |
d | La metamorfosis |
d | El retrato de Dorian Gray |
d | El gran Gatsby |
d | Matar a un ruiseñor |
d | El guardián entre el centeno |
d | Los pilares de la Tierra |
d | La Regenta | es
d | Niebla, de Unamuno | es
d | Luces de bohemia | es
d | La colmena | es
d | Nada | es
d | Patria (la novela) | es
d | La vida es sueño | es
d | El túnel |
d | Pedro Páramo |
f | El Grinch, el cuento | | verde, Navidad, robar, Seuss
f | Los Pitufos, los tebeos | | azules, Gargamel, setas, pequeños
f | Mortadelo y Filemón | es | Ibáñez, TIA, disfraces, agentes
f | Astérix y Obélix | | galos, poción, romanos, menhir
f | Wally, ¿dónde está? | | rayas, gafas, buscar, gorro
f | Cuento antes de dormir | M | cama, leer, noche, niños
f | Érase una vez | | cuento, principio, fin, colorín colorado
f | Colorín colorado | | cuento, final, acabado, érase
m | Superlópez | es | Jan, cómic, gafas, parodia
m | Los cuentos de Calleja | es | «tienes más cuento», editorial, antiguo, niños
m | Cuentos de los hermanos Grimm | | alemanes, Blancanieves, Hansel, Caperucita
m | Fábulas de Esopo | | animales, moraleja, griego, zorra
m | La liebre y la tortuga | M | carrera, lenta, rápida, fábula
m | La cigarra y la hormiga | M | verano, invierno, trabajar, fábula
m | El flautista de Hamelín | M | ratas, flauta, niños, pueblo
m | El traje nuevo del emperador | M | desnudo, sastres, niño, invisible
m | La gallina de los huevos de oro | | codicia, granja, riqueza, matar
m | Biblioteca de barrio | | libros, préstamo, carné, silencio
d | Booktuber | | libros, YouTube, reseñas, lectura
d | Feria del Libro de Madrid | es | Retiro, casetas, firmas, autores
d | Premio Cervantes | es | escritores, literatura, Alcalá, abril
d | Premio Planeta | es | novela, Barcelona, dinero, editorial
d | Best seller | | ventas, éxito, libro, lista
d | Club de lectura | | libro, reunión, comentar, leer juntos
f | Los viajes de Gulliver |  | liliputienses, gigante, isla, Swift
f | El mago de Oz (el libro) | k | Dorothy, espantapájaros, hombre de hojalata, león
f | El ratoncito Pérez | k | diente, almohada, moneda, ratón
f | La bella y la bestia (el cuento) | k | rosa, castillo, maldición
f | El lobo y los siete cabritillos | k | cabritas, madre, reloj, harina
f | Los músicos de Bremen | k | burro, perro, gato, gallo
f | El príncipe rana | k | beso, princesa, charca, sapo
f | Juan sin miedo | k | castillo, valiente, fantasmas, cuento
f | Aladino y la lámpara maravillosa | k | genio, deseos, Las mil y una noches, alfombra
f | Alí Babá y los cuarenta ladrones | k | Ábrete Sésamo, cueva, tesoro, Las mil y una noches
f | Simbad el marino | k | viajes, Las mil y una noches, barco, aventuras
f | El gigante egoísta | k | jardín, niños, Oscar Wilde, invierno
f | La pequeña cerillera | k | frío, Navidad, Andersen, fósforos
f | La princesa y el guisante | k | colchones, Andersen, cama, sensible
f | Las aventuras de Tom Sawyer |  | Mark Twain, Misisipi, valla, Huckleberry
f | Las aventuras de Huckleberry Finn |  | Mark Twain, balsa, río, Jim
f | Colmillo Blanco |  | lobo, Jack London, Yukón, perro
f | La llamada de lo salvaje |  | Buck, perro, trineo, Jack London
f | Diario de Nikki | 10s k | instituto, dibujos, Rachel Renée Russell
f | Wonder | 10s k | Auggie, cara, colegio, diferente
f | El monstruo de colores | 10s k | emociones, botes, niña
f | Las brujas (el libro) | k | Roald Dahl, ratón, abuela, convención
f | James y el melocotón gigante | k | Roald Dahl, insectos, fruta, tías
f | El superzorro | k | Roald Dahl, granjeros, madriguera, zorro
f | Percy Jackson y el ladrón del rayo | 00s | semidiós, Zeus, campamento, mitología
f | El corredor del laberinto | 10s | Thomas, claro, muros
f | Divergente | 10s | facciones, Tris, Chicago, Osadía
f | Bajo la misma estrella | 10s | Hazel, Gus, cáncer, Ámsterdam
f | El curioso incidente del perro a medianoche | 00s | Christopher, autismo, detective
f | La Ilíada |  | Troya, Aquiles, Homero, caballo
f | Las mil y una noches |  | Sherezade, cuentos, sultán, Aladino
m | El conde de Montecristo |  | Dumas, Edmundo Dantès, venganza, isla
m | Los miserables |  | Victor Hugo, Jean Valjean, Javert, París
m | Nuestra Señora de París |  | Quasimodo, Esmeralda, catedral, Victor Hugo
m | Guerra y paz |  | Tolstói, Napoleón, Rusia, Natasha
m | El extraño caso del Dr. Jekyll y Mr. Hyde |  | doble personalidad, Stevenson, pócima, Londres
m | El sabueso de los Baskerville |  | Sherlock Holmes, perro, páramo, maldición
m | Asesinato en el Orient Express |  | Poirot, tren, Agatha Christie, nieve
m | Muerte en el Nilo |  | Poirot, barco, Egipto, Agatha Christie
m | El nombre de la rosa | 80s | Umberto Eco, abadía, monje, libro envenenado
m | El perfume | 80s | Grenouille, olores, asesino, París
m | El alquimista | 80s | Paulo Coelho, Santiago, pastor, leyenda personal
m | La tregua |  | Benedetti, Montevideo, oficinista, diario
m | Como agua para chocolate | 80s | Tita, recetas, México, Laura Esquivel
m | El amor en los tiempos del cólera | 80s | García Márquez, Florentino, Fermina, barco
m | Los renglones torcidos de Dios | 70s es | Torcuato Luca de Tena, psiquiátrico, Alice, detective
m | La familia de Pascual Duarte | es | Cela, asesino, Extremadura, confesión
m | Cinco horas con Mario | es | Delibes, viuda, monólogo, velatorio
m | El camino | es | Delibes, Daniel el Mochuelo, pueblo, infancia
m | El árbol de la ciencia | es | Baroja, Andrés Hurtado, medicina, pesimismo
m | Campos de Castilla | es | Antonio Machado, poemas, Soria, Leonor
m | Poeta en Nueva York | es | Lorca, poemas, Estados Unidos, ciudad
m | Veinte poemas de amor y una canción desesperada |  | Neruda, Chile, poemario
m | Rimas y leyendas | es | Bécquer, golondrinas, romanticismo, poesía
m | Marianela | es | Galdós, ciega, Pablo, Socartes
m | La catedral del mar | 00s es | Falcones, Barcelona, Santa María, Arnau
m | El tiempo entre costuras | 00s es | Sira, modista, Tánger, espías
m | Reina roja | 10s es | Juan Gómez-Jurado, Antonia Scott, detective, Jon Gutiérrez
m | La chica del tren | 10s | Rachel, desaparición, alcohol
m | Canción de hielo y fuego |  | George R. R. Martin, Poniente, dragones, tronos
m | 13, Rue del Percebe | es | Ibáñez, edificio, vecinos, viñetas
m | Snoopy y Carlitos |  | Charlie Brown, perro, Peanuts, Schulz
m | Calvin y Hobbes |  | tigre de peluche, niño, Watterson, tira
d | La Divina Comedia |  | Dante, infierno, Virgilio, Beatriz
d | El Decamerón |  | Boccaccio, peste, cuentos, Florencia
d | Los cuentos de Canterbury |  | Chaucer, peregrinos, Inglaterra, relatos
d | El Buscón | es | Quevedo, pícaro, Pablos, Segovia
d | Novelas ejemplares | es | Cervantes, Rinconete, Cortadillo, relatos
d | El sí de las niñas | es | Moratín, boda, Doña Francisca, comedia
d | Doña Perfecta | es | Galdós, Orbajosa, intolerancia, Pepe Rey
d | Tirano Banderas | es | Valle-Inclán, dictador, América, esperpento
d | Tiempo de silencio | es | Martín-Santos, Madrid, chabolas, investigador
d | San Manuel Bueno, mártir | es | Unamuno, cura, fe, Valverde de Lucerna
d | Réquiem por un campesino español | es | Sender, Paco, mosén Millán, Guerra Civil
d | El Jarama | es | Sánchez Ferlosio, río, domingo, jóvenes
d | Los girasoles ciegos | 00s es | Méndez, posguerra, relatos, derrota
d | Soldados de Salamina | 00s es | Cercas, Sánchez Mazas, fusilamiento, Miralles
d | Corazón tan blanco | 90s es | Javier Marías, intérprete, secreto, boda
d | La verdad sobre el caso Savolta | 70s es | Eduardo Mendoza, Barcelona, empresa, sindicalismo
d | Sin noticias de Gurb | 90s es | Eduardo Mendoza, extraterrestre, Barcelona, diario
d | El Aleph |  | Borges, punto, universo, sótano
d | Ficciones |  | Borges, laberintos, biblioteca de Babel, relatos
d | La ciudad y los perros |  | Vargas Llosa, colegio militar, Lima, cadetes
d | Conversación en La Catedral |  | Vargas Llosa, Zavalita, bar, Perú
d | Ensayo sobre la ceguera | 90s | Saramago, epidemia, ciegos, mujer del médico
d | El viejo y el mar |  | Hemingway, pez, Santiago, Cuba
d | Por quién doblan las campanas |  | Hemingway, Guerra Civil, puente, Robert Jordan
d | Las uvas de la ira |  | Steinbeck, Joad, Oklahoma, Gran Depresión
d | De ratones y hombres |  | Steinbeck, George, Lennie, conejos
d | Rebelión en la granja |  | Orwell, cerdos, Napoleón, todos los animales son iguales
d | Siddhartha |  | Hesse, Buda, río, búsqueda
d | El lobo estepario |  | Hesse, Harry Haller, teatro mágico, soledad
d | El proceso |  | Kafka, Josef K., juicio, acusación
d | Los hermanos Karamázov |  | Dostoievski, parricidio, Aliosha, Iván
d | El idiota |  | Dostoievski, príncipe Myshkin, bondad, Rusia
d | El señor de las moscas |  | Golding, isla, niños, caracola
d | La isla del doctor Moreau |  | H. G. Wells, experimentos, híbridos
d | La máquina del tiempo |  | H. G. Wells, viajero, futuro, Morlocks
d | La guerra de los mundos |  | H. G. Wells, marcianos, trípodes, radio
`
};
