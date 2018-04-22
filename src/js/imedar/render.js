const render = state => {
  state.markup.submitButtonEl.disabled = state.isProcessing;

  state.markup.nameListEl.innerHTML = '';
  state.nameList.forEach(name => {
    const nameListItemEl = document.createElement('li');
    nameListItemEl.classList = 'imedar-list__item';
    nameListItemEl.textContent = name;
    state.markup.nameListEl.appendChild(nameListItemEl);
  });
};

export default render;
