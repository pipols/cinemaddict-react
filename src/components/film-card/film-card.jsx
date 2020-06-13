import React from "react";
import { connect } from "react-redux";
import { ActionCreator, operation } from "../../reducer";
import { getLimitString, getRuntimeFilm } from "../../utils/common";
import { reformatDate, TimeToken } from "../../utils/date";
import { UserControl } from "../../const";

const ACTIVE_CONTROL_CLASS = `film-card__controls-item--active`;
// eslint-disable-next-line react/prop-types
const FilmCard = ({ card, setOpenedFilm, changeControl }) => {
  // eslint-disable-next-line react/prop-types
  const {
    title,
    rating,
    runtime,
    genre,
    poster,
    description,
    comments,
    releaseDate,
    watchlist,
    watched,
    favorite,
  } = card;
  return (
    <article className="film-card">
      <h3 onClick={() => setOpenedFilm(card)} className="film-card__title">
        {title}
      </h3>
      <p className="film-card__rating">{rating}</p>
      <p className="film-card__info">
        {/* eslint-disable-next-line react/prop-types */}
        <span className="film-card__year">
          {reformatDate(releaseDate, TimeToken.year)}
        </span>
        <span className="film-card__duration">{getRuntimeFilm(runtime)}</span>
        <span className="film-card__genre">{genre[0]}</span>
      </p>
      <img
        onClick={() => setOpenedFilm(card)}
        src={poster}
        alt={title}
        className="film-card__poster"
      />
      <p className="film-card__description">{getLimitString(description)}</p>
      {/* eslint-disable-next-line react/prop-types */}
      <a onClick={() => setOpenedFilm(card)} className="film-card__comments">
        {comments.length} comments
      </a>
      <form className="film-card__controls">
        <button
          onClick={() => changeControl(card, UserControl.WATCHLIST)}
          className={`${
            watchlist ? ACTIVE_CONTROL_CLASS : ``
          } film-card__controls-item button film-card__controls-item--add-to-watchlist`}
        >
          Add to watchlist
        </button>
        <button
          onClick={() => changeControl(card, UserControl.WATCHED)}
          className={`${
            watched ? ACTIVE_CONTROL_CLASS : ``
          } film-card__controls-item button film-card__controls-item--mark-as-watched`}
        >
          Mark as watched
        </button>
        <button
          onClick={() => changeControl(card, UserControl.FAVORITE)}
          className={`${
            favorite ? ACTIVE_CONTROL_CLASS : ``
          } film-card__controls-item button film-card__controls-item--favorite`}
        >
          Mark as favorite
        </button>
      </form>
    </article>
  );
};

const mapDispachToProps = (dispatch) => ({
  setOpenedFilm(film) {
    dispatch(ActionCreator.setOpenedFilm(film));
  },
  changeControl(film, filmStatus) {
    film[filmStatus] = !film[filmStatus];
    dispatch(operation.updateFilm(film));
  },
});

export default connect(null, mapDispachToProps)(FilmCard);
