import axios from "axios";

// axios give us the ability to make http requests
// to a server and get a response back

export const getMovies = async () => {
  let response = await axios.get("http://localhost:3004/api/movies");

  if (response.status === 200) {
    return response.data;
  }
  return [];
};

export const addMovie = async (movie) => {
  let response = await axios.post("http://localhost:3004/api/movies", movie);
  debugger;
  if (response.status === 200) {
    return response.data;
  }
  return {};
};

// delete

// update
