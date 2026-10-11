// Profesiones. Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
export default {
  id: 'jobs', name: 'Profesiones', icon: 'case', modes: 'DMP', ages: 'kids',
  cards: `
f | Bombero | | fuego, manguera, apagar, camión
f | Médico | | hospital, enfermo, bata, curar
f | Profesor | | colegio, alumnos, enseñar, pizarra
f | Cocinero | | cocina, gorro, recetas, restaurante
f | Policía | | ladrones, comisaría, placa, sirena
f | Peluquero | | pelo, cortar, tijeras, peinado
f | Astronauta | | espacio, cohete, Luna, casco
f | Dentista | | dientes, boca, caries, sillón
f | Cartero | | cartas, buzón, correos, repartir
f | Cantante | | cantar, micrófono, canciones, escenario
f | Panadero | | pan, horno, harina, barra
f | Piloto de avión | | volar, cabina, aeropuerto, comandante
f | Enfermera | | hospital, inyección, cuidar, pacientes
f | Pescador | | caña, peces, barco, red
f | Granjero | | granja, animales, tractor, campo
f | Pintor de cuadros | | pincel, lienzo, cuadro, museo
f | Futbolista | | balón, gol, equipo, campo
f | Mago | | trucos, chistera, conejo, varita
f | Payaso | | circo, nariz roja, reír, zapatones
f | Camarero | | bar, bandeja, servir, propina
f | Taxista | | taxi, conducir, carrera, bajada de bandera
f | Conductor de autobús | | parada, billete, volante, línea
f | Fontanero | | tuberías, grifo, agua, fugas
f | Albañil | | ladrillos, obra, casco, cemento
f | Mecánico | | coches, taller, llave inglesa, motor
f | Veterinario | | animales, mascotas, curar, clínica
f | Bailarina | | bailar, ballet, tutú, puntas
f | Juez | | martillo, juicio, toga, sentencia
f | Socorrista | | playa, piscina, salvar, silbato
f | Jardinero | | plantas, flores, regar, jardín
f | Carnicero | | carne, cuchillo, mostrador, filete
m | Arqueólogo | | excavar, restos, huesos, antigüedades
m | Electricista | | cables, luz, enchufes, corriente
m | Fotógrafo | | cámara, fotos, flash, retratos
m | Carpintero | | madera, sierra, muebles, martillo
m | Director de orquesta | | batuta, músicos, dirigir, concierto
m | Periodista | | noticias, periódico, entrevista, micrófono
m | Abogado | | juicio, defender, leyes, cliente
m | Arquitecto | | planos, edificios, diseñar, casas
m | Farmacéutico | | farmacia, medicinas, receta, cruz verde
m | Cirujano | | operar, bisturí, quirófano, mascarilla
m | Científico | | laboratorio, experimentos, bata, probeta
m | Detective | | investigar, lupa, pistas, misterio
m | Torero | t es | toro, capote, plaza, traje de luces
m | Cajero de supermercado | | caja, cobrar, tiques, compra
m | Repartidor | | paquetes, entregar, moto, pedidos
m | Barrendero | | barrer, calle, escoba, limpieza
m | Basurero | | basura, camión, contenedores, recoger
m | Azafata de vuelo | | avión, pasajeros, chaleco, carrito
m | Militar | | ejército, uniforme, soldado, cuartel
m | Programador | | ordenador, código, software, teclado
m | Psicólogo | | mente, terapia, diván, problemas
m | Chef pastelero | | tartas, dulces, repostería, horno
m | Escritor | | libros, novela, escribir, autor
m | Actor | | películas, teatro, papel, escenario
m | Agricultor | | campo, cosecha, tractor, sembrar
m | Pastor | | ovejas, rebaño, perro, cayado
m | Domador de leones | | circo, látigo, fieras, jaula
m | Guía turístico | | turistas, visita, paraguas, explicar
m | Guardia de seguridad | | vigilar, uniforme, entrada, porra
m | Cerrajero | | llaves, cerraduras, abrir, puerta
d | Apicultor | | abejas, miel, panales, traje
d | Luthier | | guitarras, violines, construir, madera
d | Intérprete de lengua de signos | | manos, sordos, gestos, traducir
d | Enólogo | t | vino, catar, bodega, uvas
d | Funambulista | | cuerda floja, equilibrio, circo, caminar
d | Restaurador de arte | | cuadros, restaurar, museo, pinceles
d | Taxidermista | | disecar, animales, rellenar, cazadores
d | Herrero | | hierro, yunque, forja, herraduras
d | Sommelier | t | vino, restaurante, catar, maridaje
d | Cristalero | | ventanas, cristales, cortar, vidrio
d | Afinador de pianos | | piano, notas, cuerdas, oído
d | Relojero | | relojes, arreglar, lupa, engranajes
d | Deshollinador | | chimeneas, hollín, cepillo, tejado
d | Sereno | es | llaves, noche, portales, chuzo
d | Afilador | es | cuchillos, silbato, bicicleta, piedra
d | Herrador | | caballos, herraduras, cascos, clavos
d | Zapatero remendón | | zapatos, arreglar, suelas, tacones
d | Calígrafo | | letras, pluma, escritura, bonita
d | Escultor | | estatua, cincel, mármol, esculpir
d | Orfebre | | joyas, oro, plata, taller
d | Meteorólogo | | tiempo, lluvia, previsión, mapas
d | Sismólogo | | terremotos, sismógrafo, temblores, medir
d | Paleontólogo | | fósiles, dinosaurios, huesos, excavar
d | Astrónomo | | estrellas, telescopio, planetas, observatorio
d | Notario | | firmar, escrituras, fe pública, documentos
d | Controlador aéreo | | torre, aviones, radar, aeropuerto
d | Buzo | | bucear, escafandra, mar, profundidad
d | Especialista de cine | | escenas peligrosas, dobles, caídas, actor
d | Ventrílocuo | | muñeco, voz, hablar, boca cerrada
d | Mimo | | gestos, cara blanca, silencio, calle
d | Tramoyista | | teatro, decorados, escenario, cuerdas
f | Pirata | M | barco, parche, tesoro, loro
f | Vaquero | M | caballo, sombrero, lazo, oeste
f | Princesa | M | corona, castillo, vestido, príncipe
f | Rey | M | corona, trono, reino, cetro
f | Caballero medieval | M | armadura, espada, castillo, escudo
f | Ninja | M | negro, Japón, sigilo, estrellas
f | Youtuber famoso | M | vídeos, suscriptores, cámara, canal
f | Cocinera de comedor | M | bandeja, cazo, servir, colegio
f | Pescadera | M | pescado, hielo, mercado, cuchillo
f | Frutero | M | fruta, mercado, peso, manzanas
f | Quiosquero | M | periódicos, revistas, chucherías, puesto
f | Peluquera canina | M | perro, cortar, pelo, lavar
f | Monitor de campamento | M | niños, excursiones, verano, juegos
f | Entrenador de fútbol | M | equipo, banquillo, silbato, táctica
f | Árbitro | M | silbato, tarjeta, partido, falta
f | Cantante de ópera | M | voz, aguda, teatro, cantar
f | Malabarista | M | pelotas, circo, lanzar, equilibrio
f | Domador de caballos | M | rienda, montar, salvaje, establo
f | Leñador | M | hacha, árboles, bosque, cortar
f | Minero | M | casco, linterna, mina, carbón
m | Socorrista de montaña | M | rescate, helicóptero, nieve, perro
m | Guardia civil | M es | tricornio, carretera, verde, cuartel
m | Guarda forestal | M | bosque, incendios, vigilar, monte
m | Camionero | M | camión, carretera, kilómetros, cabina
m | Limpiacristales de rascacielos | M | cuerdas, altura, ventanas, edificio
m | Fisioterapeuta | M | masaje, lesión, músculos, rehabilitación
m | Logopeda | M | hablar, pronunciar, voz, terapia
m | Mensajero en bici | M | pedalear, paquetes, ciudad, mochila
m | Pinchadiscos | M | DJ, música, discoteca, platos
m | Influencer de cocina | M | recetas, redes, vídeos, seguidores
d | Pregonero | M | pueblo, anunciar, trompeta, bando
d | Picapedrero | M | piedra, martillo, cantera, cincel
d | Trilero | M | cubiletes, bolita, calle, trampa
d | Sereno de barrio | M es | llaves, noche, «¡sereno!», portal
`
};
