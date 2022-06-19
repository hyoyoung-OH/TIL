let user = {
  name: 'gydud',
  age: 27,
};

let admin = {};

for (let key in user) {
  admin[key] = user[key];
}

admin.name = 'park';
console.log(admin.name);
console.log(user.name);

user.age = 23;
console.log(user.age);
console.log(admin.age);
