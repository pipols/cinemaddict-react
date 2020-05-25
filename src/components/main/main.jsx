import React from "react";
import MainNavigationComponent from "../main-navigation/main-navigation.jsx";
import SortComponent from "../sort/sort.jsx";
import FilmsContainerComponent from "../films-container/films-container.jsx";

const Main = () => {
  return (
    <main className="main">
      <MainNavigationComponent/>
      <SortComponent/>
      <FilmsContainerComponent/>
    </main>
  );
};

export default Main;
