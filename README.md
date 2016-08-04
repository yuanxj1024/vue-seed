# mp牛人BBS项目

> Node version v4.4.1

- webpack
- bower
- npm scripts
- browser-sync


*更多文档*

*	[BaseView使用说明](https://github.com/yuanxj1024/backbone-website/blob/master/doc/readme.md)
*	[BaseModel使用说明](https://github.com/yuanxj1024/backbone-website/blob/master/doc/basemodel%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.md)


## How use it?

install global bower

    npm install -g bower

execute npm install

	npm install --verbose


we can using npm scripts `start` `dev` `release` `test`

- npm start 启动一个服务器
- npm test 启动mocha进行自动化测试
- npm run dev 启动webpack dev构建环境
- npm run release 构建可发布的资源

## tools.js

你可以使用`tools.js`来快速的生成`model`和`view`文件，这样可以避免很多重复性的劳动。

	node tools.js name.view ./app/src/views

## include

在编译期来决定最终呈现什么样的HTML，使用jade的`include`特性来组合你的HTML。

## image

写在HTML中的image推荐大家使用`js`的方式来处理：

```JavaScript
var imgSrc = require('../../../images/change.gif');
this.imgContainer.html('<img src="'+imgSrc+'"/>');
```

## compile.config

配置你的config文件,这个文件主要针对不是`webpack`打包而是用`script`方式创建的优化

```JavaScript
{
  "random":true,
  "script":[
      "jquery/dist/jquery.min.js",
      "underscore/underscore-min.js",
      "backbone/backbone-min.js"
  ],
  "style":[],
  "title":{
    "index":"webpack index",
    "code":"webpack code"
  }
}
```

## 模块化

js使用commonjs模块化规范来组织


## eslint

在`commit`阶段会做一次review，如果不通过`eslint`将不会触发git commit hook来提交源代码，我们使用了[https://github.com/typicode/husky](https://github.com/typicode/husky)这个工具帮助我们做了`shell`脚本。

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript/tree/master/es5)

## 基础库

- jquery
- underscore
- [Backbone](http://www.css88.com/doc/backbone/)
- [bootcss v3](http://v3.bootcss.com/)
- [juicer](http://juicer.name/docs/docs_zh_cn.html#!syntax)


## 第三方库处理

如果是不支持`commonjs`语法的第三方插件或者库，你可以使用导出的方式，建议你放置在`link`目录下。
