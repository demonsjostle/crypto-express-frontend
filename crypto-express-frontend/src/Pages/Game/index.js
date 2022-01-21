import React, { useEffect } from 'react'
import { DestinationBoard, Wrapper } from './GameElements'
import { Location } from './GameClass'
const index = () => {

    const game = (canvas) => {
        const ctx = canvas.getContext('2d')
        canvas.width = innerWidth
        canvas.height = innerHeight

        const bangkok = new Location(ctx, {position: {x: canvas.width / 2, y: canvas.height / 2}})
        const location2 = new Location(ctx, {position: {x: canvas.width / 2 + 40, y: canvas.height / 2 - 200}})
        const location3 = new Location(ctx, {position: {x: canvas.width / 2 + 200, y: canvas.height / 2}})
        const location4 = new Location(ctx, {position: {x: canvas.width / 2 - 200, y: canvas.height / 2}})
        const location5 = new Location(ctx, {position: {x: canvas.width / 2 - 40, y: canvas.height / 2 + 200}})
        function animate() {
            requestAnimationFrame(animate)
            ctx.fillStyle = '#C2CFCB'
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            bangkok.update()
            location2.update()
            location3.update()
            location4.update()
            location5.update()
        }

        animate()


        addEventListener('mousemove', (e) => {
            // console.log(e.clientX)
            // console.log(bangkok.position.x + bangkok.width / 2)

            //change scale when mouse hover
            if(e.clientX == bangkok.position.x) {
                
                
                
            }
        })
    }


    useEffect(() => {
        game(document.querySelector('canvas'))
    }, [])
    return (
        <>
        <Wrapper>
            {/* <DestinationBoard>
                <span>เลือกเส้นทางขนส่ง</span>
                <button>ยืนยัน</button>
            </DestinationBoard> */}
            <canvas></canvas>
        </Wrapper>
        </>
    )
}

export default index
