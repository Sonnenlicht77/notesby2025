# 其他js相关知识

## 变量提升 (hoisting)

变量提升是指在js代码执行前，会先将变量和函数的声明提升到作用域的顶部。
- 变量提升只对var声明的变量有效，let和const声明的变量不会被提升。
- 函数提升会将函数的声明提升到作用域的顶部，而函数表达式不会被提升。

举例：
```js
console.log(a); // undefined
var a = 10;
```

```js
console.log(a); // ReferenceError: a is not defined
let a = 10;
```

## 作用域 (scope)

作用域是指变量和函数的可访问范围。
- 全局作用域： 全局作用域中的变量和函数可以在任何地方访问。
- 函数作用域： 函数作用域中的变量和函数只能在函数内部访问。
- 块级作用域： 块级作用域中的变量和函数只能在块级作用域内部访问。

举例：
```js
var x = 1  // 全局作用域
function fn() {
    x = 10 // 全局作用域的x被赋值为10
    return 
    function x(){}
}
fn() // 调用fn函数，全局作用域的x被赋值为10
console.log(x) // 1
```

- 分析：

1. 变量提升：
- 全局作用域的变量提升：
在JavaScript引擎执行代码之前，会进行**变量提升**（Hoisting）处理：

- `var x` 声明会被提升到全局作用域顶部，初始值为 `undefined`
- `function fn()` 整个函数声明会被提升到全局作用域顶部
提升后的代码结构相当于：
```javascript
// 变量和函数提升到这里
var x;
function fn() {
    // 函数内部的提升会在函数执行时处理
    x = 10;
    return;
    function x(){};
}

// 实际执行的赋值和调用
x = 1;
fn();
console.log(x); // 1
```



