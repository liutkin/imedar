import render from './render';
import getNameList from './getNameList';

const roll = state => {
  state.isProcessing = true;
  render(state);

  state.nameList = [];

  getNameList(state);
  state.isProcessing = false;
  render(state);
};

export default roll;
