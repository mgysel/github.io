import React, { useEffect, useContext, useState, PureComponent } from "react";
import { 
  Box, 
  Checkbox,
  CheckboxGroup,
  Circle,
  Flex,
  HStack,
  Image, 
  LinkBox, 
  LinkOverlay,
  Show,
  Text, 
  VStack
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { StoreContext } from "../helpers/context";

const GameCard = (props) => {
  // Global variables
  const context = useContext(StoreContext);
  let numCards = context.numCards[0]
  let setNumCards = context.numCards[1]

  const [checkedItems, setCheckedItems] = React.useState([false, false])
  const [completed, setCompleted] = React.useState(false)
  const [display, setDisplay] = React.useState('none')

  const [checkedItem1, setCheckedItem1] = useState(false)
  const [checkedItem2, setCheckedItem2] = useState(false)

  const blueColor = '#7CB9E8'
  const goldColor = '#FFA935'
  const [circleColor1, setCircleColor1] = useState(blueColor)
  const [circleColor2, setCircleColor2] = useState(goldColor)
  
  // If both boxes checked, complete card
  useEffect(() => {
    if (checkedItems.every(Boolean)) {
      setCompleted(true)
      setNumCards(numCards + 1)
      // Increase score
      context.score[1](context.score[0] + 1)
    } 
  }, [])

  // If both boxes checked, complete card
  useEffect(() => {
    if (checkedItems.every(Boolean)) {
      setCompleted(true)
      context.numCards[1](context.numCards[0] + 1)
      // Increase score
      context.score[1](context.score[0] + 1)
    } 
    if (checkedItems[0]) {
      setCircleColor1(goldColor)
    } else {
      setCircleColor1(blueColor)
    }
    if (checkedItems[1]) {
      setCircleColor2(goldColor)
    } else {
      setCircleColor2(blueColor)
    }
  }, [checkedItems])

  // If card not completed and card within range, display
  useEffect(() => {
    if (completed) {
      setDisplay('none')
    } else if (props.index < context.numCards[0] + 3) {
      setDisplay('flex')
    }
  }, [numCards, completed])

  return (
    <Flex display={display} pl='15px' pr='15px'>
      {
        display==='flex' && (
          <VStack width='240px'>
            <Image src={`images/criteria/${props.image}`} pt='40px'/>
            <Box position='absolute' ml='-50px' pt='340px' pr='230px'
            >
              <Circle background={circleColor1} border='2px solid black' size='65px'
                _hover={{ 
                  cursor: 'pointer' 
                }}
                onClick={() => setCheckedItems([!checkedItems[0], checkedItems[1]])}
              >
                <Circle background='white' border='2px solid black' size='45px'>
                  <Box boxSize='30px'>
                    <Image src='images/icons/check@2x.png' />
                  </Box>
                </Circle>
              </Circle>
            </Box>
            <Box position='absolute' ml='-50px' pl='230px'
            >
              <Circle background={circleColor2} border='2px solid black' size='65px'
                _hover={{ 
                  cursor: 'pointer' 
                }}
                onClick={() => setCheckedItems([checkedItems[0], !checkedItems[1]])}
              >
                <Circle background='white' border='2px solid black' size='45px'>
                  <Box boxSize='30px'>
                    <Image src='images/icons/check@2x.png' />
                  </Box>
                </Circle>
              </Circle>
            </Box>
          </VStack>
        )
      }
    </Flex>
  );
};

export default GameCard;