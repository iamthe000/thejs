# thejs

A lightweight JavaScript utility library that provides alternative control flow functions similar to `if-else` and `for` loops.

## Usage

You can use this library by importing the functions into your project manually:

```js
import { theif, thefor } from "./thejs.js";
```

## Functions

### `theif(conditions, actions)`

A function that mimics `if-else` statements using an array of conditions and corresponding actions.

#### Parameters
- `conditions`: An array of boolean values or functions returning boolean values.
- `actions`: An array of functions that will be executed when their corresponding condition is `true`.
  - If a condition is the string `"else"`, its corresponding action is executed if no previous conditions were met.
  - If `actions` has one more element than `conditions`, the last function acts as a default case (similar to `else`).

#### Example Usage

```js
const isMorning = () => new Date().getHours() < 12;
const isAfternoon = () => new Date().getHours() < 18;

theif([
  isMorning,
  isAfternoon,
  "else"
], [
  () => console.log("Good morning!"),
  () => console.log("Good afternoon!"),
  () => console.log("Good evening!")
]);
```

### `thefor(count, action)`

A function that provides loop functionality similar to `for` and `while` loops.

#### Parameters
- `count`: A number specifying the loop iterations, or the string `"i"` to create an infinite loop.
- `action`: A function that executes for each iteration. If `count` is a number, the function receives the iteration index as an argument.

#### Example Usage

**Finite loop:**
```js
thefor(5, (i) => console.log(`Iteration: ${i}`));
```

**Infinite loop:**
```js
thefor("i", () => console.log("Running forever..."));
```

## License

This project is licensed under the MIT License.
