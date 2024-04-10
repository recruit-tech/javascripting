分割代入とは、配列やオブジェクトから値を取り出して変数に代入する操作のことです。

JavaScript では以下のような分割代入ができます。

```js
const [first, second] = [1, 2];
console.log(first, second); // -> 1 2

const object = {
  hoge: "fuga",
  piyo: "buzz",
};
const { hoge, piyo } = object;
console.log(hoge, piyo); // -> fuga buzz
```

また、スプレッド構文 `...` を使って残りの値をまとめて変数に入れることもできます。

```js
const [first, second, ...rest] = [1, 2, 3, 4];
console.log(rest); // -> [3, 4]
```

```js
const object = {
  hoge: "fuga",
  piyo: "buzz",
  foo: "bar",
};
const { hoge, ...rest } = object;
console.log(rest); // -> { piyo: "buzz", foo: "bar" }
```

更には関数の引数など、さまざまな場所で使うことができます。

```js
function f({ hoge, piyo }) {
  console.log(hoge, piyo);
}
f({ hoge: "fuga", piyo: "buzz" }); // -> fuga buzz
```

## やってみよう

`destructuring.js` ファイルを作りましょう。

ファイルの中で、変数 `pizza` を次のようにして定義してください...

```js
const pizza = {
  toppings: ["cheese", "sauce", "pepperoni"],
  crust: "deep dish",
  serves: 2,
};
```

変数 `pizza` から `toppings` プロパティの値を分割代入を使って新しい変数に入れてください。

そして `toppings` の 1 番目と 2 番目の値を、また分割代入を使って新しい変数に入れてください。

最後に 2 番目 1 番目の順に `console.log` を使って出力してください。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

```bash
javascripting verify destructuring.js
```
