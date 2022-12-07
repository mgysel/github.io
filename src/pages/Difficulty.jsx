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
import CCSelect from "./difficulty/CCSelect.jsx";

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

  // useEffect(() => {
  //   setCC('')
  //   setDifficulty('')
  // }, [])

  return (
    <>
      <VStack>
        <Heading pt='30px' pb='10px'>Play with Criteria or Character Cards?</Heading>
        <Grid templateColumns='repeat(2, 1fr)' gap={10}>
          <CCSelect image={`images/characters/${contextCards[0]}`} type='Criteria' color={CCColors[1]} clickColor={CCClickColors[0]} cc={cc} setCC={setCC}/>
          <CCSelect image={`images/characters/${characterCards[0]}`} type='Character' color={CCColors[1]} clickColor={CCClickColors[0]} cc={cc} setCC={setCC}/>
        </Grid>
      </VStack>
      <VStack>
        <Heading pt='40px' pb='15px'>Choose level of difficulty</Heading>
        <HStack>
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
        </HStack>
      </VStack>
    </>
  );
};

export default Difficulty;