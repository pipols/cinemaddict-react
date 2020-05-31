import React from "react";

const FilmDetailsCloseButton = ({ handlerCloseButtonClick }) => {
  return (
    <div className="film-details__close">
      <button
        onClick={handlerCloseButtonClick}
        className="film-details__close-btn"
        type="button"
      >
        close
      </button>
    </div>
  );
};

export default FilmDetailsCloseButton;
