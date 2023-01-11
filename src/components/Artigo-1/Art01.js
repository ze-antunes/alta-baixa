import React from 'react'

const Art01 = () => {
  return (
    <div className='art01'>
      <div className='numbTitle'>
        <img src={require('../../assets/imgs/artigo1/n1.png')} alt="01" />
        <p>Because it works.</p>
      </div>
      <div className='imgs'>
        <img className='img2' src={require('../../assets/imgs/artigo1/1.png')} alt="img1" />
        <img className='img1' src={require('../../assets/imgs/artigo1/grade1.png')} alt="grade1" />
      </div>
      <div className='text'>
        <p>
          Some typefaces are just perfect for
          certain things. I’ve specified exotic
          fonts for identity programs that work
          beautifully in headlines and even in
          text, but sooner or later you have to
          set that really tiny type at the bottom of the business reply card. This
          is what Franklin Gothic is for. Careful, though: some typefaces work too
          well. Frutiger has been used so much
          for signage programs in hospitals and
          airports that seeing it now makes me
          feel that I’m about to get diagnosed
          with a brain tumor or miss the 7:00 to
          O’Hare.
        </p>
      </div>
    </div>
  )
}

export default Art01
