'use strict';

var base = require('base-extend-backbone');
var BaseView = base.View;

var ListView = require('./teizi-list.view.js');

var View = BaseView.extend({
  el: '#container',
  rawLoader: function () {
    return '';
  },
  events: {
    'click #btnShow': 'clickShowHandler'
  },
  context: function (args) {
    console.log(args);
  },
  // 插入dom之前
  beforeMount: function () {
    //  初始化一些自定义属性
  },
  // 插入dom之后
  afterMount: function () {
    //  获取findDOMNode DOM Node
  },
  ready: function () {
    //  初始化
    this.listView = new ListView();
  },
  beforeDestroy: function () {
    //  进入销毁之前,将引用关系设置为null
  },
  destroyed: function () {
    //  销毁之后
  },
  clickShowHandler: function () {
    alert(1111);
  }
});

module.exports = View;
