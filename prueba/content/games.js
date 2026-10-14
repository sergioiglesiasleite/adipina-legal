// Videojuegos. Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
export default {
  id: 'games', name: 'Videojuegos', icon: 'game', modes: 'DMP',
  cards: `
f | Minecraft | k 10s | bloques, Creeper, construir, picar
f | Fortnite | 10s | battle royale, bailes, isla, Epic
f | Super Mario Bros. | k 80s | fontanero, Luigi, setas, Nintendo
f | Tetris | k 80s | piezas, líneas, encajar, rusos
f | Mario Kart | k 90s | carreras, plátanos, caparazón, Nintendo
f | Pac-Man | k 80s | fantasmas, comecocos, laberinto, amarillo
f | Animal Crossing | k 20s | isla, Tom Nook, vecinos, nabos
f | Just Dance | k 00s | bailar, coreografías, mando, canciones
f | Candy Crush | 10s | caramelos, móvil, combinar, niveles
f | Clash Royale | 10s | cartas, torres, móvil, Supercell
f | Roblox | k 10s | mundos, avatar, bloques, Robux
f | Pokémon GO | k 10s | móvil, cazar, Pokéball, calle
f | Angry Birds | k 10s | pájaros, cerdos, tirachinas, lanzar
f | Sonic the Hedgehog | k 90s | erizo, azul, anillos, Sega
f | Los Sims | 00s | vida, casa, simoleones, rombo verde
f | Grand Theft Auto | 00s t | coches, robar, ciudad, Rockstar
f | FIFA | 90s | fútbol, EA Sports, Ultimate Team, partidos
f | Space Invaders | 70s | marcianos, nave, disparar, arcade
f | Wii Sports | 00s | Wii, tenis, bolos, mando
f | Among Us | 20s | impostor, nave, tripulantes, votar
f | Call of Duty | 00s t | guerra, disparos, soldados, multijugador
f | Street Fighter | 90s | Ryu, Hadoken, lucha, arcade
f | Crash Bandicoot | 90s | marsupial, cajas, manzanas, PlayStation
f | The Legend of Zelda | 80s | Link, Hyrule, espada, Trifuerza
f | Donkey Kong | 80s | gorila, barriles, plátanos, Nintendo
f | Pokémon Rojo y Azul | k 90s | Game Boy, Pikachu, entrenador, capturar
f | Brain Training | 00s | Nintendo DS, cerebro, sudoku, edad
f | Buscaminas | 90s | Windows, minas, banderas, números
f | Solitario | 90s | cartas, Windows, montones, paciencia
f | Flappy Bird | 10s | pájaro, tuberías, tocar, móvil
f | Subway Surfers | k 10s | correr, tren, grafitero, monedas
m | Halo | 00s
m | Tomb Raider | 90s
m | Resident Evil | 90s t
m | Metal Gear Solid | 90s
m | God of War | 00s t
m | Assassin's Creed | 00s
m | Red Dead Redemption | 10s t
m | The Witcher | 10s t
m | Overwatch | 10s
m | League of Legends | 10s
m | World of Warcraft | 00s
m | Counter-Strike | 00s t
m | Splatoon | 10s
m | Kirby | 90s
m | Super Smash Bros. | 90s
m | Mortal Kombat | 90s t
m | Pro Evolution Soccer | 00s
m | Gran Turismo | 90s
m | Guitar Hero | 00s
m | SingStar | 00s
m | Spyro | 90s
m | Rayman | 90s
m | Professor Layton | 00s
m | Final Fantasy | 90s
m | Monkey Island | 90s
m | Doom | 90s t
m | Half-Life | 90s
m | Fall Guys | 20s
m | Clash of Clans | 10s
m | Genshin Impact | 20s
d | Hollow Knight | 10s
d | Stardew Valley | 10s
d | Portal | 00s
d | The Last of Us | 10s t
d | Dark Souls | 10s
d | Elden Ring | 20s
d | Celeste | 10s
d | Undertale | 10s
d | Cuphead | 10s
d | Hades | 20s
d | Shadow of the Colossus | 00s
d | Ico | 00s
d | Limbo | 10s
d | Inside | 10s
d | Bioshock | 00s
d | Silent Hill | 90s t
d | Castlevania | 80s
d | Metroid | 80s
d | StarCraft | 90s
d | Age of Empires | 90s
d | Los Lemmings | 90s
d | Prince of Persia | 80s
d | Commandos | 90s es
d | La Abadía del Crimen | 80s es
d | Blasphemous | 10s es
d | Rime | 10s es
d | Gris | 10s es
d | Sea of Thieves | 10s
d | Death Stranding | 10s
d | Disco Elysium | 10s
d | Outer Wilds | 10s
d | Journey | 10s
f | Mando de consola | D | botones, jugar, palancas, vibrar
f | Pasar de nivel | M | videojuego, superar, siguiente, pantalla
f | Game over | M | perder, fin, videojuego, vidas
f | Vidas extra | D | corazones, videojuego, champiñón, perder
f | Jefe final | M | último, difícil, nivel, derrotar
f | Recreativa | M | máquina, monedas, salón, joystick
f | Gafas de realidad virtual | M | cabeza, 3D, juego, inmersión
f | Yoshi | M | dinosaurio, verde, lengua, Mario
m | Link | M | Zelda, espada, verde, Hyrule
m | Steve de Minecraft | M | cuadrado, pico, bloques, picar
m | Creeper | M | Minecraft, explotar, verde, silencioso
m | Battle royale | | último, sobrevivir, isla, cien jugadores
m | Partida guardada | | continuar, cargar, progreso, memoria
m | Speedrun | | rápido, récord, terminar, trucos
m | Tutorial | | aprender, principio, instrucciones, primer nivel
d | Easter egg | | secreto, escondido, sorpresa, desarrolladores
d | Lag en una partida | M | retraso, conexión, internet, congelar
d | Konami Code | | arriba, abajo, truco, secuencia
d | Pixel art | D | cuadrados, retro, dibujo, píxeles
d | Retrogaming | | antiguos, consolas, nostalgia, clásicos
d | eSports | | competición, profesional, videojuegos, torneo
d | Glitch | | error, fallo, juego, atravesar
d | Mundo abierto | | explorar, libre, mapa, grande
f | Super Mario Odyssey |  | Cappy, gorra, Nintendo Switch, reinos
f | Super Mario 64 | 90s | castillo, estrellas, Nintendo 64, Peach
f | Luigi's Mansion |
f | Pokémon Amarillo | 90s k | Pikachu, Game Boy, Kanto, entrenador
f | Mario Party |  | tablero, minijuegos, estrellas, dados
f | Wii Fit | 00s | tabla, ejercicio, yoga, Wii
f | Nintendogs | 00s k | perro, Nintendo DS, mascota, cuidar
f | Plantas contra Zombis | 00s | girasol, guisantes, jardín, cerebros
f | Fruit Ninja | 10s | cortar, frutas, dedo, espada
f | Temple Run | 10s | correr, templo, monos, móvil
f | Brawl Stars | 10s | Supercell, peleas, móvil, brawlers
f | Geometry Dash | 10s | cubo, saltar, ritmo, pinchos
f | Rocket League | 10s | coches, fútbol, pelota, turbo
f | Pou | 10s k | mascota, móvil, alimentar, patata
f | Talking Tom | 10s k | gato, repite, móvil, hablar
f | Hay Day | 10s | granja, Supercell, cultivos, móvil
f | Donkey Kong Country | 90s | gorila, plátanos, Diddy, Super Nintendo
f | Kingdom Hearts | 00s | Sora, Disney, llave espada, Final Fantasy
f | Ratchet & Clank | 00s | robot, lombax, armas, PlayStation
f | Jak and Daxter | 00s | comadreja, aventura, PlayStation 2, Naughty Dog
f | Sly Cooper | 00s | mapache, ladrón, PlayStation, bastón
f | Little Big Planet | 00s | Sackboy, crear niveles, muñeco, PlayStation
f | Cut the Rope | 10s | caramelo, cuerda, Om Nom, cortar
f | Wordle | 20s | palabra, cinco letras, verde, diario
f | Pokémon Diamante y Perla | 00s | Nintendo DS, Sinnoh, Dialga, Palkia
f | Tekken | 90s | lucha, King, Heihachi, combos
f | Pong | 70s | raquetas, pelota, Atari, primer videojuego
f | Frogger | 80s | rana, cruzar, carretera, troncos
f | Galaga | 80s | naves, disparar, recreativa, insectos
f | Asteroids | 80s | nave, rocas, disparar, Atari
f | Arkanoid | 80s | ladrillos, nave, pelota, romper
f | Bubble Bobble | 80s | dragones, burbujas, Bub, Bob
m | Mega Man | 80s | robot azul, Dr. Wily, cañón, Capcom
m | Bomberman |  | bombas, laberinto, explotar, muñeco
m | Metal Slug | 90s | soldados, tanques, recreativa, disparos
m | Double Dragon | 80s | hermanos, peleas, calle, recreativa
m | Contra | 80s | soldados, Konami, alienígenas, disparos
m | Ghosts 'n Goblins | 80s | caballero, calzoncillos, armadura, demonios
m | Banjo-Kazooie | 90s | oso, pájaro, Rare, Nintendo 64
m | GoldenEye 007 | 90s | Bond, Nintendo 64, multijugador, pistolas
m | Star Fox | 90s | Fox McCloud, nave Arwing, zorro, Nintendo
m | F-Zero | 90s | carreras futuristas, Captain Falcon, velocidad, Nintendo
m | Paper Mario |  | papel, plano, rol
m | Metroid Prime | 00s | Samus, primera persona, GameCube, alienígenas
m | Fire Emblem |  | estrategia, espadas, Nintendo, tácticas
m | Okami | 00s | lobo, pincel, Amaterasu, Japón
m | Devil May Cry | 00s | Dante, demonios, espada, pistolas
m | Bayonetta | 10s | bruja, pistolas en los tacones, pelo, Platinum
m | Uncharted | 00s | Nathan Drake, tesoros, PlayStation, aventurero
m | Horizon Zero Dawn | 10s | Aloy, máquinas, arco, dinosaurios robot
m | Ghost of Tsushima | 20s | samurái, Jin Sakai, Japón, mongoles
m | Marvel's Spider-Man | 10s | Nueva York, telarañas, Insomniac, PlayStation
m | Batman: Arkham Asylum | 00s | manicomio, Joker, Gotham, murciélago
m | Mass Effect | 00s | comandante Shepard, galaxia, Normandía, rol
m | Fallout |  | refugio, nuclear, Pip-Boy, apocalipsis
m | The Elder Scrolls V: Skyrim | 10s | dragones, Fus Ro Dah, nórdico, rol
m | Diablo |  | infierno, rol, Blizzard, loot
m | Hearthstone | 10s | cartas, Warcraft, taberna, Blizzard
m | Valorant | 20s | shooter, agentes, Riot, táctico
m | PUBG | 10s | battle royale, sartén, isla, paracaídas
m | Dota 2 | 10s | MOBA, Valve, héroes, torres
m | Shovel Knight | 10s | pala, caballero, píxeles, indie
m | Terraria | 10s | 2D, cavar, construir, aventuras
m | Papers, Please | 10s | frontera, pasaportes, inspector, sellos
m | Untitled Goose Game | 10s | oca, travesuras, pueblo, graznar
m | It Takes Two | 20s | cooperativo, pareja, muñecos, divorcio
m | Baldur's Gate 3 | 20s | rol, dados, Larian, Dungeons and Dragons
m | Zelda: Breath of the Wild | 10s | Link, Hyrule, Switch, mundo abierto
m | Zelda: Ocarina of Time | 90s | Link, Nintendo 64, Ganondorf
m | Pikmin | 00s | Olimar, plantitas, nave, colores
m | Ori and the Blind Forest | 10s | espíritu, bosque, luz, plataformas
d | Maniac Mansion | 80s | LucasArts, tentáculo, aventura gráfica
d | Day of the Tentacle | 90s | tentáculo morado, LucasArts, viajes en el tiempo, Bernard
d | Grim Fandango | 90s | Manny Calavera, muertos, LucasArts, México
d | Full Throttle | 90s | moteros, Ben, LucasArts, aventura gráfica
d | Indiana Jones and the Fate of Atlantis | 90s | LucasArts, Atlántida, aventura gráfica, Sophia
d | Wolfenstein 3D | 90s | nazis, laberinto, shooter, id Software
d | Quake | 90s | shooter, id Software, multijugador, rocket jump
d | Duke Nukem 3D | 90s | gafas de sol, chulo, alienígenas, shooter
d | Carmageddon | 90s | coches, atropellos, carreras, polémico
d | Command & Conquer | 90s | estrategia, Tiberio, GDI, Nod
d | Warcraft III | 00s | orcos, humanos, estrategia, Blizzard
d | Civilization | 90s | Sid Meier, imperio, turnos, historia
d | SimCity | 80s | alcalde, ciudad, construir, Maxis
d | RollerCoaster Tycoon | 90s | parque de atracciones, montañas rusas, gestión, visitantes
d | Theme Hospital | 90s | gestión, enfermedades, Bullfrog
d | Pc Fútbol | 90s es | mánager, Dinamic, Liga, gestión
d | Army Moves | 80s es | Dinamic, Spectrum, soldado, desierto
d | Livingstone, supongo | 80s es | Opera Soft, explorador, África, Spectrum
d | Navy Moves | 80s es | Dinamic, buzo, submarino, Spectrum
d | Psychonauts | 00s | Raz, mentes, campamento, Double Fine
d | Braid | 00s | tiempo, rebobinar, indie, puzles
d | Fez | 10s | 3D, girar, sombrero, indie
d | Super Meat Boy | 10s | carne, sierras, indie, difícil
d | Return of the Obra Dinn | 10s | barco, investigador, muertes, reloj
d | What Remains of Edith Finch | 10s | casa, familia, muertes, historias
d | Firewatch | 10s | torre de vigilancia, bosque, walkie, Wyoming
d | Katamari Damacy | 00s | bola, rodar, Príncipe, pegar cosas
d | Parappa the Rapper | 90s | perro rapero, ritmo, PlayStation, gorro
d | Crazy Taxi | 90s | Sega, recoger, música punk
d | Jet Set Radio | 00s | grafitis, patines, Sega, Tokio
d | Shenmue | 90s | Ryo Hazuki, Dreamcast, Yokosuka, venganza
d | Earthbound | 90s | Ness, gorra, rol, Super Nintendo
d | Chrono Trigger | 90s | viajes en el tiempo, Crono, rol, Square
`
};
