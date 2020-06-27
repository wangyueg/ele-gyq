#polyfill
@babel/polyfill模块包含core-js和自定义regenerator runtime模块用于模拟ES2015+环境。
这意味着你可以使用诸如 Promise 和 WeakMap 之类的新的内置组件、 Array.from 或 Object.assign 之类的静态方法、 Array.prototype.includes 之类的实例方法以及生成器函数（generator functions）（前提是你使用了 regenerator 插件）。

polyfill 将添加这些到全局范围（global scope）

但是你可以通过设置@babel/preset-env来实现根据具体需要加载所需要的@babel/polyfill

["@babel/preset-env", {"useBuiltIns": "usage"}]

#eslint
保证代码一致性和避免错误

#webpack-dev-server
**react项目中添加完react-router路由之后，刷新404（不是默认进入路径）**
**处理方法：devServer中添加historyApiFallback: true**

#关于output.publicPath/output.path/devServer.publicPath/devServer.contentBase区别
参考[https://juejin.im/post/5ae9ae5e518825672f19b094#heading-9](https://juejin.im/post/5ae9ae5e518825672f19b094#heading-9)

#样式选择
less/css