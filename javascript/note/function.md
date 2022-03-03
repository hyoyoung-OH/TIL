변수에 데이터를 담고 더하는 작업을 하게 되고 이렇게 반복적으 쓰이는 수행되는 일을 함수로 만듬 => 재사용이 가능하니까!

```javascript
function add(a, b) {
  return a + b;
}
// {}안의 것들을 코드 블록이라하고 기능을 수행하는 add라는 이름을 가진 함수
// 함수를 선언할 땐 function이라고 적어야함
// function 뒤에 add 가 함수 이름:간결하고 알아듣기 쉽게 적어야함
// () 안에는 몇가지의 인자를 받는 지 정의

const sum = add(3, 4);
console.log(sum);
```

```javascript
function add(num1, num2) {
  return num1 + num2;
}
const doSomthing = add;
const result = doSomthing(2, 3);
console.log(result);
```
