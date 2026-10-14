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
f | Frente | D | cabeza, cejas, arrugas, sudor
f | Nuca | M | cabeza, detrás, cuello, pelo
f | Pierna | D | rodilla, muslo, andar, pie
f | Brazo | D | codo, mano, hombro, músculo
f | Muslo | D | pierna, arriba, rodilla, carne
f | Pantorrilla | D | pierna, gemelo, detrás, músculo
f | Palma de la mano | D | líneas, dentro, aplaudir
f | Puño | M | mano cerrada, golpe, dedos, apretar
f | Pulgar | M | dedo gordo, mano, me gusta, arriba
f | Dedo índice | M | señalar, mano, segundo
f | Dedo gordo del pie | M | pie, uña, grande, pisar
f | Planta del pie | D | pie, abajo, cosquillas, pisar
f | Trenza | D | pelo, entrelazar, tres mechones, peinado
f | Coleta | D | pelo, goma, atrás, peinado
f | Flequillo | D | pelo, frente, cortar, delante
f | Calvicie | D | sin pelo, cabeza, brillar, entradas
f | Rizos | D | pelo, ondas, rizado, muelles
f | Melena | D | pelo largo, león, suelta, larga
f | Patillas | D | pelo, cara, orejas, Elvis
f | Perilla | D | barba, barbilla, pequeña, chiva
f | Dientes de leche | D | niños, caer, Ratoncito Pérez, pequeños
f | Colmillo | D | diente, puntiagudo, vampiro, canino
f | Muela | D | diente, atrás, masticar, grande
f | Encías | M | dientes, rosa, boca, sangrar
f | Saliva | M | boca, babas, escupir, líquido
f | Lágrima | D | ojo, llorar, gota, triste
f | Moco | M | nariz, resfriado, pañuelo, verde
f | Eructo | M | gases, boca, ruido, refresco
f | Sudor | M | calor, gotas, oler, ejercicio
f | Granos | D | piel, adolescentes, cara, acné
f | Arañazo | D | gato, piel, raya, rasguño
f | Herida | D | sangre, tirita, corte, curar
f | Costra | D | herida, rascar, seca, curar
f | Sangrar por la nariz | M | sangre, cabeza atrás, pañuelo
f | Dolor de cabeza | M | pastilla, jaqueca, migraña
f | Dolor de garganta | M | tragar, caramelo, anginas
f | Dolor de oído | M | oreja, otitis, gotas, niños
m | Anginas |  | garganta, inflamadas, fiebre, amígdalas
m | Amígdalas | D | garganta, anginas, operar, dos
m | Otitis |  | oído, dolor, infección, gotas
m | Conjuntivitis |  | ojo rojo, legañas, infección, gotas
m | Legañas | M | ojos, mañana, dormir, despertar
m | Orzuelo | D | párpado, grano, ojo, inflamado
m | Gripe |  | fiebre, virus, invierno, cama
m | Sarampión |  | manchas, vacuna, niños, virus
m | Paperas |  | cuello hinchado, niños, vacuna, mofletes
m | Diabetes |  | azúcar, insulina, sangre, análisis
m | Asma | M | respirar, inhalador, ahogo, alergia
m | Inhalador | D | asma, respirar, apretar, pulmones
m | Insulina |  | diabetes, inyección, azúcar, páncreas
m | Tensión arterial |  | presión, tensiómetro, brazo, sangre
m | Tensiómetro | D | brazo, presión, apretar, médico
m | Colesterol |  | grasa, sangre, análisis, corazón
m | Glucosa |  | azúcar, sangre, energía, diabetes
m | Vitamina C |  | naranja, defensas, resfriado, zumo
m | Calcio |  | huesos, leche, dientes, fuerte
m | Hierro (nutriente) |  | sangre, lentejas, anemia, espinacas
m | Anemia |  | hierro, cansancio, palidez, sangre
m | Grupo sanguíneo |  | A, B, cero, donar
m | Donar sangre | M | bolsa, aguja, ayudar, transfusión
m | Transfusión |  | sangre, bolsa, hospital, donante
m | Trasplante de órganos |  | donante, corazón, riñón, cirugía
m | Quirófano | D | operar, cirujano, bisturí, hospital
m | Bisturí | D | cortar, cirujano, quirófano, afilado
m | Puntos de sutura | D | herida, coser, hilo, cicatriz
m | Sala de espera | M | médico, sentarse, número, esperar
m | Receta médica | D | médico, farmacia, papel, medicamento
m | Pastilla | D | tragar, agua, medicina, cápsula
m | Supositorio | M | medicina, trasero, fiebre, bebé
m | Pomada | M | crema, piel, untar, picor
m | Guantes de látex | D | médico, manos, blancos, desechables
m | Bata de hospital | D | paciente, abierta, detrás, camilla
m | Camilla | D | tumbarse, hospital, ruedas, ambulancia
m | Gotero | D | suero, vena, colgar, hospital
m | Fisioterapia | M | masaje, rehabilitación, lesión, ejercicios
m | Masaje | M | espalda, manos, relajar, músculos
m | Acupuntura | M | agujas, china, puntos, medicina
m | Contractura | M | músculo, dolor, espalda, nudo
m | Tortícolis | M | cuello, dolor, girar, rígido
m | Lumbago | M | espalda baja, dolor, agacharse, riñones
d | Hernia discal |  | espalda, vértebras, dolor, columna
d | Escoliosis |  | columna torcida, espalda, curvatura, corsé
d | Ciática |  | nervio, pierna, dolor, espalda
d | Menisco |  | rodilla, rotura, cartílago, deportistas
d | Ligamento cruzado |  | rodilla, rotura, futbolistas, operación
d | Fractura | D | hueso roto, escayola, radiografía, caída
d | Luxación |  | hueso, salirse, articulación, dislocar
d | Articulación |  | rodilla, codo, unión, huesos
d | Cartílago |  | oreja, nariz, flexible, articulaciones
d | Médula ósea |  | huesos, sangre, donante, interior
d | Médula espinal |  | columna, nervios, espalda, cerebro
d | Sistema nervioso |  | nervios, cerebro, médula, señales
d | Glándula |  | hormonas, sudor, tiroides, segregar
d | Tiroides |  | glándula, cuello, hormonas, metabolismo
d | Hipófisis |  | glándula, cerebro, hormonas, crecimiento
d | Intestino delgado |  | digestión, tubo, largo, nutrientes
d | Intestino grueso |  | colon, digestión, agua, final
d | Apéndice |  | intestino, apendicitis, derecha, operar
d | Vejiga |  | orina, pis, aguantar, órgano
d | Laringe |  | garganta, voz, cuerdas vocales, nuez
d | Cuerdas vocales |  | voz, cantar, garganta, vibrar
d | Bronquios |  | pulmones, aire, ramas, respirar
d | Alvéolos |  | pulmones, oxígeno, bolsitas, intercambio
d | Córnea |  | ojo, transparente, lentillas, delante
d | Iris |  | ojo, color, pupila, azul
d | Cristalino |  | ojo, lente, cataratas, enfocar
d | Cataratas (ojo) |  | ojo, opaco, operación, ancianos
d | Miopía | M | ver de lejos, gafas, borroso, ojo
d | Hipermetropía |  | ver de cerca, gafas, ojo, enfocar
d | Astigmatismo |  | ojo, borroso, gafas, córnea
d | Daltonismo |  | colores, rojo y verde, confundir, ojo
d | Vértebra |  | columna, hueso, espalda, disco
d | Húmero |  | brazo, hueso, hombro, codo
d | Radio y cúbito |  | antebrazo, huesos, muñeca, codo
d | Peroné |  | pierna, hueso, tibia, fino
d | Omóplato |  | espalda, hueso, hombro, escápula
d | Pelvis |  | cadera, hueso, piernas, abajo
d | Cráneo | D | cabeza, hueso, calavera, cerebro
d | Mandíbula | D | boca, hueso, masticar, abajo
d | Fontanela |  | bebé, cabeza, blanda, cráneo
d | Glóbulos blancos |  | defensas, sangre, infección, células
d | Plaquetas |  | coagular, sangre, herida, costra
d | Anticuerpos |  | defensas, vacuna, virus, proteínas
d | Ganglios |  | cuello, hinchados, infección, linfa
d | Melanina |  | piel, color, moreno, sol
d | Queratina |  | uñas, pelo, proteína, piel
d | Colágeno |  | piel, proteína, arrugas, elástica
d | Endorfinas |  | felicidad, ejercicio, cerebro, química
d | Serotonina |  | felicidad, cerebro, neurotransmisor, ánimo
d | Dopamina |  | placer, recompensa, cerebro, neurotransmisor
d | Cortisol |  | estrés, hormona, glándulas, nervios
d | Ritmo circadiano |  | reloj biológico, dormir, día, noche
d | Melatonina |  | sueño, hormona, oscuridad, dormir
`
};
