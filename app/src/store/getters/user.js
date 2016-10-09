/**
 * user信息读取器
 */

const userName = ({
  user,
}) => {
  return `current:${user.name}`;
};

module.exports = {
  userName,
};
