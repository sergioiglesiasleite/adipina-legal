// Colegio y estudios. Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
export default {
  id: 'school', name: 'Colegio y estudios', icon: 'book', modes: 'DMP', ages: 'kids',
  cards: `
f | Recreo | M | patio, jugar, bocadillo, descanso
f | Pizarra | D | tiza, profesor, escribir, borrar
f | Tiza | D | pizarra, blanca, escribir, polvo
f | Estuche | D | lápices, cremallera, mochila, guardar
f | Pupitre | D | mesa, silla, clase, cajón
f | Compás | D | círculo, punta, geometría, girar
f | Cuaderno de cuadros | D | hojas, matemáticas, escribir, espiral
f | Libro de texto | D | estudiar, páginas, asignatura, mochila
f | Diccionario | D | palabras, significado, orden alfabético, gordo
f | Bola del mundo | D | globo terráqueo, girar, países, mapa
f | Comedor del cole | M | comida, bandeja, cocinera, mediodía
f | Excursión | M | autobús, visita, granja, museo
f | Deberes | M | casa, tarea, estudiar, cuaderno
f | Examen | M | preguntas, nota, estudiar, nervios
f | Aprobado | P | cinco, nota, superar, contento
f | Suspenso | P | nota, cero, mal, repetir
f | Sobresaliente | P | diez, nueve, nota, excelente
f | Conserje | M | llaves, timbre, puerta, colegio
f | Directora del colegio | MP | jefa, despacho, castigo, mandar
f | Timbre del recreo | M | sonar, salir, campana, patio
f | Levantar la mano | M | preguntar, profesor, brazo, turno
f | Copiar en un examen | M | chuleta, mirar, compañero, trampa
f | Sacar punta al lápiz | M | sacapuntas, afilar, girar, virutas
f | Borrar la pizarra | M | borrador, tiza, limpiar, profesor
f | Hacer fila | M | cola, orden, uno detrás de otro, esperar
f | Pasar lista | M | nombres, presente, profesor, faltar
f | Dormirse en clase | M | sueño, bostezar, pupitre, aburrido
f | Bocadillo del recreo | D | pan, mochila, almuerzo, patio
f | Lápices de colores | D | pintar, caja, dibujar, punta
f | Ceras | D | pintar, colores, infantil, dibujar
f | Rotuladores | D | colores, pintar, tapón, punta
f | Mapa de España | D | comunidades, provincias, ríos, geografía
f | Clase de música | M | flauta, cantar, notas, canciones
f | Educación física | M | gimnasio, correr, chándal, balón
f | Fiesta de fin de curso | P | verano, actuación, padres, despedida
f | Primer día de clase | M | nervios, nuevo, septiembre, mochila
f | Abecedario | P | letras, A, B, C
f | Tabla de multiplicar | P | números, memoria, cinco por, matemáticas
f | Sumar | M | más, números, cuenta, resultado
f | Dictado | M | escribir, faltas, profesor, leer
f | Mochila con ruedas | D | arrastrar, libros, colegio, trolley
f | Patio del colegio | DP | recreo, jugar, canasta, porterías
f | Clase de inglés | P | idioma, hello, vocabulario, teacher
f | Autobús escolar | D | amarillo, niños, ruta, parada
f | Tutor | P | clase, profesor, reunión, padres
f | Leer en voz alta | M | libro, clase, turno, lectura
m | Escuadra y cartabón | D | regla, triángulo, dibujo técnico, ángulo
m | Transportador de ángulos | D | grados, medir, semicírculo, geometría
m | Plastilina de colores | DMP | moldear, manualidades, masa, figuras
m | Boletín de notas | P | calificaciones, trimestre, padres, firmar
m | Matrícula de honor | P | diez, nota, mejor, premio
m | Chuleta | M | copiar, examen, papel, trampa
m | Delegado de clase | P | elecciones, representante, compañeros, votar
m | Jefe de estudios | P | castigo, despacho, profesor, horario
m | Reunión de padres | P | tutor, notas, profesores, hijos
m | Castigado sin recreo | M | clase, quedarse, profesor, portarse mal
m | Ir a la pizarra | M | salir, profesor, ejercicio, tiza
m | Hacer un trabajo en grupo | M | equipo, compañeros, cartulina, exponer
m | Exposición oral | M | hablar, clase, presentar, nervios
m | Cartulina | D | mural, colores, papel grueso, trabajo
m | Mural | D | cartulina, pared, dibujos, clase
m | Potro | M | saltar, gimnasio, educación física, colchoneta
m | Espalderas | M | gimnasio, barras, pared, trepar
m | Trepar por la cuerda | M | gimnasio, subir, brazos, techo
m | Carrera de sacos | M | saltar, saco, competición, fiesta
m | Flauta dulce | M | música, soplar, agujeros, clase
m | Graduación con birrete | M | gorro, lanzar, título, toga
m | Orla | D | fotos, graduación, compañeros, marco
m | Selectividad | P | universidad, examen, nota, bachillerato
m | Bachillerato | P | instituto, dos años, selectividad, estudios
m | Instituto | P | ESO, adolescentes, profesores, estudiar
m | Universidad | P | carrera, campus, facultad, estudiantes
m | Erasmus | P | estudiar, extranjero, beca, universidad
m | Beca | P | dinero, estudiar, ayuda, notas
m | Biblioteca | M | libros, silencio, estudiar, préstamo
m | Pedir silencio | M | dedo, boca, chis, callar
m | Faltar a clase | M | novillos, pellas, no ir, saltarse
m | Repetir curso | P | suspender, año, otra vez, mismo nivel
m | Recuperación de septiembre | P | suspensos, verano, estudiar, examen
m | Libro de lectura obligatoria | P | leer, resumen, profesor, novela
m | Esquema | D | resumen, flechas, estudiar, apuntes
m | Subrayar | M | fluorescente, marcar, apuntes, estudiar
m | Apuntes | P | tomar, clase, cuaderno, estudiar
m | Fluorescente | D | subrayar, amarillo, rotulador, marcar
m | Típex | M | corrector, borrar, blanco, bolígrafo
m | Clase de plástica | P | dibujar, manualidades, pintar, tijeras
m | Clase de ciencias | P | experimentos, naturaleza, laboratorio, cuerpo
m | Laboratorio del cole | DP | experimentos, bata, probetas, microscopio
m | Experimento con volcán | M | bicarbonato, vinagre, espuma, erupción
m | Huerto escolar | M | plantar, lechugas, regar, patio
m | Jornada de puertas abiertas | P | visitar, colegio, padres, conocer
m | Semana cultural | P | actividades, colegio, talleres, exposiciones
m | Profesor sustituto | P | baja, reemplazar, nuevo, clase
d | Claustro de profesores | P | reunión, docentes, director, decisiones
d | AMPA | P es | padres, asociación, colegio, actividades
d | Evaluación continua | P | notas, trimestre, trabajos, seguimiento
d | Tribunal de oposiciones | P | examen, plaza, profesores, temario
d | Oposiciones | P | plaza, temario, examen, funcionario
d | Tesis doctoral | P | doctorado, universidad, investigación, defensa
d | Trabajo de fin de grado | P | TFG, universidad, defensa, tutor
d | Matrícula | P | inscribirse, curso, pagar, plazo
d | Rector | P | universidad, máximo cargo, campus, discurso
d | Paraninfo | P | universidad, salón, actos, solemne
d | Colegio mayor | P | universidad, residencia, novatadas, estudiantes
d | Novatada | M | universidad, nuevos, broma, colegio mayor
d | Tuna | M es | estudiantes, capa, bandurria, cantar
d | Libro de escolaridad | P es | notas, historial, antiguo, cursos
d | EGB | P es 80s | colegio, BUP, octavo, básica
d | BUP y COU | P es 80s | instituto, bachillerato, antiguo, selectividad
d | Pizarra digital | P | pantalla, proyector, táctil, clase
d | Regla de tres | P | proporción, matemáticas, calcular, multiplicar
d | Análisis sintáctico | P | sujeto, predicado, lengua, oración
d | Raíz cuadrada | P | matemáticas, número, símbolo, multiplicar
d | Teorema de Pitágoras | P | triángulo, hipotenusa, catetos, cuadrado
d | Ecuación | P | incógnita, x, resolver, igual
d | Quebrado | P | fracción, numerador, denominador, partes
d | Caligrafía | M | letra, cuaderno, bonita, práctica
d | Cuadernillo Rubio | P es | caligrafía, cuentas, verano, problemas
d | Vacaciones Santillana | P es | verano, cuaderno, repaso, deberes
d | Reválida | P es | examen, antiguo, final, bachillerato
d | Mención honorífica | P | premio, distinción, nota, reconocimiento
d | Logaritmo | P | matemáticas, base, exponente, calculadora
d | Comentario de texto | P | lengua, analizar, tema, estructura
d | Clase de filosofía | P | Platón, pensar, bachillerato, preguntas
`
};
