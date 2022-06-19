//조건문 if-else
//알고리즘에서 논리적 비교를 할 떄 사용되는 조건식
// if, if else, else 키워드를 통해 구성되며, 조건식에 맞을 경우 중괄호 {}내에 있는 명령문을 수향
// 단, 실행 문장이 단일 문장인 경우에는 {} 생략가능

let apple_price = 10;

if (apple_price >= 10) {
  console.log('매우 비쌈');
} else if (apple_price < 5) {
  console.log('매우 싸다');
} else {
  //5~9
  console.log('좋다');
}

console.log('done!');

//3항 연상자
// 3항 연산자를 통해 if-else를 대체하여 사용 가능
// 3항 연산자: 변수 = (조건식) ? 참일 때 값 : 거짓일 때 값

//조건믄: if-else
let age = 15;

if (age < 19) {
  msg = 'The user is not an adult.';
} else {
  msg = 'The user is an adult';
}

console.log(msg);

//조건문: 3항 연산자
msg_another = age < 19 ? 'The user is not an adult' : 'The user is an adult';
console.log(msg_another);
