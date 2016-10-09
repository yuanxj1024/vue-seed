import user from 'modules/user.js';

const Vuex = window.Vuex; // require('vuex');

const store = new Vuex.Store({
  modules: {
    user,
  },
});
console.log(user);
module.exports = store;
