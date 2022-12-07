import React, { useEffect, useContext, useState, PureComponent } from "react";
import { 
  Box, 
  Checkbox,
  CheckboxGroup,
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
  

  // If both boxes checked, complete card
  useEffect(() => {
    if (checkedItems.every(Boolean)) {
      setCompleted(true)
      setNumCards(numCards + 1)
    } 
  }, [checkedItems])

  // If card not completed and card within range, display
  useEffect(() => {
    if (completed) {
      setDisplay('none')
    } else if (props.index < numCards + 3) {
      setDisplay('flex')
    }
  }, [numCards, completed])

  return (
    <Flex display={display} pl='15px' pr='15px'>
      {
        display==='flex' && (
          <VStack>
            <Image src={`images/cards/${props.image}`} />
            <HStack>
              <CheckboxGroup colorScheme='green'>
                  <Checkbox
                    value='1'
                    isChecked={checkedItems[0]}
                    onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
                  >
                    1
                  </Checkbox>
                  <Checkbox
                    value='2'
                    isChecked={checkedItems[1]}
                    onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
                  >
                    2
                  </Checkbox>
              </CheckboxGroup>
            </HStack>
          </VStack>
        )
      }
    </Flex>
  );
};

export default GameCard;
