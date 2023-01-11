import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation, Link as RouterLink } from "react-router-dom";
import {
  AspectRatio,
  Button,
  Heading,
  Image,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import DifficultyComponent from "./difficulty/DifficultyComponent";
import { StoreContext } from "../helpers/context";
import BackButton from "../components/BackButton";
import ForwardButton from "../components/ForwardButton";
import { ArrowForwardIcon } from '@chakra-ui/icons';

const FinishGame = () => {
  const context = useContext(StoreContext);
  const history = useHistory();

  return (
    <>
      <VStack>
        <Heading pt='40px' pb='0px' fontSize='6xl'>Thank you for playing</Heading> 
        <Image src={'images/logo/logo.png'} pt='60px' pb='40px' width='900px' />
        <Button backgroundColor='#7CB9E8' border='4px solid black' size='lg' width='400px' height='120px' as={RouterLink} to='/chooseplayers'>
          <Text fontSize='4xl'>Play Again?</Text>
        </Button>
      </VStack>
    </>
  );
};

export default FinishGame;