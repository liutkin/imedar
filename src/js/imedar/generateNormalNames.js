import queryData from './queryData';
import getRandomElementInArray from './getRandomElementInArray';

const generateNormalNames = state => {
  const normalPrefixList = queryData({
    list: state.data,
    type: 'prefix',
    isObscene: false,
    isAbstract: false
  });

  const normalSuffixList = queryData({
    list: state.data,
    type: 'suffix',
    isObscene: false,
    isAbstract: false
  });

  for (let i = 0; i < state.amount; i += 1) {
    const randomPrefixItem = getRandomElementInArray(normalPrefixList);
    const randomSuffixItem = getRandomElementInArray(normalSuffixList);

    state.nameList.push(`${randomPrefixItem.text}${randomSuffixItem.text}`);
  }
};

export default generateNormalNames;
