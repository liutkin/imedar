import queryData from './queryData';
import getRandomElementInArray from './getRandomElementInArray';

const generateSemiObsceneNames = state => {
  for (let i = 0; i < state.amount; i += 1) {
    const isObscene = Math.random() >= 0.5;

    const prefixList = queryData({
      list: state.data,
      type: 'prefix',
      isObscene: isObscene,
      isAbstract: false
    });

    const suffixList = queryData({
      list: state.data,
      type: 'suffix',
      isObscene: !isObscene,
      isAbstract: false
    });

    const randomPrefixItem = getRandomElementInArray(prefixList);
    const randomSuffixItem = getRandomElementInArray(suffixList);

    state.nameList.push(`${randomPrefixItem.text}${randomSuffixItem.text}`);
  }
};

export default generateSemiObsceneNames;
