Chapter 5:

Higher Order Functions:

Class Notes:

Two types of functions-
1) Takes another function as an argument
  or
2) Returns a function

Three types of properties-
1)Named
2)Anonymous
3)Variable


Event Handler:
// if you are adding and removing DOM elements this will bind to the
// objects unlike the 2nd form.
$(document).on("event", "#selector", function(e) {...});

VS.

$('#selector').on("event", function(e) {...});

***FUNCTIONS ARE JUST VALUES***

Abstractions:
Anytime you make code much easier to read and reduce probability for bugs by
grouping lower level function(s) into named functions and defining them elsewhere
in your code.  NAMING IS SUPER IMPORTANT HERE.

**I do not endorse this song for listening to || for code examples**

var iJustMetYou = function() {
  return "I just met you" ;
};

var thisIsCrazy = function() {
    return "And this is crazy";
};

var callMe = function(line) {
    console.log(line());
};

function callMeMaybe(line, shouldCall) {
    if(shouldCall) {
        console.log(line());
        console.log("Call me maybe");
    } else {
        console.log("Never call me");
    }
};

// Named
callMeMaybe(iJustMetYou, true);
callMeMaybe(thisIsCrazy, false);
// Anonymous
callMeMaybe(function() {
  return "I just anonymously met you" ;
}, true);


*********************
More HO functions:

var array = ["math","is","awesome"]

array.reduce(function(sentance,word) {
  return sentance + word;
}, "");

// => "mathisawesome"

**********************
var array = [1,2,3]

array.map(function(element) {
  return element + 1;
});

// => [2,3,4]

**********************

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
});
// flattened is [0, 1, 2, 3, 4, 5]

--------------------------------------------------------------------------

Book Notes:
Functions that operate on other functions, either by taking them as arguments
or by returning them, are called higher-order functions.

Higher-order functions allow us to abstract over actions, not just values.
They come in several forms. For example, you can have functions that
create new functions.

function noisy(f) {
  return function(arg) {
    console.log("calling with", arg);
    var val = f(arg);
    console.log("called with", arg, "- got", val);
    return val;
  };
}
noisy(Boolean)(0);
// → calling with 0
// → called with 0 - got false

Passing along arguments:
If f takes more than one parameter, it gets only the first one.
We could add a bunch of arguments to the inner function (arg1, arg2, and so on)
and pass them all to f, but it is not clear how many would be enough.
This solution would also deprive f of the information in arguments.length.
Since we’d always pass the same number of arguments, it wouldn’t know how
many arguments were originally given.

For these kinds of situations, JavaScript functions have an apply method.
You pass it an array (or array-like object) of arguments, and it will call
the function with those arguments.

function transparentWrapping(f) {
  return function() {
    return f.apply(null, arguments);
  };
}


--------------------------------------------------------------------------

JSON:

JSON (pronounced “Jason”), which stands for JavaScript Object Notation.
It is widely used as a data storage and communication format on the Web.

JavaScript gives us functions, JSON.stringify and JSON.parse,
that convert data from and to this format. The first takes a JavaScript
value and returns a JSON-encoded string. The second takes such a string and
converts it to the value it encodes.

var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
// → {"name":"X","born":1980}
console.log(JSON.parse(string).born);
// → 1980

---------------------------------------------------------------------------

Filtering an array:

the filter function, rather than deleting elements from the existing array,
builds up a new array with only the elements that pass the test. This function
is pure. It does not modify the array it is given.

Like forEach, filter is also a standard method on arrays.
The example defined the function only in order to show what it does internally.
From now on, we’ll use it like this instead:

console.log(ancestry.filter(function(person) {
  return person.father == "Carel Haverbeke";
}));
// → [{name: "Carolus Haverbeke", …}]

---------------------------------------------------------------------------

Transforming with map:

The map method transforms an array by applying a function to all of its
elements and building a new array from the returned values. The new array
will have the same length as the input array, but its content will have been
“mapped” to a new form by the function.

function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

var overNinety = ancestry.filter(function(person) {
  return person.died - person.born > 90;
});
console.log(map(overNinety, function(person) {
  return person.name;
}));
// → ["Clara Aernoudts", "Emile Haverbeke",
//    "Maria Haverbeke"]
