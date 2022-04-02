// type Person = {
//     id: number;
//     name: string;
//     address: string;
// }
// const person1: Person = {id: 123, name: 'Moshe', address: 'Lod'};
// interface IPerson {
//     id: number,
//     name: string
// }
// const person2: IPerson = {id: 124, name: 'Sara', address: 'Lod'};
class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
        Point.checkValue(_x);
        Point.checkValue(_y);
    }
    static checkValue(value) {
        if (value < Point.minValue || value > Point.maxValue) {
            throw `wrong value ${value}, should be in range [${Point.minValue} - ${Point.maxValue}]`;
        }
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set x(value) {
        Point.checkValue(value);
        this._x = value;
    }
    set y(value) {
        Point.checkValue(value);
        this._y = value;
    }
    draw() {
        console.log(`Point [x: ${this._x}, y: ${this._y}]`);
    }
}
Point.minValue = -100;
Point.maxValue = 100;
class Line extends Point {
    constructor(x, y, _point) {
        super(x, y);
        this._point = _point;
    }
    draw() {
        console.log('-------Line-------');
        super.draw();
        this._point.draw();
        console.log('-'.repeat(20));
    }
    get point() {
        return this._point;
    }
}
class Square extends Point {
    constructor(x, y, _width) {
        super(x, y);
        this._width = _width;
    }
    get width() {
        return this._width;
    }
    draw() {
        console.log('-------Square-------');
        super.draw();
        console.log(`width: ${this._width}`);
        console.log('-'.repeat(20));
    }
}
class Rectangle extends Square {
    constructor(x, y, width, _height) {
        super(x, y, width);
        this._height = _height;
    }
    draw() {
        console.log('========Rectangle=======');
        super.draw();
        console.log(`height: ${this._height}`);
        console.log('='.repeat(20));
    }
}
const shape = new Square(3, 4, 10); //Upper casting
// ------- way of specific methods call -------
// if (shape instanceof Square) {
//     console.log(shape.width);
// }
// ------- demo of setter usage with checking and following exception -------
// const point: Point = new Point(10, 10);
// point.draw();
// point.x = 200;
// point.draw();
const shapes = [
    new Line(3, 4, new Point(10, 10)),
    new Square(2, 5, 10),
    new Line(20, 30, new Point(3, 4)),
    new Rectangle(10, 15, 20, 5)
];
shapes.forEach(shape => shape.draw());
//******************HW#33 ********************/
class Canvas {
    constructor(_shapes = []) {
        this._shapes = _shapes;
    }
    draw() {
        this._shapes.forEach(shape => console.log(shape));
    }
    addShape(shape) {
        this._shapes.push(shape);
        return this._shapes.indexOf(shape);
    }
    removeShape(index) {
        this._shapes.splice(index, 1);
        return this._shapes[index];
    }
    sort() {
        this._shapes.sort((s1, s2) => {
            const res = s2[0] - s1[0];
            return res == 0 ? s1[1] - s2[1] : res;
        });
    }
    removeIf(predicate) {
        this._shapes.filter(shape => predicate(shape) == false);
    }
}
function removeCriteria(shape) {
    let res = false;
    if (shape instanceof Line && shape.x < shape.point.x) {
        res = true;
    }
    return res;
}
