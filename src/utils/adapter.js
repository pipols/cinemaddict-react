export const filmAdapter = (film) => (
  {
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
    comments: film.comments
  }
);


