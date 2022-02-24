 'use strict';
 // Object-oriented programming
 // class: template
 // object: instance of a class

 // 1. Class declaration
 class Person {
     // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
     }
    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
 }

 const lisa = new Person('lisa',27);
 console.log(lisa.name);
 console.log(lisa.age);
 lisa.speak();

// 2. Getter and Setters
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lasrName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0){
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value; 
    }
}

const user1 = new User('Sam', 'Kim', -5);
console.log(user1.age);

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Cording';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw(); //부모의 메소드를 불러옴
        console.log('zzz');
    }
    getArea() {
        return this.width * this.height /2;
    }
}

const rectangle = new Rectangle(20,20,'red');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20,40,'blue');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking InstanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(rectangle instanceof Shape);
console.log(rectangle instanceof Object);