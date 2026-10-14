// Verano y playa. Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
// Tema de temporada, como Navidad y Halloween: tiene su propio pack y no entra en los packs generales.
export default {
  id: 'summer', name: 'Verano y playa', icon: 'leaf', modes: 'DMP', ages: 'kids',
  cards: `
f | Colchoneta | D | hinchable, tumbarse, agua, flotar
f | Manguitos | D | brazos, hinchables, nadar, niños
f | Piscina hinchable | D | jardín, agua, niños, inflar
f | Bomba en la piscina | M | saltar, salpicar, rodillas, agua
f | Hacer el muerto | M | flotar, boca arriba, agua, quieto
f | Quemadura del sol | M | rojo, piel, escocer, crema
f | Chapuzón | M | bañarse, agua, rápido, fresquito
f | Pelota de playa | D | hinchable, colores, lanzar, arena
f | Palas de playa | M | pelota, raquetas, orilla, golpear
f | Globos de agua | D | lanzar, mojar, explotar, guerra
f | Polo de hielo | D | helado, palo, chupar, frío
f | Granizado | D | hielo picado, limón, vaso, frío
f | Aire acondicionado | M | frío, aparato, calor, mando
f | Bandera roja en la playa | D | peligro, prohibido bañarse, socorrista, mar
f | Tobogán acuático | M | deslizarse, agua, piscina, bajar
f | Aletas | M | pies, nadar, rana, bucear
f | Gorro de piscina | D | pelo, goma, nadar, cabeza
f | Bocadillo en la playa | M | arena, comer, toalla, papel de plata
f | Cuaderno de vacaciones | D | deberes, verano, ejercicios, cole
f | Picadura de mosquito | M | rascar, roncha, picor, noche
f | Concha | D | mar, nácar, arena, coleccionar
f | Puesta de sol | D | atardecer, naranja, horizonte, mar
m | Paseo marítimo | D | playa, pasear, farolas, mar
m | Cine de verano | | aire libre, pantalla, noche, sillas
m | Canción del verano | | baile, radio, pegadiza, éxito
m | Orquesta de verano | M | escenario, pueblo, músicos, pasodobles
m | Operación bikini | M | dieta, gimnasio, adelgazar, playa
m | Marca del bañador | D | piel, blanca, moreno, tirantes
m | Aftersun | M | crema, después, piel, quemadura
m | Pareo | D | tela, cintura, playa, anudar
m | Patín de agua | D | pedales, barca, mar, tobogán
m | Banana hinchable | D | remolcada, lancha, caerse, amarilla
m | Paddle surf | M | tabla, remo, de pie, equilibrio
m | Vóley playa | M | red, arena, pelota, parejas
m | Duchas de la playa | M | arena, agua dulce, pies, quitar
m | Arena en las chanclas | M | molestar, pies, quitar, granos
m | Espetos de sardinas | D | Málaga, caña, fuego, barca
m | Tinto de verano | t es | vino, gaseosa, hielo, refresco
m | Horchatería | D | horchata, fartons, Valencia, chufa
m | Siesta de verano | M | dormir, calor, tarde, sofá
m | Persianas bajadas | M | oscuras, calor, casa, sombra
m | Perseidas | | estrellas fugaces, agosto, cielo, San Lorenzo
m | Vendedor de helados en la playa | M | nevera, gritar, toallas, polos
m | Picadura de medusa | M | escocer, playa, tentáculos, vinagre
m | Coger cangrejos | M | rocas, cubo, pinzas, charca
m | Cometa en la playa | M | viento, hilo, volar, cola
m | Puerto deportivo | D | barcos, amarrar, veleros, muelle
m | Piscina municipal | | bono, pueblo, socorrista, césped
m | Trampolín de piscina | M | saltar, tabla, altura, agua
m | Ahogadilla | M | hundir, cabeza, agua, broma
m | Carrera hasta la boya | M | nadar, mar, bolas, competir
m | Postal de verano | D | sello, foto, playa, enviar
m | Gorra con visera | D | sol, cabeza, cubrir, deporte
m | Hielo en el vaso | D | cubitos, refresco, frío, tintinear
d | Lágrimas de San Lorenzo | | estrellas fugaces, agosto, Perseidas, cielo
d | Terral | es | viento, Málaga, calor, tierra
d | Levante en Tarifa | es | viento, Cádiz, kitesurf, fuerte
d | Agua de Valencia | t es | cava, naranja, cóctel, jarra
d | Frigopie | 90s es | helado, pie, fresa, Frigo
d | Calippo | 90s | helado, tubo, apretar, hielo
d | Drácula de Frigo | 90s es | helado, colmillos, fresa, cola
d | Mosquitera | D | red, ventana, insectos, cama
d | Insolación | M | sol, mareo, cabeza, calor
d | Golpe de calor | M | mareo, fiebre, temperatura, desmayo
d | Bandera azul | | playa, calidad, premio, limpia
d | Hidropedal | D | pedales, patín, agua, alquiler
d | Kayak | M | remo, canoa, mar, río
d | Neopreno | D | traje, surf, frío, goma
d | Escollera | D | rocas, puerto, mar, pared
d | Rompeolas | D | rocas, mar, puerto, olas
d | Resaca del mar | | corriente, arrastrar, peligro, bañistas
d | Fiesta de la espuma | M | burbujas, baile, discoteca, pueblo
d | Bañarse con la camiseta | M | quemarse, niños, ropa, mojada
d | Esperar dos horas después de comer | M | digestión, corte, bañarse, abuela
d | Corte de digestión | M | bañarse, comer, esperar, abuela
d | Pasear por la orilla | M | arena mojada, pies, mar, andar
d | Clavar la sombrilla | M | arena, girar, hundir, viento
d | Huella en la arena | D | pie, marca, playa, mojada
d | Agosto en la ciudad | | vacía, calor, vacaciones, aparcar
d | Noche tropical | | calor, dormir, veinte grados, veranos
d | Cala | D | playa pequeña, rocas, Mallorca, escondida
d | Carabela portuguesa | | medusa, azul, peligrosa, picadura
f | Helado de cucurucho | D | barquillo, bola, lamer, derretir
f | Raja de sandía | D | fruta, roja, pepitas, verde
f | Enterrar a alguien en la arena | M | tapar, cabeza fuera, playa, cavar
f | Buscar conchas | M | orilla, coleccionar, mar, agacharse
f | Flamenco hinchable | D | rosa, piscina, flotar, pájaro
f | Unicornio hinchable | D | cuerno, piscina, flotar, arcoíris
f | Helado derretido | M | gotear, calor, chorrear, mancha
f | Toldo | D | sombra, terraza, lona, enrollar
f | Manguera | D | regar, agua, jardín, mojar
f | Aspersor | D | césped, regar, girar, chorros
f | Arena que quema | M | pies, calor, correr, saltar
f | Buscar la sombra | M | árbol, calor, sol, refugio
f | Canto de las cigarras | M | insecto, ruido, calor, árboles
f | Tirar a alguien a la piscina | M | empujar, broma, agua, ropa
f | Fiesta en la piscina | M | agua, música, amigos, bañador
f | Barca hinchable | D | remos, inflar, agua, goma
f | Mosquito zumbando en la oreja | M | noche, zumbido, picar, dormir
m | Gaviota que roba la comida | M | pájaro, bocadillo, playa, volar
m | Tormenta de verano | M | truenos, lluvia, calor, nubes
m | Pulsera de la amistad | D | hilo, colores, campamento, trenzar
m | Tatuaje de henna | D | dibujo, piel, temporal, mano
m | Festival de música de verano | M | conciertos, escenarios, pulsera, camping
m | Comer pipas en el banco | M es | cáscaras, plaza, tarde, escupir
m | Moreno de albañil | M es | brazos, camiseta, marcas, cuello
m | Jugar a las cartas en la playa | M | baraja, toalla, sombrilla, partida
m | Reservar la tumbona con la toalla | M | madrugar, hotel, piscina, turistas
m | Rebajas de verano | | descuentos, tiendas, julio, ropa
m | Poza del río | D | bañarse, agua dulce, piedras, fría
m | Piscina natural | D | rocas, mar, agua, charco
m | Grillos por la noche | M | cri-cri, campo, insecto, cantar
m | Bodyboard | M | tabla corta, olas, tumbado, playa
m | Sardinada | es | sardinas, brasas, fiesta, pescado
d | Solsticio de verano | | día más largo, junio, sol, astronomía
d | Canícula | | calor, julio, agosto, perro
d | Veranillo de San Miguel | | septiembre, calor, otoño, buen tiempo
d | Moraga | es | Málaga, pescado, noche, playa
d | Agua de mar en los oídos | M | taponar, saltar, cabeza, nadar
d | Marcas de las chanclas | D | pies, moreno, dedo, tiras
d | Piel pelada | M | quemadura, despellejar, espalda, sol
d | Cubitera | D | hielo, molde, congelador, cubitos
f | Bañador de flores | D | hawaiano, estampado, piscina, hombre
f | Bolsa de playa | D | toalla, crema, llevar, mimbre
f | Esterilla de playa | D | tumbarse, arena, enrollar, paja
f | Silla de playa | D | plegable, sentarse, sombrilla, arena
f | Molde de arena | D | castillo, cubo, formas, playa
f | Rastrillo de playa | D | arena, juguete, niños, púas
f | Foso del castillo de arena | D | agua, cavar, alrededor
f | Ola que destruye el castillo | M | mar, derribar, arena, llorar
f | Cloro | M | piscina, olor, ojos rojos, agua
f | Pies arrugados | M | agua, mucho rato, dedos, piscina
f | Tiritar al salir del agua | M | frío, toalla, mojado, temblar
f | Secarse al sol | M | tumbarse, mojado, toalla, calor
f | Tarrina de helado | D | cuchara, vaso, bolas, heladería
f | Heladería | D | helados, sabores, mostrador, verano
f | Polo flash | D es | hielo, tubo, colores, cortar
f | Botella congelada | M | nevera, hielo, playa, frío
f | Melón con jamón | D es | aperitivo, verano, fruta, salado
f | Cielo estrellado | D | noche, estrellas, campo, mirar
f | Malvaviscos asados | D | fuego, palo, nubes, campamento
m | Saltar siete olas | M | San Juan, deseos, mar, noche
m | Turista quemado | M | rojo, gamba, sol, guiri
m | Factor de protección |  | crema solar, 50, piel, número
m | Rayos ultravioleta |  | sol, piel, quemarse, UV
m | Isla desierta | D | palmera, náufrago, arena, sola
m | Cóctel con sombrillita | D | bebida, playa, adorno, pajita
m | Coco con pajita | D | beber, tropical, playa, fruta
m | Buceo con botella | M | bombona, profundidad, neopreno, regulador
m | Clases de surf | M | tabla, monitor, olas, ponerse de pie
m | Tabla de surf | D | olas, surfista, quilla, larga
m | Surfista | M | tabla, olas, neopreno, playa
m | Parasailing | M | paracaídas, lancha, volar, mar
m | Avistamiento de delfines | M | barco, mar, saltar, excursión
d | Turismo de sol y playa |  | España, vacaciones, costa, masas
d | Masaje en la playa | M | toalla, manos, crema, relajar
d | Trenzas en la playa | M | pelo, hilos, colores, peinado
d | Mercadillo nocturno | D | puestos, noche, verano, artesanía
d | Tren de la bruja | D | feria, atracción, escoba, golpe
d | Barco vikingo | D | feria, balanceo, atracción, vértigo
d | Tiro al blanco de feria | D | escopeta, peluche, puntería, caseta
d | Pesca de patitos | D | feria, caña, premio, patos de goma
d | Leche merengada | D es | helado, canela, Valencia, granizado
d | Sorbete | D | helado, frutas, hielo, limón
d | Siesta de pijama y orinal | es | siesta larga, Cela, dormir
d | Ventilador de techo | D | aspas, girar, calor
d | Patio andaluz | D es | flores, macetas, fresco, Córdoba
d | Cortina de cuentas | D | puerta, moscas, colores, colgar
d | Abanicarse con un periódico | M | calor, aire, papel, mover
d | Tomar el fresco | M es | sillas, puerta, noche, vecinas
f | Bañarse en el río | M | agua dulce, piedras, fría, verano
f | Saltar desde una roca | M | mar, valiente, agua, altura
f | Correr por la arena | M | playa, pies, quemar, saltar
f | Mojar a alguien | M | agua, broma, cubo, chillar
f | Guerra de agua | M | pistolas, globos, mojarse, jugar
f | Cubo de agua fría | M | broma, echar, chillar, mojado
f | Vacaciones en el pueblo | M | abuelos, verano, amigos, piscina
f | Amigos del verano | M | pueblo, vacaciones, reencontrarse, pandilla
f | Sacudir la toalla | M | arena, viento, molestar, vecino
f | Buscar sitio en la playa | M | toallas, lleno, hueco, gente
m | Amor de verano | M | romance, vacaciones, despedida, playa
m | Último día de vacaciones | M | triste, maleta, volver, playa
m | Caseta de playa | D | rayas, madera, cambiarse
m | Merendero | D | mesas, campo, comer, río
m | Autobronceador | M | crema, moreno falso, naranja, manchas
m | Excursión al pantano | M | agua dulce, presa, bañarse, merendar
m | Parrilla | D | carne, brasas, barbacoa, rejilla
m | Mazorca asada | D | maíz, brasas, mantequilla, fuego
m | Bolsa de hielo | D | gasolinera, cubitos, nevera, comprar
d | Alerta roja por calor | M | aviso, temperatura, AEMET, peligro
d | AEMET |  | meteorología, aviso, tiempo, agencia
d | Bandera amarilla | D | precaución, playa, socorrista, bañarse con cuidado
d | Playa para perros | D | mascotas, permitido, arena
d | Arena negra volcánica | D | Canarias, playa, oscura, quema
d | Playa de piedras | D | cantos rodados, incómoda, chanclas, Mediterráneo
d | Tubing | M | flotador, río, bajar, corriente
d | Alquiler de sombrillas | D | playa, pagar, hamacas, puesto
d | Aquagym | M | piscina, ejercicio, música, monitor
d | Yoga en la playa | M | amanecer, esterilla, arena, posturas
d | Amanecer en la playa | D | sol saliendo, mar, temprano, naranja
d | Pinar junto al mar | D | pinos, sombra, playa, piñas
`
};
