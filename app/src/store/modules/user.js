/**
 * 用户信息
 */
const state = {
  name: '',
};

const mutations = {
  NAME: (s, name) => {
    s.name = name;
  },
};

module.exports = {
  state,
  mutations,
};
