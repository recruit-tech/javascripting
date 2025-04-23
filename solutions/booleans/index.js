console.log((0 == 1) === false);
console.log((0 === 1) === false);

console.log((10 == "10") === true);
console.log((10 === "10") === false);

console.log((0 && "") === 0);
console.log((1 && "") === "");
console.log((0 && 10) === 0);
console.log((1 && 10) === 10);

console.log((0 || "") === "");
console.log((1 || "") === 1);
console.log((0 || 10) === 10);
console.log((1 || 10) === 1);
