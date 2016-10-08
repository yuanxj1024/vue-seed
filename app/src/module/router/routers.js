/**
 * 路由配置
 */
const Router = (router) => {
  router.map({
    '*': {
      component: require('../../component/index/main.js'),
    },
    '/a': {
      name: 'a',
      component: require('../../component/index/main.js'),
    },
    '/b': {
      name: 'b',
      component: require('../../component/index/code.js'),
    },
  });
};

module.exports = Router;
