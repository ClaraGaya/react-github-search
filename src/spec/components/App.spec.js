import React from 'react'; 
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import App from '../../components/App';
import Results from '../../components/Results';

describe('<App />', () => {
  it('renders without exploding', () => {
    shallow(<App />);
  });

 it('calls componentDidMount to check that it mounts correctly', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
    expect(App.prototype.componentDidMount).to.have.property('callCount', 1);
    App.prototype.componentDidMount.restore();
  });

});