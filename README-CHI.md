# thejs

轻量级 JavaScript 工具库，提供类似 `if-else` 和 `for` 循环的控制流函数，并支持列表管理功能。

## 使用方法

可以手动导入本库的函数到你的项目中：

```js
import { theif, thefor, thelist, getFromList, addToList, removeFromList } from "./thejs.js";
```

## 函数说明

### `theif(conditions, actions)`

使用数组模拟 `if-else` 语句的函数。

#### 参数
- `conditions`: 布尔值或返回布尔值的函数数组。
- `actions`: 当对应条件为 `true` 时执行的函数数组。
  - 如果条件为 `"else"`，则在所有前置条件不满足时执行对应的动作。
  - 如果 `actions` 比 `conditions` 多一个元素，则最后的函数作为默认 `else` 处理。

#### 示例

```js
const isMorning = () => new Date().getHours() < 12;
const isAfternoon = () => new Date().getHours() < 18;

theif([
  isMorning,
  isAfternoon,
  "else"
], [
  () => console.log("早上好！"),
  () => console.log("下午好！"),
  () => console.log("晚上好！")
]);
```

### `thefor(count, action)`

提供类似 `for` 和 `while` 循环的迭代功能。

#### 参数
- `count`: 指定循环次数的数字，或 `"infinity"` 进行无限循环。
- `action`: 每次迭代执行的函数。如果 `count` 是数字，则该函数会接收当前迭代索引作为参数。

#### 示例

**有限循环:**
```js
thefor(5, (i) => console.log(`迭代次数: ${i}`));
```

**无限循环:**
```js
thefor("infinity", () => console.log("无限循环中..."));
```

### `thelist(name, items)`

创建一个列表并存储，同时在页面上显示内容。

#### 参数
- `name`: 列表名称。
- `items`: 存储到列表中的元素数组。

#### 示例
```js
thelist("fruits", ["苹果", "香蕉", "樱桃"]);
```

### `getFromList(name, index)`

获取列表中的元素并显示。  
如果不提供索引，则显示列表中的所有元素。

#### 参数
- `name`: 列表名称。
- `index`（可选）: 要获取的元素的 1 开始索引。

#### 示例
```js
getFromList("fruits", 2); // 输出: 香蕉
getFromList("fruits"); // 输出: 苹果, 香蕉, 樱桃
```

### `addToList(name, item)`

向现有列表添加新元素并显示。

#### 参数
- `name`: 列表名称。
- `item`: 要添加的元素。

#### 示例
```js
addToList("fruits", "葡萄"); // 输出: 葡萄
```

### `removeFromList(name, index)`

从列表中删除指定索引的元素，并显示已删除的元素。

#### 参数
- `name`: 列表名称。
- `index`: 要删除的元素的 1 开始索引。

#### 示例
```js
removeFromList("fruits", 1); // 输出: 已删除: 苹果
```

## 许可证

本项目基于 MIT 许可证发布。
