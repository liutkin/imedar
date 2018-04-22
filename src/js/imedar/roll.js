import render from './render';
import getNameList from './getNameList';

const roll = state => {
  if (state.isProcessing) return;

  state.nameList = [];

  state.isProcessing = true;
  render(state);

  getNameList(state);
  render(state, () => {
    state.isProcessing = false;
  });
};

export default roll;
