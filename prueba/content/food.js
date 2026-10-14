// Comida y bebida. Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
export default {
  id: 'food', name: 'Comida y bebida', icon: 'cup', modes: 'DP', ages: 'kids',
  cards: `
f | Pizza | | italiana, queso, masa, porciones
f | Hamburguesa | | pan, carne, ketchup, comida rápida
f | Tortilla de patatas | es | huevo, cebolla, española, sartén
f | Paella | es | arroz, Valencia, gambas, domingo
f | Helado | | frío, cucurucho, verano, bola
f | Manzana | | fruta, roja, Blancanieves, árbol
f | Plátano | | fruta, amarillo, mono, pelar
f | Naranja | | fruta, zumo, Valencia, vitamina C
f | Fresa | | roja, fruta, nata, semillas
f | Sandía | | verano, roja, pepitas, verde
f | Uvas | | racimo, vino, Nochevieja, doce
f | Pan | | barra, panadería, horno, miga
f | Huevo frito | | yema, aceite, sartén, puntilla
f | Patatas fritas | | aceite, bolsa, saladas, ketchup
f | Chocolate | | cacao, dulce, tableta, onza
f | Galletas | | dulces, desayuno, mojar, horno
f | Queso | | leche, ratón, curado, agujeros
f | Leche | | vaca, blanca, desayuno, vaso
f | Zumo | | fruta, exprimir, desayuno, vaso
f | Agua | | beber, sed, botella, grifo
f | Tarta | | cumpleaños, velas, nata, bizcocho
f | Palomitas | | maíz, cine, explotar, microondas
f | Espaguetis | | pasta, tomate, italianos, largos
f | Macarrones | | pasta, tomate, gratinados, tubos
f | Sopa | | caliente, cuchara, caldo, fideos
f | Ensalada | | lechuga, tomate, aliñar, verde
f | Zanahoria | | naranja, conejo, verdura, vista
f | Tomate | | rojo, ensalada, salsa, huerta
f | Limón | | ácido, amarillo, exprimir, agrio
f | Piña | | tropical, corona, pinchos, amarilla
f | Cereza | | roja, rabito, pareja, hueso
f | Pera | | fruta, verde, forma, árbol
f | Melón | | verano, jamón, amarillo, pepitas
f | Kiwi | | verde, peludo, Nueva Zelanda, vitamina
f | Bocadillo | | pan, barra, merienda, embutido
f | Sándwich | | pan de molde, jamón, queso, mixto
f | Croquetas | es | bechamel, rebozadas, jamón, abuela
f | Churros | es | chocolate, desayuno, porras, azúcar
f | Cola Cao | es | cacao, leche, desayuno, grumos
f | Cereales | | desayuno, leche, bol, crujientes
f | Yogur | | lácteo, cuchara, natural, sabores
f | Huevo | | gallina, yema, clara, cáscara
f | Arroz | | grano, blanco, paella, cocer
f | Pollo asado | | horno, domingo, alas, muslo
f | Salchicha | | perrito, Frankfurt, alargada, ketchup
f | Perrito caliente | | salchicha, pan, mostaza, ketchup
f | Gominolas | | chuches, azúcar, ositos, colores
f | Piruleta | | caramelo, palo, chupar, corazón
f | Algodón de azúcar | | feria, rosa, palo, nube
f | Nubes | | chuches, rosa, blanditas, fuego
f | Batido | | leche, fruta, pajita, chocolate
f | Tostadas | | pan, mantequilla, desayuno, tostar
f | Donut | | agujero, rosquilla, glaseado, Homer
f | Magdalenas | | desayuno, bizcocho, papel, mojar
f | Fideos | | sopa, pasta, finos, cuchara
m | Gazpacho | es | tomate, frío, verano, Andalucía
m | Cocido madrileño | es | garbanzos, vuelcos, sopa, Madrid
m | Fabada asturiana | es | alubias, Asturias, compango, morcilla
m | Pulpo a la gallega | es | pimentón, Galicia, cachelos, plato de madera
m | Calamares a la romana | | rebozados, anillas, limón, bocadillo
m | Jamón serrano | es | cerdo, lonchas, curado, pata
m | Chorizo | es | pimentón, rojo, embutido, cerdo
m | Lentejas | | legumbre, plato, guiso, hierro
m | Garbanzos | | legumbre, cocido, hummus, remojo
m | Sushi | | Japón, arroz, pescado crudo, palillos
m | Tacos | | México, tortilla, carne, picante
m | Burrito | | México, tortilla, enrollado, frijoles
m | Lasaña | | pasta, capas, bechamel, gratinada
m | Gofre | | cuadrados, nata, Bélgica, plancha
m | Crepe | | Francia, fina, Nutella, doblada
m | Mayonesa | | huevo, aceite, salsa, blanca
m | Ketchup | | tomate, salsa, roja, patatas
m | Mostaza | | amarilla, salsa, perrito, picante
m | Aceitunas | es | verdes, aperitivo, hueso, olivo
m | Berenjena | | morada, verdura, rebozada, alargada
m | Brócoli | | verde, árbol, verdura, ramillete
m | Champiñón | | seta, blanco, sombrero, ajillo
m | Aguacate | | verde, guacamole, hueso, cremoso
m | Coco (la fruta) | | tropical, palmera, peludo, leche
m | Granada (la fruta) | | granos, rojos, abrir, otoño
m | Mango | | tropical, naranja, hueso, dulce
m | Calabaza | | naranja, Halloween, crema, gorda
m | Pimiento | | rojo, verde, relleno, Padrón
m | Ajo | | vampiros, diente, olor, cabeza
m | Cebolla | | llorar, capas, picar, aros
m | Pepino | | verde, ensalada, gazpacho, mascarilla
m | Mejillones | | marisco, concha, negros, vapor
m | Gambas al ajillo | es | cazuela, ajo, guindilla, aceite
m | Bacalao | es | pescado, salado, Portugal, desalar
m | Sardinas | | pescado, espeto, plata, lata
m | Atún | | pescado, lata, rojo, aceite
m | Salmón | | pescado, rosa, ahumado, río
m | Natillas | | postre, galleta, vainilla, cuchara
m | Flan | | postre, caramelo, huevo, temblar
m | Arroz con leche | es | canela, postre, limón, abuela
m | Torrijas | es | Semana Santa, pan, leche, canela
m | Tiramisú | | Italia, café, mascarpone, bizcocho
m | Brownie | | chocolate, nueces, cuadrado, bizcocho
m | Café con leche | | desayuno, taza, cafeína, bar
m | Horchata | es | chufa, Valencia, fartons, fría
m | Limonada | | limón, agua, azúcar, verano
m | Gaseosa | es | burbujas, tinto de verano, dulce, sifón
m | Salmorejo | es | tomate, Córdoba, huevo, jamón
m | Patatas bravas | es | salsa picante, tapa, alioli, fritas
d | Pisto | es | verduras, tomate, Manchego, sartén
d | Migas | es | pan, pastores, uvas, chorizo
d | Pipirrana | es | ensalada, Jaén, picada, tomate
d | Porra antequerana | es | fría, Antequera, tomate, espesa
d | Escalivada | es | verduras asadas, Cataluña, pimiento, berenjena
d | Calçots | es | cebollas, romesco, Valls, babero
d | Marmitako | es | atún, patatas, Euskadi, guiso
d | Bacalao al pil pil | es | emulsión, cazuela, Bilbao, ajo
d | Zarangollo | es | Murcia, calabacín, huevo, cebolla
d | Papas arrugadas | es | Canarias, mojo, sal, piel
d | Ensaimada | es | Mallorca, espiral, azúcar glas, manteca
d | Sobrasada | es | Mallorca, untar, cerdo, pimentón
d | Fartons | es | horchata, alargados, glaseado, Alboraya
d | Tarta de Santiago | es | almendra, cruz, Galicia, azúcar glas
d | Crema catalana | es | quemar, azúcar, postre, Cataluña
d | Ceviche | | Perú, pescado, limón, crudo
d | Hummus | | garbanzos, Oriente, tahini, untar
d | Falafel | | garbanzos, bolas, fritas, pita
d | Moussaka | | Grecia, berenjena, carne, bechamel
d | Goulash | | Hungría, guiso, pimentón, ternera
d | Kebab | | doner, carne, pan de pita, salsa
d | Ramen | | Japón, fideos, caldo, huevo
d | Dim sum | | China, vapor, empanadillas, cestas
d | Cuscús | | sémola, Marruecos, verduras, cordero
d | Bulgur | | trigo, ensalada, tabulé, grano
d | Quinoa | | grano, Perú, superalimento, ensalada
d | Wasabi | | picante, verde, Japón, sushi
d | Kombucha | | té, fermentado, burbujas, hongo
d | Mate | | Argentina, calabaza, bombilla, hierba
d | Sidra | es t | Asturias, escanciar, manzana, botella
d | Vermú | es t | aperitivo, sifón, aceituna, domingo
d | Sangría | es t | vino, fruta, jarra, verano
d | Kalimotxo | es t | vino, cola, botellón, Euskadi
d | Orujo | es t | aguardiente, Galicia, queimada, licor
d | Cecina | es | León, carne curada, vaca, lonchas
d | Morcilla de Burgos | es | arroz, sangre, negra, embutido
d | Queso manchego | es | oveja, La Mancha, curado, cuña
d | Torta del Casar | es | Extremadura, untuoso, cuchara, oveja
d | Lacón con grelos | es | Galicia, cerdo, verdura, Carnaval
d | Pestiños | es | miel, fritos, Semana Santa, Andalucía
d | Buñuelos de viento | es | Todos los Santos, crema, huecos, fritos
d | Huesos de santo | es | mazapán, Todos los Santos, rellenos, tubo
d | Leche frita | es | rebozada, canela, postre, cuadrados
d | Quesada pasiega | es | Cantabria, queso, postre, tarta
f | Bocadillo de calamares | D es | Madrid, pan, rebozado, Plaza Mayor
f | Huevos rotos | D es | patatas, jamón, yema, freír
f | Albóndigas | D | carne, salsa, bolas, tomate
f | Empanada gallega | D es | masa, atún, Galicia, horno
f | Empanadillas | D | masa, atún, freír, rellenas
f | Canelones | D | pasta, bechamel, Navidad, horno
f | Nuggets de pollo | D | rebozado, trocitos, niños, freír
f | Alitas de pollo | D | picantes, comer con las manos, salsa
f | Patatas de bolsa | M | crujientes, aperitivo, sal
f | Gusanitos | D | aperitivo, naranja, maíz, bolsa
f | Pipas | M | girasol, cáscara, comer, banco
f | Frutos secos | D | nueces, almendras, cacahuetes, aperitivo
f | Cacahuetes | D | maní, cáscara, aperitivo, mono
f | Almendras | D | fruto seco, turrón, árbol, tostadas
f | Nueces | D | fruto seco, cáscara, cerebro, cascanueces
f | Pasas | D | uva seca, arrugadas, dulce, pequeñas
f | Melocotón | D | fruta, piel peluda, hueso, verano
f | Ciruela | D | fruta, morada, hueso, seca
f | Albaricoque | D | fruta, naranja, hueso, pequeño
f | Higo | D | fruta, higuera, morado, dulce
f | Mandarina | D | fruta, naranja, pelar, gajos
f | Pomelo | D | cítrico, amargo, rosa, zumo
f | Frambuesa | D | fruta roja, pequeña, mermelada, bosque
f | Arándanos | D | azules, pequeños, bosque, antioxidantes
f | Mora | D | zarza, negra, silvestre, mermelada
f | Lechuga | D | ensalada, verde, hojas, hamburguesa
f | Patata | D | tubérculo, freír, tortilla, puré
f | Guisantes | D | verdes, vaina, bolitas, legumbre
f | Judías verdes | D | vainas, verdura, hervir, largas
f | Espárragos | D | blancos, verdes, lata, mayonesa
f | Coliflor | D | blanca, verdura, olor, bechamel
f | Espinacas | D | Popeye, verdes, hojas, hierro
f | Maíz | D | mazorca, amarillo, palomitas, granos
f | Puré de patatas | D | aplastar, cremoso, mantequilla, guarnición
f | Tortitas | D | sirope, desayuno, montón, sartén
f | Bizcocho | D | horno, esponjoso, merienda, harina
f | Rosquillas | D | agujero, fritas, azúcar, San Isidro
f | Cupcake | D | magdalena, crema, decorado, pequeño
f | Polvorón | D | Navidad, almendra, deshacer, mantecado
f | Mermelada | D | fruta, untar, tostada, bote
f | Mantequilla | D | untar, tostada, amarilla, leche
f | Miel | D | abeja, dulce, untar, tarro
m | Pan con tomate | D es | Cataluña, untar, aceite, pan tumaca
m | Sopa de ajo | D es | pan, huevo, ajo, Castilla
m | Lechazo | D es | cordero, Castilla, horno, asado
m | Rabo de toro | D es | guiso, Córdoba, carne, salsa
m | Callos a la madrileña | D es | guiso, garbanzos, chorizo, tripas
m | Torreznos | D es | Soria, panceta, crujiente, frito
m | Flamenquín | D es | Córdoba, rollo, jamón, rebozado
m | Pescaíto frito | D es | Andalucía, boquerones, freír, playa
m | Boquerones en vinagre | D es | pescado, aperitivo, ajo, perejil
m | Ajoblanco | D es | sopa fría, almendras, Málaga, uvas
m | Fideuá | D es | fideos, paellera, Valencia, marisco
m | Arroz negro | D es | tinta, calamar, alioli, paella
m | All i pebre | D es | anguila, Valencia, Albufera, guiso
m | Caldo gallego | D es | Galicia, grelos, sopa, patatas
m | Pimientos de Padrón | D es | unos pican, otros no, Galicia, fritos
m | Zamburiñas | D es | Galicia, marisco, concha, plancha
m | Tarta de queso | D | horno, cremosa, postre, la Viña
m | Merluza en salsa verde | D es | pescado, perejil, almejas, vasco
m | Kokotxas | D es | merluza, pil pil, vasco, papada
m | Txangurro | D es | centollo, relleno, vasco, marisco
m | Pintxos | D es | San Sebastián, palillo, barra, pan
m | Cachopo | D es | Asturias, filetes, queso, jamón
m | Sobaos pasiegos | D es | Cantabria, bizcocho, mantequilla, desayuno
m | Yemas de Santa Teresa | D es | Ávila, dulce, huevo, monjas
m | Torta de aceite | D es | Sevilla, Ines Rosales, crujiente, anís
m | Guacamole | D | aguacate, México, nachos, verde
m | Nachos | D | queso, totopos, México, gratinados
m | Quesadilla | D | tortilla, queso, México, doblada
m | Enchiladas | D | tortilla, salsa, México, rellenas
m | Arepa | D | Venezuela, maíz, rellena, redonda
m | Pad thai | D | fideos, Tailandia, cacahuete, gambas
m | Curry | D | India, especias, amarillo, arroz
m | Rollitos de primavera | D | chino, fritos, verdura, salsa agridulce
m | Arroz tres delicias | D | chino, guisantes, jamón, tortilla
d | Gyozas | D | empanadillas japonesas, vapor, plancha, Japón
d | Tempura | D | rebozado, japonés, verduras, gambas
d | Takoyaki | D | bolitas, pulpo, Japón, salsa
d | Onigiri | D | bola de arroz, alga, Japón, triángulo
d | Kimchi | D | Corea, fermentado, picante, col
d | Bibimbap | D | Corea, arroz, huevo, verduras
d | Pho | D | Vietnam, sopa, fideos, ternera
d | Tajín | D | Marruecos, cazuela, cono, guiso
d | Shawarma | D | carne, giratorio, pan, Oriente
d | Baklava | D | dulce, hojaldre, miel, pistacho
d | Tzatziki | D | yogur, pepino, Grecia, salsa
d | Fondue | D | queso fundido, Suiza, pinchos, pan
d | Raclette | D | queso, Suiza, fundir, patatas
d | Risotto | D | arroz cremoso, Italia, parmesano, remover
d | Carpaccio | D | crudo, finas lonchas, ternera, Italia
d | Gnocchi | D | patata, pasta, bolitas, Italia
d | Bruschetta | D | pan tostado, tomate, Italia, albahaca
d | Panna cotta | D | postre, nata, Italia, gelatina
d | Pavlova | D | merengue, frutas, nata, Australia
d | Strudel | D | manzana, hojaldre, Austria, canela
d | Sachertorte | D | tarta, chocolate, Viena, albaricoque
d | Macarons | D | francés, colores, almendra, relleno
d | Quiche | D | francesa, huevo, masa, bacon
d | Ratatouille (el plato) | D | verduras, Francia, horno, película
d | Fish and chips | D | Reino Unido, pescado, patatas, vinagre
d | Haggis | D | Escocia, cordero, estómago, tradicional
d | Pierogi | D | Polonia, empanadillas, rellenas, hervidas
d | Borsch | D | remolacha, sopa, roja, Rusia
d | Ensaladilla rusa | D es | patata, mayonesa, atún, tapa
d | Salpicón de marisco | D es | frío, vinagreta, picado
d | Gofio | D es | Canarias, harina tostada, maíz, cereal
d | Mojo picón | D es | Canarias, salsa, papas, pimienta
d | Ropa vieja | D es | carne, garbanzos, sobras, Canarias
d | Caldereta de langosta | D es | Menorca, guiso, caro
d | Tumbet | D es | Mallorca, verduras, berenjena, patata
d | Idiazábal | D es | queso, ahumado, vasco, oveja
d | Cabrales | D es | queso azul, Asturias, cueva, fuerte
`
};
