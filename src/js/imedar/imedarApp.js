import core from './core';

const makeImedar = ({
  el,
  srcURL,
  nameType = 'normal',
  amount = 10,
  maxDelay = 16, // 16 ms is a minimum for browser's effective re-render time
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
    maxDelay,
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
