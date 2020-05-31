import React from "react";

const FilmDetailsInfo = ({ card }) => {
  const {
    ageRating,
    title,
    alternativeTitle,
    rating,
    director,
    writers,
    actors,
    releaseDate,
    runtime,
    releaseCountry,
    description,
  } = card;

  return (
    <div className="film-details__info-wrap">
      <div className="film-details__poster">
        <img
          className="film-details__poster-img"
          src="./images/posters/the-great-flamarion.jpg"
          alt={title}
        />

        <p className="film-details__age">{ageRating}+</p>
      </div>

      <div className="film-details__info">
        <div className="film-details__info-head">
          <div className="film-details__title-wrap">
            <h3 className="film-details__title">{title}</h3>
            <p className="film-details__title-original">
              Original: {alternativeTitle}
            </p>
          </div>

          <div className="film-details__rating">
            <p className="film-details__total-rating">{rating}</p>
          </div>
        </div>

        <table className="film-details__table">
          <tbody>
            <tr className="film-details__row">
              <td className="film-details__term">Director</td>
              <td className="film-details__cell">{director}</td>
            </tr>
            <tr className="film-details__row">
              <td className="film-details__term">Writers</td>
              <td className="film-details__cell">{writers}</td>
            </tr>
            <tr className="film-details__row">
              <td className="film-details__term">Actors</td>
              <td className="film-details__cell">{actors}</td>
            </tr>
            <tr className="film-details__row">
              <td className="film-details__term">Release Date</td>
              <td className="film-details__cell">{releaseDate}</td>
            </tr>
            <tr className="film-details__row">
              <td className="film-details__term">Runtime</td>
              <td className="film-details__cell">{runtime}</td>
            </tr>
            <tr className="film-details__row">
              <td className="film-details__term">Country</td>
              <td className="film-details__cell">{releaseCountry}</td>
            </tr>
            <tr className="film-details__row">
              <td className="film-details__term">Genres</td>
              <td className="film-details__cell">
                <span className="film-details__genre">Drama</span>
                <span className="film-details__genre">Film-Noir</span>
                <span className="film-details__genre">Mystery</span>
              </td>
            </tr>
          </tbody>
        </table>

        <p className="film-details__film-description">{description}</p>
      </div>
    </div>
  );
};

export default FilmDetailsInfo;
