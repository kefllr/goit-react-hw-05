import { Link, useLocation } from "react-router-dom";
import { forwardRef } from "react";
import css from "./MovieList.module.css";

const MovieList = forwardRef(function MovieList({ movies }, ref) {
  const location = useLocation();
  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";
  return (
    <div>
      <ul className={css.movielist} ref={ref}>
        {movies.map((movie) => {
          return (
            <li className={css.movieitem} key={movie.id}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : defaultImg
                }
                width={250}
                alt="poster"
              />
              <Link
                className={css.movietitle}
                state={location}
                to={`/movies/${movie.id}`}
              >
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default MovieList;