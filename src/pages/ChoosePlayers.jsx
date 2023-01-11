import React, { useContext, useEffect, useState } from "react";
import { useLocation, useHistory, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Grid,
  Heading,
  HStack,
  Image,
  Flex,
  LinkOverlay,
  VStack,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Stage, Layer, Image as KonvaImage, Text } from 'react-konva';
import { StoreContext } from "../helpers/context";
import useImage from 'use-image';
import Carousel from 'better-react-carousel';
// Drag Drop Demo
// 
import { DndProvider, DragPreviewImage, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from "react-dnd-html5-backend";
import './DragDrop.css';
import BackButton from "../components/BackButton";

const ChooseCharacters = () => {
  const context = useContext(StoreContext);
  const characters = context.characters;
  
  useEffect(() => {
    // Choose 4 random questions to be answered
    var questions = [];
    var numQuestions = 0;
    while (numQuestions < 3) {
      const questionNumber = (Math.round(Math.random() * context.questions.length));
      if (!questions.includes(questionNumber)) {
        questions.push(questionNumber)
        numQuestions += 1
      }
    }
    context.questionOne[1](questions[0])
    context.questionTwo[1](questions[1])
    context.questionThree[1](questions[2])
    context.questionFour[1](questions[3])

    // Reset all game values
    context.round[1](1);
    context.score[1](0);
    context.gameMode[1](0);
  }, [])

  const numTargets = 8;
  const targetsArray = [];
  const initTargets = (numTargets) => {
    for (let i = 0; i < numTargets; i++) {
      targetsArray.push(0);
    }
  }
  initTargets(numTargets);
  const [targets, setTargets] = useState(targetsArray);
  const [numPlayersChosen, setNumPlayersChosen] = useState(0);

  // Check if draggable item can move to destination
  // It can move to destination if dest=0 or < 2 elements on same target
  const isDestOk = (id, dest) => {
    if (dest === 0) {
      return true;
    }

    var numTargets = 0;
    for (let i = 0; i < targets.length; i++) {
      if (i !== id && targets[i] === dest) {
        numTargets += 1;
      }
    }
    if (numTargets < 1) {
      return true;
    }

    return false;
  }

  const countNumPlayersChosen = () => {
    console.log("INSIDE COUNTNUMPLATERSCHOSEN")
    console.log("Targets: ", targets)
    var count = 0;
    for (var i=0; i < 8; i++) {
      if (targets[i] !== 0) {
        count += 1
      }
    }
    console.log("Count: ", count)

    return count
  }

  // Update index of target
  const setTargetsArray = (id, dest) => {    
    const targetsArray = [...targets];
    console.log("Targets Array: ", targetsArray)
    
    // Check that no other index has same destination, unless the destination is 0
    if (isDestOk(id, dest)) {
      // Set targets array
      targetsArray[id] = dest;
      setTargets(targetsArray);

      // Update players 
      if (dest === 1) {
        context.playerOne[1](id)
      } else if (dest === 2) {
        context.playerTwo[1](id)
      } else if (dest === 3) {
        context.playerThree[1](id)
      } else if (dest === 4) {
        context.playerFour[1](id)
      }
    }

    // Update number of players chosen
    const count = countNumPlayersChosen()
    setNumPlayersChosen(count)

    console.log("NUMBER OF PLAYERS CHOSEN")
    console.log(numPlayersChosen)
  }

  const MovableItem = ({setTarget, id, imageLink}) => {
    const [{isDragging}, drag] = useDrag({
        item: {name: 'Any custom name'},
        type: 'Our first type',
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (dropResult && dropResult.name === 'Characters'){
              setTargetsArray(id, 0)
            } else if (dropResult && dropResult.name === 'Player 1') {
              setTargetsArray(id, 1)
            } else if (dropResult && dropResult.name === 'Player 2') {
              setTargetsArray(id, 2)
            } else if (dropResult && dropResult.name === 'Player 3') {
              setTargetsArray(id, 3)
            } else if (dropResult && dropResult.name === 'Player 4') {
              setTargetsArray(id, 4)
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0.4 : 1;

    return (
        <div ref={drag} style={{opacity}} pl='10px'>
          <Image 
            src={imageLink} 
            width='200px'
          />
        </div>
    )
  }

  const Column = ({children, className, title}) => {
      const [, drop] = useDrop({
          accept: 'Our first type',
          drop: () => ({name: title}),
      });

      return (
          <div ref={drop} className={className}>
              {children}
          </div>
      )
  }

  // Create movable items from each character
  const Items = [];
  for (var i=0; i < 8; i++) {
    Items.push(
      <MovableItem 
        setTarget={setTargets} id={i} key={i} 
        imageLink={`images/characters/${characters[i]}`} 
        />
    )
  }

  //Update global 
  let history = useHistory();
  const handleClickBack = () => {
    console.log("NAVBAR HANDLING CLICK");
    context.cc[1]('');
    context.difficulty[1]('');
    history.push("/prep2");
  }

  return (
    <VStack className="container">
      <Flex 
        position='absolute' top='75px' left='40px'
        onClick={handleClickBack} 
      >
        <BackButton />
      </Flex>
      {
        numPlayersChosen >= 3 &&
        <Flex position='absolute' top='75px' right='40px' as={RouterLink} to='/game'>
          <Button
            width='160px' height='60px'
            backgroundColor='#7CB9E8' color='black'
            aria-label='Go to next page'
          >
            Start Game 
            <ArrowForwardIcon pl='4px' size='xl' />
          </Button>
        </Flex>
      }
      <Heading pt='30px' pb='30px'>Choose Players</Heading>
      <DndProvider backend={HTML5Backend}>
        <Box
          mt='0px'
          pt='10px'
          width='90vw'
          height='250px'
          ml='5vw'
          borderWidth='1px' borderRadius='lg' overflow='hidden' 
          border='1px solid gray'
        >
          <Column title='Characters' p='10px'>
            <Center templateColumns='repeat(8, 1fr)' gap={7} height='220px' p='10px' ml='2vw' mr='2vw'>
              {Items.map((item, i) => (
                targets[i] === 0 && 
                <Center width='9vw'>
                  {item}
                </Center>
              ))}
            </Center>  
          </Column>
        </Box>
        <HStack pt='20px' pb='20px'>
          <VStack className='column-container'>
            <Heading fontSize='2xl' fontWeight='bold'>Player 1</Heading>
            <Column title='Player 1' className='column'>
              <Center>
                {Items.map((item, i) => (
                  targets[i] === 1 && 
                  <Center width='8vw'>
                    {item}
                  </Center>
                ))}
              </Center>
            </Column>
          </VStack>
          <VStack className='column-container'>
            <Heading fontSize='2xl' fontWeight='bold'>Player 2</Heading>
            <Column title='Player 2' className='column'>
              <Center>
                {Items.map((item, i) => (
                  targets[i] === 2 && 
                  <Center width='8vw'>
                    {item}
                  </Center>
                ))}
              </Center>
            </Column>
          </VStack>
          <VStack className='column-container'>
            <Heading fontSize='2xl' fontWeight='bold'>Player 3</Heading>
            <Column title='Player 3' className='column'>
              <Center>
                {Items.map((item, i) => (
                  targets[i] === 3 && 
                  <Center width='8vw'>
                    {item}
                  </Center>
                ))}
              </Center>
            </Column>
          </VStack>
          <VStack className='column-container'>
            <Heading fontSize='2xl' fontWeight='bold'>Player 4</Heading>
            <Column title='Player 4' className='column'>
              <Center>
                {Items.map((item, i) => (
                  targets[i] === 4 && 
                  <Center width='8vw'>
                    {item}
                  </Center>
                ))}
              </Center>
            </Column>
          </VStack>
        </HStack>
      </DndProvider>
    </VStack>
  );
};

export default ChooseCharacters;