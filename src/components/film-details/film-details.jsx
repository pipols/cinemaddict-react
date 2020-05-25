import React from "react";
import FilmDetailsCloseButtonComponent from "../film-details-close-button/film-details-close-button.jsx";
import FilmDetailsInfoComponent from "../film-details-info/film-details-info.jsx";
import FilmDetailsControlsComponent from "../film-details-controls/film-details-controls.jsx";
import CommentsComponent from "../comments/comments.jsx";

const FilmDetails = () => {
  return (
    <section className="film-details visually-hidden">
      <form className="film-details__inner" action="" method="get">
        <div className="form-details__top-container">
          <FilmDetailsCloseButtonComponent/>
          <FilmDetailsInfoComponent/>
          <FilmDetailsControlsComponent/>
        </div>

        <div className="form-details__bottom-container">
          <CommentsComponent/>
        </div>
      </form>
    </section>
  );
};

export default FilmDetails;
