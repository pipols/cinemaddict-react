import React from "react";
import FilmsListComponent from "../films-list/films-list.jsx";
import FilmsListExtraComponent from "../films-list-extra/films-list-extra.jsx";

const FilmsContainer = () => {
  return (
    <section className="films">
      <FilmsListComponent/>
      <FilmsListExtraComponent/>
      <FilmsListExtraComponent/>
    </section>
  );
};

export default FilmsContainer;
