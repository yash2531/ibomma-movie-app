import React, { useState, useEffect } from "react";
import SearchIcon from "../search.svg";
import MovieCard from "./MovieCard";
import "../Styles/Home.css";
// import SignIn from "./SignIn";
import { useLocation } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const API_URL = "http://www.omdbapi.com?apikey=c7e7daa4";

const Home = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  // const [isSignedin, setIsSignedin] = useState("");
  const [username, setUsername] = useState("");
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const usernameParam = queryParams.get("username");
    if (usernameParam) {
      setUsername(usernameParam);
    }
  });

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  const namef = username.split("@").slice(0, 1);

  return (
    <div>
      <h1>
        <NavigationBar />
      </h1>
      <div className="app-title">
        <h1 className="title-main">
          {" "}
          Welcome <span>{namef[0]} !</span>
        </h1>
        <br></br>
        <br></br>
        <h3 className="subtitle-main-c">ONE WORLD- ONE FAMILY- ONE CINEMA</h3>

        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie, i) => (
              <MovieCard movie={movie} key={i} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;


