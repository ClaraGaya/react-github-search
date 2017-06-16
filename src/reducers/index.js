import { combineReducers } from 'redux'
import { reposReducer } from './repos'
import { repoReducer } from './repo'


const reducer = combineReducers({
  repos: reposReducer,
  repo: repoReducer
})

export default reducer;