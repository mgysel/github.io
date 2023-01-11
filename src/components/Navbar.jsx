import React, { useState, useContext, useEffect, useRef } from "react";
import {
  Button,
  Center,
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
  let [cc, setCC] = React.useState(context.cc);
  let [difficulty, setDifficulty] = React.useState(context.difficulty);
  let [gameMode, setGameMode] = React.useState(context.gameMode);

  // Score
  const score = context.score;
  
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

  // Timer
  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    // Format minutes, seconds
    var mDisplay = minutes > 0 ? (minutes < 10 ? "" : "") + minutes + ":" : "0:";
    var sDisplay = seconds > 0 ? (seconds < 10 ? "0" : "") + seconds : "00";
    
    // Render a countdown
    return <Text fontSize='25px'>Time: {mDisplay}{sDisplay}</Text>;
  };

  // Styling
  const p='10px';

  const [k, setK] = useState(false);
  const onCompleteTimeFun = () => {
    console.log("Resetting Time");
    console.log("CONTEXT GAME MODE")
    console.log(context.gameMode[0])
    setK((i) => !i);

    // Update game round
    context.round[1](context.round[0] + 1)
    if (context.gameMode[0] === 1) {
      context.gameMode[1](2)
    } 

    // Navigate to /pause
    history.push('/pause')

    // Reset for game cards shown
    context.numCards[1](0)
  };

  return (
    <Flex h="3.5rem" justifyContent="center" bg="gray.700" color="white">
      {context.gameMode[0]===1 &&
        <Flex position='absolute' 
          ml='40px' mt='8px' 
          width='100%' height='40px' 
        >
          <Center border='1px solid white' borderRadius='5px' padding='10px' width='155px'>
            <Countdown
              date={Date.now() + 180*1000}
              renderer={renderer}
              onComplete={onCompleteTimeFun}
              key={k}
            />
          </Center>
          <Center 
            border='1px solid white' borderRadius='5px' 
            fontSize='25px' padding='10px' width='140px'
            ml='20px'
          >
            Score: {context.score[0]}
          </Center>
          <Center 
            border='1px solid white' borderRadius='5px' 
            fontSize='25px' padding='10px' width='160px'
            ml='20px'
          >
            Round: {context.round[0]}/4
          </Center>
        </Flex>
      }
      <Flex
        w="100%"
        maxW="1366px"
        h="100%"
        alignItems="center"
        px="1rem"
        p='5px'
        ml = 'calc(100% - 230px)'
      >
        <Button ref={btnRef} backgroundColor='#7CB9E8' onClick={onOpen} >
          <Text 
            p={p} fontSize='2xl' 
            color='black'
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
                {context.criteria.map((image, index) => (
                  <WrapItem key={index}>
                    <Image src={`images/criteria/${image}`} index={index} />
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
