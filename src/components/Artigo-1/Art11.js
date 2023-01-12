import React from 'react'

const Art11 = () => {
  return (
    <div className='art11'>
      <div className='numbTitle'>
        <img src={require('../../assets/imgs/artigo1/n11.png')} alt="11" />
        <p className='title'>Because it’s special.</p>
      </div>
      <div className='imgs'>
        <img className='img2' src={require('../../assets/imgs/artigo1/11.2.png')} alt="img11.2" />
        <img className='img1' src={require('../../assets/imgs/artigo1/grade11.png')} alt="grade11" />
      </div>
      <div className='text'>
        <p>
          In design as in fashion, nothing beats bespoke
          tailoring. I’ve commissioned custom
          typefaces from Jonathan Hoefler and
          Tobias Frere-Jones
          and Joe Finocchiaro, and we’re currently working with Matthew Carter and Chester. It is the ultimate indulgence, but well worth the
          extra effort.
        </p>
        <br />
        <p>Is this proliferation? I say bring it on.</p>
      </div>
    </div>
  )
}

export default Art11
