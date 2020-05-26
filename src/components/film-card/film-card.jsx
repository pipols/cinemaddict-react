import React from "react";

// eslint-disable-next-line react/prop-types
const FilmCard = (props) => {
  // eslint-disable-next-line camelcase,react/prop-types
  const {film_info} = props;
  // eslint-disable-next-line camelcase,react/prop-types
  const {title, total_rating, release, runtime, genre, poster} = film_info;
  return (
    <article className="film-card">
      <h3 className="film-card__title">{title}</h3>
      {/* eslint-disable-next-line camelcase */}
      <p className="film-card__rating">{total_rating}</p>
      <p className="film-card__info">
        {/* eslint-disable-next-line react/prop-types */}
        <span className="film-card__year">{release.date}</span>
        <span className="film-card__duration">{runtime}</span>
        <span className="film-card__genre">{genre}</span>
      </p>
      <img src={poster} alt="" className="film-card__poster"/>
      <p className="film-card__description"></p>
      <a className="film-card__comments">0 comments</a>
      <form className="film-card__controls">
        <button
          className="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active">Add
          to watchlist
        </button>
        <button
          className="film-card__controls-item button film-card__controls-item--mark-as-watched film-card__controls-item--active">Mark
          as watched
        </button>
        <button
          className="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active">Mark
          as favorite
        </button>
      </form>
    </article>
  );
};

export default FilmCard;
