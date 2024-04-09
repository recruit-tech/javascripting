# 配列を使いこなそう

配列の中でいくつかの便利なメソッドが有ります。
`map`, `forEach`, `filter`, `find`, `some` などです。
これらの配列を使いこなせるようになると for ループや if 条件分岐などの愚直な処理を関数を組み合わせることで表現できます。

例えば以下のコードを見てみましょう。

```js
const sports = [
  "football",
  "baseball",
  "basketball",
  "hockey",
  "iceskate",
  "boxing",
  "swimming",
];

for (let i = 0; i < sports.length; i++) {
  if (sports[i].includes("ball")) {
    console.log(sports[i]);
  }
}
```

このコードでは for ループと if 文を使いましたが、 `Array` の `filter` 関数をうまく使うともう少し短く書くことが可能です。

```js
sports
  .filter((item) => item.includes("ball"))
  .forEach((item) => console.log(item));
```

では `sports` の文字列を大文字に変換してみましょう。
for ループを使うとこうでしょうか。

```js
for (let i = 0; i < sports.length; i++) {
  console.log(sports[i].toUpperCase());
}
```

これを `map` 関数を使ってみましょう。

```js
sports
  .map((item) => item.toUpperCase(item))
  .forEach((item) => console.log(item));
```

`map` 関数と `filter` 関数は配列から新しい配列を作るための関数です。
元の配列を変換するのが `map` 関数で、元の関数から条件にあった要素を見つけて抜き出すのが `filter` 関数です。

`some` 関数はこれらとは違って、条件を満たした要素が一つでも存在するなら真を、そうじゃなければ偽を返す関数です。
`find` 関数は条件を満たした要素を取得するための関数です。

この他にも色んな関数が存在します。
`reduce` や `slice` 等、他にも便利なものがあるので是非確認すると良いでしょう。

# 問題

`filter` と `map` を使って以下の配列 `numbers` から素数だけを導き出し、 16 進数に変換してください。

```js
// 0 - 99 までの数字
const numbers = [...Array(100).keys()];
```

hint: 16 進数への変換は `Number(i).toString(16)` でできます。
