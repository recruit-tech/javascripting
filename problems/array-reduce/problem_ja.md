配列に対する処理で、結果を順々に蓄積していきたい時があります。

このような処理では `.reduce()` メソッドが便利です。

`reduce` のコールバックでは、第一引数に「これまでの結果」が渡されます。
この第一引数は `acc` と書くことが多く、`accumulator` (蓄積していく値) の略です。
第二引数には「現在の要素」が渡され、こちらは `cur` (`current value` の略) と書くことがよくあります。

まずは文字列で、`acc` と `cur` の流れを見てみましょう。

```js
const letters = ["A", "B", "C"];
const joined = letters.reduce((acc, cur) => acc + cur, "");

console.log(joined); // "ABC"
```

この時、内部では次のように値が渡されます。

- 1回目: `acc = ""`, `cur = "A"` → 次の `acc` は `"A"`
- 2回目: `acc = "A"`, `cur = "B"` → 次の `acc` は `"AB"`
- 3回目: `acc = "AB"`, `cur = "C"` → 最終結果は `"ABC"`


少し応用した使い方になりますが、`reduce` は数値の合計だけでなく、関数を順番に適用する「関数パイプライン」のような使い方もできます。
関数も値なので、配列の要素に入れられます。

例えば次のコードでは、`steps` に入った関数を先頭から順番に実行していきます。

```js
const plus2 = (x) => x + 2;
const multiple3 = (x) => x * 3;
const minus1 = (x) => x - 1;

const steps = [plus2, multiple3, minus1];
const initialValue = 5;

const result = steps.reduce((acc, fn) => fn(acc), initialValue);

console.log(result); // 20
```

この例だと、内部では次のように関数が実行されていきます。
1回目: `plus2(5)`
2回目: `multiple3(7)`
3回目: `minus1(21)`
このようなケースでは配列の順番によっては、結果が変わることも覚えておいてください。


## やってみよう

`array-reduce.js` ファイルを作りましょう。

ファイルの中で、以下の初期ユーザー情報(オブジェクト)を定義しましょう。

```js
const userInfo = {
  name: "Taro",
  age: 18,
};
```

そして、引数のオブジェクトに、下記のような各属性情報を追加してreturnするような関数を作ってください。
1. `user.age >= 20`なら、`category`という属性に `"adult"`を、そうでないなら `"minor"`を設定する関数
2. `isActive`という属性に`true`を追加する関数
3. `greeting`という属性に `"Hello " + user.name`の文字列を設定する関数

例えば、`isActive`については以下のような関数を用意するのがよいでしょう
```js
const addIsActiveFlag = (user) => {
  return { ...user, isActive: true };
};
```

最後に`reduce` を使って、`userInfo` を初期値として関数を先頭から順番に適用し、全部の属性を追加した情報を作ってください。
そして `console.log(result)` を実行して、標準出力に表示しましょう。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

```bash
javascripting verify array-reduce.js
```
