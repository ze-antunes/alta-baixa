import React from 'react'

const Art03 = () => {
  return (
    <div className='art03'>
      <div className='numbTitle'>
        <img src={require('../../assets/imgs/artigo1/n3.png')} alt="01" />
        <p>Because you like its name.</p>
      </div>
      <div className='text'>
        <p>
          Once I saw a project in a student
          portfolio that undertook the dubious
          challenge of redesigning the Tiffany’s
          identity. I particularly disliked the
          font that was used, and I politely
          asked what it was. “Oh,” came the enthusiastic response, “that’s the best
          part! It’s called Tiffany!” On the
          other hand, Bruce Mau designed Spectacle, the book he created with David Rockwell, using the typeface Rockwell. I thought this was funny.
        </p>
      </div>
      <div className='imgs'>
        <img className='img2' src={require('../../assets/imgs/artigo1/3.2.png')} alt="img3" />
        <img className='img1' src={require('../../assets/imgs/artigo1/grade3.png')} alt="grade3" />
      </div>
    </div>
  )
}

export default Art03
