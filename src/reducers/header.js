const header = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_HEADER' :
      return {
        ...state,
        title: action.title,
        tester: { ...state.tester, meh: 'yaya' },
      };
    default:
      return state;
  }
};

export default header;
