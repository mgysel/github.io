import React, { useContext, useEffect, useState, useNavigate } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Heading,
  Flex,
  Image,
  LinkOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { StoreContext } from "../../helpers/context";

const DifficultyComponent = (props) => {
  // Set global difficulty
  const context = React.useContext(StoreContext);
  const [difficulty, setDifficulty] = React.useState(props.difficulty);
  const [bgColor, setBgColor] = React.useState(props.color);
  const [border, setBorder] = React.useState('3px solid black');

  // Update difficulty and border
  const handleClick = () => {
    console.log("DIFFICULTY HANDLING CLICK");
    // Set difficulty in context and state
    context.difficulty[1](props.title);
    props.setDifficulty(props.title);
    setDifficulty(props.title);

    setBgColor(props.clickColor);
    setBorder('7px solid black');
  }

  return (
    <VStack borderRadius='lg' bg={bgColor} padding='10px' border={border} h='220px' w='300px'
      onClick={handleClick}
      _hover={{ 
        bg: props.clickColor,
        cursor: 'pointer' 
      }}
    >
      <Text fontSize='2xl' fontWeight='bold' pb='10px'>{props.title}</Text>
      <Box mb='30px'>
        <Image src={props.src} height='90px' />
      </Box>
      <Text pt='10px'>{props.numQuestions} questions</Text>
    </VStack>
  );
};

export default DifficultyComponent;