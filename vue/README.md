# Vue 与模板

使用步骤：

1. 编写页面模板
  1. 直接在 HTML 标签中 写标签
  2. 使用 template
  3. 使用单文件( <template/> )
2. 创建 Vue 的实例
  1. 在 Vue 的构造函数中提供：data, methods, computed, watcher, props, ...
3. 将 Vue 挂载到 页面中 (mount)
   
# 数据驱动模型

Vue 的执行流程

1. 获得模板：模板中有 "坑"
2. 利用 Vue 构造函数中所提供的数据来 "填坑", 得到可以在页面中显示的 "标签了"
3. 将标签替换页面中原来有坑的标签

Vue 利用 我们提供的数据 和 页面中 模板 生成了 一个新的 HTML 标签 ( node 元素 )
替换到了 页面中 放置模板的位置

2. 虚拟 dom 的 render 方法

思考：vue 项目 *模板 *