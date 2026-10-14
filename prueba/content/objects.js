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
f | Monedero | D | monedas, dinero, cremallera, bolso
f | Llavero | D | llaves, colgante, anilla, juntar
f | Pinza del pelo | D | sujetar, horquilla, cabeza
f | Cepillo del pelo | M | peinar, púas, cabello, desenredar
f | Esponja | D | baño, jabón, frotar, amarilla
f | Champú | M | pelo, lavar, espuma, botella
f | Pasta de dientes | D | tubo, cepillo, blanca, dentífrico
f | Hilo dental | M | dientes, limpiar, entre, encías
f | Pañuelo de papel | M | mocos, sonarse, caja, Kleenex
f | Mascarilla | D | cara, boca, nariz, proteger
f | Cajón | M | mueble, abrir, cerrar, guardar
f | Armario | D | ropa, puertas, perchas, mueble
f | Estantería | D | libros, baldas, mueble, colocar
f | Sofá | D | sentarse, salón, cojines, tumbarse
f | Cojín | D | sofá, almohadón, blando, salón
f | Manta | M | taparse, frío, sofá, lana
f | Edredón | D | cama, nórdico, plumas, invierno
f | Colchón | D | cama, dormir, muelles, blando
f | Alfombra | D | suelo, salón, pisar, tejida
f | Cortina | D | ventana, tela, correr, luz
f | Cuadro | D | pared, pintura, marco, colgar
f | Jarrón | D | flores, agua, cerámica, mesa
f | Maceta | D | planta, tierra, regar, flores
f | Reloj de pared | D | hora, agujas, colgar, tictac
f | Calendario | D | días, meses, año, pared
f | Cubo de basura | D | tirar, bolsa, reciclar, tapa
f | Bolsa de plástico | D | supermercado, asas, llevar, reciclar
f | Papel de aluminio | M | envolver, bocadillo, brillante, cocina
f | Táper | D | comida, tapa, guardar, plástico
f | Botella de agua | D | beber, plástico, tapón, rellenar
f | Termo | D | caliente, café, frío, conservar
f | Cuaderno | D | escribir, hojas, colegio, apuntes
f | Rotulador | D | pintar, colores, tapa, escribir
f | Ceras de colores | D | pintar, niños, dibujar
f | Celo | M | pegar, cinta, transparente, rollo
m | Cinta americana | M | pegar, gris, arreglar, fuerte
m | Llave inglesa | D | tuercas, herramienta, ajustar, fontanero
m | Sierra | M | cortar, madera, dientes, serrar
m | Taladro | M | agujero, pared, broca, ruido
m | Lija | M | madera, áspera, alisar, papel
m | Nivel de burbuja | D | recto, horizontal, obra
m | Rastrillo | D | hojas, jardín, púas, recoger
m | Pala | D | cavar, tierra, jardín, nieve
m | Azada | D | huerto, cavar, campo, tierra
m | Cortacésped | M | césped, jardín, motor, cortar
m | Cesto de la ropa | D | ropa sucia, lavadora, mimbre, colada
m | Plancha de pelo | M | alisar, calor, rizos
m | Rizador | M | rizos, pelo, calor, tenacillas
m | Maquinilla de afeitar | M | barba, cuchilla, afeitarse, espuma
m | Colonia | M | perfume, oler bien, frasco, echarse
m | Desodorante | M | axilas, sudor, spray, oler
m | Bastoncillos de los oídos | M | orejas, algodón, limpiar, cera
m | Lima de uñas | M | limar, manicura, áspera
m | Pintaúñas | M | uñas, esmalte, colores, manicura
m | Neceser | D | aseo, viaje, bolsa, cepillo
m | Percha | D | colgar, ropa, armario, gancho
m | Mesilla de noche | D | cama, lámpara, cajón, dormitorio
m | Flexo | D | lámpara, escritorio, estudiar, luz
m | Lámpara de lava | D | burbujas, colores, años setenta, luz
m | Regleta | D | enchufes, cable, varios, electricidad
m | Pilas | D | energía, mando, cargar, botón
m | Impresora | M | papel, tinta, imprimir, atasco
m | Fotocopiadora | M | copias, papel, oficina, luz
m | Destructora de papel | M | triturar, documentos, tiras, oficina
m | Archivador | D | carpetas, documentos, oficina, cajones
m | Sobre | D | carta, sello, correo, pegar
m | Papel de regalo | M | envolver, lazo, celo
m | Lazo | D | regalo, cinta, nudo, adorno
m | Incienso | M | oler, palito, humo, aroma
m | Mechero | M | fuego, encender, llama, bolsillo
m | Cerillas | M | fuego, caja, rascar, encender
m | Extintor | D | fuego, rojo, apagar, espuma
m | Botiquín | D | tiritas, primeros auxilios, cruz, medicinas
m | Bolsa de agua caliente | D | cama, invierno, calentar, goma
d | Sifón | D | soda, botella, chorro, presión
d | Porrón | M es | vino, beber, chorro, cristal
d | Bota de vino | M es | piel, chorro, beber
d | Molinillo de café | M | granos, moler, manivela
d | Cafetera italiana | D | café, fuego, moka, borbotear
d | Olla exprés | M | presión, vapor, cocinar, válvula
d | Cuchillo jamonero | D | jamón, largo, cortar, lonchas
d | Jamonero | D | soporte, jamón, pata, cortar
d | Tabla de cortar | D | cocina, cuchillo, madera, picar
d | Salero | D | sal, mesa, agujeros, echar
d | Pimentero | D | pimienta, moler, mesa, especia
d | Aceitera | D | aceite, mesa, verter, vinagrera
d | Servilletero | D | servilletas, mesa, papel, soporte
d | Mantel | D | mesa, tela, comer, cuadros
d | Posavasos | D | vaso, mesa, cartón, marca
d | Cuchara de palo | D | madera, cocinar, remover, olla
d | Espumadera | D | agujeros, freír, sacar, cocina
d | Cazo | D | cocinar, mango, hervir, leche
d | Cacerola | D | olla, asas, cocinar, tapa
d | Paellera | D es | arroz, paella, redonda, asas
d | Batidor de varillas | M | huevos, nata, montar, alambre
d | Manga pastelera | M | nata, decorar, boquilla, tarta
d | Funda nórdica | D | edredón, cama, tela, cubrir
d | Somier | D | cama, colchón, láminas, base
d | Biombo | D | separar, paneles, plegable, tapar
d | Mecedora | M | balancear, silla, abuela, porche
d | Puf | D | asiento, blando, bolas, suelo
d | Revistero | D | revistas, periódicos, salón, guardar
d | Paragüero | D | paraguas, entrada, cubo, guardar
d | Tabla de planchar | D | ropa, plegable, funda
d | Hervidor de agua | M | té, calentar, enchufe, pitar
d | Sandwichera | M | sándwich, tostar, aplastar, enchufe
d | Freidora de aire | D | freír, sin aceite, cesta, airfryer
d | Humidificador | D | vapor, aire seco, habitación, agua
d | Estufa de butano | D | bombona, calor, invierno, naranja
d | Bombona de butano | D es | gas, naranja, butanero, cocina
d | Caldera | D | calefacción, agua caliente, gas, casa
d | Termostato | D | temperatura, calefacción, regular, grados
`
};
