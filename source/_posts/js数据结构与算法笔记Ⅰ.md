---
title: 栈数据结构
date: 2020-03-25 20:56:38
tags: 算法
---

### 栈是一种遵从先进后出原则的有序结合。

> 新添加的或待删除的元素都保存在栈的同一端，为栈顶，另一端则为栈底。且新元素都靠近栈顶，旧元素都接近栈底。
> 例：一摞书、堆起的盘子

#### 创建一个类来表示栈：

```javascript
function Stack {
    // 属性和方法
}
```
#### 选择一种数据结构保存栈里的元素（这里选择数组）：

```javascript
let items = []
```
> 声明一些需要用到的一些方法
- push
- pop
- peek
- isEmpty
- clear
- size

1. 向栈中添加元素（只向栈中的末尾即栈顶添加）

```javascript
this.push = function(ele) {
    items.push(ele)
}
```

2. 移出栈中的元素（移出末尾即栈顶）

```javascript
this.pop = function() {
    return items.pop()
}
```
3. 查看栈顶元素、检查栈是否为空、清空栈、打印栈元素

```javascript
this.peek = function() {
    return items[items.length - 1]
}

this.isEmpty = function() {
    return item.length === 0
}

this.clear = function() {
    items = []
}

this.print = function() {
    console.log(items.toString())
}
```

#### 使用Stack类

```js
let stack = new Stack() // []

console.log(stack.isEmpty()) // true

stack.push(2) // [2]

stack.peek() // 2
```

#### es6改造此类

```js
class Stack {
    constructor() {
        this.items = []
    }
    push(ele) {
        this.items.push(ele)
    }
    ...
}
```
> es6创建的类基于原型，比基于函数的节省内存，更适合创建多个实例。但是不能声明私有属性，此处的items是公共的。

#### 再改造（利用es6的限定作用域Symbol实现）

> es6新增的Symbol的基本类型，不可变，可以用作对象的属性
```js
let _items = Symbol()

class Stack() {
    constructor() {
        this[_items] = []
    }
    push(ele) {
        this[_items].push(ele)
    }
    ...
}
```
> 缺点:

#### 再次改造（WeakMap）

```js
const items = new WeakMap()

```