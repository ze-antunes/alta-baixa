import React, { Component } from "react";
import Deck from "./components/Deck";
import video from './assets/videos/grade_da_ponte.mp4';
import { SideMenu } from "./components/SideMenu";
import ArtMB from "./components/Artigo-1/ArtMB";
import IntroMB from "./components/Artigo-1/IntroMB";
import Art01 from "./components/Artigo-1/Art01";
import Art02 from "./components/Artigo-1/Art02";
import Art03 from "./components/Artigo-1/Art03";
import Art04 from "./components/Artigo-1/Art04";
import OutroMB from "./components/Artigo-1/OutroMB";
import Art05 from "./components/Artigo-1/Art05";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideMenu />
        <section className="introTextVid">
          <video src={video} autoPlay loop muted />
          <div className="text-box">
            <h1>A L T A <br /> B A I X A</h1>
          </div>
        </section>
        <section id="artigo1">
          <ArtMB />
        </section>
        <section id="artigo1-intro">
          <IntroMB />
        </section>
        <section id="artigo1-01">
          <Art01 />
        </section>
        <section id="artigo1-02">
          <Art02 />
        </section>
        <section id="artigo1-03">
          <Art03 />
        </section>
        <section id="artigo1-04">
          <Art04 />
        </section>
        <section id="artigo1-05">
          <Art05 />
        </section>
        <section id="artigo1-06">
          <h1>06 Because they made you.</h1>
        </section>
        <section id="artigo1-07">
          <h1>07 Because it reminds you of something.</h1>
        </section>
        <section id="artigo1-08">
          <h1>08 Because it’s beautiful.</h1>
        </section>
        <section id="artigo1-09">
          <h1>09 Because it’s ugly.</h1>
        </section>
        <section id="artigo1-10">
          <h1>10 Because it’s boring.</h1>
        </section>
        <section id="artigo1-11">
          <h1>11 Because it’s special.</h1>
        </section>
        <section id="artigo1-12">
          <h1>12 Because you believe in it.</h1>
        </section>
        <section id="artigo1-13">
          <h1>13 Because you can't not.</h1>
        </section>
        <section id="artigo1-outro">
          <OutroMB />
        </section>
        <section id="artigo2">
          <div className="deck">
            <Deck />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
