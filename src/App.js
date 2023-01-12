import React, { Component } from "react";
import Deck from "./components/Deck";
import video from './assets/videos/grade_da_ponte.mp4';
import video2 from './assets/videos/aB_Div_Section.mp4';
import { SideMenu } from "./components/SideMenu";
import ArtMB from "./components/Artigo-1/ArtMB";
import IntroMB from "./components/Artigo-1/IntroMB";
import Art01 from "./components/Artigo-1/Art01";
import Art02 from "./components/Artigo-1/Art02";
import Art03 from "./components/Artigo-1/Art03";
import Art04 from "./components/Artigo-1/Art04";
import Art05 from "./components/Artigo-1/Art05";
import Art06 from "./components/Artigo-1/Art06";
import Art07 from "./components/Artigo-1/Art07";
import Art08 from "./components/Artigo-1/Art08";
import Art09 from "./components/Artigo-1/Art09";
import Art10 from "./components/Artigo-1/Art10";
import Art11 from "./components/Artigo-1/Art11";
import Art12 from "./components/Artigo-1/Art12";
import Art13 from "./components/Artigo-1/Art13";
import OutroMB from "./components/Artigo-1/OutroMB";

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
          <Art06 />
        </section>
        <section id="artigo1-07">
          <Art07 />
        </section>
        <section id="artigo1-08">
          <Art08 />
        </section>
        <section id="artigo1-09">
          <Art09 />
        </section>
        <section id="artigo1-10">
          <Art10 />
        </section>
        <section id="artigo1-11">
          <Art11 />
        </section>
        <section id="artigo1-12">
          <Art12 />
        </section>
        <section id="artigo1-13">
          <Art13 />
        </section>
        <section id="artigo1-outro">
          <OutroMB />
        </section>
        <section>
          <video src={video2} autoPlay loop muted />
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
