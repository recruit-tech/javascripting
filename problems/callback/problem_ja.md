HTTP リクエストなどの処理を同期的に実行すると、上から順に実行されるために非常に時間が掛かります。
この問題への対策として、処理を非同期に実行することが可能です。

非同期処理を記述する方法はいくつかありますが、中でも理解しやすいものとしてコールバック関数という方法があります。

たとえば `setTimeout(callback, ms)` という関数では、指定の時間が経過した後に実行されるようなコールバック関数を設定することができます。
第一引数にコールバック関数、第二引数にはコールバック関数が実行されるまでに待機する時間をミリ秒単位で指定します。

## やってみよう

`timeout.js` ファイルを作りましょう。

`setTimeout` 関数を使って 1 秒後に `"callback function is executed!"` と出力してください。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

`javascripting verify timeout.js`

もしも余裕がある人は `console.time` / `console.timeEnd` 関数を使ってコールバック関数が呼ばれるまでに掛かった時間を計測して出力してみましょう。

- `console.time(label)`: 時間計測を開始します
- `console.timeEnd(label)`: 対応する `label` の時間計測を終了し、経過した時間を出力します。
