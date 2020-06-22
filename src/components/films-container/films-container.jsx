import React from "react";
import FilmsListComponent from "../films-list/films-list.jsx";
import FilmsListExtraComponent from "../films-list-extra/films-list-extra.jsx";
import { FilmsListTitle } from "../../const";

// eslint-disable-next-line react/prop-types
const FilmsContainer = () => {
  return (
    <section className="films">
      <FilmsListComponent />
      <FilmsListExtraComponent title={FilmsListTitle.TOP_RATED} />
      <FilmsListExtraComponent title={FilmsListTitle.MOST_COMMENTED} />
    </section>
  );
};

export default React.memo(FilmsContainer);
