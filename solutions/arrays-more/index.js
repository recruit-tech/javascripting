const numbers = [...Array(100).keys()];

const primes = numbers
  .filter(
    (num, i, nums) =>
      num >= 2 && !nums.some((n) => n >= 2 && n < num && num % n === 0),
  )
  .map((num) => Number(num).toString(16));

console.log(primes);
