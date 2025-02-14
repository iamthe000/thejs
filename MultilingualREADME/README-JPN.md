<details><summary>Language</summary>

🇬🇧[English in README](/README.md) <br>
🇨🇳[中文版README](README-CHI.md)

</details>

# thejs

軽量な JavaScript ユーティリティライブラリで、`if-else` や `for` ループに代わる制御フロー関数、およびリスト管理機能を提供します。

## 使い方

このライブラリの関数をプロジェクトに手動でインポートして使用できます。

```js
import { theif, thefor, thelist, getFromList, addToList, removeFromList } from "./thejs.js";
```

## 関数一覧

### `theif(conditions, actions)`

`if-else` 文を配列ベースの条件とアクションで模倣する関数。

#### パラメータ
- `conditions`: 真偽値または真偽値を返す関数の配列。
- `actions`: 各条件が `true` のときに実行される関数の配列。
  - 条件が `"else"` の場合、それまでの条件がすべて `false` だったときに実行される。
  - `actions` の要素数が `conditions` より 1 つ多い場合、最後の関数はデフォルトの `else` として動作する。

#### 使用例

```js
const isMorning = () => new Date().getHours() < 12;
const isAfternoon = () => new Date().getHours() < 18;

theif([
  isMorning,
  isAfternoon,
  "else"
], [
  () => console.log("おはようございます！"),
  () => console.log("こんにちは！"),
  () => console.log("こんばんは！")
]);
```

### `thefor(count, action)`

`for` や `while` ループと同様の繰り返し処理を提供する関数。

#### パラメータ
- `count`: ループの回数を指定する数値、または `"infinity"` で無限ループを実行。
- `action`: 各ループごとに実行する関数。`count` が数値の場合、関数の引数として現在のループ回数（インデックス）が渡される。

#### 使用例

**有限ループ:**
```js
thefor(5, (i) => console.log(`ループ回数: ${i}`));
```

**無限ループ:**
```js
thefor("infinity", () => console.log("永遠に実行中..."));
```

### `thelist(name, items)`

リストを作成し、保存すると同時に内容を表示する関数。

#### パラメータ
- `name`: リストの名前。
- `items`: リストに保存する要素の配列。

#### 使用例
```js
thelist("fruits", ["りんご", "バナナ", "さくらんぼ"]);
```

### `getFromList(name, index)`

指定したリストから要素を取得し、表示する関数。  
インデックスを指定しない場合、リスト内のすべての要素を表示。

#### パラメータ
- `name`: リストの名前。
- `index`（省略可）: 取得する要素の 1 から始まるインデックス。

#### 使用例
```js
getFromList("fruits", 2); // 出力: バナナ
getFromList("fruits"); // 出力: りんご, バナナ, さくらんぼ
```

### `addToList(name, item)`

既存のリストに新しい要素を追加し、表示する関数。

#### パラメータ
- `name`: リストの名前。
- `item`: 追加する要素。

#### 使用例
```js
addToList("fruits", "ぶどう"); // 出力: ぶどう
```

### `removeFromList(name, index)`

指定したリストから要素を削除し、削除した要素を表示する関数。

#### パラメータ
- `name`: リストの名前。
- `index`: 削除する要素の 1 から始まるインデックス。

#### 使用例
```js
removeFromList("fruits", 1); // 出力: 削除されました: りんご
```

## ライセンス

このプロジェクトは MIT ライセンスのもとで公開されています。
