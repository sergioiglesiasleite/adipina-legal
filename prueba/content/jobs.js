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
f | Maestra de infantil | M | niños, colegio, enseñar, pequeños
f | Pintor de brocha gorda | M | paredes, rodillo, pintura, casa
f | Pediatra | M | niños, médico, consulta, vacunas
f | Oculista | M | ojos, gafas, vista, letras
f | Portero de discoteca | M | puerta, entrada, lista, grande
f | Recepcionista | M | hotel, mostrador, teléfono, atender
f | Secretaria | M | oficina, agenda, llamadas, jefe
f | Dependienta | M | tienda, vender, probador, ropa
f | Heladero | M | helados, carrito, bolas, verano
f | Churrero | M es | churros, freír, porras, chocolate
f | Pizzero | M | pizza, horno, masa, girar
f | Repostero | M | pasteles, tartas, dulces, horno
f | Trapecista | M | circo, columpio, volar, red
f | Conductor de tren | M | locomotora, vías, maquinista, estación
f | Capitán de barco | M | timón, mar, gorra, tripulación
f | Marinero | M | barco, mar, nudos, cubierta
f | Soldado | M | ejército, uniforme, desfile, casco
f | Explorador | M | aventura, mapa, selva, brújula
f | Cantante de rock | M | guitarra, micrófono, escenario, melena
f | Batería (músico) | M | tambores, baquetas, ritmo, grupo
f | Guitarrista | M | guitarra, cuerdas, grupo, púa
f | Pianista | M | piano, teclas, concierto, partitura
f | Presentador del telediario | M | noticias, televisión, mesa, buenas noches
f | Modelo | M | pasarela, ropa, posar, desfile
f | Diseñador de moda | M | ropa, desfile, telas, bocetos
f | Maquillador | M | maquillaje, brochas, cara, actores
f | Costurera | M | coser, aguja, hilo, máquina
f | Sastre | M | trajes, medir, cinta métrica, a medida
f | Lechero | M | leche, vacas, botellas, reparto
f | Niñera | M | cuidar, niños, canguro, padres
f | Monitor de natación | M | piscina, nadar, enseñar, silbato
f | Profesor de autoescuela | M | coche, carné, pedales, examen
f | Entrenador personal | M | gimnasio, ejercicios, rutina, músculos
f | Profesora de yoga | M | posturas, respirar, esterilla, relajación
m | Ingeniero | M | puentes, cálculos, máquinas, proyectos
m | Informático | M | ordenadores, programas, arreglar, redes
m | Diseñador gráfico | M | logotipos, ordenador, colores, carteles
m | Traductor | M | idiomas, textos, intérprete, palabras
m | Bibliotecario | M | libros, biblioteca, silencio, préstamo
m | Investigador | M | laboratorio, ciencia, experimentos, datos
m | Biólogo | M | seres vivos, microscopio, naturaleza, ciencia
m | Químico | M | laboratorio, tubos de ensayo, fórmulas, reacciones
m | Geólogo | M | rocas, minerales, tierra, martillo
m | Oceanógrafo | M | océano, mar, barco, profundidades
m | Ornitólogo | M | pájaros, prismáticos, aves, observar
m | Economista | M | dinero, mercados, inflación, números
m | Contable | M | cuentas, números, facturas, empresa
m | Banquero | M | banco, dinero, préstamos, traje
m | Agente inmobiliario | M | pisos, vender, alquilar, casas
m | Policía local | M | tráfico, multas, ciudad, municipal
m | Guardaespaldas | M | proteger, famoso, gafas oscuras, pinganillo
m | Espía | M | secreto, agente, misión, disfraz
m | Forense | M | autopsia, cadáver, pruebas, laboratorio
m | Enterrador | M | cementerio, tumba, pala, ataúd
m | Cura | M | iglesia, misa, sotana, parroquia
m | Monja | M | convento, hábito, rezar, toca
m | Alcalde | M | ayuntamiento, pueblo, bastón, pleno
m | Embajador | M | país, embajada, diplomático, extranjero
m | Piloto de Fórmula 1 | M | coche, carreras, casco, circuito
m | Jockey | M | caballo, carreras, pequeño, látigo
m | Crupier | M | casino, cartas, ruleta, fichas
m | Barman | M | cócteles, barra, coctelera, copas
m | Camarera de piso | M | hotel, habitaciones, limpiar, carro
m | Botones | M | hotel, maletas, uniforme, ascensor
m | Aparcacoches | M | coches, llaves, hotel, aparcar
m | Gasolinero | M | gasolina, surtidor, llenar, coches
m | Estibador | M | puerto, contenedores, barcos, carga
m | Marisquera | M es | marisco, playa, almejas, Galicia
m | Viticultor | M | viñas, uvas, vino, vendimia
m | Ganadero | M | vacas, ganado, granja, campo
m | Esquilador | M | ovejas, lana, cortar, tijeras
m | Quesero | M | queso, leche, curar, moldes
m | Alfarero | M | barro, torno, vasijas, horno
m | Vidriero | M | vidrio, soplar, horno, vasos
m | Tapicero | M | sofás, telas, muebles, grapas
m | Ebanista | M | muebles, madera fina, tallar, barnizar
d | Actuario |  | seguros, riesgos, estadística, cálculos
d | Auditor |  | cuentas, revisar, empresas, informe
d | Procurador |  | tribunales, abogado, juzgado, trámites
d | Registrador de la propiedad |  | registro, fincas, inscribir
d | Tasador |  | valorar, precio, viviendas, informe
d | Perito |  | informe, experto, seguros, juicio
d | Grafólogo |  | letra, escritura, personalidad, firma
d | Criptógrafo |  | códigos, cifrar, mensajes secretos, claves
d | Analista de datos |  | estadística, gráficos, ordenador
d | Community manager |  | redes sociales, publicaciones, marca, seguidores
d | Diseñador de videojuegos |  | niveles, personajes, jugar, programar
d | Animador 3D |  | animación, personajes, ordenador, Pixar
d | Doblador | M | voces, películas, estudio, micrófono
d | Guionista |  | escribir, películas, series, diálogos
d | Montador de cine |  | editar, cortes, película, escenas
d | Productor de cine |  | dinero, película, rodaje, financiar
d | Director de cine | M | rodaje, acción, claqueta, actores
d | Iluminador |  | focos, luz, escenario, rodaje
d | Escenógrafo |  | decorados, teatro, escenario, diseño
d | Apuntador |  | teatro, susurrar, texto, concha
d | Acomodador | M | cine, linterna, butacas, entradas
d | Taquillero |  | entradas, ventanilla, cine, vender
d | Cuidador de zoo | M | animales, zoológico, alimentar, jaulas
d | Adiestrador de perros | M | órdenes, premios, enseñar
d | Halconero | M | halcones, cetrería, guante, aves
d | Farero | M | faro, luz, costa, barcos
d | Sherpa |  | Everest, montaña, guía, Nepal
d | Barquero | M | barca, remar, río, pasajeros
d | Gondolero | M | Venecia, góndola, remo, cantar
d | Vendedor ambulante | M | calle, mercadillo, puesto, gritar
d | Feriante |  | feria, atracciones, caseta, viajar
d | Titiritero | M | marionetas, hilos, teatro, muñecos
d | Cuentacuentos | M | cuentos, niños, narrar, biblioteca
d | Perfumista | M | perfumes, olores, frascos, nariz
d | Catador | M | probar, sabores, vino, aceite
d | Cortador de jamón | M es | cuchillo, lonchas, bodas
d | Pocero |  | alcantarillas, tuberías, desatascar, calle
d | Butanero | M es | bombonas, butano, reparto, naranja
d | Repartidor de periódicos | M | bicicleta, buzón, mañana
d | Encuadernador |  | libros, tapas, coser, pegar
d | Impresor |  | imprenta, papel, tinta, máquinas
d | Cartógrafo |  | mapas, territorio, dibujar, medir
d | Topógrafo |  | medir, terreno, trípode, planos
`
};
