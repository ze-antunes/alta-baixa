import React from 'react'

const Art13 = () => {
  return (
    <div className='art13'>
      <div className='numbTitle'>
        <img src={require('../../assets/imgs/artigo1/n13.png')} alt="13" />
        <p className='title'>Because you can't not.</p>
      </div>
      <div className='imgs'>
        <img className='img2' src={require('../../assets/imgs/artigo1/13.2.png')} alt="img13.2" />
        <img className='img1' src={require('../../assets/imgs/artigo1/grade13.png')} alt="grade13" />
      </div>
      <div className='text'>
        <p>
          Princeton Architectural Press is
          about to publish a collection of essays I’ve written, many of which first
          appeared here on Design Observer. I
          wanted it to feel like a real book
          for readers — it has no pictures — so
          I asked Abbott to design it. He suggested we set each one of the 79 pieces in a different typeface. I loved
          this idea, but
          wasn’t sure how far he’d want to go
          with it.
        </p>
        <br />
        <p>“What about the one called
          ‘I Hate ITC Garamond?’” I asked him.
        </p>
        <br />
        <p>“Would we set it in ITC Garamond?”
        </p>
        <br />
        <p>He looked at me as if I was crazy.
        </p>
        <br />
        <p>“Of course,” he said.
        </p>
      </div>
    </div>
  )
}

export default Art13
