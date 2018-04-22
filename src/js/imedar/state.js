let state = {
  el: null,
  srcURL: null,
  nameType: null,
  amount: null,
  minDelay: 16, // 16 ms is a minimum for browser's effective re-render time
  maxDelay: null,
  textLabel: null,
  isProcessing: false,
  markup: {},
  data: null,
  nameList: []
};

export default state;
