非同期処理を取り扱うための `Promise` には便利な関数がいくつか用意されています。

ここでは `Promise.all` 関数と `Promise.any` 関数について紹介します。
この二つの関数は `Promise` を要素に持つ配列を引数に受け、 `Promise` を返します。

`Promise.all` 関数の返り値の `Promise` は、引数の配列内の `Promise` が全て解決されると解決されます。
返り値の `Promise` によって解決される値は、引数の配列の要素の `Promise` によって解決された値の配列です。
また、配列内の `Promise` のうちのいづれかが拒否されると返り値の `Promise` も拒否されます。

```js
// resolved after 3000ms
Promise.all([
  sleep(1000).then(() => "quick"),
  sleep(2000).then(() => "medium"),
  sleep(3000).then(() => "slow"),
]).then((v) => {
  console.log(v);
}); // ['quick', 'medium', 'slow']
```

`Promise.any` 関数では引数の配列の要素内の全ての `Promise` の解決のを待つのとは逆に、どれかひとつが解決されることで返り値の `Promise` も解決されます。
返り値の `Promise` によって解決される値は、引数の配列の要素の `Promise` の中で一番最初に解決された値になります。
また、配列内の `Promise` のうちのいづれかが拒否されると返り値の `Promise` も拒否されます。

```js
// resolved after 1000ms
Promise.any([
  sleep(1000).then(() => "quick"),
  sleep(2000).then(() => "medium"),
  sleep(3000).then(() => "slow"),
]).then((v) => {
  console.log(v);
}); // 'quick'
```

## やってみよう

`promise-all.js` ファイルを作りましょう。

まずは下記のように関数を定義しましょう。

```js
const fetchData = (key) => {
  return new Promise((resolve, reject) => {
    switch (key) {
      case "quick":
        setTimeout(() => {
          resolve("quick: hi!");
        }, 1000);
        break;

      case "medium":
        setTimeout(() => {
          resolve("medium: hello!!");
        }, 2000);
        break;

      case "slow":
        setTimeout(() => {
          resolve("slow: good morning!!!");
        }, 3000);
        break;

      default:
        reject(new Error(`unknown key: ${key}`));
        break;
    }
  });
};
```

`fetchData("quick")` , `fetchData("medium")` , `fetchData("slow")` の三つの返り値が全て解決されるまで待ち、その返り値を標準出力に表示してください。
また、 `fetchData("quick")` , `fetchData("medium")` , `fetchData("slow")` の三つの返り値のうちどれかひとつが解決されるまで待ち、最も早かった Promise の返り値を標準出力に表示してください。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

`javascripting verify promise-all.js`

もしも余裕がある人は `console.time` / `console.timeEnd` 関数を使ってそれぞれの処理が完了するまでに掛かった時間を計測して出力してみましょう。

- `console.time(label)`: 時間計測を開始します
- `console.timeEnd(label)`: 対応する `label` の時間計測を終了し、経過した時間を出力します
