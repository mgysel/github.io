import React, { useEffect, useState, useContext } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { StoreContext } from "../helpers/context";
import {
  Box,
  Button,
  Heading,
  Flex,
  Image,
  LinkOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";

const StartGame = () => {
  const context = useContext(StoreContext);
  
  useEffect(() => {
    // Set game mode to 0
    context.gameMode[1](0);
  }, [])

  return (
    <Flex w="100%" direction="column">
      <VStack>
        <Image src={'images/logo/logo.png'} pt='60px' pb='40px' />
        <Button backgroundColor='#7CB9E8' border='4px solid black' size='lg' width='400px' height='120px' as={RouterLink} to='/prep1'>
          <Text fontSize='4xl'>
            Start Game
          </Text>
        </Button>
      </VStack>
    </Flex>
  );
};

export default StartGame;