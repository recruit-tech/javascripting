この課題では、 **for ループ** を使用して、配列の中の値を取得したり変更したりします。

配列の値にアクセスするには、整数を使用します。

配列の中のそれぞれの要素は、 `0` からはじまる数値で識別されます。

たとえば、次の配列内の `hi` は、数値 `1` で識別できます...

```js
const greetings = ["hello", "hi", "good morning"];
```

次のようにアクセスします...

```js
greetings[1];
```

**for ループ** の中では、変数 `i` を角括弧の中に入れて使います。整数を直接使うことはありません。

```js
for (let i = 0; i < greetings.length; i++) {
  console.log(greetings[i]);
}
```

## for...of

配列に入った要素を先頭から順に処理する場合、 `for...of` 構文が使えます。

```js
for (const greeting of greetings) {
  console.log(greeting);
}
```

## やってみよう

`looping-through-arrays.js` ファイルを作りましょう。

ファイルの中で、次の配列を表す、変数 `pets` を定義しましょう。

```js
["cat", "dog", "rat"];
```

for ループを作って、配列内の各文字列を複数形にしてターミナルに表示しましょう。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

```bash
javascripting verify looping-through-arrays.js
```
