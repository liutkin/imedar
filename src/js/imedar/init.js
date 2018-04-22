import state from './state';
import generateBasicMarkup from './generateBasicMarkup';
import setListeners from './setListeners';
import roll from './roll';

const init = (data, option) => {
  state.data = data;

  state.el = option.el;
  state.srcURL = option.srcURL;
  state.nameType = option.nameType;
  state.amount = option.amount;

  generateBasicMarkup(state);
  setListeners(state);

  roll(state);
};

export default init;
