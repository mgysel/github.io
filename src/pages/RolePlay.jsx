import React, { useContext, useEffect, useState } from "react";
import { useLocation, useHistory, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Grid,
  Heading,
  HStack,
  Image,
  Flex,
  LinkOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { StoreContext } from "../helpers/context";
import './DragDrop.css';
import CharacterCard from './character/CharacterCard';

const RolePlay = () => {
  const context = useContext(StoreContext);
  const characters = context.characters;
  const characterDescriptions = context.characterDescriptions;

  const playerOne = context.playerOne[0];
  const playerTwo = context.playerTwo[0];
  const playerThree = context.playerThree[0];
  const playerFour = context.playerFour[0];

  console.log("Character descriptions")
  console.log(characterDescriptions)

  return (
    <VStack className="container">
      <Flex position='absolute' top='75px' right='40px' as={RouterLink} to='/game'>
        <Button
          width='160px' height='60px'
          backgroundColor='teal' color='white'
          aria-label='Go to next page'
        >
          Next Round 
          <ArrowForwardIcon pl='4px' size='xl' />
        </Button>
      </Flex>
      <VStack pl='10vw' pr='10vw'>
        <Heading pt='10px'>In the next round, you will role-play</Heading>
        <Heading>your characters when answering questions.</Heading>
      </VStack>
      <HStack pt='10px'>
        <CharacterCard 
          name={characterDescriptions[playerOne].name}
          emotion={characterDescriptions[playerOne].emotion}
          image={characters[playerOne]}
          quote={characterDescriptions[playerOne].quote}
          description={characterDescriptions[playerOne].description}
        />
        <CharacterCard 
          name={characterDescriptions[playerTwo].name}
          emotion={characterDescriptions[playerTwo].emotion}
          image={characters[playerTwo]}
          quote={characterDescriptions[playerTwo].quote}
          description={characterDescriptions[playerTwo].description}
        />
        <CharacterCard 
          name={characterDescriptions[playerThree].name}
          emotion={characterDescriptions[playerThree].emotion}
          image={characters[playerThree]}
          quote={characterDescriptions[playerThree].quote}
          description={characterDescriptions[playerThree].description}
        />
        <CharacterCard 
          name={characterDescriptions[playerFour].name}
          emotion={characterDescriptions[playerFour].emotion}
          image={characters[playerFour]}
          quote={characterDescriptions[playerFour].quote}
          description={characterDescriptions[playerFour].description}
        />
      </HStack>

    </VStack>
  );
};

export default RolePlay;