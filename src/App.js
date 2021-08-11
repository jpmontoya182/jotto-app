import React, { Component } from "react";
import "./App.css";
import Congrats from "./component/congrats/Congrats";
import GuessedWords from "./component/guessedWords/GuessedWords";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__container">
          <h1>Jotto</h1>
          <Congrats success={true} />
          <GuessedWords
            guessedWords={[
              {
                guessedWord: "train",
                letterMatchCount: "4"
              }
            ]}
          />
        </div>
      </div>
    );
  }
}

export default App;
