const setName = ({
  dispatch,
}, name) => {
  dispatch('NAME', name);
};

module.exports = {
  setName,
};
