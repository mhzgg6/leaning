# app

## 组件分类

1. 由 vue-router 产生的每个页面，它本质上也是一个组件(.vue)，主要承载当前页面的 HTML 结构，会包含数据获  取、数据整理、数据可视化等常规业务。

2. 不包含业务，独立、具体功能的基础组件，比如 **日期选择器、模态框** 等。这类组件作为项目的基础组件，会被大量使用，因此组件的api进行过高强度的抽象，可以通过不同配置实现不同功能。
   独立组件的开发难度要高于第一类组件，因为他的侧重点是 **api的设计、兼容性、性能、以及复杂的功能**。

3. 业务组件。它不像第二类独立组件只包含某个功能，而是在业务中被多个页面复用，它与独立组件的区别是，业务组件只在当前项目中会用到，不具有通用性。

## 组件的构成

  核心：**prop、event、slot**

### 属性prop

  prop 定义了这个组件有哪些可配置的属性，组件的核心功能也都是由它确定的。写通用组件时，props 最好用对象的写法，这样可以针对每个属性设置类型、默认值或自定义校验属性的值。

  要注意的是，组件里定义的 props，都是单向数据流，也就是只能通过父级修改，组件自己不能修改 props 的值，只能修改定义在 data 里的数据，非要修改，也是通过后面介绍的自定义事件通知父级，由父级来修改。

  在使用组件时，也可以传入一些标准的 html 特性，比如 id、class：

  <i-button id="btn1" class="btn-submit"></i-button>

  这样的 html 特性，在组件内的 <button> 元素上会继承，并不需要在 props 里再定义一遍。这个特性是默认支持的，如果不期望开启，在组件选项里配置 inheritAttrs: false 就可以禁用了。

### 插槽 slot

  插槽 slot，它可以分发组件的内容

### 自定义事件 event

## 组件通信
1. provide/inject
2. $on/$emit
  $emit 会在当前组件实例上触发自定义事件，并传递一些参数给监听器的回调，一般来说，都是在父级调用这个组件时，使用 $on 的方式来监听自定义事件的
  ```

  ```
3. 
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
