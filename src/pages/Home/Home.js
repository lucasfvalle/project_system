import './Home.css'
import React, {useEffect, useState} from 'react';
import {useAuthValue} from '../../context/AuthContext';

//Componentes


function Home(){
  const [movies, setMovies] = useState([]);
  const API_KEY = 'ef148c82c272a21e1c2fcc8a44d58b5c';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
      console.log(data.results)
    })
  }, [])

  console.log("FILME PORRA: " + movies[0])
    return(
      <>
        {movies.map(movie =>{
          return(
            <>
              <h2 key={movie.id}>{movie.title}</h2>
              <p key={movie.id}><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /></p>
            </>
            
          )
          
        }
          
        )}
      </>
    )
        
    
}
export default Home;