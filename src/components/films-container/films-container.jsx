import React from "react";
import FilmsListComponent from "../films-list/films-list.jsx";
import FilmsListExtraComponent from "../films-list-extra/films-list-extra.jsx";

// eslint-disable-next-line react/prop-types
const FilmsContainer = ({ cards, handlerCardClick }) => {
  return (
    <section className="films">
      <FilmsListComponent cards={cards} handlerCardClick={handlerCardClick} />
      <FilmsListExtraComponent />
      <FilmsListExtraComponent />
    </section>
  );
};

export default FilmsContainer;
