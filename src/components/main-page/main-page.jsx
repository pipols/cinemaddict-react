import React from "react";
import HeaderComponent from "../header/header.jsx";
import MainComponent from "../main/main.jsx";
import FooterComponent from "../footer/footer.jsx";

const Main = () => {
  return (
    <React.Fragment>
      <HeaderComponent/>
      <MainComponent/>
      <FooterComponent/>
    </React.Fragment>
  );
};

export default Main;
