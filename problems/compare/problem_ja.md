比較演算子には `==`, `===`, `!=`, `!==`, `>`, `<`, `<=`, `>=`, `<==`, `>==` があります。

特に `==` と `===` 、 `!=` と `!==` は何が違うのでしょうか？

`==` や `!=` では、暗黙の型変換が発生します。
例えば、 `36 == "36"` は真になります。

一方、 `===` や `!==` では暗黙の型変換が発生しません。
よって、 `36 === "36"` は偽になります。

基本的に暗黙の型変換を避けるべく `==` や `!=` は使用せず、 `===` や `!==` などを利用しましょう。

## やってみよう

`compare.js` ファイルを作りましょう。

ファイルの中で、変数 `str` と `num` を定義しましょう。

変数 `str` は **文字列型** の **36** を表します。
変数 `num` は **整数** の **36** を表します。

これらをまず `==` で比較して、結果をコンソールに出力してください。
次に `===` で比較して、結果をコンソールに出力してください。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

```bash
javascripting verify compare.js
```