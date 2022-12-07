import React, { useState, useContext, useEffect, useRef } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Grid,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Text,
  useDisclosure,
  WrapItem,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { StoreContext } from "../helpers/context";
import CardDrawer from './navbar/CardDrawer.jsx';
import { useHistory, useLocation } from 'react-router-dom';
import Countdown from 'react-countdown';

import Timer from './Timer'

const Navbar = ({ children, ...rest }) => {

  const context = useContext(StoreContext);
  // const [cc, setCC] = React.useState(context.cc);
  // const [difficulty, setDifficulty] = React.useState(context.difficulty);
  let [cc, setCC] = React.useState(context.cc);
  let [difficulty, setDifficulty] = React.useState(context.difficulty);
  let [gameMode, setGameMode] = React.useState(context.gameMode);
  
  const btnRef = React.useRef()
  const { isOpen, onOpen, onClose } = useDisclosure();

  let history = useHistory();

  //Update global 
  const handleStartClick = () => {
    console.log("NAVBAR HANDLING CLICK");
    setCC('');
    setDifficulty('');
    context.cc[0] = '';
    context.difficulty[0] = '';
    context.cc[1]('');
    context.difficulty[1]('');
    context.gameMode[1](0);
    console.log(context.cc);
    console.log(context.difficulty);
    history.push("/");
  }
  // Set global CC (context or character)

  // Timer
  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    // Render a countdown
    return <Text fontSize='25px'>{minutes}:{seconds}</Text>;
  };

  // Styling
  const p='10px';

  // {
  //  <Text p={p} fontSize='2xl' as={RouterLink} to={"/difficulty"}>
  //   Difficulty
  // </Text>
  // <Text p={p} fontSize='2xl' as={RouterLink} to={"/characters"}>
  // Characters
  // </Text>
  // <Text p={p} fontSize='2xl'  as={RouterLink} to={"/review"}>
  //   Review
  // </Text>
  // <Text p={p} fontSize='2xl'  as={RouterLink} to={"/game"}>
  //   Game
  // </Text>
  // }

  return (
    <Flex h="3.5rem" justifyContent="center" bg="gray.700" color="white">
      {context.gameMode[0]===1 &&
        <Flex ml='20px' mt='8px' width='200px' height='20px'>
          <Countdown
            date={Date.now() + 180*1000}
            renderer={renderer}
          />
        </Flex>
      }
      <Flex
        w="100%"
        maxW="1366px"
        h="100%"
        alignItems="center"
        px="1rem"
        justifyContent="right"
        p='5px'
      >
        <Text p={p} fontSize='2xl' onClick={handleStartClick} _hover={{ 
          cursor: 'pointer' 
        }}>
          Start
        </Text>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen} >
          <Text 
            p={p} fontSize='2xl' 
            _hover={{ 
              cursor: 'pointer' 
            }}
          >
            Review Cards
          </Text>
        </Button>
        <Drawer 
          size='full'
          variant="alwaysOpen"
          {...rest}
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          trapFocus={false}
          closeOnOverlayClick={false}
          blockScrollOnMount={false}
        >
          {/* <DrawerOverlay /> */}
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Review Criteria Cards</DrawerHeader>
            <DrawerBody>
              <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                {context.cards.map((image, index) => (
                  <WrapItem key={index}>
                    <Image src={`images/cards/${image}`} index={index} />
                  </WrapItem>
                ))}
              </Grid>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  );
};

export default Navbar;
