/**
 * 数据存储
 */
import user from 'modules/user.js';

const Vuex = window.Vuex;

const store = new Vuex.Store({
  modules: {
    user,
  },
});
module.exports = store;
