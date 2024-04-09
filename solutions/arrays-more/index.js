const numbers = [...Array(100).keys()];

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

const primes = numbers.filter(isPrime).map((num) => Number(num).toString(16));

console.log(primes);
