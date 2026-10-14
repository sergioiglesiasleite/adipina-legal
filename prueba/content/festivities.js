// Fiestas y tradiciones (la Navidad tiene su propio tema). Formato: dificultad (f/m/d) | respuesta | etiquetas | prohibidas.
export default {
  id: 'festivities', name: 'Fiestas y tradiciones', icon: 'star', modes: 'DMP',
  cards: `
f | Carnaval | | disfraces, máscaras, febrero, comparsas
f | Halloween | k | calabaza, truco o trato, disfraces, miedo
f | San Valentín | | amor, catorce de febrero, corazones, pareja
f | Semana Santa | es | procesiones, pasos, nazarenos, torrijas
f | San Fermín | es | Pamplona, toros, encierro, pañuelo rojo
f | Las Fallas | es | Valencia, ninots, quemar, mascletà
f | Feria de Abril | es | Sevilla, casetas, sevillanas, farolillos
f | La Tomatina | es | Buñol, tomates, lanzar, agosto
f | Fiesta de cumpleaños | k | tarta, velas, regalos, invitados
f | Boda | | novios, anillos, vestido blanco, banquete
f | Bautizo | | bebé, pila, agua, padrinos
f | Primera comunión | | niños, iglesia, traje, mayo
f | Día de la Madre | | mamá, regalo, mayo, flores
f | Día del Padre | es | papá, regalo, San José, marzo
f | Año Nuevo chino | | dragón, China, farolillos, sobres rojos
f | Oktoberfest | t | Múnich, cerveza, Alemania, jarras
f | Día de Acción de Gracias | | pavo, Estados Unidos, noviembre, familia
f | Huevos de Pascua | k | chocolate, conejo, buscar, primavera
f | Noche de San Juan | es | hogueras, playa, saltar, verano
f | Día de Muertos | | México, calaveras, altar, flores
f | Despedida de soltero | t | boda, amigos, disfraz, última noche
f | Verbena | es | fiesta, orquesta, verano, pueblo
f | Romería | es | ermita, carretas, campo, virgen
f | Fiestas del pueblo | es | verano, orquesta, peñas, agosto
f | Graduación | | birrete, título, estudiantes, beca
f | Jubilación | | trabajo, retiro, mayor, pensión
f | Día del Libro | | libros, rosa, abril, Cervantes
f | Día de la Hispanidad | es | doce de octubre, desfile, Colón, fiesta nacional
f | Baby shower | | bebé, embarazada, regalos, fiesta
f | Fin de curso | k | colegio, vacaciones, verano, notas
m | Moros y cristianos | es
m | Sant Jordi | es
m | Hogueras de Alicante | es
m | Romería de El Rocío | es
m | Batalla del vino de Haro | es
m | Corpus Christi |
m | Todos los Santos |
m | Holi |
m | Diwali |
m | Ramadán |
m | Janucá |
m | Mardi Gras |
m | Carnaval de Río |
m | Carnaval de Cádiz | es
m | Carnaval de Santa Cruz de Tenerife | es
m | San Isidro | es
m | Día de la Marmota |
m | San Patricio |
m | Fiesta de la vendimia |
m | Día del Orgullo |
m | Patios de Córdoba | es
m | Gigantes y cabezudos | es
m | Pedida de mano |
m | Bodas de oro |
m | Feria de Málaga | es
m | Semana Grande de Bilbao | es
m | Fiestas del Pilar | es
m | Carnaval de Venecia |
m | Festival de las linternas |
m | Hanami |
d | Fiesta de los Escobazos de Jarandilla | es
d | La Patum de Berga | es
d | Rapa das Bestas | es
d | Salto del Colacho | es
d | Danza de los zancos de Anguiano | es
d | Fiesta de los Mayos | es
d | Entroido | es
d | Tamborrada de San Sebastián | es
d | Misteri d'Elx | es
d | La Mercè | es
d | Correfoc | es
d | San Antón | es
d | Bajada de la Virgen de las Nieves | es
d | Romería de Santa Marta de Ribarteme | es
d | Cascamorras | es
d | Batalla de Flores | es
d | Fiesta de la Rosa del Azafrán | es
d | Songkran |
d | Inti Raymi |
d | Burning Man |
d | Up Helly Aa |
d | Noche de Walpurgis |
d | Catorce de julio en Francia |
d | Loy Krathong |
d | Carnaval de Notting Hill |
d | Palio de Siena |
d | Día de San Jorge |
d | Fiesta de las Cruces de Mayo | es
d | Noche de los Tambores de Calanda | es
d | Endiablada de Almonacid | es
f | Piñata | M | romper, palo, caramelos, ojos vendados
f | Globos de cumpleaños | D | fiesta, inflar, colores, hilo
f | Tarta de cumpleaños | D | velas, nata, soplar, felicidades
f | Gorro de fiesta | D | cono, cumpleaños, goma, papel
f | Confeti | D | papelitos, lanzar, colores, fiesta
f | Fuegos artificiales | D | cielo, explosión, colores, noche
f | Petardos | M | explosión, ruido, mecha, fiesta
f | Cabalgata | M | carrozas, desfile, caramelos, calle
f | Disfrazarse en Carnaval | M | máscara, fiesta, febrero, desfile
f | Feria del pueblo | | atracciones, casetas, verano, fiestas
f | Coches de choque | M | feria, chocar, atracción, pista
f | Tirar arroz a los novios | M | boda, salir, iglesia, lanzar
f | Ramo de novia | M | flores, lanzar, boda, solteras
f | Tarta nupcial | D | pisos, boda, novios, cortar
f | Primer baile de los novios | M | vals, boda, pareja, pista
m | Discurso del padrino | M | boda, copa, hablar, emoción
m | Brindis | M | copas, chocar, salud, celebrar
m | Uvas de la suerte | | doce, campanadas, Nochevieja, Puerta del Sol
m | Encierro | M es | toros, correr, calle, San Fermín
m | Pañuelo rojo | D es | San Fermín, cuello, Pamplona, blanco
m | Ofrenda floral | M | flores, Virgen, Pilar, Fallas
m | Mascletà | es | Valencia, petardos, Fallas, ruido
m | Ninot | es | Fallas, muñeco, quemar, Valencia
m | Caseta de feria | es | Feria de Abril, sevillanas, farolillos, rebujito
m | Rebujito | es t | manzanilla, refresco, Feria, Sevilla
m | Paso de Semana Santa | M es | procesión, costaleros, cofradía, imagen
m | Nazareno | M es | capirote, procesión, túnica, Semana Santa
d | Costalero | M es | paso, cargar, procesión, cuadrilla
d | Saeta | es | cante, procesión, balcón, flamenco
d | Cremà | es | Fallas, quemar, fuego, 19 de marzo
d | Despertá | es | Fallas, petardos, mañana, despertar
f | Fiesta sorpresa | M | secreto, ¡sorpresa!, esconderse, cumpleaños
f | Fiesta de pijamas | M | dormir, amigos, sacos, noche
f | Cantar el cumpleaños feliz | M | canción, tarta, velas, aplaudir
f | Invitación de cumpleaños | D | tarjeta, fiesta, fecha, invitar
f | Castillo hinchable | D | saltar, fiesta, niños, inflable
f | Guirnaldas | D | decorar, colgar, fiesta, banderines
f | Banderines | D | fiesta, colgar, colores, triangulares
f | Procesión | M | Semana Santa, pasos, calle, velas
f | Manzana de caramelo | D | feria, roja, palo, dulce
f | Churros con chocolate | D | desayuno, Año Nuevo, mojar, chocolatería
f | Hoguera de San Juan | D | fuego, saltar, playa, noche
f | Saltar la hoguera | M | San Juan, fuego, deseo, noche
f | Mona de Pascua | D | chocolate, huevo, padrino, Cataluña
m | Día de la Mujer |  | 8 de marzo, igualdad, morado, manifestación
m | Día de la Tierra |  | planeta, medio ambiente, abril, naturaleza
m | Día de los Inocentes |  | 28 de diciembre, bromas, monigote, inocentada
m | Monigote de papel | D | espalda, inocentada, pegar, broma
m | Día de los Abuelos |  | 26 de julio, abuela, abuelo, familia
m | Día del Trabajo |  | 1 de mayo, trabajadores, manifestación, sindicatos
m | Día de Andalucía | es | 28 de febrero, verdiblanca, himno, comunidad
m | Diada | es | 11 de septiembre, Cataluña, senyera, fiesta
m | Día de Galicia | es | 25 de julio, Santiago, Apóstol, gallegos
m | Virgen del Carmen | es | 16 de julio, marineros, procesión, mar
m | La Magdalena | es | Castellón, gaiatas, fiestas, marzo
m | Fiestas de San Mateo | es | Logroño, vendimia, pisado de uva, septiembre
m | Fiestas de la Virgen Blanca | es | Vitoria, Celedón, paraguas, agosto
m | Bajada de Celedón | es | Vitoria, paraguas, muñeco, txupinazo
m | Feria de Jerez | es | caballos, casetas, mayo
m | Castellers | M es | torres humanas, Cataluña, enxaneta, faja
m | Muñeira | M es | baile, Galicia, gaita, pandereta
m | Aurresku | M es | baile, vasco, honor, txistu
m | Fiesta de quintos |  | jóvenes, pueblo, mayoría de edad, celebrar
m | Despedida de soltera | M | novia, amigas, disfraz, antes de la boda
m | Boda civil |  | juzgado, alcalde, casarse, sin iglesia
m | Confirmación |  | sacramento, obispo, católico, jóvenes
m | Bar mitzvá |  | judío, trece años, ceremonia, Torá
m | Quinceañera |  | quince años, Latinoamérica, vestido, fiesta
m | Fiesta patronal |  | santo, pueblo, patrón, procesión
d | Fiesta de la Trashumancia |  | ovejas, Madrid, pastores, calle Alcalá
d | Fiesta del Albariño | es | Cambados, vino, Galicia, agosto
d | Fiesta del Pulpo de Carballiño | es | Ourense, Galicia, agosto
d | Fiesta de la Sidra | es | Asturias, escanciar, Nava, manzana
d | Descenso del Sella | es | piraguas, Asturias, Arriondas, Ribadesella
d | Fiestas de Santa Tecla | es | Tarragona, castells, correfoc, septiembre
d | Fiestas de Gràcia | es | Barcelona, calles decoradas, barrio, agosto
d | Romería de la Virgen de la Cabeza | es | Jaén, Andújar, peregrinos, abril
d | Fiesta de las Mondas | es | Talavera, cerámica, Virgen del Prado, primavera
d | Corpus de Toledo | es | custodia, procesión, alfombras
d | Bando de la Huerta | es | Murcia, huertanos, desfile, zaragüelles
d | San Blas |  | 2 de febrero, garganta, rosquillas, santo
d | La Candelaria |  | 2 de febrero, velas, Canarias, Virgen
d | Bendición de animales |  | San Antón, iglesia, mascotas, enero
d | Luminarias |  | San Antón, hogueras, caballos, San Bartolomé
d | Noche en blanco |  | museos, cultura, gratis
d | Fiesta de la Música |  | 21 de junio, conciertos, calle, gratis
d | Fiesta mayor |  | pueblo, verano, patrón, Cataluña
d | Verbena de la Paloma | es | Madrid, agosto, chulapos, zarzuela
d | Chulapos y chulapas | M es | Madrid, mantón, parpusa, chotis
d | Chotis | M es | baile, Madrid, baldosa, girar
f | Pregón de fiestas | M | balcón, discurso, inicio, ayuntamiento
f | Comida familiar del domingo | M | paella, abuelos, mesa, sobremesa
f | Fiesta de bienvenida | M | nuevo, recibir, globos, sorpresa
f | Fiesta de despedida | M | adiós, irse, amigos, último día
f | Fiesta temática | M | disfraces, tema, decoración, invitados
f | Karaoke | M | cantar, micrófono, letra, pantalla
f | Desfile de carrozas | M | calle, decoradas, fiesta, música
f | Fiestas de barrio |  | calle, vecinos, orquesta, verano
m | Mercado medieval | M | puestos, disfraces, artesanía, plaza
m | Desfile militar del 12 de octubre | M es | Fiesta Nacional, Castellana, soldados, aviones
m | Día de la Constitución | es | 6 de diciembre, festivo, puente, 1978
m | Pisado de la uva | M | vendimia, pies, lagar, fiesta
m | Cucaña | M | palo, jabón, trepar, premio
m | Concurso de paellas | M | fiesta, cocinar, premio, arroz
m | Carrera de cintas | M es | caballos, novias, pueblo
m | Farolillos de feria | D es | papel, colores, Sevilla, colgar
m | Capirote | D es | nazareno, cono, Semana Santa, procesión
m | Peña festiva | es | amigos, fiestas, camisetas, local
d | Aplec | es | Cataluña, romería, ermita, sardanas
d | Encierro de Cuéllar | es | Segovia, el más antiguo, caballos, toros
d | Txosna | es | fiestas, vasco, barra, Aste Nagusia
d | Albero | es | feria, arena amarilla, Sevilla, suelo
d | Rompida de la hora | es | Calanda, tambores, Viernes Santo, medianoche
d | Hornazo | es | Salamanca, Lunes de Aguas, empanada, chorizo
d | Lunes de Aguas | es | Salamanca, hornazo, Tormes, Cuaresma
d | Calçotada | es | Cataluña, calçots, romesco, babero
d | Magosto | es | castañas, Galicia, otoño, hoguera
d | Danza de espadas | M es | baile, palos, tradicional, paloteo
d | Paloteo | M es | baile, palos, Aragón, Navarra
`
};
