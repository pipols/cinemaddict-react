import React from "react";

const FilmDetailsControls = ({ card }) => {
  const { watchlist, watched, favorite } = card;
  return (
    <section className="film-details__controls">
      <input
        type="checkbox"
        className="film-details__control-input visually-hidden"
        id="watchlist"
        name="watchlist"
        checked={watchlist}
      />
      <label
        htmlFor="watchlist"
        className="film-details__control-label film-details__control-label--watchlist"
      >
        Add to watchlist
      </label>

      <input
        type="checkbox"
        className="film-details__control-input visually-hidden"
        id="watched"
        name="watched"
        checked={watched}
      />
      <label
        htmlFor="watched"
        className="film-details__control-label film-details__control-label--watched"
      >
        Already watched
      </label>

      <input
        type="checkbox"
        className="film-details__control-input visually-hidden"
        id="favorite"
        name="favorite"
        checked={favorite}
      />
      <label
        htmlFor="favorite"
        className="film-details__control-label film-details__control-label--favorite"
      >
        Add to favorites
      </label>
    </section>
  );
};

export default FilmDetailsControls;
