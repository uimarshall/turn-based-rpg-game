class Generator {
  constructor(ctx) {
    this.CONFIG = ctx.CONFIG;
    this.DEPTH = ctx.DEPTH;
    this.ctx = ctx;

    this.cols = 11;
    this.rows = 20;

    this.layers = {
      floor: [],
      walls: [],
      monsters: [],
      pickups: [],
      turrets: [],
      overlay: false,
    };
  }

  setup() {
    this.createFloor();
  }

  update() {
    this.scrollFloor();
  }

  // Floor Layer
  createFloor() {
    let x;
    let y;
    let spr;

    // Draw bigger than camera view height
    const { cols } = this;
    const rows = this.rows + 1;

    // Save tiles in array
    const floor = [];

    // loop cols and rows

    for (let ty = 0; ty < rows; ty++) {
      floor[ty] = [];
      for (let tx = 0; tx < cols; tx++) {
        x = (tx * this.CONFIG.tile) + this.CONFIG.mapOffset;
        y = (ty * this.CONFIG.tile);
        spr = this.ctx.add.sprite(x, y, 'tileset');
        spr.setOrigin(0);
        spr.setDepth(this.DEPTH.floor);
        floor[ty][tx] = spr;
      }
    }

    // Save floor array in generator layers
    this.layers.floor = floor;
  }

  scrollFloor() {
    const offset = this.ctx.cameras.main.scrollY - this.layers.floor[0][0].y;
    if (offset >= this.CONFIG.tile) {
      this.destroyFloorRow();
      this.appendFloorRow();
    }
  }

  destroyFloorRow() {
    for (let tx = 0; tx < this.layers.floor[0].length; tx++) {
      this.layers.floor[0][tx].destroy();
    }
    this.layers.floor.splice(0, 1);
  }

  appendFloorRow() {
    let x;
    let spr;
    const ty = this.layers.floor.length;
    const y = this.layers.floor[ty - 1][0].y + this.CONFIG.tile;
    this.layers.floor.push([]);
    for (let tx = 0; tx < this.cols; tx++) {
      x = (tx * this.CONFIG.tile) + this.CONFIG.mapOffset;

      spr = this.ctx.add.sprite(x, y, 'tileset');
      spr.setOrigin(0);
      spr.setDepth(this.DEPTH.floor);
      this.layers.floor[ty][tx] = spr;
    }
  }
}

export default Generator;