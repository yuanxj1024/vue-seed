import {
  USERNAME,
} from 'mutationType';

const setName = ({
  dispatch,
}, name) => {
  dispatch(USERNAME, name);
};

module.exports = {
  setName,
};
