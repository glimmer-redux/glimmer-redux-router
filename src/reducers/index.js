import { combineReducers } from 'redux';

const initialState = {
  history: '/'
}

const location = (state, action) => {
  if(action.type === 'LOCATION_CHANGE') {
    let path = action.path;
    return Object.assign({}, state, {history: path});
  }
  return state || initialState;
};

export default combineReducers({
  location
});
