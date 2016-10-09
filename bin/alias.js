/**
 * 插件别名配置
 */
var path = require('path');
var containerPath = path.resolve('./');

//	别名
var alias = {
  'vux-components': path.resolve(containerPath, './app/plugins/vux/dist/components'),
  'vue-router': path.resolve(containerPath, './app/plugins/vue-router/dist/vue-router.min.js'),
  'vue-resource': path.resolve(containerPath, './app/plugins/vue-resource/dist/vue-resource.min.js'),
  vuex: path.resolve(containerPath, './app/plugins/vuex/dist/vuex.min.js'),
  _: path.resolve(containerPath, './app/plugins/underscore/underscore-min.js'),
  actions: path.resolve(containerPath, './app/src/store/actions'),
  modules: path.resolve(containerPath, './app/src/store/modules')
};

module.exports = alias;
