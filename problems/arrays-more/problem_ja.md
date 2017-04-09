# 配列を使いこなそう

配列の中でいくつかの便利なメソッドが有ります。 `map` `forEach` `filter` `find` `some` などです。これらの配列を使いこなせるようになると for ループや if 条件分岐などの愚直な処理を関数を組み合わせることで表現できます。

例えば以下のコードを見てみましょう。

```
const sports = ['football', 'baseball', 'basketball', 'hockey', 'iceskate', 'boxing', 'swimming'];

// get ball sports

for (let i=0; i<sports.length; i++) {
  if (sports[i].includes('ball') {
    console.log(sports[i]);
  }
}
```

このコードではforループとif文を使いましたが、 Array のfilter関数をうまく使うともう少し短く書くことが可能です。

```
const sports = ['football', 'baseball', 'basketball', 'hockey', 'iceskate', 'boxing', 'swimming'];

sports.filter((item) => item.includes('ball')).forEach((item) => console.log(item))
```

では `sports` の文字列を大文字に変換してみましょう。forループを使うとこうでしょうか。

```
const sports = ['football', 'baseball', 'basketball', 'hockey', 'iceskate', 'boxing', 'swimming'];

// get ball sports

for (let i=0; i<sports.length; i++) {
  console.log(sports[i].toUpperCase())
}
```

これを map関数を使ってみましょう。

```
const sports = ['football', 'baseball', 'basketball', 'hockey', 'iceskate', 'boxing', 'swimming'];

sports.map((item) => item.toUpperCase(item)).forEach((item) => console.log(item));
```

map関数とfilter関数は配列から新しい配列を作るための関数です。元の配列を変換するのがmap関数で、元の関数から条件にあった要素を見つけて抜き出すのがfilter関数です。

some関数はこれらとは違って条件を満たした要素が一件でも存在するなら true をそうじゃなければfalseを返す関数です。find関数は条件を満たした要素を取得するための関数です。

この他にも色んな関数が存在します。reduceやslice等、他にも便利なものがあるので是非確認すると良いでしょう。

# 問題

filterとmapを使って以下の配列から素数だけを導き出し、16進数に変換してください。

```
// 0 - 99 までの数字
const numbers = [...Array(100).keys()];
const primes = <need to filter isPrime and map to HexString>;
console.log(primes)
```

hint1: 16進数への変換はNumber(i).toString(16)でできます。
hint2: filter 関数の callback には (element, index, array) がとれます。
