import React from "react";

const FilmCard = () => {
  return (
    <article className="film-card">
      <h3 className="film-card__title">Popeye the Sailor Meets Sindbad the Sailor</h3>
      <p className="film-card__rating">6.3</p>
      <p className="film-card__info">
        <span className="film-card__year">1936</span>
        <span className="film-card__duration">16m</span>
        <span className="film-card__genre">Cartoon</span>
      </p>
      <img src="./images/posters/popeye-meets-sinbad.png" alt="" className="film-card__poster"/>
      <p className="film-card__description">In this short, Sindbad the Sailor (presumably Bluto playing a
        role) proclaims himself, in song, to be the greatest sailor, adventurer and…</p>
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
