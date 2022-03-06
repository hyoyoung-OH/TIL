function plus(a, b) {
  console.log(a + b);
}

function divide(c, d) {
  console.log(c / d);
}
plus(1, 2);
divide(10, 2);

const player = {
  name: "lisa",
  sayHello: function (otherPersonsName) {
    console.log(`hello ${otherPersonsName}! nice to meet you!`);
  },
};

console.log(player.name);
player.sayHello("oh");
player.sayHello("papa");
