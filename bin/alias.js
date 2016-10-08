/**
 * 插件别名配置
 */
var path = require('path');
var containerPath = path.resolve('./');

//	别名
var alias = {
  'vux-components': path.resolve(containerPath, './app/plugins/vux/dist/components'),
  'vue-router': path.resolve(containerPath, './app/plugins/vue-router/dist/vue-router.min.js'),
  'vue-resource': path.resolve(containerPath, './app/plugins/vue-resource/dist/vue-resource.min.js')
};

module.exports = alias;
