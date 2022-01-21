import React, {useState, useEffect} from 'react'
import { Player, Projectile } from './GameDemoClass'
import { DestinationBoard, Wrapper } from './GameElements'
const GameDemo = () => {

    
    const game = (canvas) => {
        const ctx = canvas.getContext('2d')
        canvas.width = innerWidth
        canvas.height = innerHeight
        
        const player = new Player(canvas, ctx) 
        const projectiles = []
        const keys = {
            a: {
                pressed: false
            },
            d: {
                pressed: false
            },
            space: {
                pressed: false
            }
        } 
        function animate() {
            requestAnimationFrame(animate)
            ctx.fillStyle = 'black'
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            player.update()
            projectiles.forEach((projectile, index) => {
                //clear memory
                if (projectile.position.y + projectile.radius <= 0) {
                    setTimeout(() => {
                        projectiles.splice(index, 1)
                    }, 0)
                    
                } else {
                    projectile.update()
                }
                projectile.update()
            })
            
            if (keys.a.pressed && player.position.x >= 0) {
                player.velocity.x = -7
                player.rotation = -0.15
            } else if (keys.d.pressed && player.position.x + player.width <= canvas.width) {
                player.velocity.x = +7
                player.rotation = 0.15
            } else {
                player.velocity.x = 0
                player.rotation = 0
            }

        }

        animate()

        addEventListener('keydown', ({ key }) => {
            switch (key) {
                case 'a': 
                    // console.log('left')
                    keys.a.pressed = true
                    break
                case 'd': 
                    // console.log('right')
                    keys.d.pressed = true
                    break
                case ' ':
                    // console.log('space')
                    projectiles.push(new Projectile(ctx, {
                        position: {
                            x: player.position.x + player.width / 2, 
                            y: player.position.y
                        },
                        velocity: {
                            x: 0,
                            y: -10
                        }
                    }))
                    console.log(projectiles)
                    break
            }
        })

        addEventListener('keyup', ({ key }) => {
            switch (key) {
                case 'a': 
                    // console.log('left')
                    keys.a.pressed = false
                    break
                case 'd': 
                    // console.log('right')
                    keys.d.pressed = false
                    break
                case ' ':
                    // console.log('space')
                    
                    break
            }
        })


    }
    

    useEffect(() => {
        game(document.querySelector('canvas'))
    }, []);

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

export default GameDemo
//47.15 https://www.youtube.com/watch?v=MCVU0w73uKI&t=2835s