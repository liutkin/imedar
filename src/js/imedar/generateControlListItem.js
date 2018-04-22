const generateControlListItem = ({ input, label }) => {
  const controlListItemEl = document.createElement('li');
  controlListItemEl.classList = 'imedar-control-list__item';

  const inputEl = document.createElement('input');
  inputEl.type = 'radio';
  inputEl.name = 'type';
  inputEl.value = input.value;
  inputEl.id = input.id;
  inputEl.checked = input.checked;

  const labelEl = document.createElement('label');
  labelEl.setAttribute('for', label.for);
  labelEl.textContent = label.text;

  controlListItemEl.appendChild(inputEl);
  controlListItemEl.appendChild(labelEl);

  return controlListItemEl;
};

export default generateControlListItem;
