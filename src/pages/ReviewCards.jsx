import React, { useEffect, useContext, useState, PureComponent } from "react";
import { 
  useLocation,
  useHistory,
  Link as RouterLink 
} from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Checkbox, 
  CheckboxGroup,
  Circle,
  Heading,
  HStack,
  IconButton,
  Image,
  Flex,
  Grid,
  Link,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ArrowBackIcon } from '@chakra-ui/icons';
import { StoreContext } from "../helpers/context";

import GameCard from "../components/GameCard";
import BackButton from "../components/BackButton";

const ReviewCards = () => {
  const context = useContext(StoreContext);
  const criteriaCards = context.cards;
  console.log(criteriaCards);

  let history = useHistory();

  //Update global 
  const handleClickBack = () => {
    console.log("NAVBAR HANDLING CLICK");
    context.cc[1]('');
    context.difficulty[1]('');
    history.push("/difficulty");
  }

  return (
    <Flex w="100%" direction="column">
      <Flex 
        position='absolute' mt='20px' ml='40px'
        onClick={handleClickBack} 
      >
        <BackButton />
      </Flex>
      <VStack>
        <Heading align="center" my="1rem" mt='30px' mb='30px'>
            Review Criteria Cards
        </Heading>
      
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
          {criteriaCards.map((image, index) => (
            <WrapItem key={index}>
              <Image src={`images/cards/${image}`} index={index} />
            </WrapItem>
          ))}
        </Grid>
        <Flex>
          <Button 
            mt='40px' mb='40px'
            colorScheme='teal' size='lg'
            width='300px' height='80px'
            as={RouterLink}
            to='/game'
          >
            Ready to Play?
          </Button>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default ReviewCards;