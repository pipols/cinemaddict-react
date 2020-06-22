import React from "react";
import MainNavigationComponent from "../main-navigation/main-navigation.jsx";
import SortComponent from "../sort/sort.jsx";
import FilmsContainerComponent from "../films-container/films-container.jsx";
import { connect } from "react-redux";

// eslint-disable-next-line react/prop-types
const Main = () => {
  return (
    <main className="main">
      <MainNavigationComponent />
      <SortComponent />
      <FilmsContainerComponent />
    </main>
  );
};

export default React.memo(Main);
