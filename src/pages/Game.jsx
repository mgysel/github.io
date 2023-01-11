import React, { useEffect, useContext, useState, PureComponent } from "react";
import { 
  useLocation,
  Link as RouterLink,
  useHistory,
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
import { ArrowForwardIcon } from '@chakra-ui/icons';

import GameCard from "../components/GameCard"


const Game = () => {
  
  const context = useContext(StoreContext);
  const characters = context.characters;

  let history = useHistory();

  // Question for this round
  const questions = context.questions;
  const question = context.questions[context.questionOne[0]]
  
  // Global variables
  let score = context.score[0]
  let playerOne = context.playerOne[0]
  let playerTwo = context.playerTwo[0]
  let playerThree = context.playerThree[0]
  let playerFour = context.playerFour[0]

  let [speakerOne, setSpeakerOne] = useState(playerOne);
  let [speakerTwo, setSpeakerTwo] = useState(playerTwo);
  let [speakerThree, setSpeakerThree] = useState(playerThree);
  let [speakerFour, setSpeakerFour] = useState(playerFour);

  // Images
  let cards = context.criteria

  useEffect(() => {
    // Set game mode to 1
    context.gameMode[1](1);

    // Set speakers for different rounds
    if (context.round[0] === 2) {
      setSpeakerOne(playerThree)
      setSpeakerTwo(playerFour)
      setSpeakerThree(playerOne)
      setSpeakerFour(playerTwo)
    } else if (context.round[0] === 3) {
      setSpeakerOne(playerOne)
      setSpeakerTwo(playerThree)
      setSpeakerThree(playerTwo)
      setSpeakerFour(playerFour)
    } else if (context.round[0] === 4) {
      setSpeakerOne(playerTwo)
      setSpeakerTwo(playerFour)
      setSpeakerThree(playerOne)
      setSpeakerFour(playerThree)
    }
  }, [])

  // When click on reflections, update game round, take to /pause
  const handleReflectionClick = () => {
    // Update game round
    context.round[1](context.round[0] + 1)
    context.gameMode[1](2)

    // Navigate to /pause
    history.push('/pause')

    // Reset for game cards shown
    context.numCards[1](0)
  }

  return (
    <Flex w="100%" direction="column">
      <Flex position='absolute' top='75px' right='40px' onClick={handleReflectionClick}>
        <Button
          width='160px' height='60px'
          backgroundColor='#7CB9E8' color='black'
          aria-label='Go to next page'
        >
          Reflection
          <ArrowForwardIcon pl='4px' size='xl' />
        </Button>
      </Flex>
      <HStack>
        <Center align="center" width='200px' height='80vh' pt='10vh' pl='20px' >
          <VStack mr='20px' height='110%' p='20px' pt='0px'>
            <Text fontWeight='bold'>Speakers</Text>
            <Image height='120px' src={`images/characters/${characters[speakerOne]}`} />
            <Image height='120px' src={`images/characters/${characters[speakerTwo]}`} />
            <Text fontWeight='bold' pt='40px'>Listeners</Text>
            <Image height='120px' src={`images/characters/${characters[speakerThree]}`} />
            <Image height='120px' src={`images/characters/${characters[speakerFour]}`} />
          </VStack>
        </Center>
        <VStack width='1000px' pl='calc((25% - 200px)/2)'>
          <Box pr='10px' pt='40px' pb='20px'>
            <Image src={`images/questions/${question}`} width='280px' />
          </Box>
        
          <Flex>
              {cards.map((image, index) => (
                <GameCard image={image} index={index} />
              ))}
          </Flex>
        </VStack>
      </HStack>
    </Flex>
  );
};

export default Game;