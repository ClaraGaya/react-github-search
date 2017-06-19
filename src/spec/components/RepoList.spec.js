import React from 'react';
import { Provider } from 'react-redux'

import { shallow, mount} from 'enzyme';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';


import { describe, it } from 'mocha';

import  RepoList  from '../../components/RepoList';
import  RepoCard  from '../../components/RepoCard';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)
const initialState = {
  repos: {
    byId: {
      1:{
        created_at:"2011-04-01T21:59:32Z",
        description:"Test react connected components",
        full_name:"testReact/testMan",
        git_url:"git://github.com/testReact/testWoman.git",
        homepage:"http://www.testReact.com",
        html_url:"https://github.com/testReact/testWoman",
        id:1,
        language:"JavaScript",
        name:"testWoman",
        owner:{},
      }
    },
    total:'1',
    loading:false,
    error: null
  },
};

describe('RepoList: It must render', () => {
  it('renders without exploding', () => {
    const store = mockStore(initialState)
    mount(
      <Provider store={store}>
        <RepoList params={{search: 'test'}}/>
      </Provider>
    )
  });
});

describe('Test the output', () => {
  let wrapper;
  beforeEach(() => {
    const store = mockStore(initialState)
    wrapper = mount(
      <Provider store={store}>
        <RepoList params={{search: 'test'}}/>
      </Provider>
    )
  });

  it('renders the RepoCard component', () => {
    expect(wrapper.find(RepoCard)).to.have.length(1);
  });
});
