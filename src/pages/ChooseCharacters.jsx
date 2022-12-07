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
  // const imageLink = `images/icons/animals/${context.animalImagesBlack[0]}`;
  // const imageLinkTwo = `images/icons/animals/${context.animalImagesBlack[1]}`;
  // const images = [imageLink, imageLinkTwo];

  const numTargets = characters.length;
  const targetsArray = [];
  const initTargets = (numTargets) => {
    for (let i = 0; i < numTargets; i++) {
      targetsArray.push(0);
    }
  }
  initTargets(numTargets);
  const [targets, setTargets] = useState(targetsArray);

  // const canSetTarget = () => {

  // }

  // Check if draggable item can move to destination
  // It can move to destination if dest=0 or < 3 elements on same target
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

    if (numTargets < 3) {
      return true;
    }

    return false;
  }

  // Update index of target
  const setTargetsArray = (id, dest) => {
    const targetsArray = [...targets];
    
    // Check that no other index has same destination, unless the destination is 0
    if (isDestOk(id, dest)) {
      targetsArray[id] = dest;
      setTargets(targetsArray);
    }
  }

  const MovableItem = ({setTarget, id, imageLink}) => {
    const [{isDragging}, drag] = useDrag({
        item: {name: 'Any custom name'},
        type: 'Our first type',
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (dropResult && dropResult.name === 'Characters'){
              setTargetsArray(id, 0)
            } else if (dropResult && dropResult.name === 'Team 1') {
              setTargetsArray(id, 1)
            } else if (dropResult && dropResult.name === 'Team 2') {
              setTargetsArray(id, 2)
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
  for (var i=0; i < 6; i++) {
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
    history.push("/difficulty");
  }

  return (
    <VStack className="container">
      <Flex 
        position='absolute' top='75px' left='40px'
        onClick={handleClickBack} 
      >
        <BackButton />
      </Flex>
      <Heading pt='30px' pb='30px'>Choose characters</Heading>
      <DndProvider backend={HTML5Backend}>
        <Box
          mt='0px'
          pt='10px'
          width='90vw'
          height='320px'
          ml='5vw'
          borderWidth='1px' borderRadius='lg' overflow='hidden' 
          boxShadow='1px 1px 6px rgba(0,0,0,0.5)'
        >
          <Column title='Characters' p='10px'>
            <Flex templateColumns='repeat(6, 1fr)' gap={2} height='300px' p='10px'>
              {Items.map((item, i) => (
                targets[i] === 0 && item
              ))}
            </Flex>  
          </Column>
        </Box>
        <HStack pt='20px' pb='20px'>
          <VStack className='column-container'>
            <Heading fontSize='2xl' fontWeight='bold'>Team 1</Heading>
            <Column title='Team 1' className='column'>
              <HStack>
                {Items.map((item, i) => (
                  targets[i] === 1 && item
                ))}
              </HStack>
            </Column>
          </VStack>
          <VStack className='column-container'>
            <Heading fontSize='2xl' fontWeight='bold'>Team 2</Heading>
            <Column title='Team 2' className='column'>
              <HStack>
                {Items.map((item, i) => (
                  targets[i] === 2 && item
                ))}
              </HStack>
            </Column>
          </VStack>
        </HStack>
      </DndProvider>
      <Flex>
        <Button 
          mt='10px' mb='40px'
          colorScheme='teal' size='lg'
          width='300px' height='80px'
          as={RouterLink}
          to='/game'
        >
          Ready to Play?
        </Button>
      </Flex>
    </VStack>
  );
};

export default ChooseCharacters;