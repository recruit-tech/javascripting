変数は特定の値を示す名前です。
`const` や `let` を使って変数を定義します。 `const`, `let` につづけて変数の名前を書きます。

次の例は変数を定義します。定義した変数は特定の値を示します。

```js
const example = "some string";
```

`const` を使って **宣言** します。つづいて、等号を使い、変数が示す値を **定義** します。

これを「変数に値を代入する」と言います。

## `const` or `let` ?

`const` と `let` の違いは **再代入ができるか** です。

`const` で宣言した変数には再代入ができませんが、 `let` の場合は再代入ができます。

意図しない再代入を防ぐために、基本的には `const` を使いましょう。
`let` は再代入が必要な場合のみに利用してください。

## やってみよう

`variables.js` ファイルを作りましょう。

ファイルの中で `example` 変数を宣言します。

**変数** `example` に値 `"some string"` を代入します。

そして `console.log()` を使い、変数 `example` をコンソールに表示します。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

`javascripting verify variables.js`
