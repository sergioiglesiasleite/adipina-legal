// Objetos cotidianos. Por defecto aptos para peques. Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
export default {
  id: 'objects', name: 'Objetos cotidianos', icon: 'cup', modes: 'DMP', ages: 'kids',
  cards: `
f | Paraguas | | lluvia, abrir, mojarse, varillas
f | Cepillo de dientes | | pasta, boca, lavar, baño
f | Teléfono | | llamar, hablar, número, móvil
f | Tijeras | | cortar, papel, filo, dos hojas
f | Bicicleta | | pedales, ruedas, manillar, montar
f | Gafas | | ver, ojos, cristales, miope
f | Sartén | | freír, cocina, aceite, mango
f | Almohada | | cama, dormir, cabeza, funda
f | Mochila | | espalda, colegio, llevar, cremallera
f | Reloj | | hora, agujas, muñeca, tiempo
f | Escoba | | barrer, suelo, bruja, recogedor
f | Llave | | puerta, abrir, cerradura, llavero
f | Lámpara | | luz, bombilla, encender, mesa
f | Silla | | sentarse, patas, respaldo, mesa
f | Mesa | | patas, comer, tablero, mantel
f | Cama | | dormir, sábanas, colchón, almohada
f | Taza | | café, desayuno, asa, beber
f | Cuchara | | sopa, cubierto, comer, cucharada
f | Tenedor | | pinchar, cubierto, púas, comer
f | Cuchillo | | cortar, cubierto, filo, mesa
f | Vaso | | beber, agua, cristal, brindar
f | Plato | | comer, mesa, llano, hondo
f | Lápiz | | escribir, punta, goma, madera
f | Bolígrafo | | escribir, tinta, boli, azul
f | Libro | | leer, páginas, historia, biblioteca
f | Pelota | | jugar, redonda, botar, chutar
f | Zapato | | pie, cordones, calzar, suela
f | Calcetín | | pie, par, lavadora, desparejado
f | Televisión | | ver, mando, canales, pantalla
f | Ordenador | | teclado, ratón, pantalla, internet
f | Nevera | | frío, comida, cocina, congelador
f | Lavadora | | ropa, lavar, centrifugar, detergente
f | Microondas | | calentar, cocina, minutos, pitido
f | Ducha | | agua, baño, mojarse, jabón
f | Bañera | | agua, baño, espuma, patito
f | Espejo | | reflejo, mirarse, cristal, baño
f | Peine | | pelo, púas, peinarse, enredos
f | Toalla | | secarse, baño, playa, mojada
f | Jabón | | lavarse, manos, espuma, pastilla
f | Papel higiénico | | rollo, baño, váter, limpiarse
f | Cama elástica | | saltar, muelles, jardín, botar
f | Globo | | inflar, aire, fiesta, explotar
f | Vela | | fuego, cera, soplar, mecha
f | Cubo | | agua, asa, fregar, playa
f | Escalera | | subir, peldaños, bajar, altura
f | Puerta | | abrir, cerrar, pomo, entrar
f | Ventana | | cristal, abrir, mirar, persiana
f | Martillo | | clavo, golpear, herramienta, carpintero
f | Linterna | | luz, pilas, oscuridad, alumbrar
f | Cámara de fotos | | foto, flash, objetivo, disparar
f | Auriculares | | música, orejas, escuchar, cable
f | Mando a distancia | | tele, botones, cambiar, sofá
f | Gorro | | cabeza, frío, lana, invierno
f | Bufanda | | cuello, frío, lana, invierno
f | Cartera | | dinero, bolsillo, tarjetas, billetes
f | Sacapuntas | | lápiz, punta, afilar, virutas
f | Goma de borrar | | lápiz, errores, migas, Milán
f | Regla | | medir, líneas, centímetros, recta
f | Pegamento | | pegar, barra, papel, manualidades
f | Calculadora | | números, sumar, teclas, matemáticas
m | Sacacorchos | | vino, botella, abrir, tapón
m | Aspiradora | | polvo, suelo, limpiar, ruido
m | Grapadora | | grapas, papeles, oficina, unir
m | Regadera | | plantas, agua, jardín, regar
m | Secador de pelo | | aire, caliente, peluquería, ruido
m | Brújula | | norte, aguja, orientarse, mapa
m | Abrelatas | | lata, abrir, conserva, cocina
m | Plancha | | ropa, arrugas, vapor, caliente
m | Tostadora | | pan, desayuno, saltar, tostadas
m | Batidora | | batir, cocina, mezclar, eléctrica
m | Cafetera | | café, desayuno, italiana, cápsulas
m | Exprimidor | | naranjas, zumo, apretar, limón
m | Rallador | | queso, rallar, agujeros, cocina
m | Colador | | escurrir, agujeros, pasta, agua
m | Tendedero | | ropa, pinzas, secar, colgar
m | Pinza de la ropa | | tender, sujetar, cuerda, colgar
m | Destornillador | | tornillo, girar, herramienta, punta
m | Alicates | | sujetar, herramienta, cable, cortar
m | Cinta métrica | | medir, metro, enrollar, centímetros
m | Candado | | cerrar, llave, combinación, cadena
m | Despertador | | sonar, mañana, alarma, levantarse
m | Termómetro | | fiebre, temperatura, grados, medir
m | Tirita | | herida, pegar, corte, curar
m | Hucha | | ahorrar, monedas, cerdito, romper
m | Abanico | | calor, aire, verano, abrir
m | Perchero | | colgar, abrigos, entrada, ganchos
m | Felpudo | | puerta, pies, limpiarse, entrada
m | Persiana | | ventana, bajar, subir, luz
m | Enchufe | | electricidad, pared, cable, conectar
m | Bombilla | | luz, idea, encender, lámpara
m | Ventilador | | aire, aspas, calor, girar
m | Radiador | | calor, calefacción, invierno, caliente
m | Embudo | | líquido, botella, verter, cono
m | Mortero | | machacar, ajo, cocina, almirez
m | Rodillo de cocina | | masa, amasar, estirar, harina
m | Fregona | | suelo, cubo, limpiar, escurrir
m | Recogedor | | escoba, polvo, barrer, basura
m | Matamoscas | | moscas, golpear, verano, insectos
m | Cuerda de saltar | | brincar, patio, comba, niños
m | Agenda | | citas, apuntar, días, calendario
m | Clip | | papeles, sujetar, metal, oficina
m | Chincheta | | clavar, corcho, papel, pinchar
m | Pinzas de depilar | | pelos, cejas, arrancar, pequeñas
m | Cortaúñas | | uñas, cortar, manos, pies
m | Báscula | | peso, kilos, pesarse, baño
d | Metrónomo | | ritmo, música, tic tac, compás
d | Calibrador | | medir, precisión, pie de rey, milímetros
d | Proyector | | pared, luz, películas, presentación
d | Máquina de escribir | 70s | teclas, papel, antigua, letras
d | Prismáticos | | lejos, ver, aumentar, ojos
d | Desatascador | | váter, ventosa, atasco, empujar
d | Destapador | | botella, chapa, abrir, cerveza
d | Cascanueces | | nueces, romper, Navidad, apretar
d | Pasapurés | | puré, manivela, patatas, triturar
d | Escurridor de platos | | secar, vajilla, fregadero, rejilla
d | Calzador | | zapato, talón, ponerse, largo
d | Plumero | | polvo, plumas, limpiar, muebles
d | Dedal | | coser, dedo, aguja, proteger
d | Ovillo de lana | | tejer, punto, hilo, gato
d | Alfiletero | | alfileres, coser, pinchar, cojín
d | Tamiz | | harina, colar, fino, repostería
d | Aguja de coser | | hilo, ojo, dedal, pinchar
d | Gancho de croché | | ganchillo, tejer, lana, punto
d | Lupa | | aumentar, detective, cristal, ver
d | Sello de caucho | | tinta, estampar, oficina, documentos
d | Pisapapeles | | papeles, peso, mesa, sujetar
d | Atril | | partitura, música, sujetar, leer
d | Casete | 80s | cinta, música, rebobinar, boli
d | Walkman | 80s | cinta, música, Sony, auriculares
d | Disquete | 90s | ordenador, guardar, antiguo, megas
d | Busca | 90s | mensajes, pitido, cinturón, médicos
d | Teléfono de rueda | 70s | marcar, girar, antiguo, números
d | Tocadiscos | 70s | vinilos, aguja, girar, música
d | Reloj de arena | | tiempo, ampolla, girar, minutos
d | Botijo | es | agua, barro, fresca, pitorro
d | Brasero | es | calor, mesa camilla, carbón, invierno
d | Mesa camilla | es | faldas, brasero, invierno, salón
d | Orinal | | pis, niños, baño, bacinilla
d | Quinqué | | aceite, luz, antigua, lámpara
d | Candil | | aceite, luz, antiguo, mecha
d | Botafumeiro | es | Santiago, incienso, catedral, columpiarse
d | Pajarita (de papel) | | papiroflexia, doblar, origami, ave
`
};
