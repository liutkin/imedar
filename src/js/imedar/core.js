import axios from 'axios';

import state from './state';
import generateMarkup from './generateMarkup';

const core = {
  generateMarkup,
  init(data, option) {
    state.data = data;

    state.el = option.el;
    state.srcURL = option.srcURL;
    state.nameType = option.nameType;
    state.amount = option.amount;

    this.generateMarkup(state);
  },
  getSrcData(src) {
    return axios.get(src);
  },
  setListeners() {},
  updateView() {}
};

export default core;
