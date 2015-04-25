Chapter 2:


Side Effects:
It could display something on the screen—that counts as changing the world—or
it could change the internal state of the machine in a way that will affect the
statements that come after it. These changes are called side effects.

var = this is a keyword that will assign an internal state.  They catch and hold
onto values.
You should imagine variables as tentacles, rather than boxes. They do not
contain values; they grasp them.

The Environment:
The collection of variables and their values that exist at a given
time is called the environment.
*****Snapshot in time******

Functions:
A function is a piece of prgram wrapperd in a value.
Executing a function is called invoking, calling, or applying it. You can
call a function by putting parentheses after an expression that produces a
function value. Usually you’ll directly use the name of the variable that
holds the function. The values between the parentheses are given to the
program inside the function. Values given to functions are called arguments.


---------------------------------------------------------------------
Control Flow:
When your program contains more than one statement, the statements are
executed, predictably, from top to bottom.

Conditional Execution:
Conditional execution is written with the if keyword in JavaScript. In the
simple case, we just want some code to be executed if, and only if,
a certain condition holds.

var theNumber = Number(prompt("Pick a number", ""));
if (!isNaN(theNumber))
  alert("Your number is the square root of " +
        theNumber * theNumber);

You often won’t just have code that executes when a condition holds true,
but also code that handles the other case. This alternate path is represented
by the second arrow in the diagram. The else keyword can be used, together
with if, to create two separate, alternative execution paths.


var theNumber = Number(prompt("Pick a number", ""));
  if (!isNaN(theNumber))
    alert("Your number is the square root of " +
          theNumber * theNumber);
  else
    alert("Hey. Why didn't you give me a number?");

While Loops:
A statement starting with the keyword while creates a loop. The word while is
followed by an expression in parentheses and then a statement, much like if.
The loop executes that statement as long as the expression produces a value
that is true when converted to Boolean type.



For Loops:
Many loops follow the pattern seen in the previous while examples. First, a
“counter” variable is created to track the progress of the loop. Then comes a
while loop, whose test expression usually checks whether the counter has
reached some boundary yet. At the end of the loop body, the counter is
updated to track progress.

Because this pattern is so common, JavaScript and similar languages provide
a slightly shorter and more comprehensive form, the for loop.
for (var number = 0; number <= 12; number = number + 2)
  console.log(number);
// → 0
// → 2
//   … etcetera
The parentheses after a for keyword must contain two semicolons. The part
before the first semicolon initializes the loop, usually by defining a variable.
The second part is the expression that checks whether the loop must continue.
The final part updates the state of the loop after every iteration. In most
cases, this is shorter and clearer than a while construct.




---------------------------------------------------------------------
Updating variables succinctly:

Especially when looping, a program often needs to “update” a variable to hold
a value based on that variable’s previous value.

counter = counter + 1;
JavaScript provides a shortcut for this:

counter += 1;

Similar shortcuts work for many other operators, such as result *= 2 to double
result or counter -= 1 to count downward.

This allows us to shorten our counting example a little more.

for (var number = 0; number <= 12; number += 2)
  console.log(number);

For counter += 1 and counter -= 1, there are even shorter
equivalents: counter++ and counter--.
