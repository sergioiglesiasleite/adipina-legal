// Acciones y verbos: la mejor categoría para mímica. Formato: dificultad (f/m/d) | respuesta | etiquetas | prohibidas.
export default {
  id: 'actions', name: 'Acciones y verbos', icon: 'person', modes: 'MP', ages: 'kids',
  cards: `
f | Nadar | | piscina, agua, brazadas, mar
f | Correr | | rápido, piernas, carrera, deprisa
f | Saltar | | brincar, arriba, piernas, comba
f | Dormir | | cama, sueño, roncar, noche
f | Comer | | boca, tenedor, hambre, plato
f | Beber | | vaso, sed, agua, tragar
f | Bailar | | música, discoteca, pareja, ritmo
f | Cantar | | canción, voz, micrófono, karaoke
f | Llorar | | lágrimas, triste, ojos, pañuelo
f | Reír | | gracia, carcajada, chiste, alegre
f | Lavarse los dientes | | cepillo, pasta, boca, baño
f | Peinarse | | peine, pelo, espejo, raya
f | Ducharse | | agua, jabón, baño, mojarse
f | Conducir | | coche, volante, carnet, carretera
f | Cocinar | | cocina, sartén, receta, fogones
f | Leer | | libro, páginas, letras, gafas
f | Escribir | | lápiz, papel, letras, boli
f | Dibujar | | lápiz, papel, pintar, colores
f | Barrer | | escoba, suelo, recogedor, polvo
f | Fregar los platos | | grifo, estropajo, jabón, cocina
f | Aplaudir | | manos, palmas, ovación, público
f | Silbar | | labios, soplar, sonido, pito
f | Estornudar | | achís, nariz, resfriado, Jesús
f | Bostezar | | sueño, boca, cansado, aburrido
f | Toser | | garganta, resfriado, carraspear, tos
f | Abrazar | | brazos, cariño, apretar, achuchar
f | Besar | | labios, beso, cariño, mua
f | Saludar | | hola, mano, adiós, agitar
f | Pescar | | caña, peces, anzuelo, río
f | Escalar | | montaña, subir, cuerda, pared
f | Patinar | | patines, ruedas, hielo, deslizarse
f | Montar en bici | | pedales, bicicleta, ruedas, manillar
f | Nadar a braza | | piscina, rana, estilo, brazos
f | Jugar al escondite | | contar, esconderse, buscar, encontrar
f | Hacer la compra | | supermercado, carro, lista, pagar
f | Lavarse las manos | | jabón, grifo, agua, frotar
f | Hacer la cama | | sábanas, almohada, estirar, colcha
f | Sacar al perro | | correa, paseo, calle, caca
f | Pintar las uñas | | esmalte, pintauñas, manos, color
f | Maquillarse | | cara, pintalabios, rímel, espejo
f | Afeitarse | | barba, cuchilla, espuma, cara
f | Tocar la guitarra | | cuerdas, rasguear, acordes, música
f | Tocar el piano | | teclas, música, dedos, notas
f | Hacer fotos | | cámara, foto, posar, móvil
f | Hablar por teléfono | | llamar, móvil, oreja, hola
f | Remar | | barca, remos, agua, río
f | Jugar a las cartas | | baraja, partida, repartir, naipes
f | Atarse los cordones | | zapatos, lazo, nudo, zapatillas
f | Ponerse los calcetines | | pies, par, vestirse, tobillos
f | Abrir un regalo | | papel, lazo, cumpleaños, sorpresa
f | Soplar las velas | | cumpleaños, tarta, deseo, fuego
f | Hacer pompas de jabón | | burbujas, soplar, aro, explotar
f | Volar una cometa | | viento, hilo, cielo, playa
f | Hacer un muñeco de nieve | | zanahoria, bolas, invierno, bufanda
f | Comer espaguetis | | pasta, tenedor, enrollar, tomate
f | Lanzar una pelota | | tirar, brazo, coger, juego
f | Tropezar | | caerse, pie, piedra, despiste
f | Gatear | | bebé, rodillas, suelo, manos
f | Tender la ropa | | pinzas, cuerda, colgar, secar
f | Regar las plantas | | regadera, agua, flores, maceta
m | Hacer malabares | | pelotas, circo, lanzar, equilibrio
m | Meditar | | yoga, calma, respirar, ojos cerrados
m | Hacer yoga | | posturas, esterilla, estirar, respirar
m | Hacer flexiones | | brazos, suelo, gimnasio, ejercicio
m | Hacer abdominales | | barriga, gimnasio, tumbado, ejercicio
m | Levantar pesas | | gimnasio, músculos, mancuernas, fuerza
m | Hacer surf | | olas, tabla, mar, equilibrio
m | Esquiar | | nieve, bastones, montaña, pista
m | Tejer | | agujas, lana, punto, bufanda
m | Coser un botón | | aguja, hilo, camisa, agujero
m | Planchar | | ropa, arrugas, plancha, tabla
m | Cambiar un pañal | | bebé, caca, toallitas, limpiar
m | Dar de comer a un bebé | | cuchara, papilla, avión, babero
m | Hacer una tortilla | | huevos, patatas, sartén, darle la vuelta
m | Batir huevos | | tenedor, bol, clara, yema
m | Pelar una naranja | | cáscara, dedos, gajos, fruta
m | Cortar cebolla | | llorar, cuchillo, tabla, cocina
m | Hacer un pastel | | horno, harina, molde, receta
m | Poner la mesa | | mantel, platos, cubiertos, comer
m | Tirar los dados | | parchís, suerte, lanzar, números
m | Hacer un puzle | | piezas, encajar, imagen, rompecabezas
m | Jugar al ajedrez | | tablero, peones, rey, jaque
m | Cavar un hoyo | | pala, tierra, agujero, jardín
m | Cortar el césped | | cortacésped, jardín, hierba, verde
m | Pintar una pared | | rodillo, brocha, pintura, color
m | Clavar un clavo | | martillo, golpear, madera, pared
m | Cambiar una rueda | | gato, coche, pinchazo, tornillos
m | Hacer autostop | | dedo, carretera, coche, pulgar
m | Montar a caballo | | jinete, silla, galope, riendas
m | Ordeñar una vaca | | leche, cubo, ubre, granja
m | Subir una escalera mecánica | | centro comercial, peldaños, moverse, metro
m | Esperar el autobús | | parada, horario, impaciente, reloj
m | Hacer cola | | esperar, fila, turno, paciencia
m | Buscar las llaves | | perdidas, bolsillos, puerta, nerviosos
m | Hacer zapping | | mando, canales, tele, aburrido
m | Hacerse un selfi | | móvil, foto, pose, morritos
m | Sacudir una alfombra | | polvo, balcón, golpear, limpiar
m | Inflar un globo | | soplar, aire, fiesta, explotar
m | Pedir un taxi | | brazo, calle, levantar, coche
m | Ir en metro | | vagón, barra, andén, estaciones
m | Hacer el pino | | cabeza abajo, manos, piernas arriba, equilibrio
m | Hacer la croqueta | | rodar, suelo, cuerpo, tumbado
m | Dar volteretas | | rodar, suelo, gimnasia, cabeza
m | Tocar la batería | | baquetas, platillos, ritmo, golpear
d | Dirigir una orquesta | | batuta, músicos, brazos, concierto
d | Domar un león | | látigo, circo, silla, jaula
d | Desactivar una bomba | | cable rojo, cuenta atrás, tensión, cortar
d | Atracar un banco | t | pasamontañas, dinero, pistola, ladrón
d | Pilotar un avión | | cabina, despegar, mandos, aterrizar
d | Hacer un trasplante | | cirujano, órgano, quirófano, operar
d | Escalar el Everest | | montaña, cumbre, oxígeno, nieve
d | Hacer paracaidismo | | saltar, avión, caer, abrir
d | Buscar oro en un río | | batea, pepitas, agua, colar
d | Esquivar balas a cámara lenta | | Matrix, espalda, lento, Neo
d | Andar por la Luna | | astronauta, gravedad, saltitos, casco
d | Tocar el arpa | | cuerdas, ángel, dedos, grande
d | Hacer de estatua viviente | | calle, quieto, moneda, inmóvil
d | Lanzar un boomerang | | volver, Australia, curva, coger
d | Domesticar un dragón | | fuego, alas, cabalgar, entrenar
d | Ser abducido por extraterrestres | | ovni, nave, rayo, marcianos
d | Caminar por la cuerda floja | | equilibrio, circo, brazos, altura
d | Hacer un castell | es | torre humana, Cataluña, subir, anxaneta
d | Correr delante de los toros | es t | San Fermín, Pamplona, encierro, pañuelo
d | Tirar tomates en La Tomatina | es | Buñol, fiesta, rojo, agosto
d | Torear | es t | capote, toro, plaza, traje de luces
d | Escanciar sidra | es t | Asturias, botella, vaso, altura
d | Bailar una muñeira | es | Galicia, gaita, baile, saltos
d | Hacer surf en una ola gigante | | Nazaré, tabla, enorme, mar
d | Cruzar un río saltando piedras | | equilibrio, mojarse, rocas, orilla
d | Sacar una espada de una piedra | | Excalibur, rey Arturo, tirar, roca
d | Montar un mueble de IKEA | | instrucciones, tornillos, llave Allen, sueco
d | Desenredar unos auriculares | | cables, nudos, paciencia, bolsillo
d | Hacer una videollamada | | cámara, ordenador, pantalla, se te congela
d | Hacer la declaración de la renta | | Hacienda, impuestos, borrador, devolver
d | Pasar la ITV | | coche, revisión, inspección, pegatina
d | Quedarse sin batería | | móvil, cargador, apagado, rojo
d | Intentar abrir un bote | | tapa, fuerza, cocina, girar
d | Pisar una pieza de Lego | | dolor, pie, suelo, juguete
d | Despertarse tarde | | despertador, prisa, sueño, llegar tarde
d | Buscar wifi | | móvil, señal, contraseña, internet
d | Quemarse con la sopa | | caliente, lengua, soplar, cuchara
d | Perder el autobús | | correr, parada, tarde, ver irse
d | Montar una tienda de campaña | | camping, varillas, piquetas, lona
d | Encender una barbacoa | | carbón, fuego, soplar, carne
d | Hacer un nudo de corbata | | cuello, camisa, vuelta, formal
d | Romper una piñata | | palo, ojos vendados, caramelos, golpear
f | Andar de puntillas |  | silencio, pies, despacio, dedos
f | Jugar a la rayuela |  | tiza, saltar, cuadros, piedra
f | Jugar al pilla pilla |  | correr, tocar, perseguir, la llevas
f | Jugar a las sillas |  | música, sentarse, quitar, quedarse sin
f | Jugar al fútbol |  | balón, gol, patear, equipo
f | Botar una pelota |  | rebotar, suelo, baloncesto, mano
f | Encestar |  | canasta, baloncesto, tiro, aro
f | Chutar |  | balón, pierna, gol, patada
f | Columpiarse |  | columpio, parque, balancear, alto
f | Tirarse por el tobogán |  | parque, deslizar, bajar, niños
f | Trepar a un árbol |  | ramas, subir, tronco, hojas
f | Bucear |  | agua, aguantar la respiración, gafas, fondo
f | Tirarse de cabeza |  | piscina, salto, manos, agua
f | Secarse con la toalla |  | baño, mojado, frotar, ducha
f | Vestirse |  | ropa, ponerse, mañana, armario
f | Ponerse el abrigo |  | frío, mangas, salir, chaqueta
f | Abrocharse la camisa |  | botones, cerrar, ojales, vestirse
f | Subir la cremallera |  | cerrar, chaqueta, tirar, pantalón
f | Mirarse al espejo |  | reflejo, cara, peinarse, guapo
f | Lavarse la cara |  | agua, jabón, mañana, toalla
f | Sonarse la nariz |  | pañuelo, mocos, resfriado, soplar
f | Rascarse |  | picor, uñas, piel, mosquito
f | Estirarse |  | brazos, despertarse, bostezo, músculos
f | Despertarse |  | mañana, despertador, abrir los ojos, cama
f | Poner el despertador |  | hora, alarma, móvil, dormir
f | Apagar la luz |  | interruptor, oscuro, noche, dormir
f | Llamar al timbre |  | puerta, ding dong, casa, visita
f | Comer palomitas |  | cine, maíz, bol, película
f | Morder una manzana |  | fruta, dientes, crujir, roja
f | Beber con pajita |  | sorber, vaso, refresco, tubo
f | Brindar |  | copas, chin chin, celebrar, levantar
f | Servir agua |  | jarra, vaso, echar, mesa
f | Cortar el pan |  | cuchillo, barra, rebanadas, cocina
f | Untar mantequilla |  | tostada, cuchillo, desayuno, pan
f | Hacer un bocadillo |  | pan, jamón, abrir, merienda
f | Freír un huevo |  | sartén, aceite, yema, cocina
f | Hervir agua |  | olla, burbujas, fuego, pasta
f | Remover la sopa |  | cuchara, olla, girar, caldo
f | Probar la comida |  | cuchara, sabor, cocinero, soplar
f | Lavar la ropa |  | lavadora, detergente, sucia, colada
f | Pasar la aspiradora |  | polvo, suelo, ruido, alfombra
f | Fregar el suelo |  | fregona, cubo, agua, mojado
f | Limpiar los cristales |  | ventana, trapo, brillar, spray
f | Quitar el polvo |  | trapo, muebles, plumero, limpiar
f | Sacar la basura |  | bolsa, contenedor, tirar, noche
f | Doblar la ropa |  | camisetas, ordenar, armario, plegar
m | Hacer una mudanza |  | cajas, piso nuevo, cargar, camión
m | Montar en globo |  | aerostático, cesta, volar, fuego
m | Remar en canoa |  | río, pala, barca, agua
m | Navegar en velero |  | viento, vela, mar, barco
m | Hacer windsurf |  | tabla, vela, viento, olas
m | Hacer snowboard |  | tabla, nieve, montaña, deslizarse
m | Lanzar bolas de nieve |  | guerra, invierno, tirar
m | Tirarse en trineo |  | nieve, bajar, cuesta, deslizar
m | Encender una hoguera |  | fuego, leña, campamento, cerillas
m | Asar castañas |  | otoño, fuego, castañera, calientes
m | Ordenar el armario |  | ropa, perchas, cajones, colocar
m | Colgar un cuadro |  | clavo, martillo, pared, recto
m | Cambiar una bombilla |  | lámpara, enroscar, luz, escalera
m | Desatascar el fregadero |  | desatascador, tubería, agua, cocina
m | Arreglar un pinchazo |  | rueda, bici, parche, aire
m | Repostar gasolina |  | gasolinera, coche, surtidor, llenar
m | Aparcar en batería |  | coche, plaza, maniobra, marcha atrás
m | Aparcar en paralelo |  | coche, hueco, maniobra, bordillo
m | Hacer un adelantamiento |  | coche, carretera, pasar, intermitente
m | Poner el intermitente |  | coche, girar, avisar, luz
m | Abrocharse el cinturón |  | coche, seguridad, clic, avión
m | Pagar con tarjeta |  | datáfono, pin, compra, contactless
m | Sacar dinero del cajero |  | billetes, tarjeta, banco, pin
m | Contar dinero |  | billetes, monedas, sumar, cartera
m | Regatear |  | precio, mercadillo, rebajar, vendedor
m | Probarse ropa |  | probador, talla, espejo, tienda
m | Envolver un regalo |  | papel, celo, lazo, sorpresa
m | Escribir una carta |  | papel, sobre, querido, sello
m | Firmar |  | nombre, bolígrafo, documento, rúbrica
m | Hacer un examen |  | preguntas, nervios, folio, nota
m | Levantar la mano en clase |  | preguntar, profesor, turno, brazo
m | Hacer los deberes |  | colegio, casa, cuaderno, tareas
m | Sacar punta |  | lápiz, sacapuntas, afilar, virutas
m | Hacer un avión de papel |  | doblar, folio, lanzar, volar
m | Jugar a la gallinita ciega |  | ojos vendados, buscar, tocar, adivinar
m | Jugar al teléfono escacharrado |  | susurrar, oído, mensaje, cambiar
m | Jugar a piedra, papel o tijera |  | manos, ganar, tres, elegir
m | Barajar las cartas |  | mezclar, mazo, juego, repartir
m | Hacer trampas |  | engañar, juego, ganar, tramposo
m | Lanzar una moneda |  | cara o cruz, aire, suerte, girar
m | Pedir un deseo |  | estrella fugaz, velas, cerrar los ojos, soplar
m | Contar ovejas |  | dormir, insomnio, saltar valla, números
m | Roncar |  | dormir, ruido, nariz, molestar
m | Hablar en sueños |  | dormir, murmurar, noche, sonámbulo
m | Madrugar |  | temprano, despertador, mañana, sueño
m | Trasnochar |  | tarde, noche, sin dormir, fiesta
m | Echarse la siesta |  | sofá, tarde, dormir, después de comer
d | Hacer origami |  | papel, doblar, Japón, figuras
d | Hacer ganchillo |  | aguja, lana, tejer, abuela
d | Tallar madera |  | navaja, figura, artesano, virutas
d | Hacer cerámica en el torno |  | barro, girar, manos, vasija
d | Soplar vidrio |  | horno, caña, fundido, artesano
d | Herrar un caballo |  | herradura, casco, clavos, herrero
d | Esquilar una oveja |  | lana, tijeras, granja, cortar
d | Vendimiar |  | uvas, cortar, cesto, viñedo
d | Pisar uvas |  | vino, pies, lagar, morado
d | Recoger aceitunas |  | olivo, vara, red, campo
d | Amasar pan |  | harina, masa, manos, horno
d | Hacer churros |  | masa, churrera, freír, aceite
d | Hacer sushi |  | arroz, alga, enrollar, pescado
d | Abrir una ostra |  | cuchillo, concha, perla, marisco
d | Pelar gambas |  | marisco, cabeza, cáscara, manos
d | Descorchar una botella |  | sacacorchos, vino, tapón, ¡pop!
d | Echar el ancla |  | barco, fondear, cadena, puerto
d | Izar una bandera |  | mástil, subir, cuerda, ondear
d | Hacer un nudo marinero |  | cuerda, barco, atar, lazo
d | Remendar una red |  | pescador, hilo, agujeros, puerto
d | Hacer un placaje |  | rugby, derribar, agarrar, jugador
d | Hacer un mate |  | baloncesto, aro, saltar, colgarse
d | Hacer un saque de honor |  | partido, famoso, inicial, ceremonia
d | Dar el pésame |  | funeral, condolencias, abrazo, lo siento
d | Pedir la mano |  | anillo, rodilla, boda, propuesta
d | Cortar la tarta nupcial |  | boda, novios, cuchillo, pisos
d | Lanzar el ramo |  | boda, novia, flores, solteras
d | Hacer una reverencia |  | inclinarse, rey, saludo, respeto
d | Hacer un juramento |  | mano, prometer, solemne, Biblia
d | Dar un discurso |  | atril, público, micrófono, hablar
d | Hacer una entrevista de trabajo |  | candidato, preguntas, currículum, nervios
d | Teletrabajar |  | casa, ordenador, reunión, pijama
d | Hacer una presentación |  | diapositivas, público, proyector, puntero
d | Escribir en la pizarra |  | tiza, profesor, borrar, clase
d | Hacer una foto de grupo |  | todos juntos, patata, posar, cámara
`
};
