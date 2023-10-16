// Big-O = O(n)
const factorial = (n) => {
  let result = 1;

  for (let i = n; i > 0; i--) {
    result *= i;
  }

  return result;
};

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120
