import queryData from './queryData';
import getRandomElementInArray from './getRandomElementInArray';

const generateObsceneNames = state => {
  const obscenePrefixList = queryData({
    list: state.data,
    type: 'prefix',
    isObscene: true,
    isAbstract: false
  });

  const obsceneSuffixList = queryData({
    list: state.data,
    type: 'suffix',
    isObscene: true,
    isAbstract: false
  });

  for (let i = 0; i < state.amount; i += 1) {
    const randomPrefixItem = getRandomElementInArray(obscenePrefixList);
    const randomSuffixItem = getRandomElementInArray(obsceneSuffixList);

    state.nameList.push(`${randomPrefixItem.text}${randomSuffixItem.text}`);
  }
};

export default generateObsceneNames;
