const Vue = window.Vue;
const tpl = require('./main.jade');

const View = Vue.extend({
  template: tpl(),
  ready: () => {
  },
});

module.exports = View;
