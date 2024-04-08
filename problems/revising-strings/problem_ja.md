文字列の中身を書き換えたいことがあります。

文字列には用意された機能があります。文字列の中身を調べたり、書き換えたりできます。

たとえば `.replace()` メソッドは次のように使います...

```js
const example = "this example exists";
const replaced = example.replace("exists", "is awesome");
console.log(replaced);
```

## やってみよう

`revising-strings.js` ファイルを作りましょう。

ファイルの中で、文字列は `"pizza is alright"` を表す、変数 `pizza` を定義します。

`.replace()` メソッドを使って `alright` を `wonderful` に変更しましょう。
そしてその結果を `console.log()` を使ってコンソールに表示します。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

`javascripting verify revising-strings.js`
