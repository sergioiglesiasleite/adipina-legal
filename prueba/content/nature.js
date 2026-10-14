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
f | Cielo azul | D | despejado, nubes, sol, arriba
f | Nube negra | D | tormenta, lluvia, gris, amenaza
f | Relámpago | D | luz, tormenta, rayo, cielo
f | Llovizna | M | lluvia fina, chirimiri, gotas, poco
f | Chaparrón | M | lluvia fuerte, de repente, mojarse, corto
f | Barro | M | tierra mojada, ensuciarse, botas, lluvia
f | Hielo | D | frío, congelado, resbalar, agua
f | Carámbano | D | hielo, colgar, tejado, punta
f | Ventisca | M | nieve, viento, tormenta, frío
f | Aguanieve | M | lluvia y nieve, frío, mezcla, invierno
f | Primavera | D | flores, abril, polen, estación
f | Otoño | D | hojas caídas, octubre, castañas, estación
f | Invierno | D | frío, nieve, diciembre, estación
f | Estaciones del año | D | cuatro, primavera, verano, otoño
f | Hoja seca | D | otoño, marrón, crujir, árbol
f | Rama | D | árbol, palo, hojas, tronco
f | Tronco de árbol | D | madera, corteza, anillos, raíces
f | Raíces | D | árbol, tierra, agua, debajo
f | Corteza | D | árbol, tronco, rugosa, piel
f | Tocón | D | árbol cortado, sentarse, anillos, bosque
f | Anillos del árbol | D | edad, tronco, círculos, contar
f | Piedra | D | roca, dura, lanzar, camino
f | Arena | D | playa, desierto, granos, castillo
f | Pradera | D | hierba, verde, campo, flores
f | Hierba | D | verde, césped, campo, vacas
f | Césped | D | jardín, cortar, verde, hierba
f | Colina | D | montaña pequeña, verde, subir, cuesta
f | Valle | D | entre montañas, río, abajo, verde
f | Cumbre | D | cima, montaña, alto, bandera
f | Arroyo | D | río pequeño, agua, piedras, murmullo
f | Manantial | D | agua, brotar, fuente, pura
f | Pozo | D | agua, cubo, profundo, cuerda
f | Bahía | D | mar, costa, curva, barcos
f | Península | D | tierra, mar, tres lados, Ibérica
f | Archipiélago | D | islas, grupo, mar, Canarias
f | Costa | D | mar, playa, litoral, acantilados
f | Espuma del mar | D | olas, blanca, orilla, burbujas
f | Fondo del mar | D | arena, peces, profundidad, algas
f | Alga | D | mar, verde, playa, viscosa
m | Corriente marina |  | agua, mar, moverse, Golfo
m | Corriente del Golfo |  | Atlántico, cálida, Europa, clima
m | Marea alta |  | mar, subir, luna, orilla
m | Pleamar |  | marea alta, luna, mar, subir
m | Bajamar |  | marea baja, mar, retirarse, rocas
m | Lava | D | volcán, roja, caliente, magma
m | Magma |  | lava, interior, volcán, fundido
m | Ceniza volcánica | D | volcán, gris, aviones, nube
m | Piedra pómez | D | volcánica, flota, ligera, pies
m | Obsidiana |  | cristal volcánico, negro, afilado, roca
m | Granito |  | roca, dura, encimera, gris
m | Mármol |  | roca, blanca, estatuas, vetas
m | Pizarra (roca) |  | tejados, negra, láminas
m | Cuarzo | D | cristal, mineral, transparente, reloj
m | Diamante | D | piedra preciosa, duro, carbono, anillo
m | Esmeralda | D | piedra preciosa, verde, joya, Colombia
m | Rubí | D | piedra preciosa, rojo, joya, brillar
m | Zafiro | D | piedra preciosa, azul, joya, brillar
m | Amatista | D | piedra, morada, cuarzo, cristal
m | Geoda | D | piedra, cristales, dentro, partir
m | Pepita de oro | D | río, buscar, brillante, oro
m | Salinas | D | sal, evaporar, agua de mar, blanco
m | Mar de nubes | D | montaña, nubes debajo, cumbre, vista
m | Cumulonimbo |  | nube de tormenta, alta, rayos, yunque
m | Cirros |  | nubes altas, finas, plumas, buen tiempo
m | Halo lunar |  | anillo, luna, nubes, luz
m | Luna menguante | D | fase, lunar, disminuir, C
m | Luna creciente | D | fase, lunar, aumentar, D
m | Estrella polar |  | norte, orientarse, Osa Menor, brillante
m | Helada | M | frío, hielo, noche, plantas
m | Ola de frío | M | temperaturas bajas, invierno, abrigos, Siberia
m | Borrasca |  | lluvia, viento, bajas presiones, mapa
m | Anticiclón |  | buen tiempo, altas presiones, sol, mapa
m | Isobaras |  | mapa del tiempo, líneas, presión, meteorología
m | Frente frío |  | aire frío, lluvias, meteorología, mapa
m | Árbol centenario | D | viejo, grande, tronco, siglos
m | Bambú | D | tallo, panda, hueco, crecer rápido
m | Hiedra | D | trepadora, pared, verde, hojas
m | Enredadera | D | trepar, planta, pared, enrollarse
m | Zarza | D | moras, pinchos, arbusto, enredarse
m | Ortiga | M | picar, planta, hojas, escocer
m | Romero | D | aromática, planta, cocina, azul
m | Tomillo | D | aromática, planta, monte, cocina
m | Eucalipto | D | árbol, Australia, koala, olor
m | Ciprés | D | árbol, cementerio, alto, puntiagudo
m | Castaño | D | árbol, castañas, erizos, otoño
m | Nogal | D | árbol, nueces, madera, sombra
m | Chopo | D | árbol, río, alto, hojas
m | Haya | D | árbol, hayedo, otoño, Irati
m | Abedul | D | árbol, tronco blanco, norte, frío
m | Magnolio | D | árbol, flores grandes, blancas, perfume
m | Jacaranda | D | árbol, flores moradas, primavera, calles
m | Buganvilla | D | flores, fucsia, trepadora, muros
m | Jazmín | D | flor blanca, olor, noche, verano
m | Clavel | D | flor, roja, España, solapa
m | Lirio | D | flor, morada, elegante, jardín
m | Azucena | D | flor blanca, perfume, Virgen, tallo
m | Violeta | D | flor pequeña, morada, color, tímida
d | Edelweiss |  | flor, Alpes, blanca, montaña
d | Flor de loto | D | agua, sagrada, rosa, Asia
d | Planta carnívora | D | insectos, atrapar, comer, Venus
d | Dionea atrapamoscas |  | planta carnívora, cerrarse, moscas, trampa
d | Rafflesia |  | flor gigante, olor a podrido, Indonesia, parásita
d | Drago canario | es | árbol, Canarias, sangre de drago, milenario
d | Sabina |  | árbol, enebro, Hierro, viento
d | Pinsapo | es | abeto, Andalucía, Grazalema, reliquia
d | Laurisilva | es | bosque, Canarias, Garajonay, húmedo
d | Bosque de ribera |  | río, chopos, sauces, orilla
d | Sotobosque |  | bajo los árboles, arbustos, helechos, sombra
d | Matorral |  | arbustos, monte bajo, seco, mediterráneo
d | Páramo |  | llano, frío, desolado, alto
d | Altiplano |  | meseta alta, Andes, Bolivia, llano
d | Cañón | D | río, paredes, profundo, Colorado
d | Desfiladero |  | paso estrecho, montañas, río, pared
d | Meandro | D | curva, río, serpentea, forma
d | Afluente |  | río, desembocar, otro río, unirse
d | Desembocadura |  | río, mar, final, estuario
d | Estuario |  | río, mar, mezcla, marea
d | Ría |  | Galicia, mar, entrar, valle
d | Fiordo | D | Noruega, mar, glaciar, entrante
d | Morrena |  | glaciar, rocas, arrastrar, depósito
d | Circo glaciar |  | montaña, hueco, ibón
d | Ibón | es | lago de montaña, Pirineo, Aragón, glaciar
d | Turbera |  | pantano, musgo, turba, humedad
d | Karst |  | roca caliza, cuevas, agua, erosión
d | Dolina |  | hundimiento, karst, agujero, terreno
d | Sima | D | agujero profundo, cueva, vertical, oscuro
d | Estalagmita | D | cueva, suelo, gotas, cal
d | Erosión |  | desgaste, viento, agua, roca
d | Sedimento |  | depósito, río, arena, capas
d | Aluvión |  | inundación, barro, arrastre, río
d | Corrimiento de tierras |  | deslizamiento, ladera, lluvia, tierra
d | Poniente |  | viento, oeste, Andalucía, fresco
d | Levante |  | viento, este, Mediterráneo, Tarifa
d | Mistral |  | viento, Francia, frío, norte
d | Brisa marina |  | viento suave, mar, tarde, fresco
d | Fenómeno de El Niño |  | Pacífico, clima, calentamiento, Perú
d | Equinoccio |  | día y noche iguales, marzo, septiembre, estaciones
d | Simbiosis |  | relación, beneficio, dos especies, colaborar
d | Especie invasora |  | ajena, peligro, expandirse, ecosistema
d | Especie en peligro de extinción |  | amenazada, desaparecer, protección, lince
d | Reserva de la biosfera |  | Unesco, protegida, naturaleza, zona
d | Parque nacional | D | protegido, naturaleza, Doñana, visitar
d | Huella de animal | D | barro, pisada, rastro, seguir
d | Madriguera | D | conejo, agujero, refugio, tierra
d | Colmena | D | abejas, miel, panal, reina
d | Panal | D | hexágonos, cera, miel, abejas
d | Termitero | D | termitas, montículo, tierra, África
d | Presa de castores | D | troncos, río, construir
`
};
