// Cuerpo humano y salud. Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
export default {
  id: 'body', name: 'Cuerpo humano', icon: 'person', modes: 'DMP', ages: 'kids',
  cards: `
f | Ojo | | ver, mirar, pestañas, pupila
f | Nariz | | oler, respirar, mocos, cara
f | Boca | | comer, hablar, dientes, labios
f | Oreja | | oír, escuchar, cabeza, pendiente
f | Mano | | dedos, coger, palma, cinco
f | Pie | | andar, dedos, zapato, calcetín
f | Rodilla | | pierna, doblar, rótula, arrodillarse
f | Codo | | brazo, doblar, apoyar, punta
f | Hombro | | brazo, cuello, mochila, encogerse
f | Cabeza | | pelo, cerebro, gorro, pensar
f | Pelo | | cabeza, peine, peluquería, rubio
f | Diente | | morder, boca, cepillar, muela
f | Lengua | | boca, saborear, sacar, rosa
f | Ombligo | | barriga, agujero, bebé, centro
f | Uña | | dedo, cortar, pintar, morder
f | Dedo | | mano, cinco, señalar, anillo
f | Barriga | | tripa, comer, ombligo, estómago
f | Espalda | | detrás, columna, dolor, mochila
f | Corazón | | latir, sangre, amor, pecho
f | Cerebro | | pensar, cabeza, inteligencia, neuronas
f | Pulmones | | respirar, aire, pecho, oxígeno
f | Esqueleto | | huesos, calavera, Halloween, cuerpo
f | Hueso | | esqueleto, duro, perro, romper
f | Sangre | | roja, herida, venas, donar
f | Músculo | | fuerza, bíceps, gimnasio, brazo
f | Ceja | | ojo, pelos, frente, levantar
f | Pestañas | | ojo, rímel, parpadear, largas
f | Labios | | boca, besar, pintalabios, rojos
f | Mejilla | | cara, colorada, moflete, beso
f | Barbilla | | cara, mentón, abajo, barba
f | Cuello | | cabeza, bufanda, girar, garganta
f | Tobillo | | pie, torcer, pierna, articulación
f | Talón | | pie, detrás, zapato, Aquiles
f | Pecas | | cara, manchitas, sol, pelirrojo
m | Cadera | | huesos, caderas, bailar, cintura
m | Costillas | | pecho, huesos, curvas, cosquillas
m | Columna vertebral | | espalda, vértebras, recta, huesos
m | Estómago | | digestión, comida, barriga, ácido
m | Hígado | | órgano, filtrar, derecho, abdomen
m | Riñones | | órganos, orina, dos, filtrar
m | Piel | | tocar, sol, tacto, cubrir
m | Lunar | | mancha, piel, marrón, punto
m | Hoyuelos | | mejillas, sonrisa, agujeritos, cara
m | Bigote | | pelo, labio, encima, Dalí
m | Barba | | pelo, cara, afeitar, hípster
m | Arrugas | | mayores, piel, frente, edad
m | Canas | | pelo blanco, mayores, gris, edad
m | Resfriado | | mocos, estornudos, catarro, frío
m | Fiebre | | temperatura, termómetro, caliente, enfermo
m | Venda | | herida, envolver, gasa, enfermería
m | Escayola | | pierna rota, firmar, hueso, yeso
m | Muletas | | apoyarse, pierna, cojear, caminar
m | Silla de ruedas | | empujar, sentado, accesible, rampa
m | Jarabe | | medicina, cuchara, tos, sabor
m | Inyección | | aguja, pinchazo, vacuna, enfermera
m | Estetoscopio | | médico, escuchar, corazón, pecho
m | Varicela | | granitos, picor, niños, manchas
m | Alergia | | estornudos, polen, picor, reacción
m | Piojos | | cabeza, picor, lendreras, colegio
m | Caries | | dientes, dentista, agujero, azúcar
m | Brackets | | aparato, dientes, ortodoncia, sonrisa
m | Lentillas | | ojos, ver, gafas, ponerse
m | Moratón | | morado, golpe, piel, cardenal
m | Chichón | | cabeza, golpe, bulto, frente
m | Ampolla | | pie, zapato, rozadura, burbuja
m | Cicatriz | | marca, herida, piel, puntos
d | Agujetas | | dolor, ejercicio, músculos, día después
d | Esguince | | tobillo, torcer, ligamento, vendaje
d | Apendicitis | | operar, dolor, derecha, urgencias
d | Muela del juicio | | dentista, sacar, última, salir
d | Juanete | | pie, dedo gordo, bulto, zapato
d | Callo | | pie, piel dura, rozar, durezas
d | Marcapasos | | corazón, aparato, latido, pecho
d | Audífono | | oír, sordera, oreja, aparato
d | Sonambulismo | | dormido, caminar, noche, despertar
d | Ronquido | | dormir, ruido, nariz, pareja
d | Glóbulos rojos | | sangre, oxígeno, células, hemoglobina
d | Neurona | | cerebro, célula, conexiones, nervios
d | Tímpano | | oído, membrana, sonido, vibrar
d | Pupila | | ojo, negra, luz, dilatar
d | Retina | | ojo, fondo, imagen, células
d | Tráquea | | respirar, tubo, cuello, pulmones
d | Diafragma | | músculo, respirar, hipo, pecho
d | Páncreas | | insulina, órgano, diabetes, digestión
d | Bazo | | órgano, izquierdo, sangre, abdomen
d | Clavícula | | hombro, hueso, cuello, romper
d | Rótula | | rodilla, hueso, redondo, delante
d | Fémur | | muslo, hueso, largo, pierna
d | Tendón de Aquiles | | talón, tobillo, talón débil, correr
d | Huella dactilar | | dedo, policía, única, identificar
d | Nuez de Adán | | cuello, hombres, garganta, bulto
d | Úvula | | campanilla, garganta, colgar, boca
d | Cóccix | | rabadilla, columna, final, sentarse
d | Tibia | | pierna, hueso, espinilla, delante
d | Esternón | | pecho, hueso, costillas, centro
d | Meñique | | dedo, pequeño, promesa, último
d | Axila | | sobaco, brazo, cosquillas, desodorante
f | Hacer muecas | M | cara, lengua, gestos, gracioso
f | Guiñar un ojo | M | párpado, cerrar, complicidad, uno
f | Sacar la lengua | M | burla, boca, mostrar, niños
f | Chasquear los dedos | M | sonido, mano, pulgar, chas
f | Hipo | M | hip, respiración, agua, susto
f | Rascarse la cabeza | M | picor, pelo, uñas, pensar
f | Encogerse de hombros | M | no sé, gesto, duda, subir
f | Cruzar los brazos | M | enfadado, pecho, gesto, esperar
m | Termómetro de fiebre | M | axila, grados, temperatura, enfermo
m | Gotas para los ojos | M | colirio, ojo, irritación, pestañear
m | Collarín | M | cuello, lesión, inmovilizar, latigazo
m | Cabestrillo | M | brazo, colgar, roto, pañuelo
m | Radiografía | D | huesos, rayos X, placa, médico
m | Ecografía | D | embarazo, bebé, pantalla, gel
m | Análisis de sangre | M | aguja, brazo, enfermera, tubo
m | Pulso | M | muñeca, latidos, contar, corazón
m | Respiración boca a boca | M | rescate, socorrista, aire, ahogado
m | Hacer gárgaras | M | garganta, agua, gorgotear, enjuague
d | Párpado | D | ojo, cerrar, pestañas, piel
d | Esófago | | tubo, garganta, estómago, tragar
d | Vesícula | | bilis, hígado, cálculos, órgano
d | Sistema inmunitario | | defensas, anticuerpos, virus, glóbulos blancos
d | Metabolismo | | energía, quemar, calorías, procesos
d | Adrenalina | M | hormona, miedo, emoción, susto
d | Hormonas | | adolescencia, glándulas, química, cuerpo
`
};
