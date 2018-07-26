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
calculateAge(1965);

function calculateAge(year) {
      console.log(2016 - year);
}

// With function expressions
// retirement(1990);

var retirement = function (year) {
      console.log(65 - (2016 - year));
}

retirement(1990);

// Explanation for variable hoisting. Code is scanned for variable declarations, if the declaration exists but the value isn't set, it'll read undefined.

console.log(age);
var age = 23;
console.log(age);

// Declared above in global context, function stores it in a local execution context
function foo() {
      console.log(age);
      var age = 65;
      console.log(age);
}
foo();
console.log(age);

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
