import React from 'react'

const Art07 = () => {
  return (
    <div className='art07'>
      <div className='numbTitle'>
      <img src={require('../../assets/imgs/artigo1/n7.png')} alt="07" />
        <p className='title'>Because it reminds you of something.</p>
      </div>
      <div className='imgs'>
        <img className='img2' src={require('../../assets/imgs/artigo1/7.2.png')} alt="img7.2" />
        <img className='img1' src={require('../../assets/imgs/artigo1/grade7.png')} alt="grade7" />
      </div>
      <div className='text'>
        <p>
          Whenever I want to make words look straightforward, conversational, and smart, I frequently consider Futura,
          upper and lower case. Why? Not because Paul Renner was
          straightforward, conversational, and smart, although he
          might have been. No, it’s because 45 years ago, Helmut
          Krone decided to use Futura
          in Doyle Dane Bernbach’s advertising for
          Volkswagen, and they still use it today. One warning,
          however: what reminds you of something may remind someone else of something else.
        </p>
      </div>
    </div>
  )
}

export default Art07
