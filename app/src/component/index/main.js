import {
  setName,
} from 'actions/user.js';
import {
  userName,
} from 'getters/user.js';


const _ = require('_');

const Vue = window.Vue;
const tpl = require('./main.html');

const View = Vue.extend({
  template: tpl,
  data() {},
  vuex: {
    getters: {
      name({
        user,
      }) {
        return user.name;
      },
      userName,
    },
    actions: {
      setName,
    },
  },
  ready() {
    console.log('underscore loaded', _);
    this.setName('Aaron Yuan');
  },
  methods: {
    changeName() {
      this.setName(11);
    },
  },
});

module.exports = View;
