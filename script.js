//// Variables are left in their place, and functions are read by the environment first, they are "hoisted" to the top of the code file. JavaScript works behind the scenes to make sure it's read this way. All declarations, both functions and variables, are hoisted to the top of the containing scope, before any part of your code is executed. Functions are hoisted first, and then variables. Function declarations have priority over variable declarations, but not over variable assignments.

///////////////////////////////////////// Lecture: Hoisting

// Function hoisting. As you can see, the JavaScript interpreter allows you to use the function before the point at which it was declared in the source code. This is useful because it allows you to express your high-level logic at the beginning of your source code rather than the end, communicating your intentions more clearly.

// How we have been using functions, by writing them and then calling them immediately afterwards
// function calculateAge(year) {
//       console.log(2016 - year);
// }
//
// calculateAge(1990);

// Now, hoisting. Call function before it's declared
// Store in variable object, only works for function declarations
// calculateAge(1965);
//
// function calculateAge(year) {
//       console.log(2016 - year);
// }

// With function expressions
// retirement(1990);

// var retirement = function (year) {
//       console.log(65 - (2016 - year));
// }
//
// retirement(1990);

// Explanation for variable hoisting. Code is scanned for variable declarations, if the declaration exists but the value isn't set, it'll read undefined.

// console.log(age);
// var age = 23;
// console.log(age);

// Declared above in global context, function stores it in a local execution context
// Inside the function, age is first undefined, despite it being defined globally because the local function's value takes precedence. The local shadows the global.
// function foo() {
//       console.log(age);
//       var age = 65;
//       console.log(age);
// }
// foo();
// console.log(age);

///////////////////////////////////////
// Lecture: Scoping

// Where can we access a variable or function? Each new function creates a scope in which the variables it defines are accessible. This is the only way we can create a new scope. Lexical scoping means that a function that is written within one also has access to the parents.

// First scoping example

// var a = 'Hello!';
// first();
//
// function first() {
//     var b = 'Hi!';
//     second();
//
//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }

// Example to show the differece between execution stack and scope chain

// var a = 'Hello!';
// first();
//
// function first() {
//     var b = 'Hi!';
//     second();
//
//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }
//
// function third() {
//     var d = 'John';
//     console.log(a + b + c + d);
// }




///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);

// calculateAge(1985);
//
// function calculateAge(year) {
//       console.log(2016 - year);
//       console.log(this);
// }

var john = {
      name: 'John',
      yearOfBirth: 1990,
      calculateAge: function() {
            console.log(this);
            console.log(2016 - this.yearOfBirth);

            // function innerFunction () {
            //       console.log(this);
            // }
            // innerFunction();
      }
};

// Inner function even though it's inside the object, is not a method on an object, so it refers to the window object again

john.calculateAge();

var mike = {
      name: 'Mike',
      yearOfBirth: 1984
};

// Method borrowing, this variable is only assigned a variable when the object calls the method

mike.calculateAge = john.calculateAge;
mike.calculateAge();
