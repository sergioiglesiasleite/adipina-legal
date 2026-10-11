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
`
};
