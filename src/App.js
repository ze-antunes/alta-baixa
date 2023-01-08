import React, { Component } from "react";
import Deck from "./components/Deck";
import video from './assets/videos/grade_da_ponte.mp4'

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="introTextVid">
          <video src={video} autoPlay loop muted />
          <div className="text-box">
            <h1>A L T A <br /> B A I X A</h1>
          </div>
        </section>
        <section>
          <h1>slide</h1>
        </section>
        <section>
          <h1>slide</h1>
        </section>
        <section>
          <h1>slide</h1>
        </section>
        <section>
          <h1>slide</h1>
        </section>
        <section>
          <div className="test">
            <Deck></Deck>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
