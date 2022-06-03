자바스크립트 개념에 대해 응용이 필요하여 공부한 것을 정리!
현재 수강하고 있는 [리액트 강의(winterlood님의 한입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지)](https://inf.run/VMW7)의 내용을 기반으로 작성하였다.

```javascript
let a = '';

if (a) {
  console.log('TRUE');
} else {
  console.log('FALSE');
}
```

조건식에 a라는 변수를 입력 a는 string이라는 자료형으로 이루어져 있다.
빈 문자열을 가진 a라는 변수를 if문의 조건식에 넣으면 거짓으로 인지하여 false를 출력함
boolean 값을 넣지 않으면 모두 거짓으로 인지되는 것인가?

다른 값을 넣어보자

```javascript
let a = 'string';

if (a) {
  console.log('TRUE');
} else {
  console.log('FALSE');
}
```

![](https://velog.velcdn.com/images/devohy/post/73cf15f1-2c50-41fc-8ac7-c7eb2a5c35d0/image.png)
빈 문자열을 넣었을 때 false로 인식, 그러나 비어있지 않은 문자열을 넣으니 true를 반환.

자바스크립트의 조건식에는 boolean값을 넣지 않아도 참이나 거짓으로 인식되는 속성이 있다.
자바스크립트가 특정한 기준으로 값을 참이나 거짓으로 분류하는 것이 truthy와 falsy개념.

이 개념과 기준이 무엇인 지 알아보자.

자바스크립트에서 참으로 평가하는 값들이 존재 => Truthy

1. 객체 리터럴
2. 숫자 값, 문자열
3. Infinity(양의 무한대)
   true가 아니어도 참으로 분루하는 자바스크립트의 값들을 참같은 값이라 하여 Truthy라고 함

반대로 거짓이 아니어도 거짓이라고 분류하는 것이 Falsy

1. null
2. undefined: 변수에 아무것도 할당하지 않는 상태 모두
3. 숫자 0, -0
4. NaN
5. 빈 문자열

이를 어떻데 활용할 수 있을까?
객체를 매개변수로 받아서 받은 객체에서 특정한 프로퍼티를 반환하는 함수를 포함하는 프로그램

```javascript
const getName = (person) => {
  return person.name;
}; //person을 파라미터로 받아서 person의 name 속성을 return

let person = { name: '오이' }; //poerson의 name은 오이라는 객체를 만듬
const name = getName(person); //getnAme의 반환값을 name이라는 상수에 저장, person이라는 객체를 전달
console.log(name);
```

만약에 person이라는 값을 undefined로 전달하면 어떻게 될까?

```javascript
const getName = (person) => {
  return person.name;
};

let person;
const name = getName(person);
console.log(name);
```

![](https://velog.velcdn.com/images/devohy/post/9894b9ff-ec9d-49e2-9b28-95539cdff455/image.png)
이런 상황에서는 조건문을 통해 전달받은 파라미터가 객체인지 undefined이 아닌지 null이 아닌 지 등을 핀단해줘야함.

예외처리 방법 1.조건문에 일일이 조건식을 입력

```javascript
const getName = (person) => {
  if (person === undefined || person === null) {
    return '객체가 아닙니다';
  } // 예외처리
  return person.name;
};

let person;
const name = getName(person);
console.log(name);
```

예외처리 방법 2. falsy 속성을 이용하여 예외처리
: null과 undefined는 falsy한 성격을 가지고 있음 => 그래서 !을 붙이면 true가 됨

```javascript
const getName = (person) => {
  if (!person) {
    //false NOT => True
    return '객체가 아닙니다';
  }
  return person.name;
};

let person;
const name = getName(person);
console.log(name);
```
