// Big-O = O(2^n)
const recursiveFibonacciSequence = (n) => {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacciSequence(n - 1) + recursiveFibonacciSequence(n - 2);
};

console.log(recursiveFibonacciSequence(0)); // 0
console.log(recursiveFibonacciSequence(3)); // 2
console.log(recursiveFibonacciSequence(7)); // 13
