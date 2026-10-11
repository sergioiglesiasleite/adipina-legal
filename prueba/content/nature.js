// Naturaleza, clima y plantas. Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
export default {
  id: 'nature', name: 'Naturaleza y clima', icon: 'leaf', modes: 'DP', ages: 'kids',
  cards: `
f | Arcoíris | DMP | colores, lluvia, cielo, siete
f | Volcán | DMP | lava, erupción, montaña, fuego
f | Tornado | DMP | viento, remolino, girar, destrucción
f | Rayo | DMP | tormenta, luz, eléctrico, cielo
f | Trueno | | tormenta, ruido, rayo, retumbar
f | Nieve | | blanca, frío, copos, invierno
f | Lluvia | | agua, paraguas, nubes, mojarse
f | Granizo | | hielo, bolitas, tormenta, caer
f | Niebla | | no se ve, blanca, densa, mañana
f | Viento | | soplar, aire, molino, cometa
f | Nube | | cielo, blanca, algodón, lluvia
f | Montaña | | alta, cumbre, subir, nieve
f | Río | | agua, corriente, puente, desembocadura
f | Mar | | agua salada, olas, playa, azul
f | Playa | | arena, sol, toalla, verano
f | Lago | | agua dulce, barca, quieto, cisnes
f | Cascada | | agua, caer, salto, río
f | Cueva | | oscura, roca, murciélagos, entrada
f | Isla | | rodeada de agua, náufrago, mar, tesoro
f | Desierto | | arena, calor, dunas, camellos
f | Bosque | | árboles, setas, pinos, verde
f | Selva | | tropical, árboles, monos, húmeda
f | Árbol | | tronco, hojas, ramas, raíces
f | Flor | | pétalos, oler, jardín, primavera
f | Rosa | | flor, espinas, roja, amor
f | Girasol | | amarillo, sol, pipas, flor
f | Margarita | | flor, blanca, me quiere, pétalos
f | Tulipán | | Holanda, flor, colores, bulbo
f | Cactus | | pinchos, desierto, maceta, agua
f | Palmera | | playa, cocos, tropical, dátiles
f | Pino | | piñas, árbol, agujas, Navidad
f | Seta | | bosque, sombrero, venenosa, otoño
f | Hoja | | árbol, verde, otoño, caer
f | Semilla | | plantar, germinar, tierra, crecer
f | Charco | | agua, saltar, botas, lluvia
m | Huracán | | viento, ojo, tormenta, Caribe
m | Terremoto | | temblor, tierra, sismo, moverse
m | Tsunami | | ola gigante, mar, terremoto, costa
m | Ola | | mar, surf, espuma, romper
m | Marea | | subir, bajar, Luna, mar
m | Glaciar | | hielo, montaña, derretir, lengua
m | Iceberg | | hielo, flotar, Titanic, polo
m | Aurora boreal | | luces, cielo, norte, verdes
m | Atardecer | | sol, puesta, naranja, tarde
m | Amanecer | | salir el sol, mañana, madrugar, luz
m | Musgo | | verde, piedra, húmedo, belén
m | Trébol de cuatro hojas | | suerte, verde, encontrar, planta
m | Diente de león | | soplar, semillas, amarillo, flor
m | Amapola | | roja, campo, flor, trigo
m | Lavanda | | morada, olor, Provenza, flor
m | Roble | | árbol, bellotas, fuerte, madera
m | Olivo | | aceitunas, árbol, aceite, Jaén
m | Sauce llorón | | árbol, ramas, río, colgando
m | Nenúfar | | estanque, flotar, rana, hoja
m | Orquídea | | flor, exótica, elegante, maceta
m | Helecho | | planta, hojas, bosque, sombra
m | Escarcha | | hielo, mañana, frío, blanca
m | Ola de calor | | temperaturas, verano, sudar, alerta
m | Sequía | | sin agua, embalses, lluvia, campo
m | Inundación | | agua, desbordar, río, lluvia
m | Avalancha | | nieve, alud, montaña, caer
m | Géiser | | agua caliente, chorro, Islandia, vapor
m | Arrecife de coral | | mar, peces, colores, Australia
m | Estalactita | | cueva, techo, gotear, roca
m | Duna | | arena, desierto, viento, montaña
m | Oasis | | desierto, agua, palmeras, espejismo
m | Acantilado | | costa, roca, caída, mar
d | Calima | es | polvo, África, Canarias, cielo naranja
d | Gota fría | es | DANA, lluvias, otoño, Mediterráneo
d | Manglar | | árboles, agua salada, raíces, trópico
d | Delta | | río, desembocadura, Ebro, sedimentos
d | Meseta | | llana, alta, Castilla, extensa
d | Tundra | | frío, ártico, musgo, llanura
d | Sabana | | África, hierba, leones, llanura
d | Taiga | | bosque, Siberia, coníferas, frío
d | Baobab | | árbol, África, tronco, Principito
d | Secuoya | | árbol, gigante, California, alto
d | Almendro en flor | | blanco, rosa, febrero, Van Gogh
d | Fumarola | | volcán, gas, vapor, grieta
d | Fosa de las Marianas | | profundo, océano, Pacífico, abismo
d | Monzón | | lluvias, Asia, viento, estación
d | Siroco | | viento, África, cálido, sur
d | Tramontana | es | viento, norte, Cataluña, Mallorca
d | Cierzo | es | viento, Zaragoza, Ebro, frío
d | Rocío | | gotas, mañana, hierba, humedad
d | Bruma | | niebla, mar, ligera, neblina
d | Fuego de San Telmo | | mástil, luz, tormenta, marineros
d | Tormenta de arena | | desierto, viento, polvo, Sahara
d | Remolino | | agua, girar, viento, espiral
d | Ciénaga | | barro, pantanosa, agua estancada, mosquitos
d | Pantano | | agua, embalse, presa, cenagoso
d | Marisma | | Doñana, agua, aves, humedal
d | Estepa | | llanura, hierba, Rusia, seca
d | Atolón | | isla, coral, laguna, anillo
d | Barranco | | quebrada, agua, profundo, ladera
d | Dehesa | es | encinas, cerdos ibéricos, Extremadura, pasto
d | Encina | | bellotas, árbol, dehesa, perenne
d | Alcornoque | | corcho, árbol, tapones, corteza
f | Hormiguero | D | hormigas, tierra, túneles, montón
f | Nido de pájaro | D | ramitas, huevos, árbol, crías
f | Tela de araña con rocío | D | gotas, hilo, mañana, brillar
f | Piña de pino | D | escamas, árbol, suelo, piñones
f | Bellota | D | encina, ardilla, sombrero, fruto
f | Calabaza en el huerto | D | naranja, planta, otoño, grande
f | Charco de barro | M | saltar, botas, lluvia, mancharse
f | Copo de nieve | D | frío, cristal, seis puntas, invierno
f | Hojas de otoño | M | caer, marrones, crujir, árboles
f | Mariquita en una hoja | D | puntos, roja, insecto, verde
f | Plantar un árbol | M | pala, tierra, regar, semilla
m | Cosechar | M | recoger, campo, frutos, agricultor
m | Vendimia | M | uvas, cortar, viñedo, septiembre
m | Viñedo | D | uvas, vino, cepas, filas
m | Campo de girasoles | D | amarillo, sol, flores, verano
m | Campo de lavanda | D | morado, olor, Provenza, flores
m | Bosque de bambú | D | cañas, panda, verde, alto
m | Luciérnagas | D | luz, noche, insectos, brillar
m | Erizo de mar | D | pinchos, roca, mar, pisar
m | Marea baja | M | mar, retirarse, rocas, arena
m | Cerezo en flor | D | rosa, Japón, primavera, pétalos
d | Ecosistema | | seres vivos, entorno, equilibrio, naturaleza
d | Polinización | M | abejas, polen, flores, fruto
d | Cadena alimentaria | | comer, depredador, presa, plantas
d | Biodiversidad | | especies, variedad, vida, planeta
d | Hojas caducas | | otoño, caer, árboles, perenne
d | Liquen | D | roca, hongo, alga, árbol
`
};
