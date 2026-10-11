// Emociones y situaciones. Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
export default {
  id: 'emotions', name: 'Emociones y situaciones', icon: 'people', modes: 'MP', ages: 'kids',
  cards: `
f | Alegría | | feliz, contento, sonreír, risa
f | Tristeza | | triste, llorar, pena, lágrimas
f | Enfado | | enfadado, gritar, rabia, furioso
f | Miedo | | susto, temblar, asustado, monstruo
f | Sorpresa | | asombro, boca abierta, inesperado, ¡oh!
f | Asco | | repugnancia, puaj, vomitar, sucio
f | Vergüenza | | rojo, tímido, esconderse, sonrojarse
f | Cansancio | | cansado, sueño, agotado, bostezar
f | Aburrimiento | | aburrido, bostezar, nada que hacer, lento
f | Hambre | | comer, estómago, rugir, plato
f | Sed | | beber, agua, seco, garganta
f | Frío | | tiritar, abrigo, invierno, helado
f | Calor | | sudar, verano, sol, abanico
f | Dolor de muelas | | diente, dentista, boca, mejilla
f | Dolor de barriga | | tripa, estómago, malestar, retortijones
f | Amor | | corazón, enamorado, beso, pareja
f | Celos | | envidia, novio, desconfiar, posesivo
f | Nervios | | nervioso, morderse las uñas, inquieto, examen
f | Orgullo | | pecho, satisfecho, logro, presumir
f | Prisa | | rápido, reloj, tarde, correr
f | Susto | | sobresalto, miedo, gritar, ¡bu!
f | Felicidad | | alegre, sonrisa, contento, saltar
f | Timidez | | tímido, vergüenza, callado, esconderse
f | Mareo | | vueltas, coche, náuseas, girar
f | Picor | | rascarse, mosquito, piel, comezón
f | Cosquillas | | reír, axilas, pies, dedos
f | Sueño | | dormir, bostezar, cama, ojos cerrados
f | Llegar tarde | | reloj, correr, prisa, retraso
f | Ganar un premio | | trofeo, primero, campeón, celebrar
f | Perderse en un centro comercial | | buscar, padres, megafonía, perdido
f | Primer día de colegio | | nervios, mochila, nuevo, profe
m | Nostalgia | | recuerdos, pasado, añorar, antiguo
m | Envidia | | celos, querer, otro, verde
m | Ilusión | | esperanza, emoción, ganas, sueño
m | Curiosidad | | preguntar, saber, cotilla, mirar
m | Confusión | | lío, no entender, perdido, rascarse la cabeza
m | Euforia | | eufórico, celebrar, gritar, saltar
m | Pánico | | terror, huir, gritar, desesperado
m | Agobio | | estrés, demasiado, ahogarse, prisas
m | Alivio | | uf, tranquilidad, por fin, respirar
m | Resaca | t | cabeza, fiesta, alcohol, mañana
m | Primera cita | | nervios, cena, pareja, conocerse
m | Examen sorpresa | | profesor, nervios, estudiar, pregunta
m | Ver un fantasma | | miedo, sábana, aparición, gritar
m | Quedarse encerrado en el ascensor | | atrapado, botón, alarma, piso
m | Pisar una caca de perro | | zapato, asco, calle, mala suerte
m | Que se te caiga el helado | | cucurucho, suelo, llorar, verano
m | Pillarse el dedo con la puerta | | dolor, cerrar, uña, grito
m | Ganar la lotería | | premio, millonario, décimo, gordo
m | Tener un ataque de risa | | carcajada, no parar, lágrimas, contagioso
m | Estar enamorado | | corazón, mariposas, suspirar, pareja
m | Hacer el ridículo | | vergüenza, caerse, todos miran, rojo
m | Quedarse en blanco | | olvidar, examen, mente, nervios
m | Tener hipo | | ¡hip!, susto, agua, contener la respiración
m | Tener un calambre | | pierna, dolor, músculo, estirar
m | Morder un limón | | ácido, cara, agrio, arrugar
m | Pisar arena quemando | | playa, pies, saltar, verano
m | Que te pique una abeja | | dolor, picadura, aguijón, hinchazón
m | Caerse en la piscina vestido | | agua, ropa, mojado, empujón
m | Esperar los resultados de un examen | | nota, nervios, aprobar, suspenso
m | Darse un golpe en el codo | | hormigueo, calambre, dolor, hueso de la risa
d | Melancolía | | tristeza, pensativo, nostalgia, gris
d | Remordimiento | | culpa, arrepentirse, conciencia, lamentar
d | Indignación | | injusticia, enfado, protestar, rabia
d | Desconfianza | | sospecha, mirar raro, no fiarse, recelo
d | Orgullo herido | | ofendido, dignidad, rabia, humillado
d | Vértigo | | altura, mareo, miedo, caer
d | Claustrofobia | | espacios cerrados, ahogo, ascensor, miedo
d | Déjà vu | | ya visto, repetido, sensación, pasado
d | Síndrome del impostor | | no merecer, fraude, dudar, éxito
d | Morriña | es | Galicia, nostalgia, tierra, echar de menos
d | Vergüenza ajena | | ridículo, otra persona, cringe, apuro
d | Satisfacción | | contento, logro, misión cumplida, a gusto
d | Impaciencia | | esperar, nervioso, tamborilear, ya
d | Fastidio | | molestia, pesado, rabia, hartazgo
d | Desesperación | | sin salida, angustia, llorar, rendirse
d | Gratitud | | gracias, agradecer, favor, reconocer
d | Asombro | | sorpresa, boca abierta, increíble, maravilla
d | Entusiasmo | | ganas, energía, alegría, ilusión
d | Bloqueo de escritor | | página en blanco, ideas, inspiración, escribir
d | Jet lag | | horario, avión, viaje, sueño
d | Estrés postvacacional | | lunes, trabajo, vacaciones, volver
d | Mal de amores | | corazón roto, ruptura, llorar, ex
d | Pereza de domingo | | sofá, manta, nada, tarde
d | Subidón de azúcar | | chuches, energía, niños, correr
d | Perder el móvil | | pánico, bolsillos, buscar, llamar
d | Despertarse sin saber dónde estás | | confusión, hotel, desorientado, cama
d | Olvidar el nombre de alguien | | saludar, apuro, vergüenza, memoria
d | Llorar con una película | | pañuelos, cine, emoción, final
d | Mirar el reloj en una reunión aburrida | | aburrimiento, oficina, tiempo, bostezar
d | Reírse en un momento serio | | contener, inapropiado, nervios, carcajada
f | Risa contagiosa | M | reír, carcajada, todos, pegar
f | Tener sueño en clase | M | bostezar, dormirse, aburrido, cabeza
f | Morderse las uñas | M | nervios, dedos, dientes, manía
f | Ataque de estornudos | M | nariz, alergia, achís, pañuelo
f | Tener frío en la playa | M | agua fría, temblar, toalla, viento
f | Querer ir al baño | M | aguantar, piernas, urgente, pis
f | Abrazo de oso | M | apretar, fuerte, cariño, brazos
f | Echar de menos | M | ausencia, lejos, tristeza, recordar
f | Emocionarse | M | lágrimas, llorar, conmover, feliz
f | Rabieta | M | niño, pataleta, llorar, enfadado
f | Hacerse el dormido | M | ojos cerrados, fingir, cama, roncar
m | Que te corten el pelo mal | M | peluquería, espejo, desastre, flequillo
m | Golpearse el dedo pequeño del pie | M | mueble, dolor, meñique, saltar
m | Abrir un regalo que no te gusta | M | sonrisa falsa, cumpleaños, paquete, decepción
m | Bajón después de comer | M | sueño, siesta, sofá, pesado
m | Ansiedad de domingo por la tarde | M | lunes, trabajo, agobio, semana
m | Saludar a alguien que no te saludaba a ti | M | mano, vergüenza, equivocarse, otra persona
m | Silencio incómodo | M | callados, ascensor, tos, mirar
m | Reírse sin poder parar | M | carcajadas, lágrimas, barriga, contagio
m | Tener la cabeza en las nubes | M | despistado, soñar, distraído, pensar
m | Batería del móvil al 1 % | M | cargador, apagarse, pánico, enchufe
m | Ponerse colorado | M | vergüenza, rojo, mejillas, sonrojarse
d | Euforia del viernes | M | fin de semana, alegría, salir, trabajo
d | Duelo | | pérdida, tristeza, despedida, luto
d | Empatía | | ponerse en el lugar, sentir, otros, comprender
d | Frustración | M | no conseguir, rabia, intentar, fallar
d | Serenidad | M | calma, paz, tranquilidad, relajado
d | Ternura | | cariño, bebé, gatito, achuchar
`
};
