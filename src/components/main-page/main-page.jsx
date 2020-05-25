import React from "react";
import HeaderComponent from "../header/header.jsx";
import MainComponent from "../main/main.jsx";
import FooterComponent from "../footer/footer.jsx";
import FilmDetailsComponent from "../film-details/film-details.jsx";

const Main = () => {
  return (
    <React.Fragment>
      <HeaderComponent/>
      <MainComponent/>
      <FooterComponent/>
      <FilmDetailsComponent/>
    </React.Fragment>
  );
};

export default Main;
