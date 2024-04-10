スプレッド構文 `...` を使うと、オブジェクトを展開することができます。

たとえば...

```js
const obj1 = { key1: "value1" };
const obj2 = { key2: "value2" };

console.log({ ...obj1, ...obj2 }); // -> { key1: "value1", key2: "value2" }
```

他にも配列を展開することもできます。

```js
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

console.log([...arr1, ...arr2]); // -> [0, 1, 2, 3, 4, 5]
```

## やってみよう

展開したオブジェクトのキーに重複があるとどうなるでしょうか？

検証のために `object_spreading.js` ファイルを作りましょう。

ファイルの中で、変数 `obj1` と `obj2` を次のようにして定義してください...

```js
const obj1 = {
  key1: "A",
  key2: "A",
};

const obj2 = {
  key2: "B",
  key3: "C",
};
```

スプレッド構文を使って `obj1`, `obj2` の順番で展開し合成したオブジェクトを生成してください。

そして `console.log()` を使って、合成したオブジェクトをターミナルに表示しましょう。

次のコマンドを実行し、あなたのプログラムがどのように動くか確認しましょう...

```bash
javascripting verify objects.js
```
