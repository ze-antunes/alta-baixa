import React from 'react'

const Card = (props) => {
    
    return (
        <div className='card'  id="mydivheader">
            <h1 className='card__title'>{props.title}</h1>
            <p className='card__info'>{props.text}</p>
        </div>
    )
}

export default Card