// Arte y museos. Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
export default {
  id: 'art', name: 'Arte y museos', icon: 'pencil', modes: 'DP', ages: 'all',
  cards: `
f | La Gioconda | k | Mona Lisa, sonrisa, Leonardo, Louvre
f | El grito | DM k | Munch, cara, manos, puente
f | Pincel | D k | pintar, pelo, cuadro, mojar
f | Paleta de pintor | D k | colores, mezclar, agujero, pulgar
f | Caballete | D k | cuadro, patas, pintor, sostener
f | Lienzo | D | tela, cuadro, pintar, blanco
f | Acuarela | P k | agua, pintura, colores, papel
f | Retrato | D k | cara, pintar, persona, posar
f | Autorretrato | D | uno mismo, pintor, espejo, cara
f | Escultura | M k | estatua, mármol, tallar, artista
f | Estatua | M k | piedra, quieta, plaza, figura
f | Museo | k | cuadros, visitar, obras, exposición
f | Grafiti | DM k | pared, espray, calle, pintar
f | Mosaico | D k | trocitos, azulejos, piezas, suelo
f | Vidriera | D | iglesia, cristal, colores, luz
f | Marco de cuadro | D k | borde, colgar, pared, dorado
f | Pintar un cuadro | M k | pincel, lienzo, artista, colores
f | Posar para un retrato | M k | quieto, pintor, sentarse, modelo
f | Caricatura | D k | exagerar, dibujo, cara, humor
f | Cómic | D k | viñetas, bocadillos, tebeo, historieta
f | Bodegón | D | frutas, jarrón, mesa, naturaleza muerta
f | Paisaje | D k | montañas, campo, pintar, horizonte
f | El pensador | M | Rodin, sentado, mano, barbilla
f | Venus de Milo | M | sin brazos, estatua, griega, Louvre
f | La noche estrellada | D | Van Gogh, remolinos, cielo, ciprés
f | Los girasoles | D k | Van Gogh, flores, amarillo, jarrón
f | Las Meninas | es | Velázquez, infanta, Prado, espejo
f | Guernica | es | Picasso, bombardeo, blanco y negro, Reina Sofía
f | La última cena | M | Leonardo, Jesús, apóstoles, mesa
f | El David de Miguel Ángel | M | estatua, Florencia, desnudo, mármol
f | Arte abstracto | | formas, colores, raro, moderno
f | Pintar con los dedos | M k | manos, infantil, colores, mancharse
f | Dibujo a lápiz | D k | grafito, papel, sombrear, boceto
f | Galería de arte | P | exposición, cuadros, vender, artista
f | Cuadro torcido | M k | colgar, pared, enderezar, inclinado
f | Hacer una foto prohibida en un museo | M | flash, vigilante, cámara, prohibido
f | Vigilante de museo | M | sala, silla, cuidar, no tocar
f | Arcilla | M | barro, modelar, torno, cerámica
f | Torno de alfarero | M | barro, girar, vasija, manos
f | Cerámica | D | barro, horno, jarrón, plato
m | El nacimiento de Venus | | Botticelli, concha, mar, diosa
m | La persistencia de la memoria | | Dalí, relojes blandos, derretidos, surrealismo
m | El jardín de las delicias | es | El Bosco, Prado, tríptico, infierno
m | La joven de la perla | | Vermeer, pendiente, turbante, holandesa
m | El beso de Klimt | | dorado, pareja, abrazo, Viena
m | La creación de Adán | M | Miguel Ángel, dedos, Capilla Sixtina, Dios
m | Capilla Sixtina | | Miguel Ángel, Vaticano, techo, frescos
m | Los fusilamientos del 3 de mayo | es | Goya, Prado, farol, camisa blanca
m | Saturno devorando a su hijo | es | Goya, pinturas negras, comer, Prado
m | La maja vestida | es | Goya, Prado, tumbada, mujer
m | Nenúfares | | Monet, estanque, flores, impresionismo
m | Latas de sopa Campbell | | Warhol, pop art, tomate, repetición
m | Marilyn de Warhol | | colores, serigrafía, pop art, rubia
m | El hijo del hombre | | Magritte, manzana, sombrero, cara
m | American Gothic | M | granjeros, horca, casa, Estados Unidos
m | La gran ola de Kanagawa | D | Japón, mar, Hokusai, monte Fuji
m | La libertad guiando al pueblo | | Delacroix, bandera, Francia, revolución
m | Impresionismo | P | Monet, luz, pinceladas, Francia
m | Cubismo | P | Picasso, formas, geometría, cubos
m | Surrealismo | P | Dalí, sueños, raro, Magritte
m | Arte pop | P | Warhol, colores, cómic, consumo
m | Óleo | P | pintura, aceite, lienzo, secado
m | Pintura al fresco | P | pared, techo, yeso, Capilla Sixtina
m | Ecce Homo de Borja | P es 10s | restauración, Jesús, Zaragoza, viral
m | Subasta de arte | M | martillo, puja, millones, comprador
m | Falsificación | P | copia, falso, firma, original
m | Firma del pintor | D | nombre, esquina, cuadro, autor
m | Inauguración de una exposición | P | galería, vino, artista, invitados
m | Boceto | D | dibujo, esbozo, lápiz, borrador
m | Puntillismo | D | puntos, Seurat, colores, técnica
m | Collage | M | recortes, pegar, papeles, revistas
m | Busto | D | estatua, cabeza, hombros, mármol
m | Pedestal | D | estatua, base, columna, apoyar
m | Retablo | P | iglesia, altar, madera, dorado
m | Museo Reina Sofía | P es | Madrid, Guernica, arte moderno, Atocha
m | Museo Thyssen | P es | Madrid, colección, Paseo del Prado, baronesa
m | MoMA | P | Nueva York, arte moderno, museo, Manhattan
m | Banksy | P | grafitero, anónimo, Bristol, niña con globo
m | Botero | P | gordos, Colombia, esculturas, pintor
m | Joan Miró | P es | Barcelona, colores, estrellas, surrealismo
m | La Piedad de Miguel Ángel | | Virgen, Jesús, Vaticano, mármol
m | El caminante sobre el mar de niebla | | Friedrich, montaña, espalda, romanticismo
m | Arte urbano | P | calle, grafiti, murales, Banksy
d | La rendición de Breda | es | Velázquez, lanzas, llaves, Prado
d | Los borrachos | es | Velázquez, Baco, vino, Prado
d | Las hilanderas | es | Velázquez, tapices, rueca, Prado
d | La maja desnuda | es t | Goya, Prado, tumbada, polémica
d | El entierro del señor de Orgaz | es | El Greco, Toledo, nobles, santos
d | El Greco | P es | Toledo, alargado, cretense, Orgaz
d | Zurbarán | P es | bodegones, monjes, Extremadura, barroco
d | Murillo | P es | Sevilla, Inmaculada, niños, barroco
d | Las tres gracias | | Rubens, desnudos, mujeres, Prado
d | La escuela de Atenas | | Rafael, filósofos, Platón, Aristóteles
d | El columpio | M | Fragonard, rococó, zapato, jardín
d | Impresión, sol naciente | | Monet, puerto, Le Havre, impresionismo
d | La balsa de la Medusa | | Géricault, náufragos, mar, romanticismo
d | Abaporu | | Tarsila do Amaral, Brasil, pie grande, modernismo
d | Composición con rojo, amarillo y azul | D | Mondrian, líneas, cuadrados, neoplasticismo
d | Fuente de Duchamp | | urinario, ready-made, dadaísmo, firma
d | Dadaísmo | P | Duchamp, absurdo, vanguardia, Zúrich
d | Expresionismo | P | Munch, emociones, Alemania, colores fuertes
d | Barroco | P | siglo XVII, Caravaggio, Velázquez, contraste
d | Claroscuro | D | luz, sombra, Caravaggio, contraste
d | Trampantojo | P | engañar, ojo, ilusión, pared
d | Perspectiva | D | punto de fuga, profundidad, líneas, distancia
d | Punto de fuga | D | perspectiva, líneas, horizonte, dibujo
d | Hiperrealismo | P | fotografía, detalle, real, pintura
d | Arte rupestre | D | cuevas, prehistoria, bisontes, pinturas
d | Kintsugi | P | Japón, oro, cerámica rota, reparar
d | Origami | M | papel, doblar, Japón, grulla
d | Antoni Gaudí | P es | Sagrada Familia, Barcelona, modernismo, trencadís
d | Trencadís | P es | Gaudí, cerámica rota, mosaico, Güell
d | Museo del Hermitage | P | San Petersburgo, Rusia, zares, Palacio de Invierno
d | Galería Uffizi | P | Florencia, Botticelli, Italia, Médici
d | Bienal de Venecia | P | exposición, Italia, pabellones, arte contemporáneo
d | ARCO | P es | feria, Madrid, arte contemporáneo, galerías
d | Comisario de exposiciones | P | museo, seleccionar, obras, organizar
`
};
