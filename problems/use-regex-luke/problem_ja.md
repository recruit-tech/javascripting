文字列の中身にとあるパターンがあり、そのパターンを見つけたい時があります。

たとえば、文字列の中に電話番号がある (9 桁以上の数字がある) 時などです。

そのような場合、以下のように正規表現を使用してマッチしているものを見つけます。

```js
const example =
  "Hello World My Phone Number is 111222333. and this is my zip-code 1112222";
const result = example.match(/(\d{9,})/g);
console.log(result[0]); //1111222333
```

## やってみよう

`regex-strings.js` ファイルを作りましょう。

与えられた文字列の中から全ての郵便番号を見つけましょう。

郵便番号の定義は 7 文字の数字が並んでいるものと 3 文字と 4 文字の数字がハイフンでつながっているものを指します。

以下のものは郵便番号です。

```
1234567
111-2222
```

以下のものは郵便番号ではありません。

```
12345678
1111-222
```

まずは下記のように文字列を定義しましょう。

```js
const zipcodes = `
correct zipcode 1234567
correct zipcode 111-2222
incorrect zipcode 12345678
incorrect zipcode 1111-222
`;
```

この文字列に対して、郵便番号のみにマッチする正規表現と `.match()` メソッドを使って郵便番号を抜き出して `console.log` を使って出力しましょう。
必要があれば `.trim()` メソッドを使って余分な空白や改行などを削除してください。

結果が 1234567 と 111-2222 の 2 つが出て、それ以外が出ないことを確認してください。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

`javascripting verify regex-strings.js`

もしも余裕がある人は以下の文字列で正規表現を使って郵便番号かどうかをチェックしましょう。

```js
const zipcodes = `
correct zipcode 1234567
correct zipcode 111-2222
incorrect zipcode 12345678
incorrect zipcode 1111-222
incorrect zipcode 12345678
incorrect zipcode 1111-222
`;
```

結果が 1234567 と 111-2222 の 2 つが出てそれ以外が出ないことを確認してください。
ヒント：否定 (`^`) を使うといいかもしれません。
