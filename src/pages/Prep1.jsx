import React, { useContext, useEffect, useState } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { StoreContext } from "../helpers/context";
import Carousel from 'better-react-carousel';
import './DragDrop.css';
import BackButton from "../components/BackButton";
import ForwardButton from "../components/ForwardButton";

const Prep1 = () => {
  const context = useContext(StoreContext);
  const criteriaCards = context.criteria;
  const questions = context.questions;

  return (
    
    <>
      <Center>
        <Heading align="center" my="1rem" pt='12px'>
          Learn how to use Criteria Cards
        </Heading>
        <Flex position='absolute' top='75px' left='40px' as={RouterLink} to='/'>
          <BackButton />
        </Flex>
        <Flex position='absolute' top='75px' right='40px' as={RouterLink} to='/prep2'>
          <ForwardButton />
        </Flex>
      </Center>
      <Center mt='20px' mb='30px'>
        <HStack>
          <Box pr='10px'>
            <Image src={`images/questions/${questions[9]}`} width='250px' />
          </Box>
          <Box pl='10px'>
            <Text>How to use criteria card</Text>
          </Box>
        </HStack>
      </Center>
      <Flex pl='30vw' pr='30vw' pb='70px'>
        <Carousel cols={1} rows={1} gap={15} loop showDots>
          {criteriaCards.map((image, index) => (
            <Carousel.Item key={index}>
              <Center>
                <Image src={`images/criteria/${image}`} index={index} width='250px' />
              </Center>
            </Carousel.Item>
          ))}
        </Carousel>
      </Flex>  
    </>
  );
};

export default Prep1;