// Transporte y vehículos. Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
export default {
  id: 'transport', name: 'Transporte', icon: 'arrow', modes: 'DMP', ages: 'kids',
  cards: `
f | Coche | | ruedas, conducir, volante, garaje
f | Avión | | volar, aeropuerto, alas, piloto
f | Barco | | mar, navegar, puerto, capitán
f | Tren | | vías, estación, vagones, locomotora
f | Autobús | | parada, conductor, billete, pasajeros
f | Moto | | dos ruedas, casco, motor, motorista
f | Patinete | | ruedas, manillar, impulsar, eléctrico
f | Helicóptero | | hélices, volar, aspas, rescate
f | Camión | | grande, carga, camionero, remolque
f | Tractor | | campo, granja, agricultor, ruedas grandes
f | Taxi | | taxímetro, conductor, luz verde, carrera
f | Ambulancia | | sirena, hospital, urgencias, heridos
f | Camión de bomberos | | fuego, rojo, escalera, sirena
f | Coche de policía | | sirena, agentes, patrulla, luces
f | Metro | | subterráneo, andén, vagón, líneas
f | Tranvía | | vías, ciudad, eléctrico, catenaria
f | Submarino | | bajo el agua, periscopio, sumergirse, amarillo
f | Cohete | | espacio, despegar, astronauta, cuenta atrás
f | Globo aerostático | | aire caliente, cesta, volar, fuego
f | Velero | | vela, viento, mar, navegar
f | Canoa | | remo, río, pequeña, indios
f | Barca | | remos, lago, pequeña, remar
f | Monopatín | | tabla, ruedas, skate, trucos
f | Patines | | ruedas, pies, deslizarse, rodillera
f | Caravana | | casa, remolque, camping, vacaciones
f | Grúa | | levantar, gancho, obra, remolcar
f | Excavadora | | pala, tierra, obra, cavar
f | Carrito de bebé | | empujar, pasear, ruedas, cochecito
f | Trineo | | nieve, deslizarse, perros, Papá Noel
f | Teleférico | | cabina, cable, montaña, subir
f | Furgoneta | | reparto, carga, puertas, mudanza
f | Coche de carreras | | rápido, circuito, piloto, Fórmula 1
f | Barco pirata | | bandera, calavera, tesoro, Garfio
f | Triciclo | | tres ruedas, niños, pedales, pequeño
m | Funicular | | vías, cuesta, cable, subir
m | Ferri | | barco, coches, isla, travesía
m | Crucero | | barco, vacaciones, gigante, puertos
m | Yate | | lujo, barco, millonario, puerto
m | Moto de agua | | mar, acuática, saltos, velocidad
m | Quad | | cuatro ruedas, campo, barro, moto
m | Limusina | | larga, lujo, chófer, famosos
m | Autocaravana | | casa con ruedas, camping, viajar, dormir
m | Descapotable | | sin techo, coche, pelo al viento, verano
m | Kart | | carreras, pequeño, circuito, volante
m | Tándem | | bicicleta, dos personas, pedalear, juntos
m | Monociclo | | una rueda, circo, equilibrio, pedales
m | Avioneta | | pequeña, hélice, volar, piloto
m | Hidroavión | | agua, aterrizar, incendios, flotadores
m | Ala delta | | volar, montaña, triángulo, planear
m | Góndola | | Venecia, gondolero, canal, remo
m | Carruaje | | caballos, princesa, ruedas, cochero
m | Diligencia | | Oeste, caballos, pasajeros, asalto
m | Tuk-tuk | | Tailandia, tres ruedas, taxi, moto
m | Hormigonera | | cemento, girar, obra, camión
m | Camión de la basura | | contenedores, noche, reciclar, recoger
m | Barredora | | limpiar, calle, cepillos, agua
m | Autobús de dos pisos | | Londres, rojo, turístico, arriba
m | Telesilla | | esquí, montaña, asientos, cable
m | Galeón | | velas, cañones, piratas, oro
m | Carabela | | Colón, velas, descubrimiento, Pinta
m | Portaaviones | | aviones, barco, militar, pista
m | Rompehielos | | hielo, polo, barco, romper
m | Remolcador | | puerto, empujar, barcos, pequeño
m | Transbordador espacial | | despegar, NASA, alas, astronautas
m | AVE | es | alta velocidad, Madrid, Sevilla, tren
m | Seiscientos | es 70s | SEAT, coche, pequeño, familia
d | Zepelín | | dirigible, globo, Hindenburg, alargado
d | Planeador | | sin motor, volar, alas, corrientes
d | Ultraligero | | avión, pequeño, ligero, volar
d | Aerodeslizador | | colchón de aire, agua, tierra, hovercraft
d | Segway | | dos ruedas, equilibrio, turistas, eléctrico
d | Rickshaw | | India, tirar, carro, ciclista
d | Calesa | | caballo, Sevilla, paseo, cochero
d | Batmóvil | | Batman, negro, coche, murciélago
d | DeLorean | | Regreso al futuro, puertas, viajar en el tiempo, Doc
d | Volkswagen Escarabajo | | Herbie, redondo, alemán, clásico
d | Vespa | | moto, italiana, Roma, clásica
d | Cercanías | es | tren, Renfe, ciudad, trabajo
d | Talgo | es | tren, español, articulado, Renfe
d | Orient Express | | tren, lujo, Agatha Christie, Estambul
d | Concorde | | supersónico, avión, Londres, París
d | Dragster | | carreras, aceleración, paracaídas, rueda grande
d | Monster truck | | ruedas gigantes, aplastar coches, espectáculo, camión
d | Locomotora de vapor | | humo, carbón, chu chu, antigua
d | Draisiana | | bicicleta sin pedales, empujar, antigua, madera
d | Velocípedo | | rueda grande, antiguo, bicicleta, pedales
d | Biplano | | dos alas, antiguo, Barón Rojo, avión
d | Catamarán | | dos cascos, velero, mar, rápido
d | Batiscafo | | sumergible, profundidad, océano, explorar
d | Tren maglev | | levitación, imanes, rápido, Japón
d | Vagoneta de mina | | vías, minero, carbón, túnel
d | Cuádriga | | cuatro caballos, Roma, carrera, Ben-Hur
d | Trirreme | | remos, griegos, guerra, tres filas
d | Junco chino | | velas, barco, China, madera
d | Camión cisterna | | líquido, depósito, gasolina, carretera
d | Mini Cooper | | pequeño, británico, Mr. Bean, coche
d | Sidecar | | moto, cesta, acompañante, lateral
f | Patinete eléctrico | M | ciudad, batería, ruedas, alquilar
f | Barco de vela | D | viento, mar, mástil, navegar
f | Autobús escolar amarillo | D | niños, colegio, Estados Unidos, ruta
f | Carro de caballos | M | tirar, ruedas, antiguo, cochero
f | Ascensor | M | botones, pisos, subir, bajar
f | Escaleras mecánicas | M | subir, centro comercial, peldaños, moverse
f | Cinta transportadora | M | aeropuerto, maletas, moverse, rodar
f | Silla de montar | D | caballo, jinete, estribos, cuero
f | Carretilla | M | rueda, empujar, obra, tierra
m | Bicitaxi | M | pedalear, pasajeros, turistas, ciudad
m | Coche eléctrico | | enchufe, batería, silencioso, cargar
m | Autobús urbano | M | parada, billete, ciudad, línea
m | Tren de alta velocidad | | rápido, AVE, vías, estación
m | Coche fúnebre | | ataúd, entierro, negro, cementerio
m | Coche de autoescuela | M | doble pedal, profesor, examen, L
m | Furgón blindado | D | dinero, banco, seguridad, transporte
m | Camión de mudanzas | M | muebles, cajas, cambiar de casa, cargar
m | Grúa municipal | M | llevarse, coche, multa, depósito
d | Ekranoplano | | avión, mar, efecto suelo, soviético
d | Hyperloop | | tubo, cápsula, velocidad, futuro
d | Tren cremallera | | montaña, pendiente, Montserrat, dientes
d | Batíscafo Trieste | | profundidad, Marianas, inmersión, récord
d | Tranvía de Sóller | es | Mallorca, madera, naranjas, puerto
d | Vaporetto | | Venecia, canales, barco, transporte público
f | Bicicleta de montaña | D | ruedas gordas, monte, pedalear, barro
f | Bicicleta de carreras | D | fina, rápida, manillar curvo, ciclista
f | Bici con ruedines | D | aprender, niños, ruedas pequeñas, equilibrio
f | Bicicleta eléctrica | D | batería, pedalear, motor, ciudad
f | Camión de helados | D | música, verano, ventanilla
f | Furgoneta de reparto | D | paquetes, entregar, repartidor, puerta trasera
f | Moto de policía | D | sirena, agente, casco, persecución
f | Moto de carreras | D | circuito, velocidad, MotoGP, tumbarse
f | Scooter | D | moto pequeña, ciudad, Vespa, asiento
f | Ciclomotor | D | moto pequeña, cincuenta, casco, ruido
f | Coche de choque | D | feria, chocar, pista, antena
f | Autobús turístico | D | dos pisos, sin techo, ciudad, monumentos
f | Autocar | D | viaje, excursión, maletero, carretera
f | Coche de golf | D | eléctrico, campo, palos, pequeño
f | Carrito de la compra | D | supermercado, empujar, ruedas, moneda
f | Avión de pasajeros | D | alas, aeropuerto, despegar
f | Avión de combate | D | caza, militar, rápido, piloto
f | Jet privado | D | lujo, avión pequeño, ricos, viaje
f | Barco de pesca | D | redes, pescadores, puerto, mar
f | Lancha motora | D | rápida, mar, motor, salpicar
f | Barca de remos | D | remar, estanque, madera, lago
f | Balsa | D | troncos, río, flotar, náufrago
f | Petrolero | D | barco grande, petróleo, mar, tanque
f | Buque de carga | D | contenedores, puerto, mercancías, grande
f | Barco de vapor | D | chimenea, río, paletas, Misisipi
f | Tren de mercancías | D | vagones, carga, largo, locomotora
f | Coche cama | D | tren, literas, dormir, noche
f | Vagón restaurante | D | tren, comer, mesas, viaje
f | Tren de juguete | D | vías, regalo, circular, niños
f | Trenecito turístico | D | ciudad, ruedas, vagones, turistas
m | Trolebús | D | autobús eléctrico, cables, ciudad, catenaria
m | Furgoneta camper | D | Volkswagen, surf, viajar, dormir
m | Todoterreno | D | 4x4, campo, barro, ruedas grandes
m | Pick-up | D | caja abierta, camioneta, carga, americana
m | SUV | D | coche grande, alto, familiar, ciudad
m | Utilitario | D | coche pequeño, ciudad, barato, aparcar
m | Coche clásico | D | antiguo, colección, cromado, restaurado
m | Hot rod | D | coche modificado, llamas, motor, americano
m | Lowrider | M | coche, saltar, suspensión, hidráulico
m | Quitanieves | D | nieve, carretera, pala, invierno
m | Cosechadora | D | campo, trigo, cosechar, agricultura
m | Apisonadora | D | asfalto, aplanar, rodillo, obras
m | Carretilla elevadora | D | palés, almacén, horquillas, cargar
m | Bulldozer | D | pala, empujar, tierra, obras
m | Grúa torre | D | obra, alta, construcción, girar
m | Camión volquete | D | tierra, volcar, obras, carga
m | Camión frigorífico | D | frío, alimentos, transportar, refrigerado
m | Tráiler | D | camión, remolque, carretera, largo
m | Papamóvil | D | papa, cristal, saludar, coche blanco
m | Carroza real | D | rey, caballos, dorada, desfile
m | Trineo de perros | D | huskies, nieve, Alaska, tirar
m | Motonieve | D | nieve, moto, esquís, frío
m | Telecabina | D | montaña, cable, cabina, esquí
m | Módulo lunar | D | Apolo, Luna, aterrizar, patas
m | Rover marciano | D | Marte, robot, ruedas, explorar
m | Sonda espacial | D | espacio, explorar, planetas, sin tripulación
m | Cápsula espacial | D | astronautas, reentrada, paracaídas, mar
m | Drone | D | volar, hélices, cámara, mando
m | Autogiro | D | rotor, Juan de la Cierva, aeronave, volar
m | Dirigible | D | globo alargado, flotar, cielo, gas
m | Piragua | D | remo, río, alargada, deporte
m | Barcaza | D | río, plana, carga, canal
m | Bote salvavidas | D | naufragio, rescate, barco, emergencia
m | Lancha de salvamento | D | socorristas, rescate, mar, rápida
d | Fragata | D | barco de guerra, velas, armada, cañones
d | Destructor | D | barco de guerra, armada, rápido, misiles
d | Acorazado | D | barco de guerra, blindado, cañones, grande
d | Goleta | D | velero, dos mástiles, rápido, vela
d | Nao | D | barco, Victoria, Elcano, velas
d | Sampán | D | barca, Asia, río, techo
d | Sumergible | D | submarino pequeño, profundidad, explorar, Titanic
d | Tranvía de San Francisco | D | cable, cuestas, campana, California
d | Metro de Londres |  | Tube, mind the gap, subterráneo
d | Tren bala | D | Japón, Shinkansen, rápido, morro
d | Glacier Express |  | tren, Suiza, Alpes, panorámico
d | Tren de la fresa | es | Madrid, Aranjuez, histórico, vapor
d | Transcantábrico | es | tren de lujo, norte de España, costa, turismo
d | Tren de Sóller | es | Mallorca, madera, histórico, naranjas
d | Puente colgante de Vizcaya | es | transbordador, Portugalete, Getxo, góndola
d | Ecto-1 |  | Cazafantasmas, ambulancia, sirena, coche
d | Mystery Machine |  | Scooby-Doo, furgoneta, flores, pandilla
d | Enterprise |  | Star Trek, nave, capitán Kirk, espacio
d | Nautilus |  | submarino, capitán Nemo, Julio Verne, mar
d | Arca de Noé |  | barco, animales, diluvio, parejas
d | Palanquín |  | silla, porteadores, cargar, noble
d | Carreta de bueyes | D | ruedas de madera, campo, lento
d | Carromato | D | carro cubierto, oeste, caballos, lona
d | Isetta |  | coche burbuja, puerta delantera, pequeño, años 50
d | Biscúter | es | coche pequeño, España, años 50, Paco Martínez Soria
d | Renault 4 | es | cuatro latas, coche, España, clásico
d | Citroën 2CV |  | dos caballos, coche, Francia, clásico
`
};
