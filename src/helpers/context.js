import React from "react";

export const StoreContext = React.createContext(null);

// useContext for navbar
function StoreProvider({ children }) {
  const [playerOne, setPlayerOne] = React.useState("");
  const [playerTwo, setPlayerTwo] = React.useState("");
  const [playerThree, setPlayerThree] = React.useState("");
  const [playerFour, setPlayerFour] = React.useState("");
  const [score, setScore] = React.useState(0);
  const [gameMode, setGameMode] = React.useState(0);
  const [round, setRound] = React.useState(0);
  const [numCards, setNumCards] = React.useState(0);
  const [difficulty, setDifficulty] = React.useState("");
  const [cc, setCC] = React.useState("");

  const store = {
    playerOne: [playerOne, setPlayerOne],
    playerTwo: [playerTwo, setPlayerTwo],
    playerThree: [playerThree, setPlayerThree],
    playerFour: [playerFour, setPlayerFour],

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
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export default StoreProvider;
