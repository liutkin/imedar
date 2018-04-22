import makeImedar from './imedar/imedarApp';

// imedar
const imedarOption = {
  el: document.getElementById('imedar_root'),
  srcURL: 'data/data.json',
  amount: 20,
  textLabel: {
    normalNameType: 'Обычные',
    obsceneNameType: 'Ругательные',
    abstractNameType: 'Абстрактные'
  }
};

const imedar = makeImedar(imedarOption);
