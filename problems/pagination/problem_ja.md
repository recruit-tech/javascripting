# Pagination!!

あなたは以下の仕様を持つ、ページネーションを作成しなさいと言われました。どのように作成しますか？作ってみて、テストを pass させてください。

# 問題

`pagination.js` ファイルを作りましょう。

次の条件を満たす `getPageNums` 関数を作ってください。

`current`, `total`, `size` の 3 つの変数が与えられます。
`total` は総ページ数を表します。
`current` は現在のページ数を表します。
`size` は返却したいページの長さを表します。
`total` からはみ出ないように、現在のページを中央値としてページの長さ分の配列の数字を返してください。

```javascript
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
  // ここにロジックを書いてください
}

console.log(getPageNums(1, 5, 5));
console.log(getPageNums(3, 5, 5));
console.log(getPageNums(4, 6, 5));
console.log(getPageNums(3, 8, 6));
console.log(getPageNums(4, 8, 6));
console.log(getPageNums(4, 8, 3));
console.log(getPageNums(8, 8, 3));
```

- `current = 1`, `total = 5`, `size = 5`
- return: `[1, 2, 3, 4, 5]`
- `current = 3`, `total = 5`, `size = 5`
- return: `[1, 2, 3, 4, 5]`
- `current = 4`, `total = 6`, `size = 5`
- return: `[2, 3, 4, 5, 6]`
- `current = 3`, `total = 8`, `size = 6`
- return: `[1, 2, 3, 4, 5, 6]`
- `current = 4`, `total = 8`, `size = 6`
- return: `[2, 3, 4, 5, 6, 7]`
- `current = 4`, `total = 8`, `size = 3`
- return: `[3, 4, 5]`
- `current = 8`, `total = 8`, `size = 3`
- return: `[6, 7, 8]`

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

`javascripting verify pagination.js`

ヒント: 配列の始まりは現在のページから `size` の半分の長さ分引いたものを開始位置、半分の長さ分足したものを終了位置とすると定式化しやすいです。
