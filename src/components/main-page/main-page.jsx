import React from "react";
import HeaderComponent from "../header/header.jsx";
import MainComponent from "../main/main.jsx";
import FooterComponent from "../footer/footer.jsx";
import FilmDetailsComponent from "../film-details/film-details.jsx";

// eslint-disable-next-line react/prop-types
const Main = ({cards}) => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <MainComponent cards={cards}/>
      <FooterComponent/>
      <FilmDetailsComponent card={cards[0]}/>
    </React.Fragment>
  );
};

export default Main;
