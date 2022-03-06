### variables

```javascript
const myName = "lisa";
```

변수에 공백을 주고 싶을 때는 카멜케이스로 사용한다.

### Boolean

- null: variable 안에 어떤 것이 없다는 것을 '확실히'하기 위해 사용 => 절대 자연적으로 생기는 게 아니다.
- undefined: 어떤 variable이 메모리에 있는데 값이 없는 것(값이 주어지지 않은 것)

### Arrays

하나의 variable 안애 데이터의 list를 가지는 것

```javascript
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek);

// Get Item from Array
console.log(daysOfWeek[0]);

// Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);
```

### object

```javascript
const player = {
  name: "lisa",
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.name);

console.log(player);
player.fat = false;
console.log(player);

// object에 항목 추가
player.lastName = "OH";
console.log(player);
```

### function

계속 재사용하는 코드 조각, 코드를 캡슐화하여 계속 사용할 수 있게 한다.

```javascript
function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + "and I am " + age);
}

sayHello("lisa", 26);
sayHello("nico", 99);
```
