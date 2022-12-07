import React, { useContext, useEffect, useState } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
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
import './DragDrop.css'

const DragDrop = () => {
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
  // It can move to destination if dest=0 or no other element on same dest
  const isDestOk = (id, dest) => {
    if (dest === 0) {
      return true;
    }

    for (let i = 0; i < targets.length; i++) {
      if (i !== id && targets[i] === dest) {
        return false;
      }
    }

    return true;
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
            } else if (dropResult && dropResult.name === 'Player 1') {
              setTargetsArray(id, 1)
            } else if (dropResult && dropResult.name === 'Player 2') {
              setTargetsArray(id, 2)
            } else if (dropResult && dropResult.name === 'Player 3') {
              setTargetsArray(id, 3)
            } else {
              setTargetsArray(id, 4)
            } 
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0.4 : 1;

    return (
        <div ref={drag} style={{opacity}}>
          <Image src={imageLink} />
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

  for (var i=0; i < characters.length; i++) {
    Items.push(
      <Carousel.Item>
        <MovableItem setTarget={setTargets} id={i} key={i} imageLink={`images/characters/${characters[i]}`} />
      </Carousel.Item>
    )
  }

  console.log("ITEMS")
  console.log(Items)

  return (
    <div className="container">
      <DndProvider backend={HTML5Backend}>
        <VStack>
          <Heading pt='40px' pb='30px'>Choose characters</Heading>
          <Column title='Characters'>
            <Flex pl='10vw' pr='10vw'>
              <Carousel cols={4} rows={1} gap={0} loop showDots>
                  {Items.map((item, i) => (
                    targets[i] === 0 && item
                  ))}
              </Carousel>
            </Flex>  
          </Column>
          <HStack>
            <Column title='Player 1' className='column first-column'>
              {Items.map((item, i) => (
                targets[i] === 1 && item
              ))}
            </Column>
            <Column title='Player 2' className='column first-column'>
              {Items.map((item, i) => (
                targets[i] === 2 && item
              ))}
            </Column>
            <Column title='Player 3' className='column first-column'>
              {Items.map((item, i) => (
                targets[i] === 3 && item
              ))}
            </Column>
            <Column title='Player 4' className='column first-column'>
              {Items.map((item, i) => (
                targets[i] === 4 && item
              ))}
            </Column>
          </HStack>
        </VStack>
      </DndProvider>
    </div>
  );
};

export default DragDrop;