import React from "react";
import FilmCardComponent from "../film-card/film-card.jsx";
import ShowMoreComponent from "../show-more/show-more.jsx";

// eslint-disable-next-line react/prop-types
const FilmsList = ({ cards, handlerCardClick }) => {
  return (
    <section className="films-list">
      <h2 className="films-list__title visually-hidden">
        All movies. Upcoming
      </h2>

      <div className="films-list__container">
        {cards.map((card, i) => (
          <FilmCardComponent
            key={i}
            card={card}
            handlerCardClick={handlerCardClick}
          />
        ))}
      </div>

      <ShowMoreComponent />
    </section>
  );
};

export default FilmsList;
