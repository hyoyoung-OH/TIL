'use strict';

//Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript  are instances of Object
// object = {key : value}; : 오브젝트는 키와 벨류의 집합체이다.

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const lisa = {name: 'lisa', age: 4};
print(lisa);

// with JavaScript magic (dynamically typed language)
// can add properties later
lisa.hasJob = true;
console.log(lisa.hasJob);

delete lisa.hasJob;
console.log(lisa.hasJob);

// 2. Computed properties
// key should be always string
console.log(lisa.name);
console.log(lisa['name']);
lisa['hasJob'] = true;
console.log(lisa.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(lisa, 'name');
printValue(lisa, 'age');

// 3. Property value shorthand
const person1 = { name: 'nell', age:2};
const person2 = { name: 'joo', age:3};
const person3 = { name: 'gogi', age:6};
const person4 = new Person('lisa', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    //this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property exsitence check (ket in obj)
console.log('name' in lisa);
console.log('age' in lisa);
console.log('random' in lisa);
console.log(lisa.random);

// 6. for..in VS for ..of

//for (key in obj)
console.log(lisa);
for (let key in lisa) {
    console.log(key);
}

//for (value of iterable)
const array = [1, 2, 3, 4];
for(let value of array){
    console.log(value);
}

// Cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'lisa', age:'20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const fruit3 = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);

