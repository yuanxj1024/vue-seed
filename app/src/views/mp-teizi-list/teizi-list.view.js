'use strict';

var base = require('base-extend-backbone');
var BaseView = base.View;
var TeiziListModel = require('../../models/mp-teizi/teizi-list.model.js');


var View = BaseView.extend({
  el: '#teiziList',
  rawLoader: function () {
    return '';
  },
  context: function (args) {
    console.log(args);
  },
  // 插入dom之前
  beforeMount: function () {
    //  初始化一些自定义属性
    this.listModel = new TeiziListModel();
  },
  // 插入dom之后
  afterMount: function () {
    //  获取findDOMNode DOM Node
    this.listData = [{
      title: 1
    }, {
      title: 2
    }, {
      title: 3
    }, {
      title: 5
    }, {
      title: 4
    }];
  },
  ready: function () {
    //  初始化
    this.renderList();
  },
  beforeDestroy: function () {
    //  进入销毁之前,将引用关系设置为null
  },
  destroyed: function () {
    //  销毁之后
  },
  getList: function () {
    var promise = this.listModel.execute({
      LiveSwitch: 1,
      livetype: 2,
      livename: 'test'
    });
    return promise;
  },
  renderList: function () {
    var self = this;
    this.getList().done(function (res) {
      console.log(res);
    }).fail(function (res) {
      console.log(res);
      self.createItemDom(self.listData);
    });
  },
  createItemDom: function (data) {
    var tpl = require('./tpl/item.html');
    var html = this.compileHTML(tpl, {
      list: data
    });
    this.$el.html(html);
    this.$el.find('ul>li:eq(2)').on('click', this.liClickHandler);
  },
  liClickHandler: function (e) {
    console.log(e.target);
  }
});

module.exports = View;
