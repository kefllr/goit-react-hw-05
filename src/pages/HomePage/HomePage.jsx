import { useEffect, useState, useRef } from "react";
import { fetchHomePage } from "../../api";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    async function fetchTrendMovie() {
      try {
        setIsLoading(true);
        const response = await fetchHomePage();
        console.log(response);
        setTrendMovies(() => [...response.results]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTrendMovie();
  }, []);

  return (
    <div>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}

      <MovieList movies={trendMovies} ref={listRef} />
    </div>
  );
};

export default HomePage;