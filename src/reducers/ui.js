const initialState = {
  title: 'Dashboard',
};

const ui = (state = initialState, action) => {
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

export default ui;
