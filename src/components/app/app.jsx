import React from "react";
import MainPageComponent from "../main-page/main-page.jsx";
import {generateCards} from "../../mocks/card";
import {getRandomIntegerNumber} from "../../mocks/utils";

const cards = generateCards(getRandomIntegerNumber(10, 30));

const App = () => {
  return (
    <MainPageComponent cards={cards}/>
  );
};

export default App;

