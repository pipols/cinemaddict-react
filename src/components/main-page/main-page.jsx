import React from "react";
import HeaderComponent from "../header/header.jsx";
import MainComponent from "../main/main.jsx";
import FooterComponent from "../footer/footer.jsx";
import FilmDetailsComponent from "../film-details/film-details.jsx";
import { connect } from "react-redux";
import { getOpenedFilm } from "../../selector";

// eslint-disable-next-line react/prop-types

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
        {this.props.openedFilm && (
          <FilmDetailsComponent card={this.props.openedFilm} />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  openedFilm: getOpenedFilm(state),
});

export default connect(mapStateToProps)(Main);
