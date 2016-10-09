# mp牛人BBS项目

> Node version v4.4.1

- webpack
- bower


## How use it?

install global bower

    npm install -g bower

execute npm install

	npm install --verbose


we can using npm scripts `start` `dev` `release` `test`

- npm start 启动一个服务器
- npm run dev 启动webpack dev构建环境
- npm run release 构建可发布线上的资源


## compile.config

配置你的config文件,这个文件主要针对不是`webpack`打包而是用`script`方式创建的优化

```
//JavaScript
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


## eslint

- [Airbnb JavaScript S	tyle Guide](https://github.com/yuche/javascript)

## 基础库

- vue
- vuex
- vux
- vue-router

