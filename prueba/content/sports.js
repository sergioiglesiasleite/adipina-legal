// Deportes. Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
export default {
  id: 'sports', name: 'Deportes', icon: 'ball', modes: 'DMP', ages: 'kids',
  cards: `
f | Fútbol | | balón, gol, portería, once
f | Baloncesto | | canasta, balón, botar, NBA
f | Tenis | | raqueta, pelota, red, set
f | Natación | | piscina, nadar, agua, estilos
f | Ciclismo | | bicicleta, Tour, pedalear, maillot
f | Boxeo | | guantes, ring, puñetazo, asaltos
f | Esquí | | nieve, montaña, bastones, tablas
f | Voleibol | | red, balón, saque, rematar
f | Surf | | olas, tabla, mar, playa
f | Golf | | hoyo, palo, pelota, green
f | Balonmano | | portería, balón, mano, siete
f | Tenis de mesa | | pala, pelota, tablero, ping-pong
f | Atletismo | | correr, pista, saltar, carreras
f | Patinaje sobre hielo | | patines, pista, girar, invierno
f | Karate | | kimono, cinturón negro, golpes, artes marciales
f | Gimnasia | | barra, suelo, voltereta, saltos
f | Equitación | | caballo, montar, jinete, saltos
f | Maratón | | correr, cuarenta y dos kilómetros, carrera, resistencia
f | Escalada | | pared, cuerda, presas, subir
f | Remo | | barca, remar, río, equipo
f | Navegación a vela | | barco, viento, regata, velero
f | Salto de longitud | | arena, correr, saltar, foso
f | Salto de altura | | listón, colchoneta, saltar, espalda
f | Tiro con arco | | flecha, diana, arquero, apuntar
f | Waterpolo | | piscina, balón, gorro, portería
f | Petanca | es | bolas, boliche, jubilados, lanzar
f | Pádel | es | pala, pared, pista, pelota
f | Bolos | | bolera, pinos, bola, pleno
f | Rugby | | balón ovalado, placaje, ensayo, melé
f | Dardos | | diana, lanzar, bar, puntos
m | Hockey sobre patines | es | stick, pista, bola, Reus
m | Esgrima | | espada, florete, careta, tocado
m | Piragüismo | | piragua, remo, río, Sella
m | Bádminton | | volante, raqueta, red, plumas
m | Patinaje artístico | | hielo, saltos, piruetas, pareja
m | Hockey sobre hierba | | stick, bola, portería, césped
m | Judo | | kimono, llave, tatami, inmovilizar
m | Gimnasia rítmica | | cinta, aro, pelota, mazas
m | Triatlón | | nadar, bici, correr, tres
m | Lanzamiento de jabalina | | lanzar, lanza, atletismo, distancia
m | Halterofilia | | pesas, levantar, barra, kilos
m | Lucha libre | | máscara, ring, llaves, cuadrilátero
m | Snowboard | | tabla, nieve, saltos, montaña
m | Windsurf | | tabla, vela, viento, mar
m | Motociclismo | | moto, circuito, MotoGP, curvas
m | Fórmula 1 | | coches, circuito, pit stop, piloto
m | Béisbol | | bate, pelota, guante, home run
m | Fútbol americano | | casco, touchdown, balón ovalado, Super Bowl
m | Sóftbol | | bate, lanzadora, pelota, guante
m | Taekwondo | | patadas, Corea, peto, dobok
m | Pelota vasca | es | frontón, cesta, pared, Euskadi
m | Ajedrez | | rey, tablero, jaque mate, piezas
m | Senderismo | | montaña, caminar, mochila, rutas
m | Paracaidismo | | avión, saltar, paracaídas, caída libre
m | Buceo | | bombona, mar, gafas, profundidad
m | Natación sincronizada | | piscina, pinza, música, equipo
m | Billar | | bolas, taco, mesa, tronera
m | Kitesurf | | cometa, tabla, viento, mar
m | Carrera de obstáculos | | vallas, saltar, correr, ría
m | Barranquismo | | barranco, cuerda, río, rápel
d | Curling | | piedra, hielo, escoba, barrer
d | Salto con pértiga | | listón, saltar, altura, garrocha
d | Biatlón | | esquí, rifle, disparar, nieve
d | Lanzamiento de martillo | | bola, cadena, girar, lanzar
d | Pentatlón moderno | | cinco, esgrima, hípica, tiro
d | Decatlón | | diez pruebas, atletismo, puntos, dos días
d | Skeleton | | trineo, boca abajo, hielo, cabeza
d | Bobsleigh | | trineo, equipo, hielo, empujar
d | Luge | | trineo, boca arriba, hielo, pies
d | Polo | | caballo, mazo, bola, jinetes
d | Cricket | | bate, wicket, Inglaterra, bolas
d | Lacrosse | | stick, red, pelota, Canadá
d | Hurling | | Irlanda, stick, pelota, hurley
d | Sepak takraw | | pies, red, pelota, Asia
d | Kabaddi | | India, aguantar respiración, equipo, tocar
d | Aikido | | Japón, defensa, llaves, armonía
d | Capoeira | | Brasil, baile, lucha, berimbau
d | Muay thai | | Tailandia, codos, rodillas, boxeo
d | Esquí de fondo | | nieve, distancia, bastones, llano
d | Patinaje de velocidad | | hielo, óvalo, rápido, patines
d | Tiro al plato | | escopeta, platos, disparar, aire
d | Hípica | | caballo, saltos, obstáculos, jinete
d | Pelota mano | es | frontón, Euskadi, pared, pelotari
d | Bolo palma | es | Cantabria, bolos, bola, tiro
d | Lucha canaria | es | Canarias, terrero, agarre, tumbar
d | Traineras | es | remo, Cantábrico, regata, barco
d | Aizkolaris | es | hacha, troncos, cortar, Euskadi
d | Sokatira | es | cuerda, tirar, equipos, fuerza
d | Parapente | | volar, ala, montaña, viento
d | Rafting | | río, balsa, rápidos, remar
f | Saltar a la comba | M | cuerda, girar, recreo, patio
f | Carrera de relevos | M | testigo, equipo, pasar, atletismo
f | Penalti | M | portero, punto, chutar, falta
f | Gol de chilena | M | fútbol, tijera, espaldas, remate
f | Mate de baloncesto | M | canasta, aro, saltar, colgarse
f | Saque de tenis | M | raqueta, pelota, lanzar, servicio
f | Portero parando | M | guantes, balón, lanzarse, gol
f | Pesas | M | gimnasio, levantar, músculos, mancuernas
f | Abdominales | M | tripa, suelo, ejercicio, gimnasio
f | Carrera popular | M | correr, dorsal, ciudad, meta
f | Medalla de oro | D | primero, podio, olímpica, ganar
f | Podio | M | medallas, primero, segundo, tercero
f | Silbato | D | árbitro, pitar, soplar, entrenador
f | Tarjeta roja | M | expulsado, árbitro, fútbol, falta
m | Vuelta ciclista | | etapas, maillot, bicis, carreteras
m | Tour de Francia | | maillot amarillo, ciclismo, París, etapas
m | Maillot amarillo | D | Tour, líder, ciclismo, camiseta
m | Fuera de juego | M | línea, defensa, bandera, delantero
m | VAR | | vídeo, árbitro, revisar, pantalla
m | Ola en el estadio | M | público, levantarse, grada, brazos
m | Spinning | M | bici estática, gimnasio, pedalear, música
m | Zumba | M | bailar, gimnasio, música latina, aeróbic
m | CrossFit | | ejercicios, intenso, cajón, gimnasio
m | Pilates | M | colchoneta, postura, ejercicios, core
m | Escalada en rocódromo | M | presas, pared, cuerda, gimnasio
m | Juegos Olímpicos | | medallas, aros, deportes, cuatro años
d | Hat-trick | | tres goles, partido, jugador, balón
d | Ace | | saque, tenis, directo, punto
d | Tie-break | | tenis, desempate, set, juego
d | Prórroga | | empate, tiempo extra, partido, minutos
f | Carrera de cien metros | M | velocidad, atletismo, tacos de salida, sprint
f | Bicicleta estática | M | pedalear, gimnasio, quieta, sudar
f | Cinta de correr | M | gimnasio, máquina, velocidad
f | Flexiones | M | brazos, suelo, subir, bajar
f | Sentadillas | M | piernas, agacharse, glúteos, ejercicio
f | Estiramientos | M | músculos, calentar, flexibilidad, piernas
f | Voltereta | M | rodar, suelo, gimnasia, cabeza
f | Rueda lateral | M | gimnasia, manos, pies, girar
f | Raqueta de tenis | D | pelota, cuerdas, golpear, pista
f | Canasta | D | baloncesto, aro, red, encestar
f | Portería | D | fútbol, red, gol, postes
f | Balón de baloncesto | D | naranja, botar, canasta, rayas
f | Pelota de tenis | D | amarilla, peluda, raqueta, botar
f | Guantes de boxeo | D | puños, rojo, ring
f | Ring de boxeo | D | cuerdas, esquinas, combate
f | Cinturón negro | D | kárate, judo, maestro, artes marciales
f | Trampolín | M | saltar, piscina, tabla, altura
f | Medalla de plata | D | segundo, podio, olimpiada, premio
f | Medalla de bronce | D | tercero, podio, olimpiada, premio
f | Antorcha olímpica | M | fuego, relevos, Juegos Olímpicos, llama
f | Aros olímpicos | D | cinco, colores, Juegos Olímpicos, anillos
f | Carrera de caballos | M | jinete, hipódromo, meta, galope
f | Pesca | M | caña, anzuelo, río, peces
m | Marcha atlética | M | caminar rápido, cadera, atletismo, talón
m | Lanzamiento de peso | M | bola, girar, atletismo, empujar
m | Lanzamiento de disco | M | girar, plato, atletismo, Discóbolo
m | Triple salto | M | atletismo, tres saltos, foso, arena
m | Carrera de vallas | M | saltar, obstáculos, atletismo, pista
m | Trail running | M | montaña, correr, senderos, desnivel
m | Ironman |  | triatlón, nadar, bici, maratón
m | Escalada en hielo | M | piolet, cascada helada, crampones, frío
m | Alpinismo | M | montaña, cumbre, cuerda, piolet
m | Espeleología | M | cuevas, linterna, casco, cuerda
m | Puenting | M | saltar, puente, cuerda elástica, vértigo
m | Tirolina | M | cable, deslizar, arnés, altura
m | Wakeboard | M | tabla, lancha, saltos, agua
m | Esquí acuático | M | lancha, esquís, agua, cuerda
m | Saltos de palanca | M | piscina, diez metros, piruetas, entrar al agua
m | Barra fija | M | gimnasia, girar, colgarse, agarre
m | Anillas | M | gimnasia, colgar, fuerza, cruz
m | Potro con arcos | M | gimnasia, piernas, girar, manos
m | Barras asimétricas | M | gimnasia, girar, dos alturas, saltar
m | Barra de equilibrio | M | gimnasia, estrecha, saltos
m | Cinta de gimnasia rítmica | M | lazo, girar, ondas
m | Parkour | M | saltar, ciudad, obstáculos, muros
m | BMX | M | bicicleta, saltos, trucos, rampa
m | Mountain bike | M | bicicleta, montaña, barro, cuestas
m | Ciclismo en pista | M | velódromo, curvas, bici, peralte
m | Contrarreloj | M | cronómetro, solo, ciclismo, tiempo
m | Pelotón | M | ciclistas, grupo, carrera, rueda
m | Rally | M | coches, tierra, copiloto, curvas
m | Karting | M | coches pequeños, circuito, carreras, casco
m | Motocross | M | motos, barro, saltos, tierra
m | Trial | M | moto, obstáculos, equilibrio, piedras
m | Dakar |  | rally, desierto, coches, motos
m | MotoGP |  | motos, circuito, Márquez, carreras
m | Gran Premio de Mónaco |  | Fórmula 1, calles, Montecarlo, yates
m | Pit stop | M | ruedas, boxes, cambiar, segundos
m | Bandera a cuadros | D | final, carrera, meta, ganador
m | Kendo | M | espada de bambú, Japón, armadura, gritos
m | Sumo | M | luchadores, Japón, círculo, empujar
m | Lucha grecorromana | M | luchar, tapiz, agarres, olímpica
m | Kickboxing | M | patadas, puños, ring, combate
m | Jiu-jitsu | M | suelo, llaves, Brasil, kimono
m | Defensa personal | M | protegerse, técnicas, llaves, clase
d | Hockey sobre hielo | M | stick, disco, patines, porterías
d | Fútbol sala | M | pabellón, cinco, balón pequeño, futsal
d | Fútbol playa | M | arena, descalzos, chilenas
d | Ultimate frisbee | M | disco, equipos, zona de anotación, lanzar
d | Squash | M | raqueta, pared, pelota, sala
d | Frontón | M | pared, pelota, pala, cancha
d | Cesta punta | M | jai alai, pelota, frontón
d | Tiro olímpico | M | pistola, diana, precisión, puntería
d | Apnea | M | aguantar la respiración, profundidad, bucear, récord
d | Salto de esquí | M | trampolín, nieve, volar, esquís
d | Esquí alpino | M | eslalon, nieve, palos, bajada
d | Eslalon | M | puertas, zigzag, esquí, piragüismo
d | Halfpipe | M | snowboard, tubo, saltos, nieve
d | Duatlón |  | correr, bici, correr, prueba
d | Orientación | M | mapa, brújula, balizas, monte
d | Dragon boat | M | barco dragón, remos, tambor, equipo
d | Croquet | M | mazos, aros, bolas, césped
d | Rana (juego) | M es | lanzar, monedas, boca, tabla
d | Snooker | M | billar, bolas rojas, taco, británico
d | Póker | M t | cartas, fichas, farol, apuesta
d | Bridge |  | cartas, parejas, subasta, triunfo
`
};
