export function addLevel() {
  return function(dispatch) {
    dispatch({type: 'ADD_LEVEL'});
  };
}

export function addStory(data) {
  return function(dispatch) {
    dispatch({type: 'Add_Story', payload: data});
  };
}
