import  axios  from "axios";

const instance = axios.create({
    baseURL: " https://api.themoviedb.org/3",
})

const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWVlMDA5MzY1OGFmOGI0NjI5MzNmZGQ5Y2IzMzViOSIsInN1YiI6IjY2MjdlMzk5MjU4ODIzMDE3ZDkzZjMzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aJd9XRpaJPviSGrHfynuegRe7wB3m8Yg1OZ_X3kKndI'
    },
    params:{
        api_key: "c5ee0093658af8b462933fdd9cb335b9"
    }
  };

export const fetchHomePage = async () =>{
    const responce = await 
        instance.get("/trending/movie/day?language=en-US", options);

    return responce.data
}

export const getMoviesPage = async (query) => {
  const response = await instance.get(`/search/movie?query=${query}`, options);
  return response.data;
};

export const getMovieDetails = async (id) => {
    const response = await instance.get(`/movie/${id}`, options);
    return response.data;
  };

  export const getMovieReviews = async (id) => {
    const response = await instance.get(`/movie/${id}/reviews`, options);
    return response.data;
  };

  export const getMovieCast = async (id) => {
    const response = await instance.get(`/movie/${id}/credits`, options);
    return response.data;
  };
