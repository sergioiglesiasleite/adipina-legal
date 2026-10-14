// Marcas, mascotas de anuncio y anuncios míticos. Formato: dificultad (f/m/d) | respuesta | etiquetas | palabras prohibidas.
// Solo marcas que forman parte de la cultura, como texto: sin logotipos ni publicidad. Las de alcohol, para mayores (t).
export default {
  id: 'brands', name: 'Marcas y anuncios', icon: 'case', modes: 'MP',
  cards: `
f | McDonald's | D | hamburguesa, payaso, Big Mac, patatas
f | Nike | D | zapatillas, deporte, Just do it, Jordan
f | Adidas | D | rayas, zapatillas, deporte, alemana
f | Apple | D | iPhone, manzana, Mac, Steve Jobs
f | Samsung | | móvil, Galaxy, coreana, televisor
f | Zara | | ropa, Inditex, tienda, Amancio
f | IKEA | | muebles, sueco, montar, albóndigas
f | Mercadona | es | supermercado, Hacendado, Juan Roig, Valencia
f | El Corte Inglés | es | grandes almacenes, verde, primavera, Navidad
f | Nutella | D | crema, cacao, avellanas, untar
f | Chupa Chups | D es | caramelo, palo, piruleta, Dalí
f | Burger King | | hamburguesa, Whopper, corona, comida rápida
f | Telepizza | es | pizza, domicilio, repartidor, masa
f | Disney | D | Mickey, castillo, películas, princesas
f | Ferrari | D | rojo, caballo, Fórmula 1, Italia
f | Mercedes-Benz | D | coche, estrella, alemán, lujo
f | Seat | es | coche, Ibiza, León, Martorell
f | Fanta | | naranja, refresco, burbujas, limón
f | Pepsi | | refresco, cola, azul, Coca
f | Red Bull | | energía, alas, lata, toro
f | KFC | | pollo, frito, coronel, cubo
f | Starbucks | D | café, sirena, vaso, nombre
f | Primark | | ropa, barata, tienda, bolsa
f | Decathlon | | deporte, tienda, Quechua, bici
f | Lidl | | supermercado, alemán, ofertas, azul
f | Carrefour | | supermercado, francés, hipermercado, compra
f | Toyota | | coche, japonés, híbrido, Corolla
f | Tesla | | eléctrico, Elon Musk, coche, batería
f | Movistar | es | teléfono, fútbol, fibra, Telefónica
f | Pringles | D | patatas, tubo, bigote, lata
f | Doritos | D | triángulo, nachos, queso, picante
f | Oreo | D | galleta, negra, crema, mojar
f | Kit Kat | | chocolate, barquillo, descanso, partir
f | Colgate | | pasta, dientes, sonrisa, cepillo
f | Danone | | yogur, natural, francés, postre
f | Bimbo | | pan, molde, oso, sándwich
f | Hacendado | es | Mercadona, marca blanca, supermercado, barato
f | Haribo | D | gominolas, osito, dulces, oro
f | Coca-Cola | D | refresco, roja, burbujas, chispa
m | Mahou | t es | cerveza, Madrid, cinco estrellas, caña
m | Estrella Damm | t es | cerveza, Barcelona, Mediterráneamente, caña
m | Cruzcampo | t es | cerveza, Sevilla, gordito, caña
m | Mango (la tienda) | | ropa, escaparate, Barcelona, moda
m | Bershka | | ropa, Inditex, jóvenes, tienda
m | Pull&Bear | | ropa, Inditex, jóvenes, tienda
m | Desigual | es | ropa, colores, Barcelona, estampado
m | Pescanova | es | pescado, congelado, Galicia, varitas
m | Calvo | es | atún, lata, Galicia, aceite
m | ColaCao Turbo | es | cacao, grumos, polvo, leche
m | Nesquik | | cacao, conejo, leche, polvo
m | Phoskitos | 90s es | bollo, cromos, chocolate, merienda
m | Bollycao | 90s es | bollo, chocolate, merienda, relleno
m | Donettes | es | rosquilla, chocolate, pequeños, bolsa
m | Tulipán (la margarina) | es | mantequilla, untar, pan, tostada
m | Puleva | es | leche, Granada, cartón, desayuno
m | Gallina Blanca | es | caldo, pastilla, sopa, cocina
m | Avecrem | es | caldo, pastilla, sopa, gallina
m | Mistol | es | lavavajillas, fregar, platos, limón
m | Fairy | | lavavajillas, platos, Villarriba, grasa
m | Ray-Ban | | gafas, sol, aviador, Wayfarer
m | Rolex | | reloj, lujo, suizo, corona
m | Louis Vuitton | | bolso, lujo, francés, LV
m | Gucci | | moda, lujo, italiana, bolso
m | Chanel | | perfume, número cinco, Coco, moda
m | Levi's | | vaqueros, pantalón, 501, tejano
m | Converse | | zapatillas, All Star, lona, estrella
m | Vans | | zapatillas, skate, cuadros, suela
m | Lacoste | D | cocodrilo, polo, francés, tenis
m | Puma | D | zapatillas, felino, deporte, alemana
m | Volkswagen | | coche, Golf, Escarabajo, alemán
m | BMW | | coche, alemán, conducir, Múnich
m | Audi | D | coche, aros, cuatro, alemán
m | Renault | | coche, francés, Clio, rombo
m | Peugeot | | coche, francés, león, 206
m | Harley-Davidson | | moto, americana, motero, ruido
m | Lamborghini | | coche, toro, italiano, deportivo
m | Duracell | | pilas, conejo, cobre, duran
m | Mattel | | juguetes, Barbie, Hot Wheels, americana
m | Hello Kitty | D k | gata, lazo, japonesa, rosa
m | Kellogg's | | cereales, desayuno, Corn Flakes, tigre
m | Heinz | | ketchup, botella, tomate, salsa
m | Ferrero Rocher | | bombón, avellana, dorado, embajador
m | Toblerone | D | chocolate, triángulo, Suiza, montaña
m | Milka | | chocolate, vaca, morada, alpes
m | Freixenet | t es | cava, burbujas, Navidad, brindis
m | Spotify Wrapped | 20s | resumen, año, canciones, escuchar
d | Inditex | es | Zara, Amancio, empresa, Arteixo
d | Loewe | es | lujo, bolsos, Madrid, piel
d | Balenciaga | | moda, lujo, Getaria, diseñador
d | Camper | es | zapatos, Mallorca, Inca, calzado
d | Chocolates Valor | es | chocolate, Villajoyosa, puro, negro
d | Lacasitos | es | chocolate, colores, grageas, tubo
d | Conguitos | es | cacahuete, chocolate, bolsa, aperitivo
d | Petit Suisse | es | yogur, pequeño, niños, fresa
d | Kas | es | refresco, naranja, limón, Vitoria
d | La Casera | es | gaseosa, sifón, burbujas, botella
d | Licor 43 | t es | digestivo, Cartagena, amarillo, botella
d | Osborne | es | toro, carretera, jerez, silueta
d | Tío Pepe | t es | jerez, botella, sombrero, Puerta del Sol
d | Cuétara | es | galletas, María, Reinosa, Tosta Rica
d | Tosta Rica | es | galletas, desayuno, dibujos, Cuétara
d | ElPozo | es | embutido, Murcia, jamón, pavo
d | Campofrío | es | embutido, Navidad, anuncio, Burgos
d | Pikolin | es | colchón, dormir, descanso, cama
d | Sanitas | es | seguro, médico, salud, clínica
d | Mapfre | es | seguro, coche, rojo, compañía
d | Iberia | es | avión, aerolínea, vuelo, rojo
d | Renfe | es | tren, AVE, Cercanías, estación
d | Correos | es | cartas, amarillo, paquetes, sello
d | Patek Philippe | | reloj, lujo, Ginebra, caro
d | Hermès (la marca) | | bolso, Birkin, lujo, pañuelo
d | Lego Technic | | piezas, engranajes, construir, motores
d | Montblanc | | pluma, estilográfica, lujo, estrella
d | Tupperware | | táper, plástico, comida, fiambrera
d | Thermomix | | robot, cocina, Vorwerk, recetas
d | Roomba | | robot, aspirador, suelo, limpiar
d | Polaroid | D | foto, instantánea, cámara, revelar
d | Zippo | | mechero, metal, llama, encendedor
d | Post-it | D | nota, adhesivo, amarillo, pegar
f | Villarriba y Villabajo | 90s es | Fairy, fregar, paella, pueblos
f | El conejito de Duracell | | pilas, tambor, rosa, duran
f | Don Limpio | 90s es | calvo, limpiador, pendiente, músculos
f | Pato WC | 90s es | váter, limpiar, baño, cuello
f | La vaca que ríe | k | queso, quesitos, roja, pendientes
f | El muñeco de Michelin | D | neumáticos, blanco, ruedas, gordito
f | El tigre de Frosties | k | cereales, Tony, grrr, desayuno
f | El conejo de Nesquik | k | cacao, Quicky, leche, desayuno
f | El calvo de la Lotería de Navidad | 00s es | anuncio, sorteo, Gordo, sonrisa
f | Las burbujas de Freixenet | t es | cava, Navidad, baile, botella
f | El osito de Mimosín | 90s es | suavizante, ropa, peluche, blandito
f | Anuncio de colonias en Navidad | | perfume, francés, susurro, regalo
f | Tudum | 20s | Netflix, sonido, inicio, serie
m | El anuncio de la Coca-Cola Light | 90s | obrero, oficina, ventana, guapo
m | Anuncio de Campofrío de Navidad | 10s es | embutido, humor, famosos, fiestas
m | El perro de Scottex | 90s | papel higiénico, cachorro, rollo, suave
m | El turrón más caro del mundo | 10s es | Suchard, anuncio, Navidad, chocolate
f | Nescafé |  | café soluble, taza, Nestlé, instantáneo
f | Nestlé |  | chocolate, multinacional, suiza, nido
f | Sprite |  | refresco, lima limón, verde, transparente
f | Aquarius |  | bebida isotónica, deporte, Coca-Cola, sed
f | Nestea |  | té, refresco, limón, botella
f | Font Vella | es | agua, botella, Cataluña, manantial
f | Trident |  | chicle, sin azúcar, menta, paquete
f | Mentos |  | caramelos, Coca-Cola, explosión, tubo
f | Smint |  | caramelos, menta, cajita, aliento
f | Maltesers |  | bolas, chocolate, crujiente, bolsa
f | M&M's |  | chocolate, colores, cacahuete, personajes
f | Twix |  | chocolate, galleta, caramelo, dos barritas
f | Snickers |  | chocolate, cacahuete, caramelo, barrita
f | Kinder Bueno |  | chocolate, barquillo, avellana, Ferrero
f | Lays |  | patatas fritas, bolsa, aperitivo, crujientes
f | Cheetos |  | ganchitos, naranja, maíz, Chester
f | Ruffles |  | patatas, onduladas, bolsa, aperitivo
f | Coca-Cola Zero |  | sin azúcar, refresco, negra, lata
f | Air Jordan |  | zapatillas, Michael Jordan, Nike, baloncesto
f | New Balance |  | zapatillas, N, deporte, running
f | Reebok |  | zapatillas, deporte, aerobic, británica
f | Quechua |  | Decathlon, montaña, tiendas, mochilas
f | Leroy Merlin |  | bricolaje, tienda, herramientas, casa
f | MediaMarkt |  | electrónica, tienda, rojo, yo no soy tonto
f | FNAC |  | libros, música, electrónica, tienda
f | Toys "R" Us |  | juguetes, jirafa, tienda, niños
f | Imaginarium | es | juguetes, puerta pequeña, tienda, niños
f | Sephora |  | maquillaje, perfumes, tienda, cosmética
f | Dia | es | supermercado, descuento, rojo, barrio
f | Alcampo | es | hipermercado, pájaro, compra, grande
f | Eroski | es | supermercado, cooperativa, vasco, compra
f | Aldi |  | supermercado, alemán, descuento, azul
f | Just Eat |  | comida a domicilio, app, pedido, naranja
f | Uber Eats |  | comida a domicilio, app, verde, repartidor
f | Domino's Pizza |  | domicilio, ficha de dominó, repartidor
f | Pizza Hut |  | sombrero rojo, restaurante, masa
f | Foster's Hollywood | es | restaurante, americano, hamburguesas, costillas
f | VIPS | es | restaurante, tortitas, tienda, sándwich
f | 100 Montaditos | es | bocadillos pequeños, euromanía, bar, cerveza
m | Danacol | es | colesterol, yogur bebible, Danone, corazón
m | Actimel |  | defensas, yogur bebible, botellita, Danone
m | Activia |  | yogur, bífidus, digestión, Danone
m | Danonino |  | yogur, niños, petit suisse, dinosaurio
m | Central Lechera Asturiana | es | leche, vaca, Asturias, cartón
m | Pascual | es | leche, Aranda, cartón, desayuno
m | Kaiku | es | leche, vasco, cartón, sin lactosa
m | Hero |  | mermelada, potitos, bebés, tarro
m | Ybarra | es | aceite, mayonesa, Sevilla, aceitunas
m | Carbonell | es | aceite de oliva, Córdoba, botella, cocina
m | Orlando | es | tomate frito, brick, salsa, cocina
m | Hellmann's |  | mayonesa, bote, salsa, azul
m | Knorr |  | caldos, sopas, pastillas, cocina
m | Maggi |  | sopas, caldos, pastillas, salsas
m | Barilla |  | pasta, italiana, espaguetis, azul
m | Brillante | es | arroz, SOS, grano largo, cocina
m | Dulcesol | es | magdalenas, bollería, Valencia, sol
m | Chocapic |  | cereales, chocolate, perro, Nestlé
m | Smacks |  | cereales, rana, miel, inflados
m | Frosties |  | cereales, tigre, azúcar, copos
m | Corn Flakes |  | cereales, copos de maíz, Kellogg's, gallo
m | Special K |  | cereales, línea, Kellogg's, rojo
m | Lacasa | es | chocolates, Lacasitos, Zaragoza, Conguitos
m | Nocilla | es | crema de cacao, merienda, blanca y negra, vaso
m | Príncipe | es | galletas, chocolate, LU, relleno
m | Filipinos | es | galletas, aros, chocolate, blanco
m | Chiquilín | es | galletas, desayuno, niños, cuadradas
m | Fontaneda | es | galletas, María, Aguilar de Campoo, digestive
m | Gullón | es | galletas, Aguilar de Campoo, sin azúcar, fábrica
m | Panrico | es | Donuts, bollería, pan, Bollycao
m | La Piara | es | paté, lata, untar, cerdo
m | Fuet Espetec | es | embutido, Casa Tarradellas, fino, Cataluña
m | Casa Tarradellas | es | pizzas, fuet, Vic, embutido
m | Navidul | es | jamón, El Pozo, loncheado, sobre
m | Revilla | es | chorizo, tarros, sabor, embutido
m | Trina | es | refresco, naranja, sin burbujas, botella
m | Schweppes |  | tónica, limón, burbujas, botella
m | Bitter Kas | es | refresco, rojo, amargo, botella pequeña
m | Mirinda | es | refresco, naranja, botella, años 80
d | Alhambra (cerveza) | t es | Granada, Reserva 1925, botella verde
d | Estrella Galicia | t es | cerveza, Coruña, estrella roja
d | San Miguel | t es | cerveza, Málaga, Manila, botella
d | Heineken | t | cerveza, holandesa, estrella roja, verde
d | Guinness | t | cerveza negra, Irlanda, arpa, espuma
d | Bacardí | t | ron, murciélago, Cuba, cócteles
d | Martini | t | vermú, cóctel, aceituna, Bond
d | Baileys | t | crema de whisky, Irlanda, licor, Navidad
d | Jägermeister | t | licor, ciervo, alemán, chupitos
d | Larios | t | ginebra, Málaga, botella, gin tonic
d | Marqués de Riscal | t es | vino, Rioja, Elciego, Gehry
d | Vega Sicilia | t es | vino, Ribera del Duero, caro, Único
d | Codorníu | t es | cava, Sant Sadurní, burbujas, Navidad
d | Moët & Chandon | t | champán, francés, lujo, burbujas
d | Flex | es | colchones, España, descanso, cama
d | Lois | es | vaqueros, España, años 70, pantalones
d | Pepe Jeans |  | vaqueros, Londres, español, ropa
d | El Ganso | es | ropa, Madrid, moda
d | Scalpers | es | ropa, calavera, Sevilla, moda
d | Bimba y Lola | es | ropa, galgos, Vigo, moda
d | Massimo Dutti | es | Inditex, ropa elegante, moda, tienda
d | Stradivarius | es | Inditex, ropa, chicas, moda
d | Oysho | es | Inditex, ropa interior, deporte, pijamas
d | Lefties | es | Inditex, ropa barata, tienda, moda
d | Tous | es | joyas, osito, Manresa, bolsos
d | Lladró | es | porcelana, figuras, Valencia, frágil
d | Majorica | es | perlas, Mallorca, joyas, Manacor
d | Puig | es | perfumes, Barcelona, Paco Rabanne, multinacional
d | Paco Rabanne |  | perfume, One Million, diseñador, metálico
d | Carolina Herrera |  | moda, perfume, Venezuela, Good Girl
d | Adolfo Domínguez | es | moda, Ourense, arruga es bella, diseñador
d | Pronovias | es | vestidos de novia, Barcelona, bodas, moda
d | Joselito | es | jamón ibérico, Guijuelo, caro, bellota
d | Cinco Jotas | es | jamón ibérico, Jabugo, Osborne, bellota
d | Torres | t es | vino, brandy, Penedès, bodega
d | Zumosol | es | zumo, naranja, Brik, años 90
d | Tigretón | es | bollo, Bimbo, tigre, crema
d | Pantera Rosa (pastelito) | es | bollo, Bimbo, bizcocho
d | Bucaneros | es | bollo, Bimbo, chocolate, pirata
d | Bony | es | bollo, Bimbo, fresa, chocolate
`
};
