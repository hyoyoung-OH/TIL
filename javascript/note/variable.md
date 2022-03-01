primitive type

1.  number, string, boolean, null, undefined

```javascript
let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

number2 = 3;

console.log(number);
console.log(number2);
```

2. Object: 한 두가지의 다양한 데이터를 한 군데에 묶어놓은 것. 배열, 리스트 등.. 함수도 모두 오브젝트임. 단순히 변수를 선언하는 곳에 담아놓을 수 없고 그들만의 공간이 있다. 그것을 가리키는 것이 레퍼런스. 레퍼런스가 복사되어서 전달. 오브젝트를 통해서 데이터를 변경하면 레퍼런스가 업데이트가 된다.

```javascript
//
let obj = {
    name: 'lisa',
    age: 5,
};
console.log(obj.name) //obj의 name을 뜻한다

let obj2 = obj;
console.log(obj2.name);

obj.name = 'james';
console.log('---------');
console.log(obj.name);
console.log(obj2.name);

let a = 2;
a = 5l;
a = 23;
//let 은 값이 변경됨
const num = 2;

```
