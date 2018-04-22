import generateControlListItem from './generateControlListItem';

const generateBasicMarkup = state => {
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

  const normalNameTypeLabelEl = document.createElement('label');
  normalNameTypeLabelEl.setAttribute('for', 'imedarNameType_normal');
  normalNameTypeLabelEl.textContent = 'normal';

  const controlListItem1El = generateControlListItem();
  controlListItem1El.appendChild(normalNameTypeInputEl);
  controlListItem1El.appendChild(normalNameTypeLabelEl);
  controlListEl.appendChild(controlListItem1El);

  // semi obscene name type
  const semiobsceneNameTypeInputEl = document.createElement('input');
  semiobsceneNameTypeInputEl.type = 'radio';
  semiobsceneNameTypeInputEl.name = 'type';
  semiobsceneNameTypeInputEl.value = 'semiobscene';
  semiobsceneNameTypeInputEl.id = 'imedarNameType_semiobscene';

  const semiobsceneNameTypeLabelEl = document.createElement('label');
  semiobsceneNameTypeLabelEl.setAttribute('for', 'imedarNameType_semiobscene');
  semiobsceneNameTypeLabelEl.textContent = 'semiobscene';

  const controlListItem2El = generateControlListItem();
  controlListItem2El.appendChild(semiobsceneNameTypeInputEl);
  controlListItem2El.appendChild(semiobsceneNameTypeLabelEl);
  controlListEl.appendChild(controlListItem2El);

  // obscene name type
  const obsceneNameTypeInputEl = document.createElement('input');
  obsceneNameTypeInputEl.type = 'radio';
  obsceneNameTypeInputEl.name = 'type';
  obsceneNameTypeInputEl.value = 'obscene';
  obsceneNameTypeInputEl.id = 'imedarNameType_obscene';

  const obsceneNameTypeLabelEl = document.createElement('label');
  obsceneNameTypeLabelEl.setAttribute('for', 'imedarNameType_obscene');
  obsceneNameTypeLabelEl.textContent = 'obscene';

  const controlListItem3El = generateControlListItem();
  controlListItem3El.appendChild(obsceneNameTypeInputEl);
  controlListItem3El.appendChild(obsceneNameTypeLabelEl);
  controlListEl.appendChild(controlListItem3El);

  // abstract name type
  const abstractNameTypeInputEl = document.createElement('input');
  abstractNameTypeInputEl.type = 'radio';
  abstractNameTypeInputEl.name = 'type';
  abstractNameTypeInputEl.value = 'abstract';
  abstractNameTypeInputEl.id = 'imedarNameType_abstract';

  const abstractNameTypeLabelEl = document.createElement('label');
  abstractNameTypeLabelEl.setAttribute('for', 'imedarNameType_abstract');
  abstractNameTypeLabelEl.textContent = 'abstract';

  const controlListItem4El = generateControlListItem();
  controlListItem4El.appendChild(abstractNameTypeInputEl);
  controlListItem4El.appendChild(abstractNameTypeLabelEl);
  controlListEl.appendChild(controlListItem4El);

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

  // set default radio value
  switch (state.nameType) {
    case 'normal':
      normalNameTypeInputEl.checked = true;
      break;
    case 'semiobscene':
      semiobsceneNameTypeInputEl.checked = true;
      break;
    case 'obscene':
      obsceneNameTypeInputEl.checked = true;
      break;
    case 'abstract':
      abstractNameTypeInputEl.checked = true;
      break;
  }
};

export default generateBasicMarkup;
