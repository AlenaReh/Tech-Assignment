// In the real world, a man has a mouth. His mouth can do operations like open/close at the man's will.
// ● He can open and close his mouth as he wishes.
// ● Nobody can force a man to open/close his mouth.
// ● A doctor can ask a man to open/close his mouth and a man will do so.
// ● He refuses anyone else who asks him to open/close his mouth other than doctors
// Use OOP Designs to make needed classes with methods to meet those requirements. You can use any language or pseudo-code to write down your results.

// Sometimes encapsulation refers to hiding of data or data Abstraction which means representing essential features hiding the background detail. Most of the OOP languages provide access modifiers to restrict the scope of a variable, but their are no such access modifiers in JavaScript but their are certain way by which we can restrict the scope of variable within the Class/Object.

function man(fname, mouthStat) {
  let firstname = fname;
  let mouthStatus = mouthStat;

  let someonesRequest_noaccess = function () {
    return `Hello, ${firstname}! Your mouth is ${mouthStatus}. Please open your mouth.`;
  };

  this.doctorsRequest_access = function () {
    if (mouthStatus === "closed") {
      return `Hello, ${firstname}! Your mouth is ${mouthStatus}. Please open your mouth.`;
    } else {
      return `Hello, ${firstname}! Your mouth is ${mouthStatus}. You can close your mouth.`;
    }
  };
}

let person1 = new man("Bob", "closed");
let person2 = new man("Alena", "open");

// We try to access some property (person1.firstname); returns undefine.
console.log(person1.firstname);
console.log(person2.firstname);

// Trying to access a function (person1.person1.someonesRequest_noaccess); returns undefine. This is my way of saying, "I refuse anyone else who asks me to open/close my mouth other than doctors".
console.log(person1.someonesRequest_noaccess);
console.log(person2.someonesRequest_noaccess);

// Method which we can access from the person object(doctorsRequest_access()), by changing the way to define a function we can restrict its scope.
console.log(person1.doctorsRequest_access());
console.log(person2.doctorsRequest_access());
