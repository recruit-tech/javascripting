Fetch API は JavaScript で HTTPリクエストを実行するためのAPIです。
`fetch` 関数の戻り値は `Promise` です。第一引数に URL、第二引数には任意でリクエストのメソッド(デフォルトは `GET`)、ヘッダー、リクエストボディなどを設定できます。
以下のコードは使用例です。

```js
// async awaitを利用する場合
async function fetchData() {
  const response = await fetch("https://example.com");
  // 200 – 299 の範囲外のステータスの時
  if (!response.ok) {
    throw new Error(`Error! Status: ${response.status}`);
  }
  // レスポンスのボディをJSONとして解析
  const data = await response.json();
  return data;
}

// fetchData関数を呼び出す
const data = await fetchData();
```

`fetch` 関数の戻り値の `Promise` が解決されると、HTTPレスポンスが `Response` オブジェクトとして取得できます。
この `Response` オブジェクトはいくつかのメソッドを持っています。例えば `.json()` メソッドは、レスポンスボディの中身を JSON として解析し、オブジェクトなどの結果を `Promise` で返します。

## やってみよう

`fetch.mjs` ファイルを作りましょう。

今回は、https://dummyjson.com というサイトを利用して、HTTPリクエストを送ってみましょう。
下記は、https://dummyjson.com へのリクエストとレスポンスの例です。https://dummyjson.com/todos/1 を GET すると、ステータスコードが200で、ボディが「Todoを表すJSON文字列」であるレスポンスが得られます。

```js
await fetch("https://dummyjson.com/todos/1");

/* response body */
// {"id":1,"todo":"Do something nice for someone you care about","completed":false,"userId":152}
```

`console.log()` を使って、https://dummyjson.com/todos/1 のレスポンスボディの一部である `todo` プロパティの値を表示しましょう。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

```bash
javascripting verify fetch.mjs
```

ここでは詳しくは述べませんが、ファイル拡張子を `.mjs` にすることで Top-level awaitを利用できます。(Top-level await を使用しているファイル全体が１つの大きな `async` 関数のように機能します。)
