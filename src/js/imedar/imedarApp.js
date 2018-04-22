import core from './core';

const makeImedar = ({
  el,
  srcURL,
  nameType = 'normal',
  amount = 10,
  textLabel
} = {}) => {
  if (!srcURL || !el) {
    console.error('[imedar] missing source URL or Element object for mounting');
    return;
  }

  const option = {
    el,
    srcURL,
    nameType,
    amount,
    textLabel
  };

  core
    .getSrcData(srcURL)
    .then(res => {
      core.init(res.data, option);
    })
    .catch(err => {
      console.error('[imedar] Error getting data from source URL');
    });
};

export default makeImedar;
