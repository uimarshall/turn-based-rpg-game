import Entity from './Entity';


class Player extends Entity {
  constructor(ctx, x, y, key) {
    super(ctx, x, y, key);// call parent constructor Entity
    // Movement
    this.speed={
      base:2,
      current:2,
      max:6
    }
  }

  update(isHolding){
    if (this.states.dead) return

    // Save the current direction
    this.setCurrentDirection(isHolding)
 
    // Are we walking
    if (this.states.walk) {
      this.updateSpriteDirection()
      this.moveSprite()
      
    }
      
    
    
  }

  // Movement

  startMoving(){
    this.setState('walk')
    this.startNewAnim('walk')
  }

  stopMoving(){
    this.setState('idle')
    this.startNewAnim('idle')
  }

  moveSprite(){

    switch (this.direction.current) {
      case 'down':
        this.moveDown()
        
        break;
      case 'left':
        this.moveLeft()
        
        break;
      case 'right':
        this.moveRight()
        
        break;
    
      default:
        break;
    }
    // Move player downward
    // this.setSpritesPos(this.x, this.y + this.ctx.camSpeed.current);

    // // Move player sideways
    // if (isHolding.direction==='left') {
    //    this.setSpritesPos(this.x-1, this.y);

      
    // }else if(isHolding.direction==='right'){
    //    this.setSpritesPos(this.x+1, this.y);


    // }
  }

  moveDown(){
    this.y += this.speed.current
    this.setSpritesPos()
  }

  moveLeft(){
    this.x -= this.speed.current
    this.setSpritesPos()
  }

  moveRight(){
    this.x += this.speed.current
    this.setSpritesPos()
  }

  // Setters
  setCurrentDirection(isHolding){
    if (isHolding) {
      this.direction.current=isHolding
      
    }else{
      this.direction.current='down'
    }
  }
}

export default Player;