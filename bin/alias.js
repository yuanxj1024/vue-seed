/**
 * 插件别名配置
 */
var path = require('path');
var containerPath = path.resolve('./');

//	别名
var alias = {
  config: path.resolve(containerPath, './app/src/module/config'),
  juicer: path.resolve(containerPath, './app/link/juicer/juicer-min')
};

module.exports = alias;
