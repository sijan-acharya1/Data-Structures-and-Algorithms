/*
// Fibonacci sequence
function fibonacci(n) {
  const fib = [0, 1];
  for(let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib; 
}

console.log(fibonacci(2)); // [0,1]
console.log(fibonacci(3)); // [0,1,1]
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]


// Factorial of a number

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
  result = result * i;
}
return result;
}

console.log(factorial(0)) // 1
console.log(factorial(1)) // 1
console.log(factorial(5)) // 1
*/
// Prime number
function isPrime(n) {
  if (n < 2) {
    return false;
  } 
  for(let i = 2; i < n; i++) {
    if (n%i === 0) {
      return false;
    }
  }
  return true;
}

console.log(5 % 2);

console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false