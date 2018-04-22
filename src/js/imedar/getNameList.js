import generateNormalNames from './generateNormalNames';
import generateSemiObsceneNames from './generateSemiObsceneNames';
import generateObsceneNames from './generateObsceneNames';
import generateAbstractNames from './generateAbstractNames';

const getNameList = state => {
  switch (state.nameType) {
    case 'normal':
      generateNormalNames(state);
      break;
    case 'semiobscene':
      generateSemiObsceneNames(state);
      break;
    case 'obscene':
      generateObsceneNames(state);
      break;
    case 'abstract':
      generateAbstractNames(state);
      break;
    default:
      generateNormalNames(state);
  }
};

export default getNameList;
