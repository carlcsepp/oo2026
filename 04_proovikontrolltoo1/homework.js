var Triangle = /** @class */ (function () {
    function Triangle(a, b, c, height, x, // position to draw
    y) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.height = height;
        this.x = x;
        this.y = y;
    }
    // calculate area
    Triangle.prototype.area = function () {
        return 0.5 * this.b * this.height;
    };
    // calculate perimeter
    Triangle.prototype.perimeter = function () {
        return this.a + this.b + this.c;
    };
    // draw triangle on canvas
    Triangle.prototype.draw = function (g) {
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
    };
    return Triangle;
}());
