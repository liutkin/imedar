import generateControlListItem from './generateControlListItem';

const generateMarkup = state => {
  // root
  const rootEl = document.createElement('div');
  rootEl.classList = 'imedar';
  state.el.innerHTML = '';
  state.el.appendChild(rootEl);

  // control
  const controlEl = document.createElement('form');
  controlEl.classList = 'imedar-control';
  state.markup.controlEl = controlEl;
  rootEl.appendChild(controlEl);

  // control list
  const controlListEl = document.createElement('ul');
  controlListEl.classList = 'imedar-control-list';
  controlEl.appendChild(controlListEl);

  // normal name type
  const normalNameTypeInputEl = document.createElement('input');
  normalNameTypeInputEl.type = 'radio';
  normalNameTypeInputEl.name = 'type';
  normalNameTypeInputEl.value = 'normal';
  normalNameTypeInputEl.id = 'imedarNameType_normal';
  state.markup.normalNameTypeInputEl = normalNameTypeInputEl;

  const normalNameTypeLabelEl = document.createElement('label');
  normalNameTypeLabelEl.for = 'imedarNameType_normal';
  normalNameTypeLabelEl.textContent = 'normal';

  const controlListItem1El = generateControlListItem();
  controlListItem1El.appendChild(normalNameTypeInputEl);
  controlListItem1El.appendChild(normalNameTypeLabelEl);
  controlListEl.appendChild(controlListItem1El);

  // obscene name type
  const obsceneNameTypeInputEl = document.createElement('input');
  obsceneNameTypeInputEl.type = 'radio';
  obsceneNameTypeInputEl.name = 'type';
  obsceneNameTypeInputEl.value = 'obscene';
  obsceneNameTypeInputEl.id = 'imedarNameType_obscene';
  state.markup.obsceneNameTypeInputEl = obsceneNameTypeInputEl;

  const obsceneNameTypeLabelEl = document.createElement('label');
  obsceneNameTypeLabelEl.for = 'imedarNameType_obscene';
  obsceneNameTypeLabelEl.textContent = 'obscene';

  const controlListItem2El = generateControlListItem();
  controlListItem2El.appendChild(obsceneNameTypeInputEl);
  controlListItem2El.appendChild(obsceneNameTypeLabelEl);
  controlListEl.appendChild(controlListItem2El);

  // abstract name type
  const abstractNameTypeInputEl = document.createElement('input');
  abstractNameTypeInputEl.type = 'radio';
  abstractNameTypeInputEl.name = 'type';
  abstractNameTypeInputEl.value = 'abstract';
  abstractNameTypeInputEl.id = 'imedarNameType_abstract';
  state.markup.abstractNameTypeInputEl = abstractNameTypeInputEl;

  const abstractNameTypeLabelEl = document.createElement('label');
  abstractNameTypeLabelEl.for = 'imedarNameType_abstract';
  abstractNameTypeLabelEl.textContent = 'abstract';

  const controlListItem3El = generateControlListItem();
  controlListItem3El.appendChild(abstractNameTypeInputEl);
  controlListItem3El.appendChild(abstractNameTypeLabelEl);
  controlListEl.appendChild(controlListItem3El);

  // submit button
  const submitButtonEl = document.createElement('button');
  submitButtonEl.classList = 'imedar__submit';
  submitButtonEl.textContent = 'Generate';
  controlEl.appendChild(submitButtonEl);
  state.markup.submitButtonEl = submitButtonEl;

  // name list
  const nameListEl = document.createElement('ul');
  nameListEl.classList = 'imedar-list';
  rootEl.appendChild(nameListEl);
  state.markup.nameListEl = nameListEl;
};

export default generateMarkup;
