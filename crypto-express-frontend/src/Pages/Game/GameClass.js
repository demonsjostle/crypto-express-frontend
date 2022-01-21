import { ThemeConsumer } from 'styled-components'
import LocationIcon from '../../Assets/location.png'
import Robot from '../../Assets/robot.gif'

export class Location {
    constructor(ctx, {position}) {
        this.ctx = ctx 
        
        const image = new Image()
        image.src =  LocationIcon
        
        image.onload = () => {
            const scale = 0.15
            this.image = image 
            this.width = image.width * scale 
            this.height = image.height * scale
            this.position = position
        }
    }
    draw() {
        this.ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        if(this.image) {
            this.draw()
        }
    }
}

export class Projectile {
    constructor(ctx) {
    
    }

    
}
