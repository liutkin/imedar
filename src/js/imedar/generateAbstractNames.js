import queryData from './queryData';
import getRandomElementInArray from './getRandomElementInArray';

const generateAbstractNames = state => {
  const abstractPrefixList = queryData({
    list: state.data,
    type: 'prefix',
    isObscene: false,
    isAbstract: true
  });

  const abstractSuffixList = queryData({
    list: state.data,
    type: 'suffix',
    isObscene: false,
    isAbstract: true
  });

  for (let i = 0; i < state.amount; i += 1) {
    const randomPrefixItem = getRandomElementInArray(abstractPrefixList);
    const randomSuffixItem = getRandomElementInArray(abstractSuffixList);

    state.nameList.push(`${randomPrefixItem.text}${randomSuffixItem.text}`);
  }
};

export default generateAbstractNames;
