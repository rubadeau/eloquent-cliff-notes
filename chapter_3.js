Chapter 3

Functions:

Functions are the bread and butter of JavaScript programming.

var square = function(x) {
  return x * x;
};

console.log(square(12));
// → 144

Functions have a set of parameters (in this case, only x) and a body, which
contains the statements that are to be executed when the function is called.
The function body must always be wrapped in braces, even when it consists
of only a single statement

A return statement determines the value the function returns. When control
comes across such a statement, it immediately jumps out of the current
function and gives the returned value to the code that called the function.

--------------------------------------------------------------
Parameters and Scopes:

An important property of functions is that the variables created inside of them,
including their parameters, are local to the function. This means, for example,
that the result variable in the power example will be newly created every time
the function is called, and these separate incarnations do not interfere
with each other.

This “localness” of variables applies only to the parameters and to variables
declared with the var keyword inside the function body. Variables declared
outside of any function are called global, because they are visible
throughout the program. It is possible to access such variables from inside
a function, as long as you haven’t declared a local variable with the same name.

***There may be times when it will be effective to have certain "global" variables
but for most practice you want to limit the scope of your functions so you do not
get unintendend "re-assignment".***

This applies more heavily to "Nested Scopes" where things get complicated.

----> JavaScript distinguishes not just between global and local variables.
Functions can be created inside other functions, producing several degrees of locality.

--------------------------------------------------------------
The Call Stack: ----- **Dont blow your stack**

It will be helpful to take a closer look at the way control flows through
functions. Here is a simple program that makes a few function calls:

function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

A run through this program goes roughly like this: the call to greet
causes control to jump to the start of that function (line 2). It calls
console.log (a built-in browser function), which takes control, does its job,
and then returns control to line 2. Then it reaches the end of the greet
function, so it returns to the place that called it, at line 4. The line after
that calls console.log again.

We could show the flow of control schematically like this:

top
   greet
        console.log
   greet
top
   console.log
top

Because a function has to jump back to the place of the call when
it returns, the computer must remember the context from which the
function was called. In one case, console.log has to jump back to the
greet function. In the other case, it jumps back to the end of the program.

Stack Overflow ---->

function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");
// → ??

--------------------------------------------------------------
Closure:

being able to reference a specific instance of local variables in an
enclosing function—is called closure. A function that “closes over” some
local variables is called a closure. This behavior not only frees you from
having to worry about lifetimes of variables but also allows for some creative
use of function values.

function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5));
// → 10

In the example, multiplier returns a frozen chunk of code that gets stored in
the twice variable. The last line then calls the value in this variable,
causing the frozen code (return number * factor;) to be activated. It still
has access to the factor variable from the multiplier call that created it,
and in addition it gets access to the argument passed when unfreezing it, 5,
through its number parameter.

--------------------------------------------------------------
Recursion:

A function that calls itself is called recursive.

**Need Review**

More on this to come
