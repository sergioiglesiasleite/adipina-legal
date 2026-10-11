// Animales. Por defecto aptos para peques. Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
export default {
  id: 'animals', name: 'Animales', icon: 'paw', modes: 'DMP', ages: 'kids',
  cards: `
f | Perro | | ladrar, mascota, hueso, guau
f | Gato | | maullar, bigotes, ratón, miau
f | Elefante | | trompa, grande, colmillos, orejas
f | León | | melena, rey, selva, rugir
f | Jirafa | | cuello, largo, manchas, alta
f | Pingüino | | frío, hielo, ave, esmoquin
f | Conejo | | orejas, zanahoria, saltar, madriguera
f | Mono | | plátano, árbol, trepar, cola
f | Delfín | | mar, listo, saltar, aleta
f | Tiburón | | dientes, aleta, mar, peligroso
f | Tortuga | | caparazón, lenta, verde, mar
f | Mariposa | | alas, colores, oruga, volar
f | Caballo | | relinchar, montar, crin, herradura
f | Vaca | | leche, mugir, manchas, granja
f | Cerdo | | rosa, granja, jamón, barro
f | Oveja | | lana, balar, rebaño, pastor
f | Gallina | | huevos, cacarear, granja, plumas
f | Pato | | cuac, nadar, estanque, pico
f | Ratón | | queso, pequeño, cola, gato
f | Oso | | miel, grande, hibernar, peludo
f | Tigre | | rayas, felino, naranja, rugir
f | Cebra | | rayas, blanco, negro, caballo
f | Serpiente | | reptar, veneno, larga, sisear
f | Cocodrilo | | dientes, río, verde, reptil
f | Rana | | saltar, croar, verde, charca
f | Búho | | noche, ojos, ulular, sabio
f | Loro | | hablar, plumas, colores, pirata
f | Abeja | | miel, picar, colmena, zumbido
f | Hormiga | | pequeña, hormiguero, trabajadora, fila
f | Araña | | telaraña, patas, ocho, tejer
f | Caracol | | concha, baba, lento, cuernos
f | Ballena | | grande, mar, chorro, mamífero
f | Burro | | rebuznar, orejas, carga, asno
f | Cabra | | cuernos, monte, leche, balar
f | Gallo | | quiquiriquí, mañana, cresta, despertar
f | Lobo | | aullar, luna, manada, Caperucita
f | Zorro | | astuto, cola, naranja, gallinero
f | Ardilla | | bellota, cola, árbol, nueces
f | Erizo | | púas, pinchos, bola, pequeño
f | Murciélago | | noche, volar, cueva, colgado
f | Koala | | Australia, eucalipto, abrazo, dormir
f | Oso panda | | bambú, blanco, negro, China
f | Hipopótamo | | río, boca, grande, gordo
f | Rinoceronte | | cuerno, nariz, grande, piel
f | Camello | | jorobas, desierto, agua, beduino
f | Foca | | aplaudir, hielo, bigotes, pelota
f | Águila | | ave, volar, garras, montaña
f | Paloma | | plaza, pan, blanca, paz
f | Mosquito | | picar, zumbido, verano, sangre
f | Mariquita | | roja, puntos, negros, insecto
f | Gusano | | tierra, manzana, largo, arrastrarse
f | Cangrejo | | pinzas, playa, andar de lado, rojo
f | Estrella de mar | | cinco brazos, playa, roca, marina
f | Lagartija | | cola, pared, sol, reptil
f | Hámster | | rueda, jaula, mofletes, roedor
f | Pollito | | amarillo, pío, huevo, gallina
f | Cisne | | blanco, cuello, lago, elegante
f | Pez payaso | | Nemo, naranja, anémona, rayas
f | Tucán | | pico, colores, selva, ave
f | Gorila | | fuerte, pecho, simio, plata
m | Camaleón | | color, lengua, ojos, cambiar
m | Flamenco | | rosa, pata, ave, laguna
m | Pulpo | | tentáculos, tinta, ocho, gallego
m | Canguro | | saltar, bolsa, Australia, cría
m | Pavo real | | plumas, cola, abanico, colores
m | Caballito de mar | | mar, cola, enroscada, macho
m | Oso hormiguero | | lengua, hormigas, hocico, largo
m | Medusa | | picar, transparente, mar, tentáculos
m | Morsa | | colmillos, hielo, bigote, gorda
m | Nutria | | río, flotar, nadar, piedras
m | Castor | | presa, dientes, río, madera
m | Mapache | | antifaz, basura, cola, rayas
m | Perezoso | | lento, colgado, árbol, dormir
m | Armadillo | | caparazón, bola, coraza, América
m | Avestruz | | correr, cuello, enterrar, cabeza
m | Pelícano | | pico, bolsa, pescar, ave
m | Colibrí | | pequeño, alas, rápido, néctar
m | Libélula | | alas, agua, insecto, volar
m | Saltamontes | | saltar, verde, insecto, patas
m | Escarabajo | | insecto, coraza, negro, patas
m | Luciérnaga | | luz, noche, brillar, insecto
m | Escorpión | | aguijón, cola, veneno, desierto
m | Lince ibérico | es | felino, Doñana, orejas, peligro
m | Búfalo | | cuernos, manada, toro, África
m | Bisonte | | América, manada, peludo, toro
m | Alce | | cuernos, Canadá, ciervo, grande
m | Reno | | Laponia, cuernos, frío, trineo
m | Llama | | escupir, Perú, lana, cuello
m | Hiena | | risa, carroña, manchas, sabana
m | Leopardo | | manchas, felino, árbol, rápido
m | Guepardo | | rápido, manchas, correr, felino
m | Jabalí | | colmillos, cerdo, monte, salvaje
m | Mofeta | | olor, rayas, blanca, apestar
m | Topo | | ciego, túnel, tierra, excavar
m | Iguana | | reptil, verde, cresta, lagarto
m | Langosta | | mar, pinzas, roja, marisco
m | Orca | | ballena, asesina, blanco, negro
m | Lémur | | Madagascar, cola, rayas, ojos
m | Buitre | | carroña, calvo, volar, montaña
m | Cigüeña | | campanario, nido, bebés, pico
m | Gaviota | | playa, mar, chillar, puerto
m | Pez espada | | nariz, larga, mar, pescado
m | Cucaracha | | asco, insecto, cocina, marrón
m | Polilla | | luz, noche, ropa, armario
m | Puercoespín | | púas, pinchos, roedor, defensa
m | Calamar | | tinta, tentáculos, rabas, mar
d | Ornitorrinco | | pico, pato, Australia, huevos
d | Ajolote | | México, salamandra, branquias, sonrisa
d | Narval | | cuerno, unicornio, ártico, ballena
d | Capibara | | roedor, grande, tranquilo, agua
d | Suricata | | Timón, guardia, de pie, desierto
d | Mantis religiosa | | rezar, verde, insecto, comerse
d | Okapi | | jirafa, rayas, Congo, selva
d | Tapir | | trompa, cerdo, selva, América
d | Pangolín | | escamas, bola, hormigas, Asia
d | Quokka | | sonrisa, Australia, marsupial, selfi
d | Wombat | | Australia, marsupial, cubos, madriguera
d | Demonio de Tasmania | | Taz, Australia, gruñir, negro
d | Tarsero | | ojos, enormes, Filipinas, pequeño
d | Dugongo | | sirena, vaca marina, algas, mar
d | Rape | | feo, mar, luz, pescado
d | Pez globo | | hincharse, pinchos, veneno, Japón
d | Anguila | | larga, río, viscosa, eléctrica
d | Quetzal | | Guatemala, plumas, verde, cola
d | Ñu | | manada, migración, sabana, cuernos
d | Gacela | | rápida, saltar, sabana, cuernos
d | Ocelote | | felino, manchas, selva, América
d | Musaraña | | pequeña, hocico, insectos, roedor
d | Lirón | | dormir, roedor, cola, hibernar
d | Urogallo | es | ave, Pirineos, cortejo, bosque
d | Quebrantahuesos | es | buitre, huesos, Pirineos, romper
d | Abubilla | | cresta, ave, pico, abanico
d | Martín pescador | | azul, río, pez, zambullirse
d | Muflón | | carnero, cuernos, montaña, salvaje
d | Rebeco | | montaña, cabra, Picos de Europa, saltar
d | Cachalote | | ballena, Moby Dick, cabeza, sumergirse
d | Tejón | | rayas, madriguera, nocturno, garras
d | Coatí | | hocico, cola, rayas, América
d | Dingo | | perro salvaje, Australia, aullar, canguro
d | Gineta | | manchas, cola, nocturna, felina
d | Garza | | patas, largas, río, pescar
d | Salamandra | | negra, amarilla, humedad, anfibio
d | Ciervo volante | | escarabajo, cuernos, bosque, insecto
d | Mangosta | | serpiente, cobra, ágil, Rikki-Tikki
d | Manta raya | | aplanada, mar, alas, aleta
d | Alpaca | | lana, Perú, suave, llama
`
};
