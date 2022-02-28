"use strict";

// async & await
// claea style of using promise

// 1. async
async function fetchUser() {
  // do network request in 10 secs...
  return "lisa";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getApple() {
  await delay(1000);
  return "사괴";
}

async function getbanana() {
  await delay(1000);
  return "바나나";
}

async function pickFruits() {
  const apple = await getApple();
  const banana = await getbanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getbanana()]).then((frutis) =>
    frutis.join(" + ")
  );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getbanana()]);
}

pickOnlyOne().then(console.log);
