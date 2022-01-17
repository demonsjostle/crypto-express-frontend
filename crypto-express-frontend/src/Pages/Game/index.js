import React, {useState, useEffect} from 'react'

const index = () => {

    
    const game = (canvas) => {
        canvas.width = innerWidth
        canvas.height = innerHeight
        canvas.style.background = "#000"
        canvas.style.overflowX = "hidden"
        canvas.style.position = "fixed"
        
        console.log(innerHeight)
        const ctx = canvas.getContext('2d')
        


    }
    

    useEffect(() => {
        game(document.querySelector('canvas'))
    }, []);

    return (
        <>
            <canvas />
        </>
       

    )
}

export default index
