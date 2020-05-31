import React from "react";
import HeaderComponent from "../header/header.jsx";
import MainComponent from "../main/main.jsx";
import FooterComponent from "../footer/footer.jsx";
import FilmDetailsComponent from "../film-details/film-details.jsx";

// eslint-disable-next-line react/prop-types

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { openedCard: null };
    this.handlerCardClick = this.handlerCardClick.bind(this);
    this.handlerCloseButtonClick = this.handlerCloseButtonClick.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <MainComponent
          cards={this.props.cards}
          handlerCardClick={this.handlerCardClick}
        />
        <FooterComponent />
        {this.state.openedCard ? (
          <FilmDetailsComponent
            card={this.state.openedCard}
            handlerCloseButtonClick={this.handlerCloseButtonClick}
          />
        ) : null}
      </React.Fragment>
    );
  }

  handlerCardClick(card) {
    this.setState((state) => ({ openedCard: card }));
    console.log(`click`, this.state);
  }

  handlerCloseButtonClick() {
    this.setState((state) => ({ openedCard: null }));
    console.log(`close`);
  }
}

export default Main;
