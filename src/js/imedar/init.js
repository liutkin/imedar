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

  state.maxDelay =
    option.maxDelay > state.minDelay ? option.maxDelay : state.minDelay;

  state.textLabel = option.textLabel;

  generateBasicMarkup(state);
  setListeners(state);

  roll(state);
};

export default init;
