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
  controlListEl.appendChild(
    generateControlListItem({
      input: {
        value: 'normal',
        id: 'imedarNameType_normal',
        checked: state.nameType === 'normal'
      },
      label: {
        for: 'imedarNameType_normal',
        text: state.textLabel.normalNameType
      }
    })
  );

  // semiobscene name type
  controlListEl.appendChild(
    generateControlListItem({
      input: {
        value: 'semiobscene',
        id: 'imedarNameType_semiobscene',
        checked: state.nameType === 'semiobscene'
      },
      label: {
        for: 'imedarNameType_semiobscene',
        text: state.textLabel.semiobsceneNameType
      }
    })
  );

  // obscene name type
  controlListEl.appendChild(
    generateControlListItem({
      input: {
        value: 'obscene',
        id: 'imedarNameType_obscene',
        checked: state.nameType === 'obscene'
      },
      label: {
        for: 'imedarNameType_obscene',
        text: state.textLabel.obsceneNameType
      }
    })
  );

  // abstract name type
  controlListEl.appendChild(
    generateControlListItem({
      input: {
        value: 'abstract',
        id: 'imedarNameType_abstract',
        checked: state.nameType === 'abstract'
      },
      label: {
        for: 'imedarNameType_abstract',
        text: state.textLabel.abstractNameType
      }
    })
  );

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

export default generateBasicMarkup;
