import React from "react";
import FilmCardComponent from "../film-card/film-card.jsx";
import ShowMoreComponent from "../show-more/show-more.jsx";

// eslint-disable-next-line react/prop-types
const FilmsList = ({cards}) => {
  return (
    <section className="films-list">
      <h2 className="films-list__title visually-hidden">All movies. Upcoming</h2>

      <div className="films-list__container">
        <FilmCardComponent card={cards[0]}/>
        <FilmCardComponent card={cards[0]}/>
        <FilmCardComponent card={cards[0]}/>
        <FilmCardComponent card={cards[0]}/>
        <FilmCardComponent card={cards[0]}/>
      </div>

      <ShowMoreComponent/>
    </section>
  );
};

export default FilmsList;
