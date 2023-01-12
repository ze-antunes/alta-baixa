import React from 'react'

const Art10 = () => {
  return (
    <div className='art10'>
      <div className='imgs'>
        <img className='img2' src={require('../../assets/imgs/artigo1/10.2.png')} alt="img10.2" />
        <img className='img1' src={require('../../assets/imgs/artigo1/grade10.png')} alt="grade10" />
      </div>
      <div className='right'>
        <p className='title'>Because it’s boring.</p>
        <div className='text'>
          <p>
            Tibor Kalman was fascinated with boring typefaces. “No, this one is too
            clever, this one is too interesting,”
            he kept saying when showed him the
            fonts I was proposing for his monograph. Anything but a boring typeface, he
            felt, got in the way of the ideas.
          </p>
          <br />
          <p>We settled on Trade Gothic.</p>
        </div>
        <img src={require('../../assets/imgs/artigo1/n10.png')} alt="10" />
      </div>
    </div>
  )
}

export default Art10
