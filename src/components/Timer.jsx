import React, { useEffect, useState, PureComponent } from "react";
import { 
  useLocation,
  Link as RouterLink 
} from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Circle,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  Flex,
  Link,
  VStack,
} from "@chakra-ui/react";
import { FaPlay, FaStop, FaPause } from 'react-icons/fa';

import { useTimer } from 'react-timer-hook';

const Timer = () => {
  function MyTimer({ expiryTimestamp }) {
    const {
      seconds,
      minutes,
      isRunning,
      start,
      pause,
      resume,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  
    return (
      <HStack style={{textAlign: 'center'}}>
        <IconButton bg='black' onClick={isRunning ? pause : resume}>
          {
            isRunning 
              ? <FaPause />
              : <FaPlay />
          }
        </IconButton>
        <div style={{fontSize: '20px'}}>
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
      </HStack>
    );
  }

  const time = new Date();
  time.setSeconds(time.getSeconds() + 180); // 10 minutes timer
  
  return (
    <Flex w="100%" direction="column">
      <MyTimer expiryTimestamp={time} />
    </Flex>
  );
};

export default Timer;