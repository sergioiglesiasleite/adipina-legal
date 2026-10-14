// Cine. Formato de cada línea: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
// Guía completa en docs/GUIA_CONTENIDO.md.
export default {
  id: 'cinema', name: 'Cine', icon: 'film', modes: 'DMP',
  cards: `
f | Titanic | 90s | barco, iceberg, hundimiento, DiCaprio
f | El rey león | k 90s | Simba, Mufasa, sabana, Disney
f | Toy Story | k 90s | Woody, Buzz, juguetes, Pixar
f | Shrek | k 00s | ogro, verde, Asno, Fiona
f | Buscando a Nemo | k 00s | pez, payaso, Dory, océano
f | Frozen | k 10s | Elsa, Anna, hielo, Olaf
f | Jurassic Park | 90s | dinosaurios, parque, isla, Spielberg
f | Piratas del Caribe | 00s | Jack Sparrow, barco, tesoro, Perla Negra
f | Aladdín | k 90s | lámpara, genio, Jasmín, alfombra
f | Coco | k 10s | México, muertos, guitarra, Pixar
f | Los increíbles | k 00s | superhéroes, familia, Pixar, trajes
f | Kung Fu Panda | k 00s | Po, oso, artes marciales, maestro
f | Ratatouille | k 00s | rata, cocinero, París, Remy
f | La guerra de las galaxias | 70s | Jedi, espada láser, Darth Vader, Luke
f | Solo en casa | 90s | Kevin, ladrones, Navidad, niño
f | La sirenita | k 80s | Ariel, mar, cola, Úrsula
f | La bella y la bestia | k 90s | rosa, castillo, maldición, Lumière
f | Cars | k 00s | coches, Rayo McQueen, carreras, Pixar
f | Monstruos, S.A. | k 00s | Sulley, Mike, sustos, Boo
f | Up | k 00s | globos, casa, anciano, Pixar
f | Del revés | k 10s | emociones, Alegría, Tristeza, cabeza
f | Minions | k 10s | amarillos, plátano, Gru, gafas
f | Madagascar | k 00s | león, cebra, jirafa, hipopótamo
f | Ice Age | k 00s | mamut, ardilla, bellota, hielo
f | Mulán | k 90s | China, guerrera, dragón, Mushu
f | Tarzán | k 90s | selva, gorilas, lianas, Jane
f | Dumbo | k | elefante, orejas, volar, circo
f | Bambi | k | ciervo, Tambor, bosque, madre
f | 101 dálmatas | k | perros, manchas, Cruella, cachorros
f | Encanto | k 20s | Colombia, Mirabel, casa, magia
f | Vaiana | k 10s | océano, isla, Maui, Polinesia
f | Zootrópolis | k 10s | conejo, zorro, policía, ciudad
f | Avatar | 00s | azules, Pandora, Na'vi, Cameron
f | King Kong |  | gorila, edificio, Nueva York, gigante
f | Hércules | k 90s | héroe, Zeus, Grecia, fuerza
f | Lilo y Stitch | k 00s | Hawái, extraterrestre, azul, perro
f | Hotel Transilvania | k 10s | Drácula, monstruos, vampiro, Mavis
f | Cómo entrenar a tu dragón | k 10s | Hipo, Desdentao, vikingos, volar
f | Mamma mia | 00s | ABBA, boda, Grecia, canciones
f | Rocky | 70s | boxeador, Stallone, escaleras, Filadelfia
f | El mago de Oz | k | Dorothy, espantapájaros, hombre de hojalata, zapatos rojos
f | Hachiko | k 00s | perro, estación, Japón, esperar
f | Gru, mi villano favorito | k 10s | Minions, Margo, luna, niñas
f | Pinocho de Guillermo del Toro | k 20s | marioneta, nariz, madera, Gepetto
f | Los pitufos: la película | k 10s | azules, Gargamel, setas, Papá Pitufo
f | Spider-Man: un nuevo universo | k 10s | Miles Morales, araña, multiverso, animación
f | Paddington | k 10s | oso, Londres, mermelada, gorro
f | Babe, el cerdito valiente | k 90s | cerdo, granja, ovejas, pastor
f | Stuart Little | k 90s | ratón, familia, adoptado, coche
f | Bolt | k 00s | perro, superpoderes, gato, hámster
f | Brave | k 10s | Mérida, arco, Escocia, osa
f | Enredados | k 10s | Rapunzel, pelo, torre, sartén
f | Wall-E | k 00s | robot, basura, planeta, Eva
f | Los Goonies | 80s | tesoro, mapa, pirata, niños
f | Karate Kid | 80s | Daniel, señor Miyagi, dar cera, pulir cera
f | Torrente, el brazo tonto de la ley | 90s es t | Santiago Segura, policía, Atleti, Fary
f | Ocho apellidos vascos | 10s es | vasco, sevillano, boda, Dani Rovira
f | Campeones | 10s es | baloncesto, entrenador, Javier Gutiérrez, equipo
f | Gladiator | 00s | Roma, Máximo, coliseo, emperador
f | Barbie | 20s | muñeca, rosa, Ken, Margot Robbie
m | Regreso al futuro | 80s
m | El señor de los anillos | 00s
m | La vida es bella | 90s
m | E.T., el extraterrestre | 80s
m | Matrix | 90s
m | Los cazafantasmas | 80s
m | Grease | 70s
m | Los juegos del hambre | 10s
m | El padrino | 70s t
m | Pulp Fiction | 90s t
m | Forrest Gump | 90s
m | Top Gun | 80s
m | Dirty Dancing | 80s
m | Pretty Woman | 90s t
m | Ghost | 90s
m | Terminator | 80s
m | Rambo | 80s
m | Jumanji | 90s
m | Men in Black | 90s
m | Señora Doubtfire | 90s
m | Sonrisas y lágrimas |
m | Mary Poppins (la película) | k
m | Los otros | 00s es
m | Mar adentro | 00s es
m | Lo imposible | 10s es
m | El orfanato | 00s es t
m | REC | 00s es t
m | Abre los ojos | 90s es
m | Origen | 10s
m | Interstellar | 10s
m | Parásitos | 10s
m | La La Land | 10s
m | Joker | 10s t
m | Oppenheimer | 20s
m | Intocable | 10s
m | El club de la lucha | 90s t
m | Cadena perpetua | 90s
m | Salvar al soldado Ryan | 90s t
m | La lista de Schindler | 90s t
m | Alien, el octavo pasajero | 70s t
m | Casablanca |
m | Indiana Jones y el templo maldito | 80s
m | Misión imposible | 90s
m | Psicosis | t
m | El exorcista | 70s t
m | Tiburón (la película) | 70s
m | Gremlins | 80s
m | Willy Wonka y la fábrica de chocolate | 70s
m | Los Vengadores | 10s
m | Bohemian Rhapsody (la película) | 10s
m | Harry Potter y la piedra filosofal | 00s
d | El laberinto del fauno | 00s es
d | El viaje de Chihiro | 00s
d | El gran hotel Budapest | 10s
d | La ventana indiscreta |
d | Todo sobre mi madre | 90s es
d | Amélie | 00s
d | Bienvenido, Mister Marshall | es
d | El verdugo | es
d | Los santos inocentes | 80s es
d | Volver | 00s es
d | Ciudadano Kane |
d | Vértigo, de Hitchcock |
d | Con faldas y a lo loco |
d | Desayuno con diamantes |
d | El resplandor | 80s t
d | Blade Runner | 80s
d | 2001: una odisea del espacio |
d | Lo que el viento se llevó |
d | Taxi Driver | 70s t
d | La naranja mecánica | 70s t
d | Amores perros | 00s t
d | El secreto de sus ojos | 00s
d | Relatos salvajes | 10s
d | Big Fish | 00s
d | Eduardo Manostijeras | 90s
d | Atrapado en el tiempo | 90s
d | El show de Truman | 90s
d | Memento | 00s
d | El sexto sentido | 90s
d | Cantando bajo la lluvia |
d | Tiempos modernos |
d | Metrópolis |
d | El gran dictador |
d | Nosferatu |
d | Cinema Paradiso | 80s
d | Celda 211 | 00s es t
d | Mujeres al borde de un ataque de nervios | 80s es
d | Belle Époque | 90s es
d | El espíritu de la colmena | 70s es
d | Átame | 90s es t
f | Harry Potter y la cámara secreta |  | Hogwarts, basilisco, Dobby, varita
f | Indiana Jones en busca del arca perdida |  | arqueólogo, látigo, sombrero, Harrison Ford
f | Sonic, la película | k | erizo, azul, velocidad, Sega
f | Super Mario Bros.: la película | k | fontanero, Nintendo, Luigi, princesa Peach
f | Del revés 2 | k | emociones, Ansiedad, Riley, Pixar
f | Toy Story 3 | k | Woody, Andy, universidad, guardería
f | Shrek 2 | k | Muy Muy Lejano, Asno, Gato con Botas, ogro
f | Blancanieves y los siete enanitos | k | manzana, bruja, espejo, princesa
f | Avatar: el sentido del agua |  | Pandora, azules, océano, Cameron
m | Spider-Man: No Way Home | 20s | Tom Holland, multiverso, Doctor Strange, Peter Parker
m | Dune | 20s | Arrakis, gusanos, especia, desierto
m | Top Gun: Maverick | 20s | Tom Cruise, pilotos, aviones, gafas
m | El caballero oscuro | 00s | Batman, Joker, Gotham, Nolan
m | Los vengadores: Endgame | 20s | Thanos, guantelete, Marvel, chasquido
m | Mad Max: Furia en la carretera | 10s | desierto, Furiosa, coches, gasolina
m | Kill Bill | 00s | Tarantino, katana, venganza, chándal amarillo
m | Rápidos y furiosos | 00s | coches, Vin Diesel, carreras, familia
m | Ocho apellidos catalanes | 10s es | Dani Rovira, Clara Lago, boda, secuela
m | Tadeo Jones | 10s es | arqueólogo, animación, Perú, momia
m | Padre no hay más que uno | 10s es | Santiago Segura, hijos, familia, comedia
m | El hoyo | 20s es | plataforma, comida, niveles, prisión
m | Toc Toc | 10s es | manías, psicólogo, sala de espera, TOC
m | Perfectos desconocidos | 10s es | móviles, cena, secretos, amigos
m | La sociedad de la nieve | 20s es | avión, Andes, supervivientes, Bayona
m | Los Increíbles 2 | k | superhéroes, familia, Jack-Jack, Elastigirl
m | La princesa prometida | 80s | Íñigo Montoya, Buttercup, pirata, cuento
m | Náufrago | 00s | Tom Hanks, isla, Wilson, avión
m | Cocodrilo Dundee | 80s | Australia, cuchillo, Nueva York, aventurero
m | Notting Hill | 90s | Hugh Grant, Julia Roberts, librería, Londres
m | El diario de Noa | 00s | Ryan Gosling, carta, lago, amor
m | Rocky IV | 80s | Drago, ruso, boxeo, Stallone
d | Tesis | 90s es | Amenábar, snuff, universidad, cinta
d | Los lunes al sol | 00s es | Bardem, astilleros, paro, Vigo
d | Volver a empezar | 80s es | Garci, Óscar, profesor, Gijón
d | El Bola | 00s es | niño, padre, maltrato, amistad
d | Días de fútbol | 00s es | amigos, equipo, Ernesto Alterio, comedia
d | La comunidad | 00s es | Carmen Maura, piso, dinero, vecinos
d | Airbag | 90s es | Karra Elejalde, despedida, comedia, carretera
d | El día de la bestia | 90s es | Álex de la Iglesia, Anticristo, Madrid, cura
d | El buen patrón | 20s es | Bardem, balanzas, fábrica, jefe
d | As bestas | 20s es | Galicia, vecinos, franceses, aldea
d | Alcarràs | 20s es | melocotones, familia, Lleida, campo
d | La caza | 10s | Dinamarca, profesor, acusación, pueblo
d | Roma (Cuarón) | 10s | México, blanco y negro, niñera
d | El irlandés | 10s | Scorsese, De Niro, mafia, Al Pacino
d | Érase una vez en Hollywood | 10s | Tarantino, DiCaprio, Brad Pitt, actor
d | Whiplash | 10s | batería, profesor, jazz, sangre
d | Todo a la vez en todas partes | 20s | multiverso, lavandería, salchichas, madre
d | Anatomía de una caída | 20s | juicio, nieve, marido, Francia
d | El Padrino II | 70s | Corleone, Al Pacino, De Niro, Cuba
d | Apocalypse Now | 70s | Vietnam, coronel Kurtz, helicópteros, napalm
d | El silencio de los corderos | 90s | Hannibal Lecter, Clarice, FBI, máscara
d | Doce hombres sin piedad |  | jurado, juicio, Henry Fonda, sala
d | El apartamento |  | Billy Wilder, llave, oficina, Jack Lemmon
d | Rebeca |  | Hitchcock, mansión, ama de llaves, Manderley
d | Los pájaros |  | Hitchcock, gaviotas, ataque, pueblo
d | Con la muerte en los talones |  | Hitchcock, avioneta, Cary Grant, maíz
d | La gran evasión |  | prisioneros, moto, túnel, Steve McQueen
d | Ben-Hur |  | carrera de cuadrigas, Charlton Heston, romano, galeras
d | El bueno, el feo y el malo |  | western, Clint Eastwood, Morricone, tesoro
d | Fargo | 90s | nieve, policía embarazada, secuestro, Coen
d | Trainspotting | 90s t | Edimburgo, heroína, Renton, elige la vida
d | Amanece, que no es poco | 80s es | José Luis Cuerda, pueblo, surrealista, comedia
d | La escopeta nacional | 70s es | Berlanga, cacería, ministro, comedia
`
};
