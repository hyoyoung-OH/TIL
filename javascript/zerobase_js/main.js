//변수

let A = 123;
console.log(A);

A = 456;
console.log(A);

// let A = 789; //Syntax Error

//상수 : 변경 불가능한 값을 저장하기 위한 기억 공간

const B = 123; //상수 선언과 동시에 값 초기화
console.log(B);

// B = 555; //TypeError

// const C; //SyntaxError: Missing initializer in const declaration
// C = 123;

let str = 'hello world!';
console.log(typeof str);

console.log(typeof undefined);
console.log(typeof 123);
console.log(typeof 456n);
console.log(typeof true);
console.log(typeof 'hi');

let name_check = true;
let age_check = false;

let user = {
  name: 'lisa',
  age: 23,
};

let admin = user;

admin.name = 'park';
console.log(admin);
