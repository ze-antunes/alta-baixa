import React from 'react'

const Art06 = () => {
  return (
    <div className='art06'>
      <div className='imgs'>
        <img className='img3' src={require('../../assets/imgs/artigo1/6.2_2.png')} alt="img6.2_2" />
        <img className='img2' src={require('../../assets/imgs/artigo1/6.2_1.png')} alt="img6.2_1" />
        <img className='img1' src={require('../../assets/imgs/artigo1/grade6.png')} alt="grade6" />
      </div>
      <div className='right'>
        <div className='hover'>
          <p className='title'>Because <a href="#artigo1-06" id="style-2" data-replace="they made you."><span>they made you.</span></a></p>
          <img src={require('../../assets/imgs/artigo1/n6.png')} alt="06" />
        </div>
        <div className='text'>
          <p>
            And sometimes it’s something you’ve never used before, for
            good reason. “We use ITC Eras on all our materials.” “Can
            I make an alternate suggestion?” “No.” This is when blind
            embossing comes in handy.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Art06
