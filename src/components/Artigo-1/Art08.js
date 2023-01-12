import React from 'react'

const Art08 = () => {
  return (
    <div className='art08'>
      <div className='numbTitle'>
        <img src={require('../../assets/imgs/artigo1/n8.png')} alt="08" />
        <p className='title'>Because it’s beautiful.</p>
      </div>
      <div className='imgs'>
        <img className='img3' src={require('../../assets/imgs/artigo1/8.2_2.png')} alt="img8.2_2" />
        <img className='img2' src={require('../../assets/imgs/artigo1/8.2_1.png')} alt="img8.2_1" />
        <img className='img1' src={require('../../assets/imgs/artigo1/grade8.png')} alt="grade8" />
      </div>
      <div className='text'>
        <p>
          Cyrus Highsmith’s Novia is now commercially available. He originally designed it for the headlines in Martha
          Stewart Weddings.
          Resistance is futile, at least mine
          is.
        </p>
      </div>
    </div>
  )
}

export default Art08
