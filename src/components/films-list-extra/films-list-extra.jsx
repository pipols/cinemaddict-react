import React from "react";
import FilmCardComponent from "../film-card/film-card.jsx";

const FilmsListExtra = () => {
  return (
    <section className="films-list--extra">
      <h2 className="films-list__title">Top rated</h2>

      <div className="films-list__container">
        <FilmCardComponent/>
        <FilmCardComponent/>
      </div>
    </section>
  );
};

export default FilmsListExtra;
