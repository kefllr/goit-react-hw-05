import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await getMovieReviews(movieId);
        console.log(response.results);
        setMovieReviews(() => response.results);
      } catch (error) {
        console.log("error: ", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {movieReviews && (
        <ul>
          {movieReviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>
                  <b>{author}</b>
                </p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {movieReviews.length === 0 && (
        <p>We don`t have any reviews for this movie</p>
      )}
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
    </>
  );
};
export default MovieReviews;