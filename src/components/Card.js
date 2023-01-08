import React from "react";
import { animated, interpolate } from "react-spring/hooks";

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, bind, objs } = this.props;
    const { title, text, textclass, imgclass, pics, id } = objs[i];
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
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          {...bind(i)}
          style={{
            transform: interpolate([rot, scale], trans)
          }}
        >
          <div className="card">
            <h1 className="card__title">{title}</h1>
            <p className={textclass}>{text}</p>
            <div className={`${imgclass[0]}`}>
              {image && <img className="imgTest" src={require(`../assets/imgs/artigo2/image ${image}.png`)} alt="test" />}
            </div>
            <div className={`${imgclass[1]}`}>
              {image2 && <img className="imgTest" src={require(`../assets/imgs/artigo2/image ${image2}.png`)} alt="test" />}
            </div>
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

export default Card;
