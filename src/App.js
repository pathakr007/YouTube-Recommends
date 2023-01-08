import "./styles.css";
import React, { useState } from "react";

var genreDictionary = {
  Business: [
    {
      name: "How to Get Customers",
      rating: "4/5"
    },

    {
      name: "How to raise VC money",
      rating: "5/5"
    },
    {
      name: "Think like a leader",
      rating: "5/5"
    }
  ],
  Coding: [
    {
      name: "How to learn JavaScript ",
      rating: "4/5"
    },

    {
      name: "The Best programming Practices",
      rating: "4.5/5"
    },
    {
      name: "The right way to learn React",
      rating: "4/5"
    }
  ],

  Science: [
    {
      name: "Amazing science experiments to try at Home",
      rating: "4/5"
    },

    {
      name: "Know our galaxy",
      rating: "5/5"
    },
    {
      name: "How to master in Organic-Chemisty",
      rating: "4/5"
    }
  ]
};
var genreWeKnow = Object.keys(genreDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("Business");

  function buttonClickHandler(genre) {
    setMeaning(genre);
  }
  return (
    <div className="App">
      <h1>YouTube Recommends</h1>
      <div className="lineone">
        The best YouTube videos recommended by YouTube.
      </div>
      <div className="linetwo">Select a genre to get started</div>
      <div className="buttonDiv">
        {genreWeKnow.map(function (genre) {
          return (
            <button key={genre} onClick={() => buttonClickHandler(genre)}>
              {genre}
            </button>
          );
        })}
      </div>
      <div>
        <ul>
          {genreDictionary[meaning].map(function (input) {
            return (
              <li className="list">
                <p>{input.name}</p> {input.rating}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
