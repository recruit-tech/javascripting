`async` / `await` は `Promise` を同期的な記述で取り扱うための糖衣構文です。

`Promise` では `.then` と `.catch` を使って非同期処理を記述していました。
しかし、以下のような入れ子になってしまうようなコードを書くと可読性に問題が生じます。

```js
const displayMyPosts = () => {
  return fetchMe()
    .then((me) => {
      fetchPosts({ userId: me.id })
        .then((posts) => {
          console.log(posts);
        })
        .catch((e) => {
          console.error(e);
        });
    })
    .catch((e) => {
      console.error(e);
    });
};
```

そこで `async` キーワードと `await` キーワードを使うことで、可読性を保ちながら非同期処理が記述できます。

```js
const displayMyPosts = async () => {
  try {
    const me = await fetchMe();
    const posts = await fetchPosts({ userId: me.id });
    console.log(posts);
  } catch (e) {
    console.error(e);
  }
};
```

関数宣言や関数定義の前に `async` キーワードをつけることで、その関数が非同期処理を扱うことを示すことができます。
`async` キーワードをつけた関数内では `await` キーワードを利用することができるようになり、関数の返り値に `Promise` で wrap されます。

`await` キーワードは `Promise` の前につけることで、その `Promise` が解決されるまで関数の実行を待機させることができます。
また、関数の返り値は `Promise` によって解決された値になり、 `Promise` が拒否された場合にはエラーを `throw` します。

## やってみよう

`async-await.js` ファイルを作りましょう。

まずは下記のように関数と配列を定義しましょう。

```js
const fetchPosts = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        `${user}: post1`,
        `${user}: post2`,
        `${user}: post3`,
        `${user}: post4`,
        `${user}: post5`,
      ]);
    }, 1000);
  });
};

const users = ["user1", "user2", "user3", "user4", "user5"];
```

`users` 配列の中に入った文字列をそれぞれ `fetchPosts` 関数に渡し、各ユーザーの投稿を標準出力に表示する `displayAllPosts` 関数を定義し実行してください。

出力は以下のようになるでしょう...

```
user1: post1
user1: post2
user1: post3
user1: post4
user1: post5
user2: post1
:
```

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

`javascripting verify async-await.js`

もしも余裕がある人は `Promise.all` 関数を使ってデータ取得を並列に実行してみましょう。
