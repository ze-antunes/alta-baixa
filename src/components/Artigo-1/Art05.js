import React from 'react'

const Art05 = () => {
  return (
    <div className='art05'>
      <div className='left'>
        <div>
          <p className='title'>Because it was there.</p>
          <img src={require('../../assets/imgs/artigo1/n5.png')} alt="05" />
        </div>
        <div className='text'>
          <p>
            Sometimes a typeface is already living on the premises when you show up, and it just seems mean to
            evict it. “We use Baskerville and Univers 65 on all
            our materials, but feel free to make an alternate suggestion.” Really? Why bother? It’s like one of
            those shows where the amateur chef is given a turnip, a bag of flour, a leg of lamb and some maple
            syrup and told to make a dish out of it. Sometimes
            it’s something you’ve never used before, which makes
            it even more fun.
          </p>
        </div>
      </div>
      <div className='imgs'>
        <img className='img2' src={require('../../assets/imgs/artigo1/4.2_2.png')} alt="img3" />
        <img className='img1' src={require('../../assets/imgs/artigo1/grade5.png')} alt="grade5" />
      </div>
    </div>
  )
}

export default Art05
