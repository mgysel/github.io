import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation, Link as RouterLink } from "react-router-dom";
import {
  Beginner,
  Box,
  Button,
  Center,
  Grid,
  Heading,
  HStack,
  IconButton,
  Flex,
  Image,
  LinkOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import DifficultyComponent from "./difficulty/DifficultyComponent";
import { StoreContext } from "../helpers/context";
import BackButton from "../components/BackButton";
import ForwardButton from "../components/ForwardButton";
import { ArrowForwardIcon } from '@chakra-ui/icons';

const Difficulty = () => {
  const context = useContext(StoreContext);
  const characterCards = context.characters;
  const contextCards = context.cards;
  const [cc, setCC] = React.useState(context.cc);
  const [difficulty, setDifficulty] = React.useState(context.difficulty);
  const history = useHistory();

  // Criteria or Context Cards
  let CCColors = [
    '#bfeeff',
    '#b2e4f4',
    '#e4f4b2'
  ]
  let CCClickColors = [
    '#abd6e5',
  ]

  // Level of difficulty
  let difficultyText = [
    'Beginner',
    'Intermediate',
    'Advanced',
    'Expert'
  ]
  let difficultyImages = [
    'images/difficulty/beginner.png',
    'images/difficulty/intermediate.png',
    'images/difficulty/advanced.png',
    'images/difficulty/expert.png'
  ]
  let difficultyColors = [
    '#E4F4B2',
    '#FFF0BF',
    '#FFD4BC',
    '#FFC5BC'
  ]
  let difficultyClickColors = [
    '#cddba0',
    '#e5d8ab',
    '#e5bea9',
    '#e5b1a9'
  ]
  let difficultyQuestions = [
    8,
    6,
    4, 
    3
  ]

  // Fetch items on mount
  useEffect(() => {
    console.log("DIFFICULTY - useEffect called")
    if (context.cc[0]!=='' && context.difficulty[0]!=='') {
      console.log('USE EFFECT history')
      console.log(context.cc[0])
      console.log(context.difficulty[0])
      if (context.cc[0] === 'Character') {
        history.push('/characters');
      } else if (context.cc[0] === 'Criteria') {
        history.push('/review');
      }
    } 
  }, [context.cc, context.difficulty, history, cc, difficulty]);

  return (
    <>
      <Flex position='absolute' top='75px' left='40px' as={RouterLink} to='/prep2'>
        <BackButton />
      </Flex>
      <Flex position='absolute' top='75px' right='40px' as={RouterLink} to='/game'>
        <Button
          width='160px' height='60px'
          backgroundColor='#7CB9E8' color='black'
          aria-label='Go to next page'
        >
          Start Game 
          <ArrowForwardIcon pl='4px' size='xl' />
        </Button>
      </Flex>
      <VStack>
        <Heading pt='28px' pb='15px'>Choose level of difficulty</Heading>
        <HStack pt='40px'>
          <Grid templateColumns='repeat(2, 2fr)' gap={10}>
            {difficultyImages.map((p, i) => (
              <DifficultyComponent 
                title={difficultyText[i]} 
                src={difficultyImages[i]} 
                color={difficultyColors[i]} 
                clickColor={difficultyClickColors[i]}
                numQuestions={difficultyQuestions[i]} 
                key={i}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                />
            ))}  
          </Grid>
        </HStack>
      </VStack>
    </>
  );
};

export default Difficulty;