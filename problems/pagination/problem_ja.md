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
// range 関数はこのまま使ってください。
function range(start, end) {
  const r = [];
  for (let i = Math.floor(start); i < Math.floor(end); i++) {
    r.push(i + 1);
  }
  return r;
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

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

`javascripting verify pagination.js`

ヒント: 配列の始まりは現在のページから `size` の半分の長さ分引いたものを開始位置、半分の長さ分足したものを終了位置とすると定式化しやすいです。
