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
