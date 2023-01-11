import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import StartGame from "./StartGame";
import Difficulty from "./Difficulty";
import Game from "./Game";
import ReviewCards from "./ReviewCards";
import ChooseCharacters from "./ChooseCharacters";
import Prep1 from "./Prep1";
import Prep2 from "./Prep2";
import ChoosePlayers from "./ChoosePlayers";
import Pause from "./Pause";
import RolePlay from "./RolePlay";
import FinishGame from "./FinishGame";

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
      <Route exact path="/prep1">
        <Prep1 />
      </Route>
      <Route exact path="/prep2">
        <Prep2 />
      </Route>
      <Route exact path="/chooseplayers">
        <ChoosePlayers />
      </Route>
      <Route exact path="/pause">
        <Pause />
      </Route>
      <Route exact path="/roleplay">
        <RolePlay />
      </Route>
      <Route exact path="/finish">
        <FinishGame />
      </Route>
    </Switch>
  );
};

export default Navigation;
