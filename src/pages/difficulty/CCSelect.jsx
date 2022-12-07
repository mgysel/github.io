import React, { useContext, useEffect, useState } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import {
  AspectRatio,
  Beginner,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Flex,
  Image,
  LinkOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { StoreContext } from "../../helpers/context";

const CCSelect = (props) => {
  // Set global CC (context or character)
  const context = useContext(StoreContext);
  const [cc, setCC] = React.useState(props.cc);
  const [bgColor, setBgColor] = React.useState(props.color);
  const [border, setBorder] = React.useState('3px solid black');

  // Update global 
  const handleClick = () => {
    console.log("CC HANDLING CLICK")
    context.cc[1](props.type);
    props.setCC(props.type);
    setCC(props.type);
    
    setBgColor(props.clickColor);
    setBorder('7px solid black');
  }

  // Fetch items on mount
  useEffect(() => {
    console.log("CC SELECT USE EFFECT")
    if (context.cc[0]===props.type) {
      setBgColor(props.clickColor);
      setBorder('7px solid black');
    } else {
      setBgColor(props.color);
      setBorder('3px solid black')
    }
  }, [context.cc, props.type, props.color, props.clickColor]);

  return (
    <>
      <VStack 
        borderRadius='lg' border={border} 
        padding='20px' pt='10px' 
        backgroundColor={bgColor}
        _hover={{ 
          bg: props.clickColor, 
          cursor: 'pointer' 
        }}
        onClick={handleClick}
      >
        <Text fontSize='2xl' fontWeight='bold'>{props.type} Cards</Text>
        <Image src={props.image} width='140px' />
      </VStack>
    </>
  );
};

export default CCSelect;