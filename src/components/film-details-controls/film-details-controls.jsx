import React from "react";
import { UserControl } from "../../const";
import { operation } from "../../reducer";
import { connect } from "react-redux";

const FilmDetailsControls = ({ card, changeControl }) => {
  const { watchlist, watched, favorite } = card;
  console.log(card);
  return (
    <section className="film-details__controls">
      <input
        onChange={() => changeControl(card, UserControl.WATCHLIST)}
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
        onChange={() => changeControl(card, UserControl.WATCHED)}
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
        onChange={() => changeControl(card, UserControl.FAVORITE)}
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

const mapDispachToProps = (dispatch) => ({
  changeControl(film, filmStatus) {
    film[filmStatus] = !film[filmStatus];
    dispatch(operation.updateFilm(film));
  },
});

export default connect(null, mapDispachToProps)(FilmDetailsControls);
