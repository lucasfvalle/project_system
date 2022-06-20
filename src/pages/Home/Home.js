import './Home.css'
import React, {useEffect, useState} from 'react';
import {useAuthValue} from '../../context/AuthContext';
import Movie from '../../components/Movie/Movie';

//Componentes


function Home(){
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const API_KEY = 'ef148c82c272a21e1c2fcc8a44d58b5c';
  const image_path = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
      console.log(data.results)
    })
  }, []);
  
  return(
    <div className="home">
      <h1> Filmes em alta</h1>


      <div className="genres">
        <p> nada </p>
      </div>
        
          
        
    
      <div className="card-movie-container">
        {movies.map(movie =>{
          console.log("id" + movie.id);
            return(
              <Movie 
                key={movie.id} 
                title={movie.title} 
                sinopse={movie.overview} 
                image_path={image_path} 
                poster_path={movie.poster_path}
              />
              )
          
        }
      )}
      </div>
    </div>
  )
}
export default Home;