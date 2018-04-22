import serialize from 'form-serialize';

import core from './core';

const setListeners = state => {
  state.markup.controlEl.addEventListener('submit', function(e) {
    e.preventDefault();
    const data = serialize(this, { hash: true });
    const nameType = data.type;

    state.nameType = nameType;

    core.roll(state);
  });
};

export default setListeners;
