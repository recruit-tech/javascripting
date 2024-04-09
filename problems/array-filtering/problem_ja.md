配列にはいろいろな操作方法があります。

よくやる処理に、配列にフィルターをかけて特定の値を取り出すというものがあります。

フィルターをかけるには、 `.filter()` メソッドを使います。

たとえば...

```js
const pets = ["cat", "dog", "elephant"];

const filtered = pets.filter((pet) => pet !== "elephant");
```

`フィルターした` 配列の中には `cat` と `dog` だけが残ります。

## やってみよう

`array-filtering.js` ファイルを作りましょう。

ファイルの中で、 次の配列を表す、変数 `numbers` を定義しましょう。

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

次に変数 `numbers` から偶数のみを抜き出した変数 `filtered` を定義しましょう。

最後に `console.log()` を使って、 `フィルターした` 配列をターミナルに表示しましょう。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

```bash
javascripting verify array-filtering.js
```
