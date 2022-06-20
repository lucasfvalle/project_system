import React from "react";
import './Movie.css';

function Movie({title, sinopse, image_path, poster_path}){
    return(
        <div className="movie">
            <div className="movie-image">
                <img src={`${image_path}${poster_path}`} />
            </div>
            <div className="movie-content">
                <h2>{title}</h2>
                <p>{sinopse}</p>
                <button>Onde Assistir</button>
            </div>
        </div>
    )
}
export default Movie;