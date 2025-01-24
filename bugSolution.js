function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    throw new Error('Parameters cannot be null or undefined');
  }
  return a + b; 
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // throws error
console.log(foo(1, undefined)); // throws error
console.log(foo(undefined, null)); // throws error