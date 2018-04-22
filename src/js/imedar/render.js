import getRandomDelay from './getRandomDelay';
import renderSubmitButton from './renderSubmitButton';

const render = (state, cb) => {
  state.markup.nameListEl.innerHTML = '';
  state.nameList.forEach(name => {
    const nameListItemEl = document.createElement('li');
    nameListItemEl.classList = 'imedar-list__item imedar-list__item_inactive';
    nameListItemEl.textContent = name;

    state.markup.nameListEl.appendChild(nameListItemEl);

    setTimeout(() => {
      nameListItemEl.classList = 'imedar-list__item';
    }, getRandomDelay(state));
  });

  if (cb) {
    setTimeout(function() {
      cb();
      renderSubmitButton(state);
    }, state.maxDelay);
  } else {
    renderSubmitButton(state);
  }
};

export default render;
