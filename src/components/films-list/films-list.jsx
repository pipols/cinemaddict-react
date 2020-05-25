import React from "react";
import FilmCardComponent from "../film-card/film-card.jsx";
import ShowMoreComponent from "../show-more/show-more.jsx";

const FilmsList = () => {
  return (
    <section className="films-list">
      <h2 className="films-list__title visually-hidden">All movies. Upcoming</h2>

      <div className="films-list__container">
        <FilmCardComponent/>
        <FilmCardComponent/>
        <FilmCardComponent/>
        <FilmCardComponent/>
        <FilmCardComponent/>
      </div>

      <ShowMoreComponent/>
    </section>
  );
};

export default FilmsList;
