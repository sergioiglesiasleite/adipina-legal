// Personajes famosos (personas reales de hoy y de siempre). Formato: dificultad | respuesta | etiquetas | prohibidas.
export default {
  id: 'famous', name: 'Personajes famosos', icon: 'star', modes: 'MP',
  cards: `
f | Lionel Messi | 00s | Argentina, Barça, fútbol, Inter Miami
f | Cristiano Ronaldo | 00s | Portugal, Real Madrid, siuuu, fútbol
f | Rafael Nadal | 00s es | tenis, Roland Garros, Manacor, raqueta
f | Pablo Picasso | es | Guernica, cubismo, pintor, Málaga
f | Albert Einstein | | relatividad, físico, pelo, lengua
f | Michael Jackson | 80s | Thriller, moonwalk, guante, rey del pop
f | Ibai Llanos | 20s es | streamer, Twitch, Velada, Bilbao
f | Cristina Pedroche | 10s es | Campanadas, vestido, Nochevieja, Vallecas
f | Pau Gasol | 00s es | baloncesto, NBA, Lakers, Sant Boi
f | Antonio Banderas | 90s es | actor, Málaga, Zorro, Hollywood
f | Chespirito | 70s | Chavo del Ocho, Chapulín, México, comedia
f | Leonardo DiCaprio | 90s | Titanic, actor, Óscar, Jack
f | Brad Pitt | 90s | actor, Angelina Jolie, Hollywood, guapo
f | Barack Obama | 00s | presidente, Estados Unidos, yes we can, Michelle
f | Donald Trump | 10s | presidente, Estados Unidos, pelo naranja, Casa Blanca
f | La reina Isabel II | | Inglaterra, corona, corgis, Buckingham
f | El rey Felipe VI | 10s es | monarca, Letizia, Zarzuela, España
f | Fernando Alonso | 00s es | Fórmula 1, Asturias, Ferrari, piloto
f | Andrés Iniesta | 00s es | Mundial, gol, Barça, Fuentealbilla
f | Mark Zuckerberg | 10s | Facebook, Meta, sudadera, programador
f | Elon Musk | 20s | Tesla, SpaceX, Twitter, cohetes
f | Steve Jobs | 00s | Apple, iPhone, jersey negro, manzana
f | Bill Gates | 90s | Microsoft, Windows, millonario, gafas
f | Charles Chaplin | | Charlot, bombín, bigote, cine mudo
f | Marilyn Monroe | | rubia, vestido blanco, actriz, lunar
f | Usain Bolt | 10s | velocista, Jamaica, rayo, cien metros
f | David Beckham | 00s | Real Madrid, Victoria, Inglaterra, falta
f | Paquirrín | 10s es | Kiko Rivera, Pantoja, DJ, Cantora
f | Belén Esteban | 10s es | princesa del pueblo, Sálvame, Andreíta, Paracuellos
f | Carlos Alcaraz | 20s es | tenis, Murcia, número uno, El Palmar
f | Penélope Cruz | 90s es | actriz, Óscar, Almodóvar, Bardem
f | Javier Bardem | 00s es | actor, Óscar, Penélope, Mar adentro
f | Dani Rovira | 10s es | Ocho apellidos vascos, cómico, Málaga, monólogos
f | Jesús Calleja | 10s es | Desafío extremo, montañero, León, aventuras
f | Karlos Arguiñano | 90s es | cocinero, rico rico, chistes, perejil
f | Pablo Motos | 10s es | El Hormiguero, hormigas, presentador, Trancas
f | Jordi Évole | 10s es | Salvados, periodista, Follonero, entrevistas
f | Alexia Putellas | 20s es | Balón de Oro, fútbol, Barça, capitana
f | Mohamed Salah | 10s | Egipto, Liverpool, faraón, gol
f | Kylian Mbappé | 20s | Francia, velocidad, Real Madrid, gol
f | Oprah Winfrey | 90s | presentadora, talk show, millonaria, Estados Unidos
f | Neil Armstrong | 70s | Luna, astronauta, pequeño paso, Apolo
f | Nelson Mandela | 90s | Sudáfrica, apartheid, presidente, cárcel
f | La Madre Teresa de Calcuta | | monja, India, pobres, sari
f | El papa Francisco | 10s | Vaticano, Argentina, Bergoglio, iglesia
f | MrBeast | 20s | YouTube, retos, millones, regalos
f | Rubius | 10s es | El Rubius, youtuber, Andorra, Mangel
m | Frida Kahlo |
m | Salvador Dalí | es
m | Pedro Almodóvar | 80s es
m | Miguel de Cervantes | es
m | Cleopatra |
m | Diego Velázquez | es
m | Francisco de Goya | es
m | Vincent van Gogh |
m | William Shakespeare |
m | Wolfgang Amadeus Mozart |
m | Ludwig van Beethoven |
m | Isaac Newton |
m | Charles Darwin |
m | Galileo Galilei |
m | Sigmund Freud |
m | Coco Chanel |
m | Audrey Hepburn |
m | Michael Jordan | 90s
m | Muhammad Ali | 70s
m | Serena Williams | 00s
m | Roger Federer | 00s
m | Diego Armando Maradona | 80s
m | Pelé | 70s
m | Severiano Ballesteros | 80s es
m | Miguel Induráin | 90s es
m | Iker Casillas | 00s es
m | Gemma Mengual | 00s es
m | Carolina Marín | 10s es
m | Mireia Belmonte | 10s es
m | Marc Márquez | 10s es
m | Ferran Adrià | 00s es
m | Amancio Ortega | es
m | Lola Índigo | 10s es
m | Mario Casas | 10s es
m | Úrsula Corberó | 10s es
m | Paz Vega | 00s es
m | José Mota | 00s es
m | Buenafuente | 00s es
m | Martes y Trece | 80s es
m | Tom Cruise | 80s
m | Meryl Streep |
m | Angelina Jolie | 00s
m | Jennifer Lopez | 00s
m | Kim Kardashian | 10s
m | Greta Thunberg | 10s
m | Malala Yousafzai | 10s
m | Stephen Hawking |
d | Marie Curie |
d | Federico García Lorca | es
d | Amelia Earhart |
d | Chiquito de la Calzada | 90s es
d | Leonardo da Vinci |
d | Jane Goodall |
d | Clara Campoamor | es
d | Santiago Ramón y Cajal | es
d | Severo Ochoa | es
d | Rosalía de Castro | es
d | Antonio Gaudí | es
d | Concepción Arenal | es
d | Gloria Fuertes | 70s es
d | Margarita Salas | es
d | Isaac Peral | es
d | Juan Sebastián Elcano | es
d | Blas de Lezo | es
d | Ada Lovelace |
d | Nikola Tesla |
d | Alan Turing |
d | Rosa Parks |
d | Martin Luther King |
d | Mahatma Gandhi |
d | Simone de Beauvoir |
d | Virginia Woolf |
d | Agatha Christie |
d | Jorge Luis Borges |
d | Gabriel García Márquez |
d | Pablo Neruda |
d | Andy Warhol |
d | Rigoberta Menchú |
d | Lina Morgan | 80s es
d | Gila | es
d | Tip y Coll | 70s es
d | Fernando Fernán Gómez | es
d | Paco Martínez Soria | es
d | Sara Montiel | es
d | Luis Buñuel | es
d | Joaquín Sorolla | es
d | Isabel Allende |
d | Hedy Lamarr |
d | Valentina Tereshkova |
`
};
