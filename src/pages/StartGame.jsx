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
  
  // Set game mode to 0
  useEffect(() => {
    context.gameMode[1](0);
  }, [])

  return (
    <Flex w="100%" direction="column">
      <VStack>
        <Image src={'images/logo/logo.png'} pt='80px' pb='40px' />
        <Button colorScheme='teal' size='lg' width='300px' height='80px' as={RouterLink} to='/difficulty'>
          Start Game
        </Button>
      </VStack>
    </Flex>
  );
};

export default StartGame;