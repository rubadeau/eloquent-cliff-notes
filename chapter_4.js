Chatper 4
-
Data Structures - Objects and Arrays

Properties:  **Accessing Shit**

The two most common ways to access properties in JavaScript are with a
dot and with square brackets. Both value.x and value[x] access a property
on value—but not necessarily the same property. The difference is in
how x is interpreted. When using a dot, the part after the dot must be a
valid variable name, and it directly names the property. When using square
brackets, the expression between the brackets is evaluated to get the
property name. Whereas value.x fetches the property of value named “x”,
value[x] tries to evaluate the expression x and uses the result
as the property name.


---------------------------------------------------------------------
Methods:  **Doing Shit**

var mack = [];
mack.push("Mack");
mack.push("the", "Knife");
console.log(mack);
// → ["Mack", "the", "Knife"]
console.log(mack.join(" "));
// → Mack the Knife
console.log(mack.pop());
// → Knife
console.log(mack);
// → ["Mack", "the"]

The push method can be used to add values to the end of an array. The pop
method does the opposite: it removes the value at the end of the array and
returns it. An array of strings can be flattened to a single string with
the join method. The argument given to join determines the text that
is glued between the array’s elements.

**The corresponding methods for adding and removing things at the start of an
array are called unshift and shift

**Slice, which takes a start index and an end index and returns an array
that has only the elements between those indices. The start index is inclusive,
the end index exclusive.

console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]


**The concat method can be used to glue arrays together,
similar to what the + operator does for strings.

---------------------------------------------------------------------
Objects:  **Grouping Shit**

Values of the type object are arbitrary collections of properties, and we
can add or remove these properties as we please. One way to create an
object is by using a curly brace notation.

var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running",
           "television"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false

Inside the curly braces, we can give a list of properties separated by
commas. Each property is written as a name, followed by a colon, followed
by an expression that provides a value for the property.


---------------------------------------------------------------------
Mutability:  **Changing Shit**

Objects, on the other hand, the content of a value can be
modified by changing its properties.

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10

The object1 and object2 variables grasp the same object, which is why
changing object1 also changes the value of object2. The variable object3
points to a different object, which initially contains the same properties
as object1 but lives a separate life.


---------------------------------------------------------------------
