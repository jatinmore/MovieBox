import "./styles.css";
import { useState } from "react";

//creating database for movie genre
var movieIndex = {
  Action: [
    { name: "Black Widow" },
    {
      cover: (
        <img src="https://preview.redd.it/ya4hadg3zm071.jpg?width=640&crop=smart&auto=webp&s=ac01bd0d244e076fa06a0836ec9182072b64ee88"></img>
      )
    },
    {
      name: "Avengers Endgame"
    },
    {
      cover: <img src="https://i.redd.it/gbbm296sdup21.png"></img>
    },
    {
      name: "Zack Snyder Justice League"
    },
    {
      cover: (
        <img src="https://preview.redd.it/jfl73343pi051.jpg?width=640&crop=smart&auto=webp&s=eb26301a369d669cbb505e8ddf8b4b714681ecaa"></img>
      )
    },
    {
      name: "Spiderman-Far From Home"
    },
    {
      cover: (
        <img src="https://preview.redd.it/jwmfy69cnt531.jpg?width=640&crop=smart&auto=webp&s=4fd69155446614204221b07c53f1874edbe4c584"></img>
      )
    }
  ],

  Drama: [
    {
      name: "Joker"
    },
    {
      cover: <img src=" https://i.redd.it/4e7rg1vah4541.jpg"></img>
    },
    {
      name: "Ford v Ferrari"
    },
    {
      cover: (
        <img src="https://external-preview.redd.it/3TrcTai-g9HVNt0yUv6KJX09OleKnNTna5TIctCw_sw.jpg?auto=webp&s=35fe9a19a5cc6111ec3352a4a0f436399815d24a"></img>
      )
    },
    {
      name: "Peaky Blinders"
    },
    {
      cover: <img src="https://i.redd.it/yolpeymub5o31.jpg"></img>
    },
    {
      name: "IT"
    },
    {
      cover: <img src="https://i.redd.it/9ckinksmf9b31.jpg"></img>
    }
  ]
};
export default function App() {
  const [movie, setmovie] = useState("Action");
  function genreClickHandler(genre) {
    setmovie(genre);
  }
  return (
    <div className="App">
      <h1> MovieBox </h1>
      <p id="description">
        Welcome to MovieBox Here is my favourite collection of movies and series
        . Select a genre to get started
      </p>

      <div>
        {Object.keys(movieIndex).map((genre) => (
          <button id="btn-gen" onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul>
          {movieIndex[movie].map((movies) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                alignItems: "center",
                border: "1px solid #D1D5DB",
                width: "40%",
                margin: "1rem 0rem",
                marginLeft: "25%",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movies.name} </div>
              <div className="cover"> {movies.cover} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
