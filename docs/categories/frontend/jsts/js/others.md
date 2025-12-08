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
var a = 10; // 全局作用域
function foo() {
  var b = 20; // 函数作用域
  if (true) {
    var c = 30; // 块级作用域
  }
}
console.log(a); // 10
console.log(b); // ReferenceError: b is not defined
console.log(c); // 30
```

