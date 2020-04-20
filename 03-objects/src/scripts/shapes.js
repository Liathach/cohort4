function hello() {
    return "Hello";
}

class Shape {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
}
class Rectangle extends Shape {
    
}

class Drawing {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.shapes = {};
    }
    createRectangle(x,y) {

    }
}



export default {hello, Shape, Rectangle, Drawing};
