// 1.   String concatrnation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals:
''''
1 + 2 =${1+2}
`);
console.log("lisa's \n\t book");

//2. Numeric operators
console.log(1+1); //add
console.log(1-1); //substract
console.log(1/1); //divide
console.log(1*1); //muliply
console.log(5%2); //remainder
console.log(2 ** 3); // exponentiation

// 3. Incremet and decrement operators
let counter = 2;
const preIncrement = ++counter
// counter = counter + 1
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal

// 6. Logical operator: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// &&(and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('ㅠㅠ');
    }
    return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversation
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//object equality by reference
const lisa1 = { name: 'lisa'};
const lisa2 = { name: 'lisa'};
const lisa3 = lisa1;
console.log(lisa1 == lisa2); //f
console.log(lisa1 === lisa2); //f
console.log(lisa1 === lisa3); //t

//equality - puzzler
console.log(0 == false); //t
console.log(0 === false); //f
console.log('' == false); //t
console.log('' === false); //f
console.log(null == undefined); //t
console.log(null === undefined); //f 

// 8. Conditional operators: if
// if, else if, else
const name = 'coder';
if(name === 'lisa') {
    console.log('Welcome!');
} else if (name === 'coder') {
    console.log('best corder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ? => 간단할 때 사용하는 것이 좋음
// condition ? value1 : value2
console.log(name === 'lisa'? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Safari':
        console.log('good!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loof, while condition is first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

//for loop, for(begin; condition; step)
for (i = 3; i >0; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// break: loop를 완전히 끝냄, continue: 현재 것만 skip하고 다음 것으로 넘어감
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let b = 0; b <=10; b++){
    if( b % 2 === 1){
        continue;
    }
    console.log(`q1. ${b}`);
}
// Q2. interate from 0 to 10 and print numbers until reaching 8 (use break)
for (a = 0; a <= 10; a++){
    if( a > 8){
        break;
    }
    console.log(`q2. ${a}`);
    }
