JavaScriptでは、関数定義の内側から外側の変数を参照できます。

```js
const makeCounter = () => {
  // makeCounterを実行すると、count変数が宣言される
  let count = 0;
  // count変数は、incrementの関数定義の外側にある

  // incrementの関数定義
  const increment = () => {
    // incrementの関数定義の内部にcount変数はない

    count++; // 外側のcount変数を参照して更新できる
    return count; // 外側のcount変数を参照してreturnできる
  };

  return [increment];
};

const [increment] = makeCounter();
console.log(increment()); // 1
console.log(increment()); // 2
```

このような動作は、クロージャ（定義時の外側の環境を知っている関数）によって実現されますが、詳細な説明は割愛します。ここでは「JavaScriptの関数では、定義の内側から外側の変数を参照できる」ということがわかっていれば大丈夫です。

また、`increment`実行時に「`makeCounter`の実行が終了しているにもかかわらず`count`変数を利用できる」ことに驚くかもしれません。

一部の言語（C言語など）では、関数内で定義された変数は、その関数の実行が終了すると同時に消えてしまって利用不可能になります。しかしJavaScriptでは、関数によって参照される可能性のある変数は消えません。

## やってみよう

`increment`（プラス1）だけではなく、`decrement`（マイナス1）もできるカウンターを作りましょう。

`closure.js`ファイルを作成し、以下のテンプレートをコピペしてコードを書いてみてください。

```js
// テンプレート
const makeCounter = () => {
  // ここにコードを書く
};

// 以下は変更しない
const [increment, decrement] = makeCounter();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(decrement()); // 1
console.log(decrement()); // 0
console.log(increment()); // 1
```

コードが書けたら次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

```bash
javascripting verify closure.js
```
