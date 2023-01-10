import React from 'react'

const ArtMB = () => {
    return (
        <div className='artMB'>
            <div className='text'>
                <p className='autor'>Michael Bierut</p>
                <p className='title'>Thirteen Ways of Looking at a Typeface</p>
            </div>
            <div className='imgMB'>
                <img src={require('../assets/imgs/artigo1/bierut2.png')} alt="Michael Bierut" />
            </div>
        </div>
    )
}

export default ArtMB
