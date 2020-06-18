export const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

export const shuffleArray = ([...array]) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = getRandomIntegerNumber(0, currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

// 0 — звание не отображается;
// от 1 до 10 — novice;
// от 11 до 20 — fan;
// от 21 и выше — movie buff;
const NumberMoviesWatched = {
  NOVICE: 10,
  FAN: 20,
};

const ProfileRank = {
  NOVICE: `novice`,
  FAN: `fan`,
  MOVIE_BUFF: `movie buff`,
};

export const getProfileRating = (countWatched) => {
  if (countWatched <= NumberMoviesWatched.NOVICE) {
    return ProfileRank.NOVICE;
  } else if (countWatched <= NumberMoviesWatched.FAN) {
    return ProfileRank.FAN;
  } else if (countWatched > NumberMoviesWatched.FAN) {
    return ProfileRank.MOVIE_BUFF;
  }
  return ``;
};

const MAX_LENGTH_DESCRIPTION = 140;

export const getLimitString = (
  string,
  lastSymbol = `...`,
  maxLength = MAX_LENGTH_DESCRIPTION
) => {
  return string.length > maxLength
    ? string.substr(0, maxLength - lastSymbol.length) + lastSymbol
    : string;
};

export const getRuntimeFilm = (time) => {
  const hour = Math.trunc(time / 60);
  const minutes = time % 60;
  return hour ? `${hour}h ${minutes}m` : `${minutes}m`;
};

// export const replaceFilmToFilmsList = (list, film) =>
//   list.map((elem) => (elem.id === film.id ? film : elem));

export const replaceFilmToFilmsList = (films, film) => {
  const index = films.findIndex((it) => it.id === film.id);
  if (index === -1) {
    return false;
  }

  const updatedFilms = [].concat(
    films.slice(0, index),
    film,
    films.slice(index + 1)
  );

  return updatedFilms;
};
