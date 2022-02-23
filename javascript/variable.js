// 1. Use strict
// add in ES5
// use this for Vanila Javascript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6) 

let globalname = 'mini';
{
    let name = 'lisa';
    console.log(name);
    name = 'hello';
}

console.log(name);
console.log(globalname);

// var (don'y use this!)
// var hoisting (move declartion from bottom to top)
// has no block scope

{ 
    age = 4;
    var age;
}
console.log(age);

// 3. Constant, r(read only)
//use whenever possible
//only use let if variable needs to change

//Note!
//Immutable data types: primitive types, frozen objects (i.e. object.freeze())
//Mutable data types: all objects by defalut are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Vatiable types
// primitive, single item: number, string, boolean, null, undifiedn, symbol
// object, box container 
// fuction,  first-class function
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' /2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello '+brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value:' + helloBob + ' type: ' + typeof helloBob);

//boolean
//flase: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3<1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null : 빈 값
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined : 선언은 되었지만 어느 값도 지정안됨. 
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const lisa = {name: 'lisa', age:26};
lisa.age = 27;

// 5. Dynamic typing: dinamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '5' + 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(charAt(0)); //compile error : 변수가 계속 변경되었기 때문
