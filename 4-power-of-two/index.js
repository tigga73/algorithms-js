// Big-O = O(logn)
const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }

    n = n / 2;
  }

  return true;
};

// Big-O = O(1)
const isPowerOfTwoBitwise = (n) => {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
};

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false
console.log(isPowerOfTwo(8)); // true

console.log('*----- Bitwise ----*');

console.log(isPowerOfTwoBitwise(1)); // true
console.log(isPowerOfTwoBitwise(2)); // true
console.log(isPowerOfTwoBitwise(5)); // false
console.log(isPowerOfTwoBitwise(8)); // true
