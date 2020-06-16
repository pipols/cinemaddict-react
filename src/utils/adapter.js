export const filmAdapter = (film) => ({
  id: film.id,
  title: film.film_info.title,
  alternativeTitle: film.film_info.alternative_title,
  rating: film.film_info.total_rating,
  poster: film.film_info.poster,
  ageRating: film.film_info.age_rating,
  director: film.film_info.director,
  writers: film.film_info.writers,
  actors: film.film_info.actors,
  releaseDate: film.film_info.release.date,
  releaseCountry: film.film_info.release.release_country,
  runtime: film.film_info.runtime,
  genre: film.film_info.genre,
  description: film.film_info.description,
  watchlist: film.user_details.watchlist,
  watched: film.user_details.already_watched,
  favorite: film.user_details.favorite,
  watchingDate: film.user_details.watching_date,
  commentsId: film.comments,
  comments: [],
});

export const filmsAdapter = (films) => films.map((film) => filmAdapter(film));

export const filmToRaw = (film) => {
  return {
    id: film.id,
    comments: film.commentsId,
    film_info: {
      title: film.title,
      alternative_title: film.alternativeTitle,
      total_rating: film.rating,
      poster: film.poster,
      age_rating: film.ageRating,
      director: film.director,
      writers: film.writers,
      actors: film.actors,
      release: {
        date: film.releaseDate,
        release_country: film.releaseCountry,
      },
      runtime: film.runtime,
      genre: film.genre,
      description: film.description,
    },
    user_details: {
      watchlist: film.watchlist,
      already_watched: film.watched,
      watching_date: film.watchingDate,
      favorite: film.favorite,
    },
  };
};

export const filmsToRaw = (films) => films.map((film) => filmToRaw(film));
