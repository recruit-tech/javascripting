文字列の中身にとあるパターンがあり、そのパターンを見つけたい時があります。

たとえば、文字列の中に電話番号がある(9桁以上の数字がある)時などです。

そのような場合、以下のように記述してマッチしているものを見つけます。

```js
const example =
  "Hello World My Phone Number is 111222333. and this is my zip-code 1112222";
const result = example.match(/(\d{9,})/g);
console.log(result && result[0]); //1111222333
```

## やってみよう

`regex-strings.js` ファイルを作りましょう。

与えられた文字列の中から全ての郵便番号を見つけましょう。

郵便番号の定義は7文字の数字が並んでいるものと3文字と4文字の数字がハイフンでつながっているものを指します。

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

```
const zipcodes = `
correct zipcode 1234567
correct zipcode 111-2222
incorrect zipcode 12345678
incorrect zipcode 1111-222
`;

const results = zipcodes.match(/<need correct regex strings here>/g).map(zipcode => zipcode.trim());
console.log(results);
```

`.match()` メソッドと正規表現を使って実行しましょう。

結果が1234567と111-2222の2つが出てそれ以外が出ないことを確認してください。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

`javascripting verify regex-strings.js`

もしも余裕がある人は以下の文字列で正規表現を使って郵便番号かどうかをチェックしましょう。

```
const zipcodes = `
correct zipcode 1234567
correct zipcode 111-2222
incorrect zipcode 12345678
incorrect zipcode 1111-222
incorrect zipcode 12345678
incorrect zipcode 1111-222
`;

const results = zipcodes.match(/<need correct regex strings here>/g).map(zipcode => zipcode.trim());
console.log(results);
```

結果が1234567と111-2222の2つが出てそれ以外が出ないことを確認してください。
ヒント：否定(^)を使うといいかもしれません。
