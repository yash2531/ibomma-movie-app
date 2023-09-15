import React ,{ useState ,useEffect}from 'react';
import SearchIcon from '../search.svg';
import MovieCard from './MovieCard';
import '../Styles/Content.css';


const API_URL = "http://www.omdbapi.com?apikey=c7e7daa4";

const Content = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
 
  
    useEffect(() => {
      searchMovies("Batman");
    }, []);
  
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
    
  
      setMovies(data.Search);
    };
 
  
    return (
      <div className="app-title">
        <h1 className='title-main'>iBOMMA 2.0</h1>
        <br></br>
        <h2>Where Quality and Clarity matters !</h2>
        <br></br>
      
            <div className="search" >
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
                {movies.map((movie) => (
                  <MovieCard movie={movie} />
                ))}
              </div>
            ) : (
              <div className="empty">
                <h2>No movies found</h2>
              </div>
            )}
          </div>
       
    
    );
  };
  
  export default Content;
  