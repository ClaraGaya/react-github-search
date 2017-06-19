/*import React from 'react';
import { Provider } from 'react-redux'

import { shallow, mount, render} from 'enzyme';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';


import { describe, it } from 'mocha';
import sinon from 'sinon';

import  RepoPage  from '../../components/RepoPage';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)
const initialState = {
    repo: {},
    readme: {},
    branches: {},
    commits: {},
    branches_count: '',
    commits_count: '',
    loading:false,
    error: null 
};

xdescribe('RepoPage: It must render', () => {
  it('renders without exploding', () => {
    const store = mockStore(initialState)
    mount(
      <Provider store={store}>
        <RepoPage params={{owner: 'lostdecade', repo:'manor'}}/>
      </Provider>
    )
  });
});


xdescribe('Test the output', () => {
  
});


xdescribe('Test the states', function() {
  
});


xdescribe('Test the events', function() {
  
});


xdescribe('Test the edge cases', function() {
  
});*/