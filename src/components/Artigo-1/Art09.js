import React from 'react'

const Art09 = () => {
  return (
    <div className='art09'>
      <div className='left'>
        <img src={require('../../assets/imgs/artigo1/n9.png')} alt="09" />
        <p className='title'>Because <a href="#artigo1-09" id="style-2" data-replace=" it’s ugly."><span> it’s ugly.</span></a></p>
        <div className='text'>
          <p>
            About 10 years ago, I was asked to redesign the logo
            for New York magazine. Milton Glaser had based the logo
            on Bookman Swash Italic, a typeface I found unimaginably
            dated and ugly. But Glaser’s logo had replaced an earlier
            one by Peter Palazzo that was based on Caslon Italic. I
            proposed we return to Caslon, and distinctly remember
            saying, “Bookman Swash Italic is always going to look
            ugly.” The other day, I saw something in the office that
            really caught my eye. It was set in Bookman Swash Italic,
            and it looked great.
          </p>
          <br />
          <p>Ugly, but great.</p>
        </div>
      </div>
      <div className='imgs'>
        <img className='img3' src={require('../../assets/imgs/artigo1/9.2_2.png')} alt="img9.2_2" />
        <img className='img2' src={require('../../assets/imgs/artigo1/9.2_1.png')} alt="img9.2_1" />
        <img className='img1' src={require('../../assets/imgs/artigo1/grade9.png')} alt="grade9" />
      </div>
    </div>
  )
}

export default Art09
