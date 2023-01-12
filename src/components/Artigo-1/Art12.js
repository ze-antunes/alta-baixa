import React from 'react'

const Art12 = () => {
  return (
    <div className='art12'>
      <div className='numbTitle'>
      <p className='title'>Because <a href="#artigo1-12" id="style-2" data-replace="you believe in it."><span>you believe in it.</span></a></p>
        <img src={require('../../assets/imgs/artigo1/n12.png')} alt="12" />
      </div>
      <div className='imgs'>
        <img className='img2' src={require('../../assets/imgs/artigo1/12.2.png')} alt="img12.2" />
        <img className='img1' src={require('../../assets/imgs/artigo1/grade12.png')} alt="grade12" />
      </div>
      <div className='text'>
        <p>
          Sometimes I think that Massimo Vignelli
          may be using too many typefaces, not
          too few.
          A true fundamentalist requires a monotheistic worldview: one world, one
          typeface. The designers at Experimental Jetset have made the case for
          Helvetica. My partner Abbott Miller
          had a period of life he calls “The
          Scala Years” when he used that typeface almost exclusively.
          When the time is right, I might make
          that
          kind of commitment myself.
        </p>
      </div>
    </div>
  )
}

export default Art12
