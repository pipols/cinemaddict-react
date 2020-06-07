import React from "react";
import { getCardsByFilter } from "../../utils/filter";
import { FilterType } from "../../const";
import { connect } from "react-redux";
import { getFilms, getActiveFilter } from "../../selector";
import { ActionCreator } from "../../reducer";

const ACTIVE_CLASS_NAME = `main-navigation__item--active`;

// eslint-disable-next-line react/prop-types
const MainNavigation = ({ films, activeFilter, setActiveFilter }) => {
  return (
    <nav className="main-navigation">
      <div className="main-navigation__items">
        <a
          onClick={() => setActiveFilter(FilterType.ALL)}
          href="#all"
          className={`main-navigation__item ${
            activeFilter === FilterType.ALL ? ACTIVE_CLASS_NAME : ``
          }`}
        >
          All movies
        </a>
        <a
          onClick={() => setActiveFilter(FilterType.WATCHLIST)}
          href="#watchlist"
          className={`main-navigation__item ${
            activeFilter === FilterType.WATCHLIST ? ACTIVE_CLASS_NAME : ``
          }`}
        >
          Watchlist{" "}
          <span className="main-navigation__item-count">
            {getCardsByFilter(films, FilterType.WATCHLIST).length}
          </span>
        </a>
        <a
          onClick={() => setActiveFilter(FilterType.HISTORY)}
          href="#history"
          className={`main-navigation__item ${
            activeFilter === FilterType.HISTORY ? ACTIVE_CLASS_NAME : ``
          }`}
        >
          History{" "}
          <span className="main-navigation__item-count">
            {getCardsByFilter(films, FilterType.HISTORY).length}
          </span>
        </a>
        <a
          onClick={() => setActiveFilter(FilterType.FAVORITES)}
          href="#favorites"
          className={`main-navigation__item ${
            activeFilter === FilterType.FAVORITES ? ACTIVE_CLASS_NAME : ``
          }`}
        >
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
  activeFilter: getActiveFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  setActiveFilter(filter) {
    dispatch(ActionCreator.setFilterType(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigation);
