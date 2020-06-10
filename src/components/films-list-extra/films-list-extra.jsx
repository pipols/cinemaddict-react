import React from "react";
import FilmCardComponent from "../film-card/film-card.jsx";
import { connect } from "react-redux";
import { getExtraFilms } from "../../selector";
import { FilmsListTitle } from "../../const";

const FilmsListExtra = ({ title, films }) => {
  return (
    <section className="films-list--extra">
      <h2 className="films-list__title">{title}</h2>

      <div className="films-list__container">
        {films &&
          films.map((card, i) => <FilmCardComponent key={i} card={card} />)}
        {films ? FilmsListTitle.MESSAGE_NO_FILMS : ``}
      </div>
    </section>
  );
};

const mapStateToProps = (state, props) => ({
  films: getExtraFilms(state, props),
});

export default connect(mapStateToProps)(FilmsListExtra);
