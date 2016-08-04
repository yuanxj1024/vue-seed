var $ = require('jquery');
var MainView = require('./views/mp-teizi-list/main.view.js');

$(function () {
  var main = new MainView();
  console.log(main);
  require('../stylesheets/mp-teizi-list.scss');
});
