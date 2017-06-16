import * as types from '../actions/types';

const initialState = {
  byId: {},
  total:'',
  loading:false,
  error: null
};


function normaliseData (data) {
    return data.reduce(function (acc, item) {
        acc[item.id] = item;
        return acc;
    }, {});
}

export function reposReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  switch (action.type) {
    case types.GET_REPOS_REQUEST:
      newState.loading = true;
      return newState;
    case types.GET_REPOS_SUCCESS:
      newState.total= action.payload.total_count
      newState.byId = action.payload.items;
      newState.loading = false;
      newState.error = null;
      newState.byId = normaliseData(action.payload.items); 
      return newState;
    case types.GET_REPOS_ERROR:
      newState.error = action.payload;
      return newState;
    default:
      return prevState
  }
}
