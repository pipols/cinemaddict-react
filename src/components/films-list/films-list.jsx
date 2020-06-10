import React from "react";
import FilmCardComponent from "../film-card/film-card.jsx";
import ShowMoreComponent from "../show-more/show-more.jsx";
import { connect } from "react-redux";
import { getFilteredFilmsSelector, isShowMoreSelector } from "../../selector";
import { FilmsListTitle } from "../../const";

// eslint-disable-next-line react/prop-types
const FilmsList = ({ films, isShowMore }) => {
  return (
    <section className="films-list">
      <h2 className="films-list__title visually-hidden">
        {FilmsListTitle.MAIN_FILM}
      </h2>

      <div className="films-list__container">
        {films &&
          films.map((card, i) => <FilmCardComponent key={i} card={card} />)}
        {films ? FilmsListTitle.MESSAGE_NO_FILMS : ``}
      </div>

      {isShowMore && <ShowMoreComponent />}
    </section>
  );
};

const mapStateToProps = (state) => ({
  films: getFilteredFilmsSelector(state),
  isShowMore: isShowMoreSelector(state),
});

export default connect(mapStateToProps)(FilmsList);
