import React from 'react'

const Art04 = () => {
  return (
    <div className='art04'>
      <div className='numbTitle'>
        <p>Because <a href="#artigo1-04" id="style-2" data-replace="of who designed it."><span>of who designed it.</span></a></p>
        <img src={require('../../assets/imgs/artigo1/n4.png')} alt="04" />
      </div>
      <div className='imgs'>
        <img className='img3' src={require('../../assets/imgs/artigo1/4.2_1.png')} alt="img3" />
        <img className='img2' src={require('../../assets/imgs/artigo1/4.2_2.png')} alt="img3" />
        <img className='img1' src={require('../../assets/imgs/artigo1/grade4.png')} alt="grade4" />
      </div>
      <div className='text'>
        <p>
          Once I was working on a project where
          the client group included some very
          strong-minded architects. I picked
          Cheltenham, an idiosyncratic typeface
          that was not only well-suited to the
          project’s requirements, but was one
          of the few
          I know that was designed by an architect,
          Bertram Goodhue
        </p>
        <br />
        <p>
          Recently, I designed a publications
          program for a girls’ school. I used a
          typeface that was designed by a woman and named after another, Zuzana
          Licko’s Mrs. Eaves. In both cases, my
          clients knew that the public would
          be completely unaware of the story
          behind the font selection, but took
          some comfort in it nonetheless.
        </p>
        <br />
        <p>I did too.</p>
      </div>
    </div>
  )
}

export default Art04
