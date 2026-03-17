class Triangle {
    constructor(
        protected a: number,
        protected b: number,
        protected c: number,
        protected height: number,
        protected x: number,  // position to draw
        protected y: number
    ) {}

    // calculate area
    area(): number {
        return 0.5 * this.b * this.height;
    }

    // calculate perimeter
    perimeter(): number {
        return this.a + this.b + this.c;
    }

    // draw triangle on canvas
    draw(g: CanvasRenderingContext2D): void {
        g.beginPath();
        // draw a simple triangle
        g.moveTo(this.x, this.y);
        g.lineTo(this.x + this.a, this.y);
        g.lineTo(this.x + this.a / 2, this.y - this.height);
        g.closePath();
        g.stroke();
        // write calculations
        g.fillText("Area: " + this.area(), this.x, this.y - this.height - 10);
        g.fillText("Perimeter: " + this.perimeter(), this.x, this.y - this.height - 25);
    }
}