// Anime y manga. Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
// Goku, Naruto, Doraemon, Shin Chan, Pikachu, Sailor Moon, Oliver y Benji o Heidi están en Dibujos animados.
export default {
  id: 'anime', name: 'Anime y manga', icon: 'tv', modes: 'DMP',
  cards: `
f | Dragon Ball | | Goku, bolas, Saiyan, Shenron
f | Pokémon | k | Pikachu, Ash, pokéball, entrenador
f | One Piece | | Luffy, piratas, sombrero de paja, tesoro
f | Vegeta | | Saiyan, príncipe, Goku, orgullo
f | Las bolas de dragón | D | siete, deseo, estrellas, Shenron
f | Kamehameha | M | Goku, onda, energía, manos
f | Super Saiyan | | pelo, rubio, transformación, Goku
f | Ash Ketchum | k | Pokémon, entrenador, gorra, Pikachu
f | Pokéball | D k | bola, captura, roja, blanca
f | Charmander | D k | fuego, cola, lagartija, naranja
f | Bulbasaur | D k | planta, bulbo, verde, semilla
f | Squirtle | D k | tortuga, agua, azul, caparazón
f | Equipo Rocket | k | Jessie, James, Meowth, villanos
f | Mi vecino Totoro | D k | Ghibli, criatura, bosque, autobús gato
f | Studio Ghibli | | Miyazaki, Totoro, animación, japonés
f | Manga | | cómic, japonés, viñetas, leer al revés
f | Anime | | dibujos, japonés, series, animación
f | Cosplay | M | disfraz, convención, personaje, fan
f | Otaku | | fan, anime, manga, friki
f | Kawaii | M | mono, adorable, japonés, rosa
f | Luffy | | One Piece, goma, sombrero, pirata
f | Ataque a los Titanes | t | gigantes, muros, Eren, comer
f | Demon Slayer | t | Tanjiro, Nezuko, demonios, espada
f | Death Note | t | Light, Ryuk, cuaderno, nombres
f | Digimon | k | digimundo, Agumon, digivice, monstruos
f | Yu-Gi-Oh! | | cartas, duelo, Yugi, pirámide
f | Beyblade | k | peonzas, girar, batalla, lanzar
f | Hamtaro | k | hámster, pipas, amigos, Laura
f | Bulma | | Dragon Ball, científica, pelo azul, Capsule Corp
f | Krilin | | Dragon Ball, calvo, monje, Goku
f | Freezer | | Dragon Ball, villano, Namek, emperador
f | Piccolo | | Dragon Ball, verde, namekiano, antenas
f | Son Gohan | | hijo de Goku, Dragon Ball, Cell, estudiante
f | Sasuke | | Naruto, Uchiha, rival, Sharingan
f | Kakashi | | Naruto, máscara, maestro, ninja copia
f | Mewtwo | k | Pokémon, clon, psíquico, legendario
f | Jigglypuff | D k | Pokémon, canta, dormir, globo rosa
f | Eevee | D k | Pokémon, evoluciones, zorro, marrón
f | Snorlax | D k | Pokémon, dormir, gordo, comer
m | Spy x Family | | Anya, espía, familia, Loid
m | My Hero Academia | | Deku, superpoderes, All Might, instituto
m | Jujutsu Kaisen | t | Itadori, Gojo, maldiciones, dedo
m | Fullmetal Alchemist | | Edward, alquimia, hermanos, armadura
m | Hunter x Hunter | | Gon, cazador, Killua, examen
m | Bleach | | Ichigo, shinigami, espada, almas
m | Evangelion | t | robots, Shinji, ángeles, piloto
m | Akira | t | Neo-Tokio, moto roja, Tetsuo, Kaneda
m | Ranma ½ | 90s | agua fría, chica, artes marciales, panda
m | Doctor Slump | 80s | Arale, Pueblo Pingüino, Senbei, robot
m | Kimagure Orange Road | 80s | Johnny, Sabrina, poderes, Cris
m | La princesa Mononoke | | Ghibli, lobos, bosque, San
m | El castillo ambulante | | Ghibli, Howl, Sophie, bruja
m | Ponyo en el acantilado | k | Ghibli, pez, niña, mar
m | Nicky, la aprendiz de bruja | k | Ghibli, escoba, gato, reparto
m | Hayao Miyazaki | | Ghibli, director, Totoro, japonés
m | Akira Toriyama | | Dragon Ball, Doctor Slump, dibujante, japonés
m | All Might | | My Hero Academia, héroe, sonrisa, símbolo
m | Anya Forger | | Spy x Family, telepatía, cacahuetes, niña
m | Nezuko | | Demon Slayer, bambú, demonio, hermana
m | Tanjiro | | Demon Slayer, cicatriz, espada, hermano
m | Light Yagami | t | Death Note, Kira, cuaderno, estudiante
m | Ryuk | t | Death Note, shinigami, manzanas, alas
m | Eren Jaeger | t | Titanes, muros, transformación, Mikasa
m | Zoro | | One Piece, tres espadas, verde, perdido
m | Gojo Satoru | t | Jujutsu Kaisen, venda, ojos azules, profesor
m | Shenron | D | dragón, deseos, bolas, verde
m | Cell | | Dragon Ball, androide, perfecto, torneo
m | Majin Buu | | Dragon Ball, rosa, chicle, gordo
m | Torneo de artes marciales | | Dragon Ball, combate, luchadores, tatami
m | Ramen de Naruto | D | fideos, bol, Ichiraku, comida
m | Banda de Konoha | D | ninja, frente, hoja, metal
m | Sharingan | D | ojo rojo, Uchiha, Naruto, poder
m | Salón del Manga de Barcelona | es | convención, cosplay, otakus, feria
m | Chibi | D | pequeño, cabezón, adorable, dibujo
m | Mecha | | robots gigantes, pilotos, Gundam, Evangelion
m | Ojos de anime | D | grandes, brillo, dibujo, personaje
m | Leer manga al revés | M | derecha, izquierda, japonés, páginas
m | Opening de anime | | canción, inicio, serie, japonés
m | Gundam | | robot, piloto, mecha, guerra
m | Pokédex | D k | enciclopedia, Pokémon, Ash, aparato
m | Profesor Oak | k | Pokémon, laboratorio, Kanto, abuelo
m | Sakura, cazadora de cartas | k | Clow, magia, Kero, báculo
d | Cowboy Bebop | | Spike, cazarrecompensas, nave, jazz
d | Ghost in the Shell | t | ciborg, Motoko, policía, red
d | Chainsaw Man | t | motosierra, Denji, demonio, Pochita
d | Naruto Shippuden | | segunda parte, ninja, Akatsuki, ninjas
d | Akatsuki | | nubes rojas, Naruto, organización, capas
d | Itachi Uchiha | | Naruto, hermano, Sasuke, Akatsuki
d | Kenshin, el guerrero samurái | 90s | espada, cicatriz, katana, vagabundo
d | Lupin III | | ladrón, chaqueta roja, Jigen, Zenigata
d | Capitán Harlock | 80s | pirata, espacio, parche, Arcadia
d | Astroboy | | robot, niño, cohetes, Tezuka
d | Osamu Tezuka | | dios del manga, Astroboy, autor, japonés
d | Rumiko Takahashi | | Ranma, Inuyasha, mangaka, autora
d | Inuyasha | | demonio perro, Kagome, pozo, collar
d | Haikyuu!! | | voleibol, Hinata, cuervos, instituto
d | Slam Dunk | 90s | baloncesto, Hanamichi, pelirrojo, instituto
d | Mob Psycho 100 | | psíquico, Mob, Reigen, emociones
d | Vinland Saga | t | vikingos, Thorfinn, venganza, Islandia
d | Frieren | 20s | elfa, maga, viaje, héroes
d | Your Name | | Kimi no Na wa, cometa, cuerpos, Shinkai
d | La tumba de las luciérnagas | t | Ghibli, guerra, hermanos, Setsuko
d | Porco Rosso | | Ghibli, cerdo, piloto, hidroavión
d | Shōnen | | manga, chicos, peleas, aventuras
d | Shōjo | | manga, chicas, romance, ojos grandes
d | Isekai | | otro mundo, reencarnar, camión, fantasía
d | Mangaka | | autor, manga, dibujante, japonés
d | Sensei | | maestro, profesor, japonés, respeto
d | Senpai | | compañero mayor, japonés, notar, escuela
d | Nakama | | amigos, One Piece, tripulación, compañeros
d | Dattebayo | | Naruto, coletilla, ninja, frase
d | Pokémon Shiny | D | brillante, color raro, variocolor, captura
f | Dragon Ball Z |  | Goku, Saiyans, Cell, Freezer
f | Dragon Ball Super |  | Goku, dioses, Bills, torneo
f | Bills |  | dios de la destrucción, gato, Dragon Ball, Whis
f | Trunks |  | Dragon Ball, futuro, espada, pelo lila
f | Goten |  | Dragon Ball, hijo de Goku, fusión, niño
f | Fusión | M | Goku, Vegeta, danza, Gogeta
f | Nube Kinton | D | Goku, nube voladora, amarilla, pureza
f | Radar del dragón | D | Bulma, bolas de dragón, buscar, pantalla
f | Semilla del ermitaño | D | Dragon Ball, curar, Karin, judía
f | Maestro Roshi |  | Dragon Ball, Mutenroshi, tortuga, gafas de sol
f | Yamcha |  | Dragon Ball, bandido, Saibaman, débil
f | Ten Shin Han |  | Dragon Ball, tres ojos, calvo, artes marciales
f | Androide 18 |  | Dragon Ball, rubia, Krilin
f | Mr. Satán |  | Dragon Ball, campeón, afro, fanfarrón
f | Togepi | D k | Pokémon, huevo, Misty, bebé
f | Psyduck | D k | Pokémon, pato, dolor de cabeza, amarillo
f | Meowth | k | Pokémon, gato, Equipo Rocket, habla
f | Misty | k | Pokémon, pelirroja, agua, Ash
f | Brock | k | Pokémon, criador, ojos cerrados, Ash
f | Gengar | D k | Pokémon, fantasma, morado, sonrisa
f | Lucario | D | Pokémon, aura, chacal, lucha
f | Gyarados | D | Pokémon, serpiente marina, Magikarp, furioso
f | Magikarp | D k | Pokémon, salpicadura, pez, inútil
f | Mew | D k | Pokémon, rosa, legendario, pequeño
f | Sanji |  | One Piece, cocinero, patadas, cigarro
f | Nami |  | One Piece, navegante, mapas, mandarinas
f | Usopp |  | One Piece, nariz larga, mentiroso, tirador
f | Chopper |  | One Piece, reno, médico, sombrero rosa
f | Fruta del diablo | D | One Piece, poderes, no nadar, comer
f | Shanks |  | One Piece, pelirrojo, sombrero, emperador
f | Hinata |  | Naruto, tímida, ojos blancos, Hyuga
f | Sakura Haruno |  | Naruto, pelo rosa, médica, equipo 7
f | Rasengan | M | Naruto, esfera, mano, energía
f | Clones de sombra | M | Naruto, copias, jutsu, multiplicarse
f | Correr como Naruto | M | brazos atrás, inclinado, ninja, carrera
f | Kurama |  | zorro de nueve colas, Naruto, demonio, naranja
m | Shikamaru |  | Naruto, perezoso, estratega, sombras
m | Gaara |  | Naruto, arena, desierto, Kazekage
m | Orochimaru |  | Naruto, serpiente, villano, sannin
m | Jiraiya |  | Naruto, sannin, ermitaño pervertido, sapos
m | Tsunade |  | Naruto, Hokage, médica, fuerza
m | Rock Lee |  | Naruto, cejas, taijutsu, mallas verdes
m | Hokage |  | Naruto, líder, aldea, sombrero
m | Uchiha |  | clan, Sharingan, Sasuke, Itachi
m | Konoha |  | Naruto, aldea, hoja, ninjas
m | Mikasa Ackerman |  | Ataque a los Titanes, bufanda roja, Eren, espadas
m | Levi Ackerman |  | Ataque a los Titanes, capitán, limpieza, fuerte
m | Inosuke |  | Demon Slayer, máscara de jabalí, dos espadas, salvaje
m | Zenitsu |  | Demon Slayer, miedica, rayo, rubio
m | Rengoku |  | Demon Slayer, pilar de la llama, tren, ¡corazón ardiente!
m | Muzan |  | Demon Slayer, demonio original, villano, sombrero
m | L (Death Note) |  | detective, Death Note, dulces, sentado
m | Bakugo |  | My Hero Academia, explosiones, gritón, rival
m | Todoroki |  | My Hero Academia, fuego y hielo, mitad, héroe
m | Sukuna |  | Jujutsu Kaisen, rey de las maldiciones, dedos, tatuajes
m | Loid Forger |  | Spy x Family, espía, Twilight, padre
m | Yor Forger |  | Spy x Family, asesina, madre, Princesa Espinas
m | Edward Elric |  | Fullmetal Alchemist, alquimista, brazo de metal, bajito
m | Alphonse Elric |  | Fullmetal Alchemist, armadura, hermano, alma
m | Killua |  | Hunter x Hunter, asesino, pelo blanco, Gon
m | Saitama |  | One Punch Man, calvo, un puñetazo, héroe
m | One Punch Man |  | Saitama, calvo, héroe, un golpe
m | Usagi Tsukino |  | Sailor Moon, coletas, Luna, gato
m | Tuxedo Mask |  | Sailor Moon, rosa, antifaz, chistera
m | Kero |  | Sakura, guardián, peluche, cartas
m | Sin Cara |  | El viaje de Chihiro, máscara, espíritu, negro
m | Gatobús |  | Totoro, gato, autobús, sonrisa
m | Calcifer |  | El castillo ambulante, demonio de fuego, chimenea, Howl
m | Crunchyroll |  | anime, plataforma, streaming, naranja
m | Shonen Jump |  | revista, manga, Japón, semanal
d | Tokyo Ghoul | t | Kaneki, necrófagos, máscara, pelo blanco
d | Parasyte | t | mano, alienígena, Migi, Shinichi
d | Steins;Gate |  | viajes en el tiempo, microondas, Okabe, El Psy Kongroo
d | Code Geass |  | Lelouch, rebelión, mecha
d | Sword Art Online |  | realidad virtual, Kirito, videojuego, atrapados
d | Re:Zero |  | Subaru, volver a morir, isekai, Emilia
d | Konosuba |  | isekai, Kazuma, diosa inútil, comedia
d | Violet Evergarden |  | cartas, muñeca de recuerdos, guerra, prótesis
d | Fruits Basket |  | zodiaco, transformarse, Tohru, abrazo
d | Nana |  | dos Nanas, punk, Tokio, música
d | Bocchi the Rock! | 20s | guitarra, tímida, banda, ansiedad
d | Oshi no Ko | 20s | idol, reencarnación, gemelos, industria
d | Blue Lock | 20s | fútbol, delanteros, egoísmo, prisión
d | Kaiju No. 8 | 20s | monstruo, Kafka, kaijus, limpiador
d | Dandadan | 20s | alienígenas, fantasmas, Momo, Okarun
d | Solo Leveling | 20s | Sung Jin-Woo, mazmorras, cazador, subir de nivel
d | Dr. Stone |  | ciencia, petrificación, Senku, civilización
d | The Promised Neverland |  | orfanato, niños, demonios, huida
d | Berserk | t | Guts, espada gigante, Griffith, oscuro
d | JoJo's Bizarre Adventure |  | Stands, poses, Joestar, ¡ORA ORA!
d | Gintama |  | samuráis, alienígenas, comedia, Gintoki
d | Great Teacher Onizuka | 90s | profesor, ex pandillero, moto, alumnos
d | Yu Yu Hakusho | 90s | Yusuke, detective espiritual, mundo de los demonios, Kurama
d | City Hunter | 80s | Ryo Saeba, cazador, Tokio, mazo
d | Perfect Blue | t | Satoshi Kon, idol, actriz, thriller
d | Paprika |  | Satoshi Kon, sueños, detective, terapia
d | Satoshi Kon |  | director, Perfect Blue, Paprika, sueños
d | Mamoru Hosoda |  | director, Belle, Los niños lobo, Summer Wars
d | Makoto Shinkai |  | director, Your Name, cielos, El tiempo contigo
d | Eiichiro Oda |  | One Piece, mangaka, autor, piratas
d | Masashi Kishimoto |  | Naruto, mangaka, autor, ninjas
d | Hajime Isayama |  | Ataque a los Titanes, mangaka, autor, muros
d | Naoko Takeuchi |  | Sailor Moon, mangaka, autora, guerreras
d | Clamp |  | grupo de mangakas, Sakura, Code Geass, chicas
`
};
