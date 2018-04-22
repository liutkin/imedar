import generateNormalNames from './generateNormalNames';

const getNameList = state => {
  switch (state.nameType) {
    case 'normal':
      generateNormalNames(state);
      break;
    case 'obscene':
      console.log('obscene gen');
      break;
    case 'abstract':
      console.log('abstract gen');
      break;
  }
};

export default getNameList;
