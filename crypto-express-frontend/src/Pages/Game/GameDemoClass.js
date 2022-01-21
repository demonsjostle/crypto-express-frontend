import Spaceship from '../../Assets/spaceship.png'
export class Player {
    constructor(canvas, ctx) {
        this.ctx = ctx
        
        this.velocity = {
            x: 0,
            y: 0
        }
        this.rotation = 0
        const image = new Image()
        image.src = Spaceship
        image.onload = () => {
            const scale = 0.15
            this.image = image
            this.width = image.width * scale
            this.height = image.height * scale
            this.position = {
                x: canvas.width / 2 - this.width / 2,
                y: canvas.height - this.height - 20
            }
        }
    }
    draw() {
        this.ctx.save() 
        
        this.ctx.translate(this.position.x + this.width / 2, this.position.y + this.height / 2)
        this.ctx.rotate(this.rotation)
        this.ctx.translate(-this.position.x - this.width / 2, -this.position.y - this.height / 2)

        this.ctx.drawImage(
            this.image, 
            this.position.x, 
            this.position.y,
            this.width, 
            this.height
        )
        this.ctx.restore()
    }
    update() {
        if(this.image) {
            this.draw()
            this.position.x += this.velocity.x 
        }
    }
}


export class Projectile {
    constructor(ctx, {position, velocity}) {
        this.ctx = ctx 
        this.position = position
        this.velocity = velocity

        this.radius = 3
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0,
            Math.PI * 2)
        this.ctx.fillStyle = 'red'
        this.ctx.fill()
        this.ctx.closePath()
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x 
        this.position.y += this.velocity.y
    }
}