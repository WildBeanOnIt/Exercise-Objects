// ?JavaScript Objects

let person = {
  firstName: "Julio",
  lastName: "Aguilera",
  age: 22,
  hobbies: ["soccer", "code"],
  face: {
    eyeColor: "blue",
    glasses: "false",
  },
  greeting: function () {
    return `My name is ${this.firstName} and Im ${this.age} years old.`;
  },
};

// console.log(person.greeting());
// console.log(person["lastName"]);

// ?another way to create an obj.

let person2 = new Object();
person2.name = "Mary";
person2.age = 99;
person.greeting = function () {
  return `My name is ${this.name} and Im ${this.age} years old!`;
};

let person3 = {};
person3.nam = "Tony";
person3.age = 17;
person.greeting = function () {
  return `My name is ${this.name} and Im ${this.age} years old!`;
};

// ?another way to do an Object.

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greeting = function () {
    return `My name is ${this.name} and Im ${this.age} years old!`;
  };
}
// console.log(new Person("James", 22));
// console.log(new Person("Kobe", 25));

let humans = [];

let arr = [1, 2, 3, 4, 5, 6];

humans.push(new Person("Julio", 100));
humans.push(new Person("Lebron", 5));
humans.push(new Person("CR7", 10));
humans.push(new Person("Messi", 400));

// for (let i = 0; i < humans.length; i++) {
//   const human = humans[i];
//   console.log(human.greeting(), arr[i]);
// }

for (let i = 0; i < humans.length; i++) {
  const human = humans[i];
  console.log(human.greeting());
}

// console.log(humans);

// !Another way to do a loop
// let counter = 0;

// for (const i of humans) {
//   console.log(i.greeting(), arr[counter]);
//   counter += 1;
// }
