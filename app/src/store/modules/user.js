/**
 * 用户信息
 */
import {
  USERNAME,
} from 'mutationType';

const state = {
  name: '',
};

const mutations = {
  [USERNAME]: (s, name) => {
    s.name = name;
  },
};

module.exports = {
  state,
  mutations,
};
