function range(start, end) {
  const r = [];
  for (let i = Math.floor(start); i < Math.floor(end); i++) {
    r.push(i + 1);
  }
  return r;
}

function getPageNums(current, total, size) {
  const s = current - size / 2;
  const e = current + size / 2;
  const start = s < 0 ? 0 : e > total ? total - size : s;
  const end = s < 0 ? size : e > total ? total : e;
  const ranges = range(start, end);
  return ranges;
}

console.log(getPageNums(1, 5, 5));
console.log(getPageNums(3, 5, 5));
console.log(getPageNums(4, 6, 5));
console.log(getPageNums(3, 8, 6));
console.log(getPageNums(4, 8, 6));
console.log(getPageNums(4, 8, 3));
console.log(getPageNums(8, 8, 3));
