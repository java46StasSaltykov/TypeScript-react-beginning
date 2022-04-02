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

// type Employee = Person & {
//     salary: number;
// }
// interface IEmployee extends IPerson {
//     salary: number;
// }
// const employee1: Employee = {id: 123, name:'Moshe', salary: 10000, address: 'Lod'};
// const employee2: IEmployee = {id: 124, name: 'Sara', salary: 10000, address: 'Lod'};
// interface IPerson {
//     address: string;
// }



interface Shape {
    draw(): void;
}
class Point implements Shape {
    static readonly minValue = -100;
    static readonly maxValue = 100;
    static checkValue(value: number) {
        if(value < Point.minValue || value > Point.maxValue) {
            throw `wrong value ${value}, should be in range [${Point.minValue} - ${Point.maxValue}]`
        }
    }
    constructor(private _x: number, private _y: number) {
        Point.checkValue(_x);
        Point.checkValue(_y);
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set x(value: number) {
        Point.checkValue(value);
        this._x = value;
    }
    set y(value: number) {
        Point.checkValue(value);
        this._y = value;
    }
    draw() {
        console.log(`Point [x: ${this._x}, y: ${this._y}]`);
    }
}
class Line extends Point {
    constructor(x: number, y: number, private _point: Point) {
        super(x, y);
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
    constructor(x: number, y: number, private _width: number) {
        super(x, y);
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
    constructor(x: number, y: number, width: number, private _height: number) {
        super(x, y, width);
    }
    draw() {
        console.log('========Rectangle=======');
        super.draw();
        console.log(`height: ${this._height}`);
        console.log('='.repeat(20))     
    }
}
const shape: Shape = new Square(3, 4, 10); //Upper casting
// ------- way of specific methods call -------
// if (shape instanceof Square) {
//     console.log(shape.width);
// }

// ------- demo of setter usage with checking and following exception -------
// const point: Point = new Point(10, 10);
// point.draw();
// point.x = 200;
// point.draw();

const shapes: Shape[] = [
    new Line(3, 4, new Point(10, 10)),
    new Square(2, 5, 10),
    new Line(20, 30, new Point(3,4)),
    new Rectangle(10, 15, 20, 5)
]
shapes.forEach(shape => shape.draw());

//******************HW#33 ********************/

class Canvas implements Shape {
    constructor(private _shapes: Shape[] = []) {

    }
    draw(): void{
        this._shapes.forEach(shape => console.log(shape));
    }
    addShape(shape: Shape): number {
        this._shapes.push(shape);
        return this._shapes.indexOf(shape);
    }
    removeShape(index: number): Shape {
        this._shapes.splice(index, 1);
        return this._shapes[index];
    }
    sort(): void {
        this._shapes.sort((s1, s2) => {
            const res = s2[0] - s1[0];
            return res == 0 ? s1[1] - s2[1] : res;
        })
    }
    removeIf(predicate: (shape: Shape) => boolean) {
        this._shapes.filter(shape => predicate(shape) == false);
    }
}


function removeCriteria(shape: Shape): boolean {
    let res = false;
    if(shape instanceof Line && shape.x < shape.point.x) {
        res = true;
    }
    return res;
}
