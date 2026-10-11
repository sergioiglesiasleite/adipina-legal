// Personajes ficticios de libros, cine, series, cómic y videojuegos (los superhéroes y los dibujos infantiles
// tienen su propio tema). Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
export default {
  id: 'fiction', name: 'Personajes ficticios', icon: 'magic', modes: 'DMP',
  cards: `
f | Harry Potter | 00s | mago, gafas, cicatriz, Hogwarts
f | Sherlock Holmes | | detective, lupa, Watson, Baker Street
f | Indiana Jones | 80s | arqueólogo, látigo, sombrero, Harrison Ford
f | Jack Sparrow | 00s | pirata, Johnny Depp, Perla Negra, ron
f | Mary Poppins | k | niñera, paraguas, volar, supercalifragilístico
f | James Bond | | espía, 007, martini, licencia para matar
f | Robin Hood | k | arco, ricos, pobres, Sherwood
f | El Zorro | | espada, máscara, Z, capa
f | Homer Simpson | 90s | rosquillas, calvo, cerveza, Marge
f | Bart Simpson | 90s | monopatín, travieso, Homer, ay caramba
f | Lisa Simpson | 90s | saxofón, lista, Bart, hermana
f | Marge Simpson | 90s | pelo azul, Homer, madre, moño
f | Mortadelo | 70s es | Filemón, disfraces, calvo, TIA
f | Filemón | 70s es | Mortadelo, jefe, TIA, Súper
f | Mafalda | 70s | Quino, sopa, Argentina, mundo
f | Astérix | 70s | galo, poción mágica, Obélix, romanos
f | Obélix | 70s | menhir, jabalíes, Astérix, marmita
f | Tintín | | periodista, Milú, tupé, Haddock
f | Snoopy | k | perro, Charlie Brown, caseta, beagle
f | Garfield | k 80s | gato, lasaña, lunes, naranja
f | Zipi y Zape | es | gemelos, travesuras, colegio, don Pantuflo
f | Hermione Granger | 00s | bruja, lista, Ron, Hogwarts
f | Lord Voldemort | 00s | sin nariz, Harry, Señor Tenebroso, varita
f | Albus Dumbledore | 00s | barba, director, Hogwarts, mago
f | Hagrid | 00s | gigante, guardabosques, barba, Harry
f | Pippi Calzaslargas | k 70s | trenzas, pelirroja, fuerte, caballo
f | Luigi | k 80s | Mario, verde, hermano, fontanero
f | Princesa Peach | k 80s | Mario, rosa, castillo, Bowser
f | Bowser | k 80s | tortuga, villano, Mario, Peach
f | Lara Croft | 90s | aventurera, pistolas, Tomb Raider, trenza
f | Sheldon Cooper | 10s | físico, Bazinga, Penny, sofá
f | Juan Cuesta | 00s es | presidente, Desengaño 21, vecinos, Aquí no hay quien viva
f | Antonio Recio | 10s es | mayorista, marisco, Montepinar, Berta
f | Emilio Delgado | 00s es | portero, Desengaño 21, Aquí no hay quien viva, Mariano
f | Chanquete | 80s es | Verano azul, barco, Nerja, pescador
f | Freddy Krueger | 80s t | pesadilla, cuchillas, jersey, sueños
f | Chucky | 80s t | muñeco diabólico, cuchillo, pelirrojo, peto
f | Hannibal Lecter | 90s t | caníbal, máscara, psiquiatra, Clarice
f | Pennywise | 80s t | payaso, globo, alcantarilla, It
f | Beetlejuice | 80s | fantasma, rayas, tres veces, bio-exorcista
f | Rocinante | | caballo, Don Quijote, flaco, rocín
f | Sancho Panza | | escudero, Don Quijote, burro, gordito
f | Dulcinea del Toboso | | amada, Don Quijote, Aldonza, dama
f | Gulliver | | gigante, Liliput, viajes, náufrago
f | El capitán Haddock | | Tintín, barba, rayos y truenos, whisky
f | Marty McFly | 80s | DeLorean, Doc, Regreso al futuro, monopatín
f | Doc Brown | 80s | científico, DeLorean, gran Scott, condensador
f | Neo | 90s | Matrix, pastilla roja, elegido, gafas
f | Kevin McCallister | 90s | Solo en casa, trampas, niño, ladrones
f | Charlie Brown | | Snoopy, Peanuts, cometa, rayas
f | Daenerys Targaryen | 10s t | dragones, madre, Juego de tronos, rubia
f | Jon Nieve | 10s t | Muro, Juego de tronos, no sabes nada, bastardo
f | Once (Stranger Things) | 10s | poderes, gofres, nariz, laboratorio
f | Mr. Burns | 90s | millonario, excelente, central nuclear, Smithers
f | Ned Flanders | 90s | vecino, bigote, holi, Homer
m | Hercule Poirot |
m | Miss Marple |
m | Arsène Lupin |
m | Capitán Nemo |
m | Phileas Fogg |
m | Long John Silver |
m | Capitán Ahab |
m | Hamlet |
m | Otelo |
m | Quasimodo |
m | Jean Valjean |
m | D'Artagnan |
m | Cyrano de Bergerac |
m | El Sombrerero Loco |
m | El gato de Cheshire |
m | El Conejo Blanco |
m | La Reina de Corazones |
m | Severus Snape | 00s
m | Ron Weasley | 00s
m | Katniss Everdeen | 10s
m | Bella Swan | 00s
m | Edward Cullen | 00s
m | Walter White | 10s t
m | Tony Soprano | 00s t
m | Gregory House | 00s
m | Jessica Fletcher | 80s
m | Colombo | 70s
m | MacGyver | 80s
m | Lucky Luke |
m | Corto Maltés |
m | El Capitán Trueno | es
m | Pepe Gotera y Otilio | es
m | Rompetechos | es
m | Carpanta | es
m | Kratos | 00s t
m | Master Chief | 00s
m | Link (Zelda) | 80s
m | Ellen Ripley | 70s t
m | Rocky Balboa |
m | Atreyu | 80s
m | Bridget Jones | 00s
m | Lisbeth Salander | 00s t
m | Sandokán | 70s
m | Rick Grimes | 10s t
m | Mr. Hyde |
m | El profesor Moriarty |
m | Vito Corleone | 70s t
m | Scarlett O'Hara |
m | Norman Bates | t
m | Jack Torrance | 80s t
d | Atticus Finch |
d | Holden Caulfield |
d | Jay Gatsby |
d | Gregor Samsa |
d | Raskólnikov |
d | Heathcliff |
d | Mr. Darcy |
d | Elizabeth Bennet |
d | Rhett Butler |
d | Travis Bickle | 70s t
d | Tyler Durden | 90s t
d | Patrick Bateman | t
d | HAL 9000 |
d | Sarah Connor | 80s
d | Rick Deckard | 80s
d | Ferris Bueller | 80s
d | Holly Golightly |
d | Bastian Baltasar Bux | 80s
d | Fújur | 80s
d | Ana Ozores | es
d | Max Estrella | es
d | Segismundo | es
d | Don Mendo | es
d | Pepe Carvalho | es
d | El capitán Alatriste | es
d | Fortunata | es
d | Yerma | es
d | La Bruja Avería | 80s es
d | Van Helsing |
d | El fantasma de la ópera |
d | Ichabod Crane |
d | Huckleberry Finn |
d | Tom Sawyer |
d | Bilbo Bolsón | 00s
d | Pinhead | t
d | Michael Myers | 70s t
d | Leatherface | 70s t
d | Marion Crane | t
d | Tom Ripley |
d | Philip Marlowe |
d | El inspector Clouseau |
`
};
