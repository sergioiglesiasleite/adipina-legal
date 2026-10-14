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
f | Estar contento |  | feliz, sonrisa, alegre, bien
f | Estar enfadado |  | cabreado, rabia, ceño, gritar
f | Estar triste |  | lágrimas, pena, llorar, bajón
f | Tener miedo a la oscuridad |  | noche, luz, monstruos, niños
f | Tener miedo a las arañas |  | patas, aracnofobia, gritar, bicho
f | Ganar un partido |  | gol, celebrar, equipo, victoria
f | Perder un partido |  | derrota, triste, equipo, marcador
f | Sacar un diez |  | examen, nota, matrícula, estudiar
f | Suspender un examen |  | nota, cate, estudiar, recuperación
f | Recibir un regalo |  | sorpresa, cumpleaños, papel, ilusión
f | Encontrar dinero en el suelo |  | billete, suerte, calle, agacharse
f | Estrenar zapatillas |  | nuevas, ilusión, pisar, caja
f | Ver a tu mejor amigo |  | alegría, abrazo, amistad, reencuentro
f | Despedirse en el aeropuerto |  | adiós, avión, lágrimas, abrazo
f | Tener fiebre |  | caliente, termómetro, enfermo, cama
f | Estar resfriado |  | mocos, estornudos, pañuelos, catarro
f | Tener la nariz tapada |  | mocos, respirar, resfriado, constipado
f | Tener las manos frías |  | invierno, guantes, soplar, congeladas
f | Sudar a chorros |  | calor, gotas, camiseta, empapado
f | Estar lleno |  | comer mucho, barriga, no puedo más, atracón
f | Tener un antojo |  | capricho, comer, querer, chocolate
f | Que se te duerma el pie |  | hormigueo, cosquillas, pierna, entumecido
f | Tener agujetas |  | músculos, dolor, ejercicio, día siguiente
f | Torcerse el tobillo |  | pie, dolor, cojear, hinchado
f | Darse un golpe en la cabeza |  | chichón, dolor, puerta, ¡ay!
f | Cortarse con un papel |  | dedo, herida, folio, escocer
f | Morderse la lengua |  | dolor, comer, sin querer, ¡ay!
f | Tener ganas de estornudar |  | nariz, picor, achís, aguantar
f | Ver una película de miedo |  | sustos, taparse los ojos, gritar, terror
f | Montar en una montaña rusa |  | atracción, gritos, vértigo, caída
f | Subir a una noria |  | atracción, alto, girar, vistas
f | Que te hagan cosquillas |  | risa, dedos, retorcerse, parar
m | Sentirse solo |  | soledad, nadie, triste, aislado
m | Sentirse querido |  | amor, cariño, abrazo, familia
m | Sentirse orgulloso de alguien |  | aplaudir, logro, hijo, emoción
m | Estar decepcionado |  | esperar más, desilusión, triste, fallo
m | Sentirse culpable |  | culpa, perdón, error, remordimiento
m | Pedir perdón |  | lo siento, disculpa, error, arrepentido
m | Perdonar a alguien |  | olvidar, error, reconciliación, abrazo
m | Hacer las paces |  | reconciliarse, amigos, discusión, abrazo
m | Discutir con alguien |  | gritar, pelea, enfado, opinión
m | Estar indeciso |  | dudar, elegir, no saber, opciones
m | Tener la mosca detrás de la oreja |  | sospechar, desconfiar, raro, intuición
m | Estar distraído |  | despistado, no atender, nubes, mirar
m | Tener un despiste |  | olvidar, error, sin querer, llaves
m | Estar de buen humor |  | sonreír, contento, alegre, cantar
m | Estar de mal humor |  | gruñón, enfadado, cara larga, borde
m | Estar de morros |  | enfadado, labios, no hablar, mosqueado
m | Estar mosqueado |  | enfadado, sospechar, ceño, molesto
m | Estar agotado |  | cansado, sin fuerzas, sueño, rendido
m | Estar relajado |  | tranquilo, sofá, calma, respirar
m | Estar estresado |  | agobio, prisas, trabajo, nervios
m | Tener vergüenza de hablar en público |  | escenario, nervios, rojo
m | Miedo escénico |  | escenario, público, quedarse en blanco, nervios
m | Mariposas en el estómago |  | enamorado, nervios, barriga, cosquillas
m | Flechazo |  | amor a primera vista, Cupido, enamorarse, mirada
m | Romper con tu pareja |  | ruptura, llorar, separarse, novio
m | Corazonada |  | intuición, presentimiento, sentir, adivinar
m | Admiración |  | ídolo, admirar, ejemplo, respeto
m | Compasión |  | pena, ayudar, empatía, sufrimiento
m | Lástima |  | pena, pobrecito, compasión, triste
m | Rencor |  | odio, venganza, no perdonar, guardar
m | Odio |  | detestar, rabia, enemigo, aversión
m | Desprecio |  | mirar por encima, desdén, asco, ignorar
m | Soberbia |  | creído, orgullo, superior, chulo
m | Humildad |  | modesto, sencillo, no presumir, sencillez
m | Paciencia |  | esperar, calma, tranquilo, aguantar
m | Valentía |  | valiente, coraje, miedo, héroe
m | Cobardía |  | miedo, huir, gallina, cobarde
m | Esperanza |  | ilusión, futuro, confiar, verde
m | Morirse de risa |  | carcajada, llorar de risa, gracioso, partirse
m | Llorar de alegría |  | lágrimas, felicidad, emoción, boda
m | Nudo en la garganta |  | emoción, llorar, tragar, tristeza
m | Quedarse sin palabras |  | asombro, mudo, sorpresa, boquiabierto
d | Sentirse invisible |  | nadie te ve, ignorado, solo, transparente
d | Sentirse fuera de lugar |  | raro, no encajar, incómodo, extraño
d | Saudade |  | nostalgia, portugués, añoranza, tristeza
d | Añoranza |  | echar de menos, nostalgia, lejos, recuerdo
d | Hastío |  | aburrimiento, cansancio, harto, rutina
d | Apatía |  | desgana, nada, indiferencia, sin ganas
d | Indiferencia |  | me da igual, pasar, frío, desinterés
d | Resignación |  | aceptar, qué le vamos a hacer, rendirse, conformarse
d | Desasosiego |  | inquietud, intranquilo, nervios, malestar
d | Perplejidad |  | confuso, desconcierto, no entender, raro
d | Estupor |  | asombro, pasmo, sorpresa, inmóvil
d | Bochorno |  | vergüenza, calor, sonrojo, ridículo
d | Regocijo |  | alegría, disfrutar, gozo, contento
d | Júbilo |  | alegría, celebración, euforia, fiesta
d | Plenitud |  | completo, feliz, satisfecho, lleno
d | Paz interior |  | calma, tranquilidad, meditar, serenidad
d | Sentido del humor |  | gracia, chistes, reír, ingenio
d | Ironía |  | sarcasmo, decir lo contrario, burla, tono
d | Sarcasmo |  | ironía, burla, hiriente, tono
d | Picardía |  | pillo, travieso, astucia, guiño
d | Coqueteo |  | ligar, sonreír, mirada, tontear
d | Mal perder |  | enfadarse, juego, rabieta
d | Complejo de inferioridad |  | menos que otros, inseguridad, comparación, autoestima
d | Autoestima |  | quererse, confianza, uno mismo, valorarse
d | Inseguridad |  | dudas, miedo, confianza, timidez
d | Síndrome de Estocolmo |  | secuestrador, rehén, simpatía, cautivo
d | FOMO |  | miedo a perderse algo, redes, planes, ansiedad
d | Procrastinar |  | dejar para mañana, retrasar, pereza, tareas
d | Instinto maternal |  | madre, proteger, bebé, cuidar
d | Celos de hermano |  | hermanito, atención, nuevo bebé, envidia
d | Envidia sana |  | admirar, querer lo mismo, buena, otro
d | Emoción contenida |  | aguantar las lágrimas, nudo, serio, guardar
d | Euforia colectiva |  | estadio, celebración, todos, gol
d | Ira |  | rabia, furia, enfado, explotar
d | Furia |  | ira, rabia, descontrol, gritar
d | Tener el corazón roto |  | ruptura, amor, llorar, pareja
`
};
