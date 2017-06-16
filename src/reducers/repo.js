import * as types from '../actions/types';

const initialState = {
  repo: {
      data:{},
      branches:{},
      branches_count:'',
      commits:{},
      commits_count:'',
      readme:''
  },
  loading:false,
  error: null
};

function arrayToObject (data) {
    return data.reduce(function (acc, item) {
        acc[item.name] = item;
        return acc;
    }, {});
}

export function repoReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  switch (action.type) {
    case types.GET_REPO_REQUEST:
      newState.loading = true;
      return newState;
    case types.GET_REPO_BRANCHES_REQUEST:
      newState.loading = true;
      return newState;
    case types.GET_REPO_COMMITS_REQUEST:
      newState.loading = true;
      return newState;
    case types.GET_REPO_README_REQUEST:
      newState.loading = true;
      return newState;
    case types.GET_REPO_SUCCESS:
      newState.repo = Object.assign({}, prevState.repo);
      newState.repo.data = Object.assign({}, prevState.repo.data);
      newState.repo.data = action.payload;
      newState.loading = false;
      newState.error = null;
      return newState;
    case types.GET_REPO_BRANCHES_SUCCESS:
      newState.repo = Object.assign({}, prevState.repo);
      newState.repo.branches = arrayToObject(action.payload);
      newState.repo.branches_count = action.payload.length;
      newState.loading = false;
      newState.error = null;
      return newState;
    case types.GET_REPO_COMMITS_SUCCESS:
      newState.repo = Object.assign({}, prevState.repo);
      newState.repo.commits = arrayToObject(action.payload);
      newState.repo.commits_count = action.payload.length;
      newState.loading = false;
      newState.error = null;
      return newState;
    case types.GET_REPO_README_SUCCESS:
      newState.repo = Object.assign({}, prevState.repo);
      newState.repo.readme = action.payload;
      newState.loading = false;
      newState.error = null;
      return newState;
    case types.GET_REPO_ERROR:
      newState.error = action.payload;
      return newState;
    case types.GET_REPO_BRANCHES_ERROR:
      newState.error = action.payload;
      return newState;
    case types.GET_REPO_COMMITS_ERROR:
      newState.error = action.payload;
      return newState;
    case types.GET_REPO_README_ERROR:
      newState.error = payload;
      return newState;
    default:
      return prevState
  }
}
