import React from "react";
import { getCardsByFilter } from "../../utils/filter";
import { FilterType } from "../../const";
import { connect } from "react-redux";
import { getFilms } from "../../selector";

// eslint-disable-next-line react/prop-types
const MainNavigation = ({ films }) => {
  return (
    <nav className="main-navigation">
      <div className="main-navigation__items">
        <a
          href="#all"
          className="main-navigation__item main-navigation__item--active"
        >
          All movies
        </a>
        <a href="#watchlist" className="main-navigation__item">
          Watchlist{" "}
          <span className="main-navigation__item-count">
            {getCardsByFilter(films, FilterType.WATCHLIST).length}
          </span>
        </a>
        <a href="#history" className="main-navigation__item">
          History{" "}
          <span className="main-navigation__item-count">
            {getCardsByFilter(films, FilterType.HISTORY).length}
          </span>
        </a>
        <a href="#favorites" className="main-navigation__item">
          Favorites{" "}
          <span className="main-navigation__item-count">
            {getCardsByFilter(films, FilterType.FAVORITES).length}
          </span>
        </a>
      </div>
      <a href="#stats" className="main-navigation__additional">
        Stats
      </a>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
});

export default connect(mapStateToProps)(MainNavigation);
