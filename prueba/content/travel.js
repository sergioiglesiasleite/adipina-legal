// Viajes y vacaciones. Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
export default {
  id: 'travel', name: 'Viajes y vacaciones', icon: 'case', modes: 'DMP', ages: 'kids',
  cards: `
f | Maleta | D | ropa, ruedas, viaje, equipaje
f | Pasaporte | D | documento, frontera, foto, sello
f | Aeropuerto | DP | aviones, pistas, terminal, vuelo
f | Hotel | DP | habitación, recepción, llave, dormir
f | Camping | DP | tienda, caravana, naturaleza, acampar
f | Saco de dormir | D | acampar, cremallera, tienda, montaña
f | Crema solar | M | sol, piel, quemarse, protección
f | Sombrilla | D | playa, sombra, arena, clavar
f | Flotador | D | agua, piscina, nadar, rosquilla
f | Tumbona | M | playa, piscina, tumbarse, sol
f | Gafas de bucear | D | agua, mar, peces, tubo
f | Postal | D | carta, sello, foto, recuerdo
f | Souvenir | P | recuerdo, tienda, imán, regalo
f | Mapa | D | calles, ruta, perderse, orientarse
f | Hacer la maleta | M | ropa, doblar, viaje, cerrar
f | Sentarse encima de la maleta | M | cerrar, llena, cremallera, apretar
f | Tomar el sol | M | playa, broncearse, tumbarse, moreno
f | Quemarse con el sol | M | rojo, piel, crema, escocer
f | Construir un castillo | M | arena, cubo, pala, playa
f | Saltar las olas | M | mar, agua, playa, espuma
f | Bañarse en el mar | M | agua, playa, nadar, olas
f | Tirarse a la piscina | M | agua, salto, bomba, trampolín
f | Hacer una foto al monumento | M | cámara, turista, viaje, posar
f | Turista | M | cámara, mapa, viaje, gorra
f | Vacaciones de verano | P | julio, agosto, playa, colegio
f | Pueblo de los abuelos | P | verano, vacaciones, fiestas, campo
f | Viaje en coche | M | carretera, maletero, mareo, kilómetros
f | ¿Cuánto falta? | M | viaje, coche, niños, llegar
f | Pedir un helado | M | heladería, sabor, cucurucho, verano
f | Chiringuito | DP | playa, bebidas, sardinas, bar
f | Piscina | DMP | agua, nadar, verano, socorrista
f | Parque acuático | DP | toboganes, agua, piscinas, verano
f | Tobogán de agua | M | deslizarse, piscina, parque acuático, bajar
f | Barca de pedales | M | pedalear, mar, alquilar, patín
f | Avión despegando | M | pista, volar, aeropuerto, motores
f | Control de seguridad | M | aeropuerto, arco, escáner, líquidos
f | Facturar | M | maleta, mostrador, peso, aeropuerto
f | Mochilero | M | mochila, viajar, barato, albergue
f | Selfi en la playa | M | foto, móvil, sonreír, arena
f | Picnic | M | mantel, cesta, campo, bocadillos
f | Nevera de playa | D | bebidas, frías, hielo, comida
f | Agua salada | P | mar, sal, beber, playa
f | Concha de mar | D | playa, caracola, coleccionar, arena
f | Caracola | D | mar, oír, concha, playa
f | Toalla de playa | D | secarse, arena, tumbarse, rayas
f | Atasco de verano | M | coches, carretera, operación salida, calor
f | Gasolinera | M | gasolina, repostar, coche, surtidor
m | Tarjeta de embarque | D | avión, puerta, asiento, vuelo
m | Cinta de equipajes | M | maletas, aeropuerto, recoger, esperar
m | Retraso del vuelo | M | avión, esperar, panel, aeropuerto
m | Perder el avión | M | correr, aeropuerto, tarde, puerta
m | Overbooking | P | avión, plazas, vendido, sin asiento
m | Azafata | M | avión, chaleco, instrucciones, carrito
m | Asiento de ventanilla | M | avión, mirar, nubes, pasillo
m | Turbulencias | M | avión, botes, cinturón, miedo
m | Duty free | P | aeropuerto, tienda, perfumes, impuestos
m | Albergue | P | dormir, literas, barato, peregrinos
m | Hostal | P | dormir, barato, habitación, pensión
m | Pensión completa | P | desayuno, comida, cena, hotel
m | Todo incluido | P | pulsera, hotel, bebidas, buffet
m | Buffet libre | M | comer, platos, servirse, todo
m | Recepción del hotel | P | llaves, registro, recepcionista, mostrador
m | Servicio de habitaciones | M | hotel, pedir, comida, cama
m | No molestar | M | cartel, puerta, hotel, dormir
m | Viaje de novios | P | boda, luna de miel, pareja, recién casados
m | Luna de miel | P | boda, recién casados, viaje, pareja
m | Viaje de fin de curso | P | estudiantes, autobús, excursión, compañeros
m | Interrail | P | tren, Europa, jóvenes, billete
m | Crucero por el Mediterráneo | P | barco, escalas, islas, camarote
m | Mareo en el barco | M | olas, vomitar, náuseas, mar
m | Visita guiada | M | grupo, guía, museo, explicaciones
m | Hacer cola en el museo | M | esperar, entrada, fila, turistas
m | Imán de nevera | D | souvenir, recuerdo, frigorífico, pegar
m | Cambiar dinero | M | moneda, divisa, banco, extranjero
m | Hablar por señas en el extranjero | M | idioma, gestos, entender, turista
m | Pedir indicaciones | M | perdido, calle, mapa, preguntar
m | Perderse en una ciudad | M | mapa, calles, desorientado, preguntar
m | Montar en camello | M | desierto, jorobas, Egipto, turista
m | Snorkel | D | tubo, gafas, peces, bucear
m | Tomarse el aperitivo | M | terraza, vermú, aceitunas, mediodía
m | Siesta en la hamaca | M | dormir, colgar, árbol, verano
m | Hamaca | D | colgar, árboles, tumbarse, balancear
m | Operación salida | P es | tráfico, carreteras, verano, DGT
m | Peaje | M | autopista, pagar, barrera, carretera
m | Área de servicio | P | autopista, parar, gasolinera, baño
m | Ruta en bici | M | pedalear, camino, casco, paisaje
m | Escapada de fin de semana | P | viaje, corto, sábado, hotel
m | Alquilar un coche | M | aeropuerto, conducir, contrato, llaves
m | Mal de altura | M | montaña, oxígeno, mareo, cumbre
m | Campamento de verano | P | niños, monitores, tiendas, excursiones
m | Jet ski | M | moto, agua, mar, velocidad
m | Paracaídas | M | saltar, avión, caer, abrir
d | Escala | P | vuelo, parada, aeropuerto, conexión
d | Low cost | P | barato, aerolínea, maleta, pagar extra
d | Sala de embarque | P | puerta, avión, esperar, aeropuerto
d | Visado | P | pasaporte, permiso, país, embajada
d | Seguro de viaje | P | médico, asistencia, póliza, extranjero
d | Agencia de viajes | P | reservar, paquete, vuelo, hotel
d | Camino de Santiago | P es | peregrinos, concha, Compostela, credencial
d | Credencial del peregrino | P es | sellos, Camino de Santiago, albergue, Compostela
d | Glamping | P | camping, lujo, tienda, naturaleza
d | Couchsurfing | P | sofá, gratis, anfitrión, dormir
d | Equipaje de mano | P | cabina, avión, maleta pequeña, límite
d | Pasaporte caducado | M | renovar, frontera, problema, fecha
d | Huso horario | P | hora, meridiano, diferencia, reloj
d | Ruta 66 | P | Estados Unidos, carretera, Chicago, moteles
d | Transiberiano | P | tren, Rusia, Moscú, Vladivostok
d | Safari | M | África, leones, jeep, fotos
d | Puente de mayo | P es | festivo, escapada, días libres, viaje
d | Vuelta al mundo | P | viajar, ochenta días, países, planeta
d | Turismo rural | P | casa rural, campo, pueblo, naturaleza
d | Casa rural | P | campo, alquilar, chimenea, pueblo
d | Ruta de los Pueblos Blancos | P es | Andalucía, Cádiz, Málaga, cal
d | Cuaderno de bitácora | P | barco, anotar, viaje, capitán
d | Aduana | P | frontera, declarar, maletas, control
d | Ryanair | P | low cost, aerolínea, irlandesa, maleta
d | Paradores | P es | hotel, castillos, Estado, monumentos
d | Pasar la aduana | M | frontera, declarar, policía, maletas
d | Mal de mar | M | barco, mareo, olas, vomitar
d | Billete de ida y vuelta | P | regreso, viaje, comprar, tren
d | Itinerario | P | ruta, planificar, paradas, viaje
d | Trotamundos | P | viajar, mundo, aventurero, mochilero
f | Billete de avión | D | volar, asiento, comprar, viaje
f | Billete de tren | D | vagón, asiento, estación, viaje
f | Estación de tren | D | andenes, trenes, viajeros, reloj
f | Estación de autobuses | D | andenes, autocares, viajar, dársena
f | Andén | D | tren, esperar, vías, raya amarilla
f | Puerta de embarque | D | aeropuerto, número, embarcar, avión
f | Almohada de viaje | D | cuello, avión, dormir, hinchable
f | Antifaz para dormir | D | ojos, avión, oscuridad
f | Tapones para los oídos | D | ruido, dormir, avión
f | Guía de viaje | D | libro, ciudad, consejos, turistas
f | Chanclas con calcetines | M | turista, guiri, sandalias, moda
f | Mapa del metro | D | líneas, colores, paradas, plano
f | Excursión en barco | D | mar, paseo, cubierta, costa
f | Apartamento turístico | M | alquiler, vacaciones, llaves, playa
f | Habitación de hotel | D | cama, llave, toallas, minibar
f | Minibar | D | hotel, nevera pequeña, bebidas, caro
f | Tarjeta de la habitación | D | hotel, abrir, puerta, banda magnética
f | Animador de hotel | M | juegos, piscina, bailes, turistas
f | Sello del pasaporte | D | aduana, país, tinta, viajar
f | Diario de viaje | D | escribir, recuerdos, cuaderno, aventuras
m | Road trip | M | coche, carretera, amigos, ruta
m | GPS del coche | D | navegador, ruta, voz, mapa
m | Recalculando ruta | M | GPS, perderse, voz, desvío
m | Mareo en el coche | M | vomitar, curvas, ventanilla, viaje
m | Bolsa para el mareo | D | avión, vomitar, asiento, papel
m | Demostración de seguridad | M | azafata, chaleco, máscaras, salidas
m | Despegue | M | avión, pista, subir, motores
m | Aterrizaje | M | avión, pista, bajar, ruedas
m | Aplaudir al aterrizar | M | avión, pasajeros, piloto, España
m | Cabina del piloto | D | mandos, avión, comandante, botones
m | Comida de avión | D | bandeja, plástico, asiento, azafata
m | Ventanilla del avión | D | ver, nubes, ovalada, persiana
m | Cola de embarque | M | esperar, puerta, tarjeta, aeropuerto
m | Maleta perdida | M | aeropuerto, cinta, reclamar, equipaje
m | Exceso de equipaje | M | pesar, kilos, pagar, maleta
m | Control de pasaportes | M | aduana, policía, sello, frontera
m | Arco detector de metales | D | aeropuerto, pitar, seguridad, pasar
m | Casa de cambio | D | divisas, dinero, ventanilla, euros
m | Propina | M | camarero, dinero extra, servicio, dejar
m | Enchufe de viaje | D | adaptador, país, clavija, cargar
m | Diferencia horaria | M | jet lag, hora, país, reloj
m | Traductor del móvil | M | idioma, app, hablar, entender
m | Free tour | M | guía, gratis, propina, ciudad
m | Audioguía | D | museo, escuchar, auriculares, número
m | Ruta gastronómica | M | comer, tapas, restaurantes, probar
m | Probar la comida local | M | platos típicos, sabores, restaurante, viaje
m | Mercado local | D | puestos, fruta, artesanía, regatear
m | Zoco | D | mercado, Marruecos, puestos, regatear
m | Tienda de campaña | D | acampar, piquetas, lona, montar
d | Nómada digital |  | trabajar, viajar, portátil, internet
d | Ecoturismo |  | naturaleza, sostenible, viaje, medio ambiente
d | Turismo espacial |  | cohetes, millonarios, espacio, viaje
d | Gap year |  | año sabático, viajar, jóvenes, estudios
d | Año sabático |  | descanso, viajar, trabajo, un año
d | Voluntariado en el extranjero |  | ayudar, viaje, ONG, país
d | Au pair |  | cuidar niños, familia, extranjero, idioma
d | Intercambio de casas |  | vivienda, vacaciones, cambiar, familias
d | Turismo de masas |  | multitudes, cruceros, saturación, turistas
d | Gentrificación |  | barrios, turistas, precios, vecinos
d | Tasa turística |  | impuesto, hotel, noche, turistas
d | Temporada alta |  | verano, caro, lleno, vacaciones
d | Temporada baja |  | barato, vacío, invierno, ofertas
d | Check-in | M | registrarse, hotel, llegada, llave
d | Check-out | M | dejar la habitación, hotel, salida, pagar
d | Upgrade |  | mejora, clase, hotel, gratis
d | Primera clase | D | avión, lujo, asientos, caro
d | Aeropuerto de Barajas | es | Madrid, T4, aviones
d | El Prat | es | aeropuerto, Barcelona, aviones, terminales
d | Estación de Atocha | es | Madrid, tren, jardín tropical, AVE
d | Puerto de Algeciras | es | barcos, Estrecho, Marruecos, ferri
d | Operación Paso del Estrecho | es | Marruecos, verano, coches, ferri
d | Frontera | D | país, aduana, límite, cruzar
d | Espacio Schengen |  | fronteras, Europa, libre circulación, pasaporte
d | Tarjeta sanitaria europea |  | salud, viajar, Europa, médico
d | Vacunas para viajar | M | fiebre amarilla, pinchazo, viaje, país
d | Fiebre amarilla |  | vacuna, viajes, mosquito, trópico
d | Malaria |  | mosquito, trópico, pastillas, enfermedad
d | Repelente de mosquitos | D | spray, picaduras, viaje, insectos
d | Globo terráqueo | D | bola del mundo, girar, países, mapa
d | Embajada |  | país, extranjero, pasaporte, embajador
d | Consulado |  | extranjero, papeles, ciudadanos, oficina
`
};
