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
let person3 = {};

person3.name = "Tony";
person3.age = 17;
person.greeting = function () {
  return `My name is ${this.name} and Im ${this.age} years old!`;
};

console.log(person2);
console.log(person3);
