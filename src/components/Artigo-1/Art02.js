import React from 'react'

const Art02 = () => {
  return (
    <div className='art02'>
      <div className='numbTitle'>
        <img src={require('../../assets/imgs/artigo1/n2.png')} alt="01" />
        <p>Because <a href="#artigo1-02" id="style-2" data-replace="you like its history."><span>you like its history.</span></a></p>
      </div>
      <div className='imgs'>
        <img className='img2' src={require('../../assets/imgs/artigo1/2.2_1.png')} alt="img2.2" />
        <img className='img1' src={require('../../assets/imgs/artigo1/grade2.png')} alt="grade2" />
      </div>
      <div className='text'>
        <p>
          I’ve heard of several projects where
          the designer found a font that was
          created the same year the client’s
          organization was founded. This must
          give the recommendation an aura of
          manifest destiny that is positively
          irresistible. I haven’t had that luck
          yet, but still try to find the same
          kind of evocative alignment.
        </p>
        <br />
        <p>
          For instance, I was never a fan of
          Aldo Novarese’s Eurostyle, but I came
          to love it while working on a monograph on Eero Saarinen: they both
          share an expressiveness peculiar to
          the postwar optimism of qthe 1950’s.
        </p>
      </div>
    </div>
  )
}

export default Art02
