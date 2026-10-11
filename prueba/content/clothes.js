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
`
};
