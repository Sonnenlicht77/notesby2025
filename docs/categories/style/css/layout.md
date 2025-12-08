# 页面布局与排版

## 概述

WEB布局，主要经历了6个历史节点：[webdesignmuseum 🔗](https://www.webdesignmuseum.org/web-design-history)
1. 1990 - 1994 流布局（Flow Layout）
   - 页面元素按照文档流的顺序进行排列，不考虑元素的位置和大小
2. 1995 - 2000 表格布局（Table Layout）
   - 利用表格元素（table、tr、td）实现页面布局，通过合并单元格（colspan、rowspan）实现复杂的布局
3. 2000 - 2009 浮动布局（Float Layout）/ 绝对定位布局（Absolute Positioning Layout）/ 框架布局（Frame Layout）
   - 利用浮动属性（float）实现元素的水平排列，通过清除浮动（clearfix）解决布局问题
   - 利用绝对定位属性（position :比如 bootstrap
4. 2010 - 2017 响应式WEB布局（Responsive Web Design: RWD）
   -  Web 页面会“响应”用户的设备尺寸而自动调整布局:
     - 基于 流体网格（Fluid Grids）、灵活的图片（Flexible Images）和媒体查询（Media Queries） 三种技术来构建一个响应式 Web 网站或 Web 应用
5. 2018 - 2020 内在 Web 设计 (Intrinsic Web Design : IWD)
6. 2020 - 至今 组件驱动式 Web 设计 Component-Driven Web Design(CDWD)
    - 组件驱动式 Web 设计（Component-Driven Web Design）是一种基于组件的 Web 设计方法，它将 Web 页面分解为多个独立的组件，每个组件都有自己的 HTML、CSS 和 JavaScript 代码。这些组件可以在不同的 Web 页面中重复使用，从而提高开发效率和代码质量。
    - 组件驱动式 Web 设计的优势在于：
      - 组件化：将 Web 页面分解为多个组件，每个组件都有自己的 HTML、CSS 和 JavaScript 代码，从而提高代码的可维护性和可扩展性。
      - 可重复使用：组件可以在不同的 Web 页面中重复使用，从而减少开发时间和成本。
      - 高可定制性：组件的 HTML、CSS 和 JavaScript 代码都是可定制的，开发者可以根据需求进行修改和定制。
      - 高可维护性：由于组件化的设计，每个组件的 HTML、CSS 和 JavaScript 代码都是独立的，因此维护起来更加方便和快捷。
    - 组件驱动式 Web 设计的实现步骤如下：
      - 分析 Web 页面，将其分解为多个独立的组件。
      - 为每个组件编写 HTML、CSS 和 JavaScript 代码。
      - 将组件打包成一个独立的模块，以便在不同的 Web 页面中重复使用。
      - 在 Web 页面中引入组件模块，从而实现组件驱动式 Web 设计。


## CSS Flexbox 布局  [🔗](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)

Flexbox 是一种基于一维布局模型的 CSS 布局方式，它可以帮助开发者更方便地实现响应式布局和复杂的页面排版。

![Flexbox术语](/images/术语.jpg)

### Flexbox 术语

- 容器（Container）：应用了 `display: flex` 或 `display: inline-flex` 属性的元素，称为容器。容器内部的元素称为项目（Item）。
- 项目（Item）：容器内部的元素，称为项目。
- 主轴（Main Axis）：容器的主轴是指项目排列的方向，默认是水平方向。
- 侧轴（Cross Axis）：容器的侧轴是指与主轴垂直的方向，默认是垂直方向。
- 项目属性（Item Properties）：项目可以设置的属性，比如 `flex-grow`、`flex-shrink`、`flex-basis` 等。
- 容器属性（Container Properties）：容器可以设置的属性，比如 `flex-direction`、`justify-content`、`align-items` 等。


#### 容器属性

- `flex-direction`：项目排列的方向，默认值为 row。
- `flex-wrap`：项目是否换行，默认值为 nowrap。
- `flex-flow`：是 `flex-direction` 和 `flex-wrap` 的简写属性，默认值为 row nowrap。
- `justify-content`：项目在主轴上的对齐方式，默认值为 flex-start。
- `align-content`：项目在侧轴上的对齐方式，默认值为 flex-start。
    - 当项目换行时，侧轴上的对齐方式。
    - 只在多个侧轴上有多个项目时生效。
- `place-content`：是 `justify-content` 和 `align-content` 的简写属性，默认值为 flex-start flex-start。
- `align-items`：项目在侧轴上的对齐方式，默认值为 flex-start。
- `gap`：项目之间的间距，默认值为 0。


#### 项目属性
- `order`：项目的排列顺序，默认值为 0。
    - 数值越小，排列越靠前。
- `flex-grow`：项目的放大比例，默认值为 0。
- `flex-shrink`：项目的缩小比例，默认值为 1。
- `flex-basis`：项目的初始大小，默认值为 auto。
- `flex`：是 `flex-grow`、`flex-shrink`、`flex-basis` 的简写属性，默认值为 0 1 auto。
- `align-self`：项目在侧轴上的对齐方式，默认值为 auto。
    - 可以覆盖容器的 `align-items` 属性。
    - 只对单个项目生效。

## 常见的CSS布局单位

##  px、em、rem、% 等单位的区别

## 两栏布局 / 三栏布局实现

## 水平垂直居中布局

## 如何根据设计稿进行移动端适配

## 对flex布局的理解及其使用场景

## 响应式设计的概念及基本原理