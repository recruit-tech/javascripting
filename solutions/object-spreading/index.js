const obj1 = {
  key1: "A",
  key2: "A",
};

const obj2 = {
  key2: "B",
  key3: "C",
};

console.log({ ...obj1, ...obj2 });
