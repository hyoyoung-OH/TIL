"use strict";

// js에서 제공하는 비동기를 간편하게 처리할 수 있도록 도와주는 오브젝트
// 정해진 장시간의 기능을 수행하고 나서 정상적으로 기능이 수행되었으면 성공메세지와 결과값 전달
// 기능 수행 중 오류가 발생하면 애러 전달
// Promise is a JS object for asynchronous operation.
// 1) state에 대한 이해 2) producer(정보제공)과 consumer(이용)의 차이점 이해
// state: pending -> fufilled or rejected
// Producer vs Consumer

// 1. Producer
// 새로운 promis가 만들어 질 때는 excutor가 자동으로 실행된다.
const promise = new Promise((resolve, reject) => {
  // Promise 콜백함수 안에 또 다른 콜백함수를 받아옴
  // resolve: 기능을 정상적으로 수행해서 마지막에 최종 데이터를 전달
  // reject: 기능을 수행하다가 중간에 문제가 생기면 호출
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    // resolve("lisa");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
