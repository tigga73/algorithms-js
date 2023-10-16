// Big-O = O(n)
const fibonacciSequence = (n) => {
  const fibonacci = [0, 1];

  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }

  return fibonacci;
};

console.log(fibonacciSequence(3)); // [0,1]
console.log(fibonacciSequence(3)); // [0,1,1]
console.log(fibonacciSequence(7)); // [0,1,1,2,3,5,8]
