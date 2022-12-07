import React, { useState, useContext, useEffect, useRef } from "react";
import { useHistory, useLocation, Link as RouterLink } from "react-router-dom";
import {
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
import { ArrowBackIcon } from '@chakra-ui/icons';

const BackButton = (props) => {

  return (
    <IconButton
      width='100px' height='60px'
      backgroundColor='teal' color='white'
      aria-label='Search database'
      icon={<ArrowBackIcon />}
    />
  );
};

export default BackButton;
