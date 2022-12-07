import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import StartGame from "./StartGame";
import Difficulty from "./Difficulty";
import Game from "./Game";
import DragDrop from "./DragDrop";
import ReviewCards from "./ReviewCards";
import ChooseCharacters from "./ChooseCharacters";

const Navigation = () => {

  return (
    <Switch>
      <Route exact path="/">
        <StartGame />
      </Route>
      <Route exact path="/difficulty">
        <Difficulty />
      </Route>
      <Route exact path="/characters">
        <ChooseCharacters />
      </Route>
      <Route exact path="/review">
        <ReviewCards />
      </Route>
      <Route exact path="/game">
        <Game />
      </Route>
    </Switch>
  );
};

export default Navigation;
