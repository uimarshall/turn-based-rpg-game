import Entity from './Entity';


class Player extends Entity {
  constructor(ctx, x, y, key) {
    super(ctx, x, y, key);// call parent constructor Entity
  }
}

export default Player;