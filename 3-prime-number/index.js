// Big-O = O(sqrt(n))
const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  const sqrtN = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= sqrtN; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false
