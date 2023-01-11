import React, { useEffect, useContext, useState, PureComponent } from "react";
import { 
  useLocation,
  Link as RouterLink 
} from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Checkbox, 
  CheckboxGroup,
  Circle,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  HStack,
  Image,
  Flex,
  Grid,
  Link,
  Stack,
  Text,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { StoreContext } from "../../helpers/context";


const CardDrawer = () => {
  const context = useContext(StoreContext);
  const criteriaCards = context.criteria;
  console.log(criteriaCards);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size='xl'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Review Criteria Cards</DrawerHeader>
          <DrawerBody>
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
              {criteriaCards.map((image, index) => (
                <WrapItem key={index}>
                  <Image src={`images/criteria/${image}`} index={index} />
                </WrapItem>
              ))}
            </Grid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
  );
};

export default CardDrawer;