"use strict";

// JavaScript is synchronous. : 동기적이다 = 호이스팅이 된 이후부터 코드가 작성한 순서에 따라 동기적으로 실행
// Excute the code block by order after hoisting.
// hoisting: var, function declaration : var또는 함수 선언이 자동적으로 제일 위로 올라가는 것
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// 지금 당장 실행하지 않고 1초가 지난 다음에 함수를 실행해줘(callback해줘) => callback 함수
// callback은 항상 비동기일 때만 사용? No! 두가지의 경우로 나눠짐

// Synchronous callback
// 콜백을 파라미터 인자로 받아서 이를 바로 처리하는 함수

function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hi"));

// Asynchronous callback: 언제 함수가 실행될 지 모르는 것
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// Cakkback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "lisa" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "lisa") {
        onSuccess({ name: "lisa", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role}role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
