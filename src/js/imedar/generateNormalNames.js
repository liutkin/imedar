import getRandomElementInArray from './getRandomElementInArray';

const generateNormalNames = state => {
  const normalPrefixList = state.data.filter(item => {
    const isNormalPrefix =
      item.type === 'prefix' && !item.obscene && !item.abstract;
    return isNormalPrefix;
  });

  const normalSuffixList = state.data.filter(item => {
    const isNormalSuffix =
      item.type === 'suffix' && !item.obscene && !item.abstract;
    return isNormalSuffix;
  });

  for (let i = 0; i < state.amount; i += 1) {
    const randomPrefixItem = getRandomElementInArray(normalPrefixList);
    const randomSuffixItem = getRandomElementInArray(normalSuffixList);

    state.nameList.push(`${randomPrefixItem.text}${randomSuffixItem.text}`);
  }
};

export default generateNormalNames;
