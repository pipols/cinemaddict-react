import React from "react";
import FilmCardComponent from "../film-card/film-card.jsx";
import ShowMoreComponent from "../show-more/show-more.jsx";
import { connect } from "react-redux";
import { getFilms } from "../../selector";

// eslint-disable-next-line react/prop-types
const FilmsList = ({ films }) => {
  return (
    <section className="films-list">
      <h2 className="films-list__title visually-hidden">
        All movies. Upcoming
      </h2>

      <div className="films-list__container">
        {films.map((card, i) => (
          <FilmCardComponent key={i} card={card} />
        ))}
      </div>

      <ShowMoreComponent />
    </section>
  );
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
});

export default connect(mapStateToProps)(FilmsList);
