import React from "react";
import MainPageComponent from "../main-page/main-page.jsx";
import { generateCards } from "../../mocks/card";
import { getRandomIntegerNumber } from "../../mocks/utils";
import { filmAdapter } from "../../utils/adapter";

const newCards = generateCards(getRandomIntegerNumber(10, 30));
const cards = newCards.map((card) => filmAdapter(card));

const App = () => {
  return <MainPageComponent />;
};

export default React.memo(App);
