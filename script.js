let gameCanvas=document.getElementById("game-canvas")
let gameOn=true
let context=gameCanvas.getContext("2d")
let ananyaImage = new Image()
ananyaImage.src = 'media/ananya-pic.png'
let aksharImage = new Image()
aksharImage.src = 'media/akshar-pic.png'
class Box{
    constructor(size,colour){
        this.size=size
        this.colour=colour
        this.x=0
        this.y=0
    }
}
class Player extends Box{
    constructor(speed){
        super(50,'blue')
        this.x=0
        this.y=250
        this.speed=0

    }
    move()
    {   
        this.x+=this.speed
    }
}
class Enemy extends Box{
    constructor(x,y,speed){
        super(50,'red')
        this.speed=speed
        this.x=x
        this.y=y
    }
    move(){
        if(this.y+this.size>500 || this.y<0)
        {
            this.speed=-this.speed
        }
        this.y+=this.speed

    }
}

function drawBoxEnemy(box){
    /*context.fillStyle=box.colour
    context.fillRect(box.x, box.y,box.size, box.size)
    */
   context.drawImage(ananyaImage,box.x,box.y)
}
function drawBoxPlayer(box){
    /*context.fillStyle=box.colour
    context.fillRect(box.x, box.y,box.size, box.size)
    */
   context.drawImage(aksharImage,box.x,box.y)
}


gameCanvas.addEventListener('mousedown',()=>{
    player.speed=5
},false)
gameCanvas.addEventListener('mouseup',()=>{
    player.speed=0
},false)
function checkColision(box1,box2){
    if(box1.x<box2.x+box2.size && box1.x+box1.size>box2.x && box1.y<box2.y+box2.size && box1.y+box1.size>box2.y)
    {
        return true
    }
    return false
}

let player=new Player(5)
let enemy1=new Enemy(100,0,5)
let enemy2=new Enemy(200,0,15)
let enemy3=new Enemy(300,0,10)
let enemy4=new Enemy(400,0,2)

function gameOver(){
    context.clearRect(0,0,500,500)
    context.font = "50px sans-serif"
    context.fillText("So you want me to die or what?",50,50,400)
    context.fillText("Click restart to try again...varsity athelete...",50,100,400)
}
function gameLoop(){
    if(gameOn==true)
    {
    context.clearRect(0,0,500,500)
    enemy1.move()
    enemy2.move()
    enemy3.move()
    enemy4.move()
    player.move()
    drawBoxEnemy(enemy1)
    drawBoxEnemy(enemy2)
    drawBoxEnemy(enemy3)
    drawBoxEnemy(enemy4)
    drawBoxPlayer(player)
    if(checkColision(player,enemy1)||checkColision(player,enemy2)||checkColision(player,enemy3)||checkColision(player,enemy4))
    {
        gameOn=false
        window.requestAnimationFrame(gameOver)
    }
    window.requestAnimationFrame(gameLoop)
}
}
gameLoop()