import React from "react";
import MainNavigationComponent from "../main-navigation/main-navigation.jsx";
import SortComponent from "../sort/sort.jsx";
import FilmsContainerComponent from "../films-container/films-container.jsx";

// eslint-disable-next-line react/prop-types
const Main = ({ cards, handlerCardClick }) => {
  return (
    <main className="main">
      <MainNavigationComponent cards={cards} />
      <SortComponent />
      <FilmsContainerComponent
        cards={cards}
        handlerCardClick={handlerCardClick}
      />
    </main>
  );
};

export default Main;
