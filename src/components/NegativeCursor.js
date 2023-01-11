import React, { useState } from 'react'

const NegativeCursor = () => {
    const [cursorX, setCursorX] = useState()
    const [cursorY, setCursorY] = useState()

    window.addEventListener('mousedown', (e) => {
        setCursorX(e.pageX)
        setCursorY(e.pageY)
    })
    return (
        <div className='negativeCursor'
        style={{
            left: cursorX + 'px',
            top: cursorY + 'px'
        }}
        >

        </div>
    )
}

export default NegativeCursor
