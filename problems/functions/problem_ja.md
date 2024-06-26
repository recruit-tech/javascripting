関数はコードのまとまりです。入力を受け取ります。受け取った入力を処理し、結果を返します。

たとえば...

```js
function example(x) {
  return x * 2;
}
```

上の関数を、次のように **呼び出す** と、数値 `10` が得られます...

```js
example(5);
```

上記の例では、 `example` 関数が1つの数値を引数 (入力) として取り、その数に2を掛けて返します。

## やってみよう

`functions.js` ファイルを作りましょう。

ファイルの中で、関数 `eat` を定義します。
`eat` は、ひとつの引数 `food` を受け取ります。
その引数は文字列であることを期待します。

関数内で、 `food` 引数を次のように処理して返してください...

```js
return food + " tasted really good.";
```

`console.log()` の括弧の中で、 `eat()` 関数を呼んで、引数として `bananas` という文字列を与えてください。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

```bash
javascripting verify functions.js
```
