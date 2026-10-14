// Ropa, moda y complementos. Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
export default {
  id: 'clothes', name: 'Ropa y complementos', icon: 'star', modes: 'DM', ages: 'kids',
  cards: `
f | Camiseta | | manga corta, algodón, verano, estampado
f | Pantalón | | piernas, bolsillos, cremallera, largo
f | Falda | | cintura, piernas, corta, larga
f | Vestido | | fiesta, una pieza, largo, tirantes
f | Zapatillas de deporte | | correr, cordones, suela, gimnasio
f | Botas | | caña alta, invierno, pies, cuero
f | Sandalias | | verano, pies, tiras, dedos
f | Chanclas | | playa, piscina, dedo, verano
f | Abrigo | | invierno, frío, largo, botones
f | Chaqueta | | encima, botones, americana, mangas
f | Jersey | | lana, cuello, invierno, punto
f | Sudadera | | capucha, algodón, deporte, cómoda
f | Pijama | | dormir, cama, noche, cómodo
f | Bañador | | piscina, nadar, playa, verano
f | Bikini | | playa, dos piezas, verano, sol
f | Corbata | | cuello, nudo, traje, oficina
f | Sombrero | | cabeza, ala, sol, vaquero
f | Gorra | | visera, cabeza, deporte, sol
f | Gafas de sol | | ojos, sol, oscuras, verano
f | Guantes | | manos, frío, dedos, lana
f | Cinturón | | pantalón, hebilla, cintura, cuero
f | Calzoncillos | | ropa interior, debajo, slip, bóxer
f | Vaqueros | | tela vaquera, azul, pantalón, denim
f | Chándal | | deporte, cómodo, gimnasio, pantalón
f | Uniforme del colegio | | igual, alumnos, falda, escudo
f | Disfraz | | carnaval, Halloween, vestirse, personaje
f | Zapatillas de estar por casa | | pantuflas, cómodas, pies, sofá
f | Mallas | | ajustadas, deporte, piernas, elásticas
f | Pantalón corto | | verano, piernas, rodillas, calor
f | Camisa | | botones, cuello, mangas, planchar
f | Pendientes | | orejas, joyas, agujero, colgar
f | Collar | | cuello, perlas, joya, cadena
m | Chubasquero | | lluvia, impermeable, capucha, amarillo
m | Peto | | tirantes, vaquero, niños, bolsillo
m | Mono de trabajo | | taller, una pieza, mecánico, cremallera
m | Kimono | | Japón, cinturón, seda, karate
m | Poncho | | México, lana, agujero, cabeza
m | Capa | | superhéroe, espalda, larga, vampiro
m | Bata | | médico, blanca, casa, laboratorio
m | Delantal | | cocina, mancharse, atar, cocinero
m | Babero | | bebé, comer, cuello, manchas
m | Leotardos | | piernas, gruesos, invierno, niños
m | Medias | | piernas, finas, transparentes, carreras
m | Tacones | | altos, zapatos, elegante, caminar
m | Mocasines | | zapatos, sin cordones, cuero, cómodos
m | Alpargatas | es | esparto, verano, tela, suela
m | Katiuskas | es | botas de agua, lluvia, charcos, goma
m | Boina | | cabeza, lana, abuelo, plana
m | Chistera | | sombrero de copa, mago, alto, conejo
m | Turbante | | cabeza, tela, enrollado, India
m | Pañuelo | | cuello, nariz, tela, bolsillo
m | Riñonera | | cintura, bolsa, cremallera, turista
m | Bolso | | llevar, asa, cosas, colgar
m | Pulsera | | muñeca, joya, abalorios, brazo
m | Anillo | | dedo, boda, oro, compromiso
m | Corona | | rey, reina, cabeza, oro
m | Diadema | | pelo, cabeza, sujetar, plástico
m | Coletero | | pelo, coleta, goma, sujetar
m | Horquilla | | pelo, sujetar, metal, pinza
m | Tirantes | | pantalón, hombros, sujetar, elásticos
m | Pajarita | | cuello, lazo, elegante, esmoquin
m | Chaleco | | sin mangas, traje, botones, encima
m | Bermudas | | pantalón corto, rodilla, verano, bolsillos
m | Calentadores | 80s | piernas, aeróbic, lana, tobillos
d | Mantón de Manila | es | flecos, bordado, seda, chotis
d | Peineta | es | pelo, mantilla, Semana Santa, carey
d | Traje de flamenca | es | volantes, lunares, Feria, faralaes
d | Traje de luces | es t | torero, bordado, chaquetilla, montera
d | Montera | es | torero, sombrero, negro, plaza
d | Sombrero cordobés | es | ala ancha, Córdoba, negro, plano
d | Txapela | es | boina, vasca, grande, Euskadi
d | Gabardina | | impermeable, detective, cinturón, larga
d | Esmoquin | | elegante, pajarita, negro, gala
d | Frac | | cola, elegante, chaqué, director
d | Cárdigan | | chaqueta de punto, botones, lana, abuela
d | Kilt | | falda, Escocia, cuadros, hombres
d | Sari | | India, tela, enrollar, colores
d | Toga | | Roma, juez, sábana, graduación
d | Sotana | | cura, negra, larga, botones
d | Hábito de monja | | toca, convento, negro, velo
d | Tutú | | ballet, bailarina, falda, tul
d | Corsé | | apretar, cintura, cordones, antiguo
d | Miriñaque | | falda, aro, antiguo, armazón
d | Gorguera | | cuello, encaje, plisado, Renacimiento
d | Polainas | | tobillos, botas, cubrir, polvo
d | Monóculo | | un ojo, cristal, elegante, cadena
d | Gemelos de camisa | | puños, botones, elegantes, metal
d | Fular | | pañuelo, cuello, ligero, seda
d | Batín | | casa, bata, cinturón, terciopelo
d | Bombín | | sombrero, redondo, Charlot, negro
d | Sombrero panamá | | paja, verano, ala, blanco
d | Babuchas | | zapatillas, Marruecos, punta, cuero
d | Zuecos | | madera, Holanda, zapatos, enfermeras
d | Chilaba | | Marruecos, túnica, capucha, larga
d | Escafandra | | buzo, casco, sumergirse, traje
f | Gorro de lana | D | cabeza, invierno, pompón, frío
f | Calcetines | D | pies, pares, desparejados, zapatos
f | Manoplas | D | manos, nieve, lana, dedos juntos
f | Orejeras | D | frío, orejas, invierno, peludas
f | Botas de agua | M | charcos, lluvia, goma, saltar
f | Mochila escolar | D | libros, espalda, colegio, cremallera
f | Reloj de pulsera | D | hora, muñeca, correa, agujas
f | Gafas graduadas | D | ver, cristales, montura, óptica
f | Zapatos de charol | D | brillantes, negros, fiesta, niños
f | Albornoz | M | ducha, secarse, toalla, bata
m | Chaleco reflectante | D | carretera, amarillo, coche, visible
m | Traje de neopreno | M | surf, agua, frío, ajustado
m | Plumífero | D | abrigo, plumas, invierno, acolchado
m | Bata de cola | M es | flamenca, volantes, baile, cola larga
m | Mantilla | es | peineta, Semana Santa, encaje, negra
m | Sombrero de copa | D | mago, conejo, alto, elegante
m | Camiseta de fútbol | D | equipo, dorsal, número, jugador
m | Traje de astronauta | M | casco, espacio, oxígeno, blanco
m | Chubasquero de plástico | D | lluvia, capucha, transparente, mojarse
m | Gorro de cocinero | D | chef, alto, blanco, cocina
m | Gafas de esquiar | D | nieve, ojos, montaña, esquí
m | Bolsa de deporte | D | gimnasio, ropa, asa, cremallera
d | Bombachos | | pantalón, anchos, abombados, rodillas
d | Leggings | | mallas, ajustados, piernas, deporte
d | Gola | | cuello, volantes, antiguo, plisado
d | Capote | M | torero, rosa, capa, toro
d | Mono de esquí | D | nieve, entero, acolchado, montaña
d | Pañuelo de bolsillo | D | chaqueta, traje, pico, elegante
f | Zapatos | D | pies, cordones, suela, tienda
f | Botines | D | botas cortas, tobillo, zapatos, invierno
f | Zapatillas de ballet | D | punta, bailarina, rosa, cintas
f | Botas de montaña | D | senderismo, suela gruesa, monte, cordones
f | Botas de vaquero | D | oeste, tacón, espuelas, cuero
f | Cordones | D | atar, zapatos, lazo, nudo
f | Camiseta de tirantes | D | verano, hombros, sin mangas, calor
f | Camiseta de manga larga | D | brazos, invierno, mangas, algodón
f | Blusa | D | camisa de mujer, botones, elegante, tela fina
f | Top | D | corto, camiseta, ombligo, verano
f | Body | D | bebé, pieza única, corchetes, entrepierna
f | Pelele | D | bebé, pijama de una pieza, pies, dormir
f | Minifalda | D | corta, falda, piernas, años sesenta
f | Pantalón de pana | D | rayas, tela, otoño, abuelo
f | Chaqueta vaquera | D | tela vaquera, azul, botones, cazadora
f | Cazadora de cuero | D | motero, negra, cremallera, chupa
f | Anorak | D | abrigo, capucha, montaña, impermeable
f | Parka | D | abrigo, capucha, pelo, largo
f | Forro polar | D | abrigo, suave, montaña, cremallera
f | Pasamontañas | D | cara, agujeros, frío, esquí
f | Visera | D | sol, frente, tenis, gorra sin copa
f | Sombrero de paja | D | sol, playa, verano, ala
f | Sujetador | D | ropa interior, mujer, copas, tirantes
f | Bragas | D | ropa interior, mujer, braga, algodón
f | Camiseta interior | D | debajo, blanca, tirantes, abuelo
m | Enagua | D | debajo de la falda, encaje, antigua, blanca
m | Faja | D | cintura, apretar, abuela, tirar
m | Camisón | D | dormir, largo, abuela, noche
m | Vestido de novia | D | blanco, boda, cola, velo
m | Velo de novia | D | boda, cara, tul
m | Traje de chaqueta | D | americana, pantalón, oficina, corbata
m | Americana | D | chaqueta, traje, botones, solapas
m | Chaqué | D | boda, padrino, faldones, chaleco
m | Vestido de fiesta | D | elegante, largo, gala, brillo
m | Jersey de cuello alto | D | cuello vuelto, punto, invierno, Steve Jobs
m | Jersey de rombos | D | punto, abuelo, años 80
m | Jersey navideño | D | renos, Navidad, feo, punto
m | Trenca | D | abrigo, botones de palillo, capucha, colegio
m | Estola | D | piel, hombros, elegante, gala
m | Pashmina | D | chal, hombros, lana fina, abrigar
m | Capucha | D | cabeza, sudadera, lluvia, cubrir
m | Alfiler de corbata | D | sujetar, oro, elegante
m | Broche | D | joya, alfiler, solapa, adorno
m | Colgante | D | collar, cadena, joya, cuello
m | Gargantilla | D | collar corto, cuello, ajustado, joya
m | Tobillera | D | tobillo, pulsera, pie, adorno
m | Piercing | D | agujero, aro, nariz, ombligo
m | Reloj de bolsillo | D | cadena, chaleco, antiguo, tapa
m | Maletín | D | ejecutivo, asa, documentos, cuero
m | Bandolera | D | bolso, cruzado, correa, hombro
m | Sombrero de fieltro | D | ala, elegante, Indiana Jones, cinta
m | Gorro de dormir | D | borla, noche, Scrooge, pijama
m | Gorro de aviador | D | orejeras, piloto, gafas, cuero
m | Casco de moto | D | cabeza, proteger, visera, motorista
m | Casco de bici | D | cabeza, ciclista, proteger, aire
m | Zapatillas con luces | D | niños, brillar, pisar, colores
m | Zapatillas con ruedas | D | Heelys, deslizar, talón, niños
m | Zapatos de claqué | D | baile, chapa, ruido, zapateado
m | Botas altas | D | rodilla, tacón, invierno, mosqueteras
m | Botas de esquí | D | rígidas, nieve, esquís, hebillas
m | Plataformas | D | zapatos altos, suela gruesa, Spice Girls, años 90
d | Abarcas | D es | Menorca, sandalias, cuero, neumático
d | Madreñas | D es | Asturias, madera, zuecos, barro
d | Botas camperas | D es | campo, cuero, caña, montar
d | Náuticos | D | barco, cuero, cordón lateral, pijo
d | Merceditas | D | zapatos de niña, hebilla, charol, colegio
d | Bailarinas (zapatos) | D | planas, mujer, cómodas
d | Cuñas | D | tacón, esparto, verano, sandalias
d | Sandalias de gladiador | D | tiras, piernas, romanas, verano
d | Caftán | D | túnica, larga, Marruecos, holgada
d | Túnica | D | larga, holgada, romana, tela
d | Hanbok | D | Corea, traje tradicional, falda, colores
d | Qipao | D | China, vestido, cuello mandarín, seda
d | Dirndl | D | Alemania, Oktoberfest, delantal, corsé
d | Lederhosen | D | Alemania, pantalones de cuero, tirantes, Oktoberfest
d | Barretina | D es | Cataluña, gorro rojo, tradicional, caído
d | Cachirulo | D es | Aragón, pañuelo, cabeza, baturro
d | Zaragüelles | D es | Murcia, huertano, pantalones, blancos
d | Refajo | D es | falda, tradicional, lana, regional
d | Traje regional | D es | fiestas, tradicional, pueblo, región
d | Jubón | D | antiguo, ajustado, Renacimiento, caballero
d | Calzas | D | medievales, piernas, ajustadas, hombre
d | Mitones | D | guantes sin dedos, punta, frío, lana
d | Yukata | D | Japón, verano, algodón, kimono ligero
d | Obi | D | cinturón japonés, kimono, ancho, lazo
d | Geta | D | sandalias japonesas, madera, dientes, Japón
d | Kufiya | D | pañuelo, Oriente Medio, cuadros, cabeza
d | Hiyab | D | velo, cabeza, mujer, musulmana
d | Capa española | D es | larga, paño, Madrid, castiza
d | Levita | D | chaqueta larga, siglo XIX, elegante, faldones
d | Fajín | D | cintura, militar, tela, banda
d | Charreteras | D | hombros, militar, flecos, uniforme
d | Hombreras | D | relleno, hombros, años 80, chaqueta
d | Babi | D es | colegio, cuadros, niños, bata
d | Mandil | D | delantal, cocina, cuero, herrero
d | Chaleco salvavidas | D | barco, flotar, naranja, emergencia
d | Traje de apicultor | D | abejas, careta, red, blanco
d | Traje ignífugo | D | bombero, fuego, plateado, proteger
`
};
