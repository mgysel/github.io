import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation, Link as RouterLink } from "react-router-dom";
import {
  AspectRatio,
  Button,
  Heading,
  Flex,
  VStack,
} from "@chakra-ui/react";
import DifficultyComponent from "./difficulty/DifficultyComponent";
import { StoreContext } from "../helpers/context";
import BackButton from "../components/BackButton";
import ForwardButton from "../components/ForwardButton";
import { ArrowForwardIcon } from '@chakra-ui/icons';

const Pause = () => {
  const context = useContext(StoreContext);
  const history = useHistory();

  // When click on reflections, update game round, take to /pause
  const handleNextRoundClick = () => {
    console.log("HANDLE NEXT ROUND CLICK")
    if (context.round[0] === 3) {
      // Update game mode
      context.gameMode[1](2)
      history.push('/roleplay')
    } else if (context.round[0] >= 5) {
      context.gameMode[1](0)
      history.push('/finish')
    } else {
      // Update game mode
      context.gameMode[1](1)
      // Navigate to /pause
      history.push('/game')
    }
  }

  return (
    <>
      <Flex position='absolute' top='75px' right='40px' onClick={handleNextRoundClick}>
        {
          context.round[0] < 5 ?
          <Button
            width='160px' height='60px'
            backgroundColor='teal' color='white'
            aria-label='Go to next page'
          >
            Next Round 
            <ArrowForwardIcon pl='4px' size='xl' />
          </Button>
          :
          <Button
            width='160px' height='60px'
            backgroundColor='teal' color='white'
            aria-label='Go to next page'
          >
            Finish Game 
            <ArrowForwardIcon pl='4px' size='xl' />
          </Button>
        }
      </Flex>
      <VStack>
        <Heading pt='28px' pb='0px'>Reflect on the previous round with a</Heading> 
        <Heading pb='22px'>mindfulness intervention</Heading>
        <iframe width="900px" height="506px" src="https://www.youtube.com/embed/oH1H3eC_KFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </VStack>
    </>
  );
};

export default Pause;