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
`
};
