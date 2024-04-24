/**
 * @description `range` 関数はこのまま使ってください。
 *
 * @param {number} start 範囲の開始となる数値 (整数)
 * @param {number} end 範囲の終了となる数値 (整数)
 * @returns {number[]} 範囲を示す配列 (`[start, end)`)
 * @throws {Error} `start` が `end` より大きい場合にエラーが throw されます
 *
 * @example range(2, 5); // [2, 3, 4]
 */
function range(start, end) {
  if (start > end) {
    throw new Error(
      `range 関数の第一引数 \`start\` は第二引数 \`end\` の値以下である必要があります (start: ${start}, end: ${end})`,
    );
  }

  return new Array(end - start).fill(0).map((_, i) => i + start);
}

function getPageNums(current, total, size) {
  const s = current - Math.floor((size - 1) / 2);
  const start = s < 1 ? 1 : s + size > total ? total - size + 1 : s;
  return range(start, start + size);
}

console.log(getPageNums(1, 5, 5));
console.log(getPageNums(3, 5, 5));
console.log(getPageNums(4, 6, 5));
console.log(getPageNums(3, 8, 6));
console.log(getPageNums(4, 8, 6));
console.log(getPageNums(4, 8, 3));
console.log(getPageNums(8, 8, 3));
