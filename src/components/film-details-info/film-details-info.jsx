import React from "react";

const FilmDetailsInfo = () => {
  return (
    <div className="film-details__info-wrap">
      <div className="film-details__poster">
        <img className="film-details__poster-img" src="./images/posters/the-great-flamarion.jpg" alt=""/>

        <p className="film-details__age">18+</p>
      </div>

      <div className="film-details__info">
        <div className="film-details__info-head">
          <div className="film-details__title-wrap">
            <h3 className="film-details__title">The Great Flamarion</h3>
            <p className="film-details__title-original">Original: The Great Flamarion</p>
          </div>

          <div className="film-details__rating">
            <p className="film-details__total-rating">8.9</p>
          </div>
        </div>

        <table className="film-details__table">
          <tbody>
            <tr className="film-details__row">
              <td className="film-details__term">Director</td>
              <td className="film-details__cell">Anthony Mann</td>
            </tr>
            <tr className="film-details__row">
              <td className="film-details__term">Writers</td>
              <td className="film-details__cell">Anne Wigton, Heinz Herald, Richard Weil</td>
            </tr>
            <tr className="film-details__row">
              <td className="film-details__term">Actors</td>
              <td className="film-details__cell">Erich von Stroheim, Mary Beth Hughes, Dan Duryea</td>
            </tr>
            <tr className="film-details__row">
              <td className="film-details__term">Release Date</td>
              <td className="film-details__cell">30 March 1945</td>
            </tr>
            <tr className="film-details__row">
              <td className="film-details__term">Runtime</td>
              <td className="film-details__cell">1h 18m</td>
            </tr>
            <tr className="film-details__row">
              <td className="film-details__term">Country</td>
              <td className="film-details__cell">USA</td>
            </tr>
            <tr className="film-details__row">
              <td className="film-details__term">Genres</td>
              <td className="film-details__cell">
                <span className="film-details__genre">Drama</span>
                <span className="film-details__genre">Film-Noir</span>
                <span className="film-details__genre">Mystery</span></td>
            </tr>
          </tbody>
        </table>

        <p className="film-details__film-description">
          The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events
          leading up to it in flashback. The Great Flamarion (Erich von Stroheim) is an arrogant, friendless, and
          misogynous marksman who displays his trick gunshot act in the vaudeville circuit. His show features a
          beautiful assistant, Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarion's
          other assistant. Flamarion falls in love with Connie, the movie's femme fatale, and is soon manipulated
          by her into killing her no good husband during one of their acts.
        </p>
      </div>
    </div>
  );
};

export default FilmDetailsInfo;
