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

const CharacterCard = (props) => {

  return (
    <VStack width='22vw' padding='15px' height='570px'>
      <Text fontSize='40px' fontWeight='bold'>{props.name}</Text>
      <Text fontSize='2xl' pt='0px' mt='0px'>({props.emotion})</Text>
      <Image height='180px' src={`images/characters/${props.image}`} />
      <Text fontSize='18px' fontWeight='bold' align='center'>{props.quote}</Text>
      <Text fontSize='17px' align='center'>{props.description}</Text>
    </VStack>
  );
};

export default CharacterCard;