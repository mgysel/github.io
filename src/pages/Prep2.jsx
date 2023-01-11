import React, { useContext, useEffect, useState } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Center,
  Flex,
  Heading,
  Highlight,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { StoreContext } from "../helpers/context";
import Carousel from 'better-react-carousel';
import './DragDrop.css';
import BackButton from "../components/BackButton";
import ForwardButton from "../components/ForwardButton";

const Prep2 = () => {
  const context = useContext(StoreContext);
  const criteriaCards = context.cards;
  const questions = context.questions;
  
  const [hover, setHover] = React.useState(false);
  const [display, setDisplay] = React.useState('none');
  const [card, setCard] = React.useState(0);

  const highlightText = (text) => {
    return (
      <Highlight query={text} styles={{ px: '1', py: '1', bg: 'orange.100' }}>
        {text}
      </Highlight>
    )
  }

  const mouseOver = () => {
    console.log("MOUSE OVER")

    setHover(true);
    setDisplay('block');
  }
  const mouseOut = () => {
    console.log("MOUSE OUT");
    setHover(false);
    setDisplay('none');
  }

  return (
    <>
      <Center>
        <Heading align="center" my="1rem" pt='12px'>
          Learn how to use Criteria Cards
        </Heading>
        <Flex position='absolute' top='75px' left='40px' as={RouterLink} to='/prep1'>
          <BackButton />
        </Flex>
        <Flex position='absolute' top='75px' right='40px' as={RouterLink} to='/chooseplayers'>
          <ForwardButton />
        </Flex>
      </Center>
      <Center mt='20px' mb='50px'>
        <VStack>
          <HStack>
            <Box pr='10px'>
              <Image src={`images/questions/${questions[0]}`} width='250px' />
            </Box>
            <Box width='400px' pl='20px'>
              <Text as="span">Passage of text where </Text>
              <Text as="span" backgroundColor='orange.100' _hover={{ cursor: 'pointer' }} px='1'
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
                >components are highlighted</Text>
              <Text as="span"> and the corresponding criteria card pops up. Passage of text where components are highlighted and the corresponding </Text>
              <Text as="span" backgroundColor='orange.100' _hover={{ cursor: 'pointer' }} px='1'
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >criteria card pops up.</Text> 
              <Text as="span"> Passage of text where components are highlighted and the corresponding </Text>
              <Text as="span" backgroundColor='orange.100' _hover={{ cursor: 'pointer' }} px='1'
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >criteria card pops up.</Text>
              <Text as="span"> Passage of text where components are highlighted and the corresponding criteria card pops up.</Text>
            </Box>
          </HStack>
          <Box pt='20px' display={display}>
            <Image 
              src={`images/cards/${criteriaCards[card]}`} 
            />
          </Box>
        </VStack>
      </Center>
    </>
  );
};

export default Prep2;