import React from "react";
import { animated, interpolate } from "react-spring";

class Card extends React.PureComponent {
  render() {
    const { i, x, y, rot, scale, trans, bind, objs, active, moving } = this.props;
    const { title, text, textclass, imgclass, pics } = objs[i];
    let image = null;

    if(pics[0] === ""){
    } else {
      image = pics[0]
    }

    let image2 = null;

    if(pics[1] === ""){
    } else {
      image2 = pics[1]
    }
    return (
      <animated.div
        key={i}
        aria-hidden={!active}
        className={active ? "deck-page is-active" : "deck-page"}
        style={{
          pointerEvents: active ? "auto" : "none",
          willChange: active ? "transform" : "auto",
          transform: moving ? interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          ) : "none"
        }}
      >
        <animated.div
          {...(active ? bind(i) : {})}
          style={{
            transform: moving ? interpolate([rot, scale], trans) : "none"
          }}
        >
          <div className="card">
            <h1 className="card__title">{title}</h1>
            <p className={textclass}>{text}</p>
            <div className={`${imgclass[0]}`}>
              {image && <img decoding="async" className="imgTest" src={require(`../assets/imgs/artigo2/image ${image}.png`)} alt="test" />}
            </div>
            <div className={`${imgclass[1]}`}>
              {image2 && <img decoding="async" className="imgTest" src={require(`../assets/imgs/artigo2/image ${image2}.png`)} alt="test" />}
            </div>
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

export default Card;
