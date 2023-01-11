import React, { useContext, useEffect, useState } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { StoreContext } from "../helpers/context";
import Carousel from 'better-react-carousel';
import './DragDrop.css';
import BackButton from "../components/BackButton";
import ForwardButton from "../components/ForwardButton";
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { ChevronRightIcon } from '@chakra-ui/icons';

const Prep1 = () => {
  const context = useContext(StoreContext);
  const criteriaCards = context.criteria;
  const questions = context.questions;
  const examples = context.criteriaDescriptions;
  const [currentCard, setCurrentCard] = useState(0)

  const CustomLeftArrow = () => {
    return (
      <IconButton
      width='60px' height='60px'
      ml='-20px' mb='-355px'
      backgroundColor='gray.300' color='black'
      boxShadow='2xl'
      icon={<ChevronLeftIcon />}
      onClick={handleLeftClick}
    />
    )
  }

  const CustomRightArrow = () => {
    return (
      <IconButton
      width='60px' height='60px'
      ml='550px' mt='-430px'
      backgroundColor='gray.300' color='black'
      boxShadow='2xl'
      icon={<ChevronRightIcon />}
      onClick={handleRightClick}
    />
    )
  }

  const handleLeftClick = () => {
    if (currentCard === 0) {
      setCurrentCard(examples.length - 1)
    } else {
      setCurrentCard(currentCard - 1)
    }
  }

  const handleRightClick = () => {
    if (currentCard + 1 === examples.length) {
      setCurrentCard(0)
    } else {
      setCurrentCard(currentCard + 1)
    }
  }

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
            <Box width='25vw'>
              <Text>{examples[currentCard]}</Text>
            </Box>
          </Box>
        </HStack>
      </Center>
      <Flex pl='30vw' pr='30vw' pb='70px'>
        <Carousel 
          cols={1} rows={1} gap={1} 
          loop showDots
          arrowLeft={<CustomLeftArrow />}
          arrowRight={<CustomRightArrow />}
        >
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