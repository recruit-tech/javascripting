`Promise` は非同期処理を簡潔に記述するためのオブジェクトです。

以下は指定時間だけ待機する Promise を返す `sleep` 関数です。

```js
const sleep = (ms) => {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(new Error("sleep duration should be positive number"));
      return;
    }

    setTimeout(resolve, ms);
  });
};
```

この `sleep` 関数は以下のように扱うことができます。

```js
sleep(1000)
  .then(() => {
    console.log("after sleep 1000ms");
  })
  .catch((e) => {
    console.error(e);
  });
```

また、 `.then` や `.catch` は `Promise` オブジェクトを返すため、非同期処理を繋げて書くことができます。

```js
fetch(url)
  .then((res) => res.text())
  .then((text) => {
    console.log(text);
  })
  .catch((e) => {
    console.error(e);
  });
```

## コールバック地獄の解消

コールバック関数を `Promise` に変換して取り扱うことで、 "コールバック地獄" と呼ばれるようなコールバック関数のネストを解消することが可能です。

コールバック地獄とは以下のような記述のことです。

```js
a(() => {
  b(() => {
    c(() => {
      d(() => {
        // :
      });
    });
  });
});
```

これを `Promise` を使うことで以下のように書くことができるでしょう。

```js
a().then(b).then(c).then(d);
```

## やってみよう

`promise.js` ファイルを作りましょう。

まずは下記のように関数を定義しましょう。

```js
const fetchData = (key) => {
  return new Promise((resolve, reject) => {
    if (key !== "greeting") {
      reject(new Error(`unknown key: ${key}`));
      return;
    }

    setTimeout(() => {
      resolve("Hello");
    }, 1000);
  });
};

const processData = (data) => `data: ${data}`;
```

`fetchData` 関数で得られた値を `processData` 関数で加工し、 `console.log` で出力するコードを書いてみましょう。
`fetchData` 関数の引数には `"greeting"` を渡すパターンと `"credential"` を渡すパターンを書き、エラーが発生した際はそのエラーを `console.error` を使って出力してください。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

`javascripting verify promise.js`
