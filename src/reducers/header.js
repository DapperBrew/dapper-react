const header = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_HEADER' :
      return {
        ...state,
        title: action.title,
      };
    default:
      return state;
  }
};

export default header;
