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
  const criteriaCards = context.criteria;
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
    setCard(0)

    setHover(true);
    setDisplay('block');
  }
  const mouseOver1 = () => {
    console.log("MOUSE OVER")
    setCard(4)
    setHover(true);
    setDisplay('block');
  }
  const mouseOver2 = () => {
    console.log("MOUSE OVER")
    setCard(7)
    setHover(true);
    setDisplay('block');
  }
  const mouseOver3 = () => {
    console.log("MOUSE OVER")
    setCard(1)
    setHover(true);
    setDisplay('block');
  }
  const mouseOver4 = () => {
    console.log("MOUSE OVER")
    setCard(2)
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
              <Image src={`images/questions/${questions[9]}`} width='250px' />
            </Box>
            <Box width='400px' pl='20px'>
              <Text as="span">Basic need can be</Text>
              <Text as="span" backgroundColor='orange.100' _hover={{ cursor: 'pointer' }} px='1'
                onMouseOver={mouseOver1}
                onMouseOut={mouseOut}
                >
                defined as
              </Text>
              <Text as="span">the minimum resources necessary for long-term physical well-being, usually in reference to consumption goods.</Text>
              <Text as="span" backgroundColor='orange.100' _hover={{ cursor: 'pointer' }} px='1'
                onMouseOver={mouseOver2}
                onMouseOut={mouseOut}
              >
                In other words,
              </Text>
              <Text as="span">
                a basic need is something we cannot live without.
              </Text>
              <Text as="span">
                While access to the internet is important in many people’s daily life,
              </Text> 
              <Text as="span" backgroundColor='orange.100' _hover={{ cursor: 'pointer' }} px='1'
                onMouseOver={mouseOver3}
                onMouseOut={mouseOut}
              >
                it is not necessary for our long-term well-being
              </Text>
              <Text as="span">.</Text>
              <Text as="span" backgroundColor='orange.100' _hover={{ cursor: 'pointer' }} px='1'
                onMouseOver={mouseOver4}
                onMouseOut={mouseOut}
              >
                Let’s discuss
              </Text>
              <Text as="span">
              how we use the internet in our daily life, which might help us answer whether having access to the internet is a basic need.
              </Text>  
            </Box>
          </HStack>
          <Box pt='20px' display={display} width='240px'>
            <Image 
              src={`images/criteria/${criteriaCards[card]}`} 
            />
          </Box>
        </VStack>
      </Center>
    </>
  );
};

export default Prep2;