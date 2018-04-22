const queryData = ({ list, type, isObscene, isAbstract }) => {
  return list.filter(item => {
    return (
      item.type === type &&
      item.isObscene == isObscene &&
      item.isAbstract === isAbstract
    );
  });
};

export default queryData;
