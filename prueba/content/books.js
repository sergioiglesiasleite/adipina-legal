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
`
};
