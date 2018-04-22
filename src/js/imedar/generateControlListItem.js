const generateControlListItem = () => {
  const controlListItemEl = document.createElement('li');
  controlListItemEl.classList = 'imedar-control-list__item';

  return controlListItemEl;
};

export default generateControlListItem;
