import React from "react";
import { connect } from "react-redux";
import { ActionCreator } from "../../reducer";

// eslint-disable-next-line react/prop-types
const FilmCard = ({ card, setOpenedFilm }) => {
  // eslint-disable-next-line react/prop-types
  const {
    title,
    rating,
    releaseDate,
    runtime,
    genre,
    poster,
    description,
    comments,
  } = card;
  return (
    <article className="film-card">
      <h3 onClick={() => setOpenedFilm(card)} className="film-card__title">
        {title}
      </h3>
      <p className="film-card__rating">{rating}</p>
      <p className="film-card__info">
        {/* eslint-disable-next-line react/prop-types */}
        <span className="film-card__year">{releaseDate}</span>
        <span className="film-card__duration">{runtime}</span>
        <span className="film-card__genre">{genre}</span>
      </p>
      <img
        onClick={() => setOpenedFilm(card)}
        src={poster}
        alt={title}
        className="film-card__poster"
      />
      <p className="film-card__description">{description}</p>
      {/* eslint-disable-next-line react/prop-types */}
      <a onClick={() => setOpenedFilm(card)} className="film-card__comments">
        {comments.length} comments
      </a>
      <form className="film-card__controls">
        <button className="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active">
          Add to watchlist
        </button>
        <button className="film-card__controls-item button film-card__controls-item--mark-as-watched film-card__controls-item--active">
          Mark as watched
        </button>
        <button className="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active">
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
});

export default connect(null, mapDispachToProps)(FilmCard);
