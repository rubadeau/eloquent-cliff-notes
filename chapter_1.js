Chapter 1 Notes:

Comparisons:

console.log(3 > 2)
// → true
console.log(3 < 2)
// → false

The way strings are ordered is more or less alphabetic: uppercase letters are
always “less” than lowercase ones, so "Z" < "a" is true, and non-alphabetic
characters (!, -, and so on) are also included in the ordering.
console.log("Aardvark" < "Zoroaster")
// → true

Other similar operators are >= (greater than or equal to),
 <= (less than or equal to), == (equal to), and != (not equal to).
 console.log("Itchy" != "Scratchy")
 // → true


NaN:  There is only one value in JavaScript that is not equal to itself,
 and that is NaN, which stands for “not a number”
console.log(NaN === NaN)
// → false

-----------------------------------------------------------------------


Logical Operators:

 || = or
 The || operator denotes logical or. It produces true if either of the
 values given to it is true.
 console.log(false || true)
// → true
console.log(false || false)
// → false


&& = and
The && operator represents logical and. It is a binary operator, and its
result is true only if both the values given to it are true.
console.log(true && false)
// → false
console.log(true && true)
// → true

-----------------------------------------------------------------------

Not is written as an exclamation mark (!). It is a unary operator that
flips the value given to it—!true produces false and !false gives true.

When mixing these Boolean operators with arithmetic and other operators,
it is not always obvious when parentheses are needed. In practice, you can
usually get by with knowing that of the operators we have seen so far,
 || has the lowest precedence, then comes &&, then the comparison operators
 (>, ==, and so on), and then the rest. This order has been chosen such that,
 in typical expressions like the following one, as few parentheses as possible
 are necessary:

1 + 1 == 2 && 10 * 10 > 50

-----------------------------------------------------------------------

Conditional Operator:

The value on the left of the question mark “picks” which of the other two
values will come out. When it is true, the middle value is chosen, and when
it is false, the value on the right comes out.

console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2

-----------------------------------------------------------------------

Automatic Type Conversion ----  (type coercion) ----- WAT? --- **Watch out for this**

When an operator is applied to the “wrong” type of value, JavaScript will
quietly convert that value to the type it wants, using a set of rules that
often aren’t what you want or expect. This is called type coercion. So the
null in the first expression becomes 0, and the "5" in the second expression
becomes 5 (from string to number). Yet in the third expression, + tries string
concatenation before numeric addition, so the 1 is converted to "1"
(from number to string).

When something that doesn’t map to a number in an obvious way
(such as "five" or undefined) is converted to a number, the value NaN is
produced. Further arithmetic operations on NaN keep producing NaN, so if you
find yourself getting one of those in an unexpected place.

console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true


---------------------------------------------------------------------

Short-circuiting of logical operators

The logical operators && and || handle values of different types in a
peculiar way. They will convert the value on their left side to Boolean
type in order to decide what to do, but depending on the operator and
the result of that conversion, they return either the original left-hand
value or the right-hand value.

The || operator, for example, will return the value to its left when
that can be converted to true and will return the value on its right
otherwise. This conversion works as you’d expect for Boolean values and
should do something analogous for values of other types.

console.log(null || "user")
// → user
console.log("Karl" || "user")
// → Karl

This functionality allows the || operator to be used as a way to
fall back on a default value. If you give it an expression that
might produce an empty value on the left, the value on the right
will be used as a replacement in that case.

The && operator works similarly, but the other way around.
When the value to its left is something that converts to false, it returns
that value, and otherwise it returns the value on its right.

Another important property of these two operators is that the
expression to their right is evaluated only when necessary. In the case
of true || X, no matter what X is—even if it’s an expression that does
something terrible—the result will be true, and X is never evaluated.
The same goes for false && X, which is false and will ignore X. This is
called short-circuit evaluation.
