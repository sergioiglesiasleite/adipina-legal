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
`
};
