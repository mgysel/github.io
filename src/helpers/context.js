import React from "react";

export const StoreContext = React.createContext(null);

// useContext for navbar
function StoreProvider({ children }) {
  // Players
  const [playerOne, setPlayerOne] = React.useState(-1);
  const [playerTwo, setPlayerTwo] = React.useState(-1);
  const [playerThree, setPlayerThree] = React.useState(-1);
  const [playerFour, setPlayerFour] = React.useState(-1);
  // Questions
  const [questionOne, setQuestionOne] = React.useState(-1);
  const [questionTwo, setQuestionTwo] = React.useState(-1);
  const [questionThree, setQuestionThree] = React.useState(-1);
  const [questionFour, setQuestionFour] = React.useState(-1);

  const [score, setScore] = React.useState(0);
  const [gameMode, setGameMode] = React.useState(0);
  const [round, setRound] = React.useState(1);
  const [numCards, setNumCards] = React.useState(0);
  const [difficulty, setDifficulty] = React.useState("");
  const [cc, setCC] = React.useState("");

  const store = {
    playerOne: [playerOne, setPlayerOne],
    playerTwo: [playerTwo, setPlayerTwo],
    playerThree: [playerThree, setPlayerThree],
    playerFour: [playerFour, setPlayerFour],

    questionOne: [questionOne, setQuestionOne],
    questionTwo: [questionTwo, setQuestionTwo],
    questionThree: [questionThree, setQuestionThree],
    questionFour: [questionFour, setQuestionFour],

    score: [score, setScore],
    gameMode: [gameMode, setGameMode],
    round: [round, setRound],
    numCards: [numCards, setNumCards],

    difficulty: [difficulty, setDifficulty],
    cc: [cc, setCC],
    
    animalImagesWhite: [ 
        'dogWhite.png',
        'dolphinWhite.png',
        'lionWhite.png',
        'monkeyWhite.png',
        'sheepWhite.png',
        'squirrelWhite.png'
    ],
    animalImagesBlack: [ 
        'dogBlack.png',
        'dolphinBlack.png',
        'lionBlack.png',
        'monkeyBlack.png',
        'sheepBlack.png',
        'squirrelBlack.png'
    ],

    cards: [ 
      '1.png', 
      '2.png', 
      '3.png', 
      '4.png',
      '5.png',
      '6.png',
      '7.png', 
      '8.png', 
      '9.png'
    ],

    characters: [
      'cat.png',
      'cloud.png',
      'coco.jpeg',
      'dolphy.png',
      'eco-hulk.jpeg',
      'ernst.jpeg',
      'everett.jpeg',
      'frederique.jpeg',
      'honey-bee.png',
      'lucy.jpeg',
      'monique.jpeg',
      'nathan.jpeg',
      'queen-bee.jpeg',
      'simba.jpeg', 
      'super-heroine.jpeg', 
      'vincent.jpeg', 
      'wolf.jpeg', 
      'zoe.jpeg'
    ],

    characterDescriptions: [
      {
        name: 'Cat',
        emotion: 'jealous',
        quote: '"What is mine will remain mine and what is not yet mine will become mine."',
        description: "The cat can't stand the arrival of another and will do anything to remain a favourite with the public. keep his advantages and monopolize those of the other."
      }, 
      {
        name: 'Cloud',
        emotion: 'sad',
        quote: '“why am I crying so much?”',
        description: 'The cloud is sad to see too much lost from the sky, animals disappearing, forest burning, lakes and rivers drying up, glaciers melting, etc. and this makes it unhappy.'
      },
      {
        name: 'Coco',
        emotion: 'ecofeminist',
        quote: '“Convergence of struggles!”',
        description: 'Coco has suffered too much from patriarchy and it is out of the question that this continues. She wishes that environmental struggles integrate more feminist issues, because women are still much more victims of ecocide while contributing less to it.'
      },
      {
        name: 'Dolphy',
        emotion: 'empathetic',
        quote: '"One for all and all for one!"',
        description: "Sensitive and sociable, Dolphy is a team player and puts the greater good first. His great curiosity drives him to seek out activities and interactions. He helps out when other ocean dwellers (or visitors) are in trouble, whether they are of his species or not."
      },
      {
        name: 'Eco-Hulk',
        emotion: 'activist',
        quote: '"I am always angry!"',
        description: 'Backstory: A severe weather event cut off the power to his grandmother’s ventilator. Air pollution is heavy in the region which may have caused or exacerbated poor grandma’s lung cancer. Hulk has a wrath against the unjust world order which gives everything to some and nothing to others.',
      },
      {
        name: 'Ernst',
        emotion: 'idealistic',
        quote: '“A better world is possible!”',
        description: "Ernst is revolted by inequalities and wants to do his part. Thanks to digital technology, his activism is made easier. And he's helping to make it better, for example by militating to improve working conditions in factories and signing petitions for phasing out coal."
      },
      {
        name: 'Everett',
        emotion: 'pessimistic',
        quote: '“Everything is screwed up!”',
        description: 'Evariste spends his days chaining bad news about ecology. He crosschecks them and concludes that there is not much more to do. As if this was not enough, the digital technology is added and amplifies the problems.'
      },
      {
        name: 'Frédérique',
        emotion: 'the Geek',
        quote: '"always work with the latest technology"',
        description: "Frédérique received her first computer at the age of 4. She does not hide her taste for science and science fiction. In her private life, she enjoys spending time playing video games, watching twitch, making humorous and sarcastic memes."
      },
      {
        name: 'Honey bee',
        emotion: 'exhausted and confused',
        quote: '"If I had a nectar for every time I did not know what was going on."',
        description: 'Backstory: climate change is happening so fast that bees have no time to migrate to more suitable habitats. Bees have to choose between spending more time searching for less nectar in the area, and taking lessons on assisted migration. Either way, anxiety over the elusive meaning of the whole remain.'
      },
      {
        name: 'Lucy',
        emotion: 'creative',
        quote: '“I am living my best life with you, my fans!”',
        description: "Lucile was already popular on tiktok when she was born. She doesn't have all the figurines from her favorites animes but can create and edit them all on her tablet or computer. She can't wait to get a 3D printer for Christmas."
      },
      {
        name: 'Monique',
        emotion: 'pragmatist',
        quote: '"You have to live with your century."',
        description: "Monique has adapted over the course of her life and knows how to balance between the advances and the disadvantages. So she doesn't see too many problems with the digitalization of society and tries to take advantage of it as much as possible."
      },
      {
        name: 'Nathan',
        emotion: 'nostalgic',
        quote: '"It was better before!"',
        description: 'Nathan misses the days when you could manage without a smartphone and any virtual presence. Today he feels obliged to be reachable all the time, can no longer keep up with his accounts and finds it difficult to disconnect.'
      },
      {
        name: 'Queen bee',
        emotion: 'manager',
        quote: '"It is a huge responsibility, not for the faint of heart."',
        description: 'Backstory: Yes, we are not born equal, the queen bee knows that. But she has also worked very hard. Yet sometimes she finds herself excluded (what she can do as a leader and her being a woman may both play a part). Will she be more of a includer when others come to her for help?'
      },
      {
        name: 'Simba',
        emotion: 'elected',
        quote: '"I will be back!"',
        description: 'Simba is expected to turn things around, to take over the forces of evil for the victory of good.'
      },
      {
        name: 'Super-heroine',
        emotion: 'amazed',
        quote: '“"What a wonderful world! I want to be a programmer. We too can save the world !”',
        description: 'Backstory: She is the first in her family to learn coding and she’s amazed by the world opened up by the new skills. Determined to be a self taught computer scientist, she believes that using computer wisely can help us combat climate change.'
      },
      {
        name: 'Vincent',
        emotion: 'for degrowth',
        quote: '"Less goods, more connections!"',
        description: 'Shocked to see so many people under stress, he wishes to lighten up materially to be freer. He is a true ecologist: vegetarian, no plane, no car, no smartphone and no credit card. A small house without heating and very few trips are enough for him.'
      },
      {
        name: 'Wolf',
        emotion: 'independent',
        quote: '"Every man for himself”',
        description: "The wolf does not owe anything to anyone and does not wish to have to help others. If he has succeeded, why shouldn't others?"
      },
      {
        name: 'Zoe',
        emotion: 'the cyborg',
        quote: '"Today everything is possible!"',
        description: "Zoe has seen the world evolve and the possibilities increase tenfold. Thanks to technology, we can get to know the whole world and imagine humanity uniting to evolve towards a state of consciousness that surpasses the imaginable."
      }
    ],

    criteria: [
      '0.png',
      '1.png', 
      '2.png', 
      '3.png', 
      '4.png',
      '5.png',
      '6.png',
      '7.png', 
      '8.png', 
      '9.png',
      '10.png',
      '11.png'
    ],

    questions: [ 
      '1.png', 
      '2.png', 
      '3.png', 
      '4.png',
      '5.png',
      '6.png',
      '7.png', 
      '8.png', 
      '9.png',
      '10.png',
      '11.png', 
      '12.png', 
      '13.png', 
      '14.png',
      '15.png',
      '16.png',
      '17.png', 
      '18.png', 
      '19.png',
      '20.png',
      '21.png', 
      '22.png', 
      '23.png', 
      '24.png',
      '25.png',
      '26.png',
      '27.png', 
      '28.png', 
      '29.png',
      '30.png'
    ],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export default StoreProvider;
