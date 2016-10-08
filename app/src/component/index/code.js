const Vue = window.Vue;
const tpl = require('./code.jade');

const View = Vue.extend({
  template: tpl(),
  ready: () => {
  },
});

module.exports = View;
