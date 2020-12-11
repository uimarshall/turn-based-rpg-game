class Title {
  constructor(ctx, x, y, string, style, origin) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.text = string;
    this.style = this.initStyle(style);
    this.origin = this.initOrigin(origin);
    this.obj = this.createText();
  }

  initStyle(key) {
    const style = {
      fontFamily: 'ClickPixel',
      fontSize: 16,
      color: '0xFFFFFF',
      align: 'center',
    };

    switch (key) {
      case 'title':
        style.fontSize = 32;
        break;
      case 'preload':
        style.fontSize = 24;
        break;
    }

    return style;
  }

  initOrigin(origin) {
    if (typeof origin === 'number') {
      return {
        x: origin,
        y: origin,
      };
    } if (typeof origin === 'object') {
      return origin;
    }
    return {
      x: 0.5,
      y: 0.5,
    };
  }

  //   Text Object
  createText() {
    const obj = this.ctx.add.bitmapText(
      this.x,
      this.y,
      this.style.fontFamily,
      this.text,
      this.style.fontSize,
      this.style.align,
    );
    obj.setOrigin(this.origin.x, this.origin.y);
    return obj;
  }

  destroy() {
    this.obj.destroy();
    this.obj = false;
  }

  //   Setters
  setText(string) {
    this.text = string;
    this.obj.setText(string);
  }

  setX(x) {
    this.x = x;
    this.obj.setX(x);
  }

  setY(y) {
    this.y = y;
    this.obj.setY(y);
  }

  setOrigin(origin) {
    this.origin = this.initOrigin(origin);
    this.obj.setOrigin(origin);
  }

  setDepth(depth) {
    this.obj.setDepth(depth);
  }

  setScrollFactor(scrollX, scrollY) {
    this.obj.setScrollFactor(scrollX, scrollY);
  }

  // Getters
  getCenter() {
    return this.obj.getCenter();
  }

  getTopLeft() {
    return this.obj.getTopLeft();
  }

  getTopRight() {
    return this.obj.getTopRight();
  }

  getBottomLeft() {
    return this.obj.getBottomLeft();
  }

  getBottomRight() {
    return this.obj.getBottomRight();
  }
}

export default Title;
