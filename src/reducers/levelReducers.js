const initialState = {
  level: 0,
  data: {
    subdata: {
      name: '',
    },
  },
};

export function levelReducers(state = initialState, action) {
  switch (action.type) {
    case 'ADD_LEVEL':
      return {
        ...state,
        level: state.level + 1,
        data: {
          ...state.data,
          subdata: {
            ...state.data.subdata,
            name: 'Ram',
          },
        },
      };
    default:
      return state;
  }
}
