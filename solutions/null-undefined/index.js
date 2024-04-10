const obj = {};
console.log(obj.a === undefined);

const arr = [];
console.log(arr[0] === undefined);

const id = (x) => x;
console.log(id() === undefined);

const noop = () => {};
console.log(noop() === undefined);

console.log(typeof null === "object");
console.log(typeof undefined === "undefined");

console.log((obj || "default") === obj);
console.log((obj ?? "default") === obj);

console.log((undefined || "default") === "default");
console.log((undefined ?? "default") === "default");

console.log((false || "default") === "default");
console.log((false ?? "default") === false);
