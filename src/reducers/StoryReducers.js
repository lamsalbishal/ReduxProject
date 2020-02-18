const initialState = {
  collection: [],
};

// applovin
// liftoff.io
// audience network (fb)
// AppLovin SDK & ADs.com

export function storyReducers(state = initialState, action) {
  switch (action.type) {
    case 'Add_Story':
      return {
        ...state,
        collection: [...state.collection, ...action.payload],
      };
    default:
      return state;
  }
}
