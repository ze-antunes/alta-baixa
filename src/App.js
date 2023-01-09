import React, { Component } from "react";
import Deck from "./components/Deck";
import video from './assets/videos/grade_da_ponte.mp4';

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
          <h2>Michael Bierut</h2>
          <h1>Thirteen Ways of Looking at a Typeface</h1>
        </section>
        <section>
          <h1>Intro</h1>
        </section>
        <section>
          <h1>01 Because it works.</h1>
        </section>
        <section>
          <h1>02 Because you like its history.</h1>
        </section>
        <section>
          <h1>03 Because you like its name.</h1>
        </section>
        <section>
          <h1>04 Because of who designed it.</h1>
        </section>
        <section>
          <h1>05 Because it was there.</h1>
        </section>
        <section>
          <h1>06 Because they made you.</h1>
        </section>
        <section>
          <h1>07 Because it reminds you of something.</h1>
        </section>
        <section>
          <h1>08 Because it’s beautiful.</h1>
        </section>
        <section>
          <h1>09 Because it’s ugly.</h1>
        </section>
        <section>
          <h1>10 Because it’s boring.</h1>
        </section>
        <section>
          <h1>11 Because it’s special.</h1>
        </section>
        <section>
          <h1>12 Because you believe in it.</h1>
        </section>
        <section>
          <h1>13 Because you can't not.</h1>
        </section>
        <section>
          <h1>The book is beautiful, by the way, and not the least bit slutty. </h1>
        </section>
        <section>
          <div className="test">
            <Deck />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
