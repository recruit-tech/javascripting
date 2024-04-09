アロー関数を使うと `function` で宣言する関数をより簡素に書くことができます。

たとえば...

```js
function example(x) {
  return x * 2;
}

const example = (x) => {
  return x * 2;
};
```

上記の 2 つの `example` 関数は全く同じ処理をする関数になります。

また、 `return` のみの関数はより省略して以下のように書くこともできます。

```js
const example = (x) => x * 2;
```

`function` で宣言した関数との主な違いは、関数内で `this` が指し示すものが異なる点があります。
しかし `this` の挙動は分かりづらくバグを生む原因となりやすいため、現代の JavaScript では `this` の仕様は避けるべきです。

## やってみよう

`arrow-functions.js` ファイルを作りましょう。

一つ前の課題で実装した `eat` 関数をアロー関数で書き直してみましょう。

```js
function eat(food) {
  return food + " tasted really good.";
}
```

`console.log()` の括弧の中で、 `eat()` 関数を呼んで、引数として `apples` という文字列を与えてください。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

```bash
javascripting verify arrow-functions.js
```
