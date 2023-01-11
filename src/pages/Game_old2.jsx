import React, { useEffect, useContext, useState, PureComponent } from "react";
import { 
  useLocation,
  Link as RouterLink 
} from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Checkbox, 
  CheckboxGroup,
  Circle,
  Heading,
  HStack,
  Image,
  Flex,
  Link,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { StoreContext } from "../helpers/context";

import GameCard from "../components/GameCard"


const Game = () => {
  
  const context = useContext(StoreContext);
  const [gameMode, setGameMode] = context.gameMode;
  
  // Global variables
  let score = context.score[0]
  let numCards = context.numCards[0]
  let PlayerOne = context.playerOne[0]
  let PlayerTwo = context.playerTwo[0]
  let PlayerThree = context.playerThree[0]
  let PlayerFour = context.playerFour[0]

  // Images
  let animalsWhite = context.animalImagesWhite
  let animalsBlack = context.animalImagesBlack
  let cards = context.cards

  // Styling
  let playerPadding = '5px'
  let largePlayerPadding = '16px'

  // Set game mode to 1
  useEffect(() => {
    context.gameMode[1](1);
  }, [])

  return (
    <Flex w="100%" direction="column">
      <VStack>
        <Heading align="center" my="1rem">
            Question
        </Heading>
        <Text pb='20px'>
            Question Here
        </Text>
        <Text>
          Game: {context.score[0]}
        </Text>
      
        <Wrap>
            {cards.slice(0, 3).map((image, index) => (
              <GameCard image={image} key={index} />
            ))}
        </Wrap>

        <Center align="center" pt='30px'>
          <Circle size='90px' border='1px solid black' ml={playerPadding} mr={playerPadding}>
            <Image boxSize='60px' src={`images/icons/animals/${animalsBlack[0]}`} />
          </Circle>
          <Circle size='90px' border='1px solid black' ml={playerPadding} mr={largePlayerPadding}>
            <Image boxSize='60px' src={`images/icons/animals/${animalsBlack[1]}`} />
          </Circle>
          <Circle size='90px' bg='black' border='1px solid black' ml={largePlayerPadding} mr={playerPadding}>
            <Image boxSize='60px' src={`images/icons/animals/${animalsWhite[2]}`}/>
          </Circle>
          <Circle size='90px' bg='black' border='1px solid black' ml={playerPadding} mr={playerPadding}>
            <Image boxSize='60px' src={`images/icons/animals/${animalsWhite[3]}`}/>
          </Circle>
        </Center>
      </VStack>
    </Flex>
  );
};

export default Game;