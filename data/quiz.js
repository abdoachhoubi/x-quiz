const quiz = {
  geography: [
    {
      question: "What is the capital of France?",
      options: [
        { option: "Paris", correct: true },
        { option: "Rome", correct: false },
        { option: "Berlin", correct: false },
        { option: "Madrid", correct: false },
      ],
    },
    {
      question: "Which is the longest river in the world?",
      options: [
        { option: "Nile", correct: true },
        { option: "Amazon", correct: false },
        { option: "Yangtze", correct: false },
        { option: "Mississippi", correct: false },
      ],
    },
    {
      question: "Which is the largest country by area?",
      options: [
        { option: "Russia", correct: true },
        { option: "Canada", correct: false },
        { option: "China", correct: false },
        { option: "USA", correct: false },
      ],
    },
    {
      question: "What is the capital of Japan?",
      options: [
        { option: "Tokyo", correct: true },
        { option: "Seoul", correct: false },
        { option: "Beijing", correct: false },
        { option: "Taipei", correct: false },
      ],
    },
    {
      question: "Which is the highest mountain in the world?",
      options: [
        { option: "Mount Everest", correct: true },
        { option: "K2", correct: false },
        { option: "Kilimanjaro", correct: false },
        { option: "Mount Fuji", correct: false },
      ],
    },
    {
      question: "Which is the smallest continent by land area?",
      options: [
        { option: "Australia", correct: true },
        { option: "South America", correct: false },
        { option: "North America", correct: false },
        { option: "Europe", correct: false },
      ],
    },
    {
      question: "What is the capital of Brazil?",
      options: [
        { option: "Brasília", correct: true },
        { option: "São Paulo", correct: false },
        { option: "Rio de Janeiro", correct: false },
        { option: "Buenos Aires", correct: false },
      ],
    },
    {
      question: "Which is the largest ocean?",
      options: [
        { option: "Pacific", correct: true },
        { option: "Atlantic", correct: false },
        { option: "Indian", correct: false },
        { option: "Arctic", correct: false },
      ],
    },
    {
      question: "What is the currency of Japan?",
      options: [
        { option: "Yen", correct: true },
        { option: "Dollar", correct: false },
        { option: "Euro", correct: false },
        { option: "Pound", correct: false },
      ],
    },
    {
      question: "Which is the driest place on earth?",
      options: [
        { option: "Atacama Desert", correct: true },
        { option: "Sahara Desert", correct: false },
        { option: "Gobi Desert", correct: false },
        { option: "Arabian Desert", correct: false },
      ],
    },
  ],

  football: [
    {
      question: "Which country won the 2018 FIFA World Cup?",
      options: [
        { option: "France", correct: true },
        { option: "Brazil", correct: false },
        { option: "Germany", correct: false },
        { option: "Spain", correct: false },
      ],
    },
    {
      question:
        "Who holds the record for the most goals in a single season in Europe's top five leagues?",
      options: [
        { option: "Cristiano Ronaldo", correct: false },
        { option: "Lionel Messi", correct: true },
        { option: "Robert Lewandowski", correct: false },
        { option: "Luis Suarez", correct: false },
      ],
    },
    {
      question: "Which club has won the most UEFA Champions League titles?",
      options: [
        { option: "Barcelona", correct: false },
        { option: "Real Madrid", correct: true },
        { option: "Bayern Munich", correct: false },
        { option: "Manchester United", correct: false },
      ],
    },
    {
      question: "Who won the Ballon d'Or award in 2021?",
      options: [
        { option: "Lionel Messi", correct: true },
        { option: "Cristiano Ronaldo", correct: false },
        { option: "Robert Lewandowski", correct: false },
        { option: "Kylian Mbappe", correct: false },
      ],
    },
    {
      question: "Which country won the 2010 FIFA World Cup?",
      options: [
        { option: "Brazil", correct: false },
        { option: "Germany", correct: false },
        { option: "Spain", correct: true },
        { option: "Argentina", correct: false },
      ],
    },
    {
      question: "Which player has won the most Ballon d'Or awards?",
      options: [
        { option: "Lionel Messi", correct: true },
        { option: "Cristiano Ronaldo", correct: false },
        { option: "Michel Platini", correct: false },
        { option: "Johan Cruyff", correct: false },
      ],
    },
    {
      question:
        "Who is the all-time leading scorer for the Brazil national team?",
      options: [
        { option: "Pele", correct: false },
        { option: "Ronaldo", correct: false },
        { option: "Neymar", correct: false },
        { option: "Romario", correct: true },
      ],
    },
    {
      question: "Which club has won the most Premier League titles?",
      options: [
        { option: "Manchester United", correct: true },
        { option: "Liverpool", correct: false },
        { option: "Arsenal", correct: false },
        { option: "Chelsea", correct: false },
      ],
    },
    {
      question: "Who won the UEFA European Championship in 2020?",
      options: [
        { option: "France", correct: false },
        { option: "Portugal", correct: true },
        { option: "Spain", correct: false },
        { option: "Germany", correct: false },
      ],
    },
    {
      question: "Which player has won the most UEFA Champions League titles?",
      options: [
        { option: "Cristiano Ronaldo", correct: false },
        { option: "Paolo Maldini", correct: true },
        { option: "Ryan Giggs", correct: false },
        { option: "Lionel Messi", correct: false },
      ],
    },
  ],

  history: [
    {
      question:
        "Which country did the explorer Christopher Columbus represent on his voyage to the New World in 1492?",
      options: [
        { option: "Spain", correct: true },
        { option: "Portugal", correct: false },
        { option: "England", correct: false },
        { option: "France", correct: false },
      ],
    },
    {
      question: "Who was the first President of the United States?",
      options: [
        { option: "John Adams", correct: false },
        { option: "Thomas Jefferson", correct: false },
        { option: "George Washington", correct: true },
        { option: "Abraham Lincoln", correct: false },
      ],
    },
    {
      question: "Which country was responsible for starting World War I?",
      options: [
        { option: "Germany", correct: true },
        { option: "Russia", correct: false },
        { option: "France", correct: false },
        { option: "Great Britain", correct: false },
      ],
    },
    {
      question: "Who wrote the Communist Manifesto?",
      options: [
        { option: "Karl Marx", correct: true },
        { option: "Vladimir Lenin", correct: false },
        { option: "Joseph Stalin", correct: false },
        { option: "Mao Zedong", correct: false },
      ],
    },
    {
      question: "Who was the leader of the Soviet Union during World War II?",
      options: [
        { option: "Joseph Stalin", correct: true },
        { option: "Vladimir Lenin", correct: false },
        { option: "Leon Trotsky", correct: false },
        { option: "Nikita Khrushchev", correct: false },
      ],
    },
    {
      question:
        "What was the name of the ship that Charles Darwin sailed on during his famous voyage to the Galapagos Islands?",
      options: [
        { option: "HMS Victory", correct: false },
        { option: "HMS Beagle", correct: true },
        { option: "HMS Bounty", correct: false },
        { option: "HMS Endeavour", correct: false },
      ],
    },
    {
      question:
        "Which ancient civilization was responsible for the construction of the Great Wall of China?",
      options: [
        { option: "Egypt", correct: false },
        { option: "Greece", correct: false },
        { option: "Rome", correct: false },
        { option: "China", correct: true },
      ],
    },
    {
      question:
        "Who was the first European to sail around the southern tip of Africa and into the Indian Ocean?",
      options: [
        { option: "Christopher Columbus", correct: false },
        { option: "Ferdinand Magellan", correct: false },
        { option: "Vasco da Gama", correct: true },
        { option: "Francisco Pizarro", correct: false },
      ],
    },
    {
      question:
        "Which country was the first to use the atomic bomb in warfare?",
      options: [
        { option: "United States", correct: true },
        { option: "Germany", correct: false },
        { option: "Japan", correct: false },
        { option: "Russia", correct: false },
      ],
    },
    {
      question:
        "What was the name of the Moroccan dynasty that ruled from the 17th to the 19th century?",
      options: [
        { option: "Almohad", correct: false },
        { option: "Almoravid", correct: false },
        { option: "Saadi", correct: false },
        { option: "Alaouite", correct: true },
      ],
    },
  ],

  music: [
    {
      question: "Who is known as the 'King of Pop'?",
      options: [
        { option: "Michael Jackson", correct: true },
        { option: "Elvis Presley", correct: false },
        { option: "Madonna", correct: false },
        { option: "Prince", correct: false },
      ],
    },
    {
      question:
        "Which band is known for hits like 'Stairway to Heaven' and 'Whole Lotta Love'?",
      options: [
        { option: "The Rolling Stones", correct: false },
        { option: "The Beatles", correct: false },
        { option: "Led Zeppelin", correct: true },
        { option: "Queen", correct: false },
      ],
    },
    {
      question: "Who is the lead singer of the band Aerosmith?",
      options: [
        { option: "Steven Tyler", correct: true },
        { option: "Bono", correct: false },
        { option: "Mick Jagger", correct: false },
        { option: "Bon Jovi", correct: false },
      ],
    },
    {
      question: "What is the name of Beyonce's alter ego?",
      options: [
        { option: "Sasha Fierce", correct: true },
        { option: "Lemonade", correct: false },
        { option: "Queen B", correct: false },
        { option: "Yonce", correct: false },
      ],
    },
    {
      question:
        "What was the name of Elvis Presley's home in Memphis, Tennessee?",
      options: [
        { option: "Graceland", correct: true },
        { option: "Neverland", correct: false },
        { option: "The White House", correct: false },
        { option: "The Hamptons", correct: false },
      ],
    },
    {
      question: "Which rapper released the album 'Good Kid, M.A.A.D City'?",
      options: [
        { option: "Kendrick Lamar", correct: true },
        { option: "Drake", correct: false },
        { option: "Jay-Z", correct: false },
        { option: "Eminem", correct: false },
      ],
    },
    {
      question: "Who sang the song 'Bohemian Rhapsody'?",
      options: [
        { option: "Queen", correct: true },
        { option: "The Beatles", correct: false },
        { option: "The Rolling Stones", correct: false },
        { option: "Led Zeppelin", correct: false },
      ],
    },
    {
      question: "Which band is known for the hit song 'Sweet Child O' Mine'?",
      options: [
        { option: "Guns N' Roses", correct: true },
        { option: "Metallica", correct: false },
        { option: "AC/DC", correct: false },
        { option: "Nirvana", correct: false },
      ],
    },
    {
      question: "What is the name of Taylor Swift's fourth studio album?",
      options: [
        { option: "Red", correct: true },
        { option: "1989", correct: false },
        { option: "Fearless", correct: false },
        { option: "Speak Now", correct: false },
      ],
    },
    {
      question: "What is the traditional Moroccan dance style known as?",
      options: [
        { option: "Chaabi", correct: false },
        { option: "Ahidous", correct: false },
        { option: "Raï", correct: false },
        { option: "Halka", correct: true },
      ],
    },
  ],
};

export default quiz;
