import React from 'react';
import { shallow, mount, render} from 'enzyme';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';


import Search from '../../components/Search';

describe('<Search /> It must render', () => {
  it('renders without exploding', () => {
    shallow(<Search />);
  });
 it('calls componentDidMount to check that it mounts correctly', () => {
    sinon.spy(Search.prototype, 'componentDidMount');
    const wrapper = mount(<Search />);
    expect(Search.prototype.componentDidMount.calledOnce).to.equal(true);
    expect(Search.prototype.componentDidMount).to.have.property('callCount', 1);
    Search.prototype.componentDidMount.restore();
  });
  it('should render input field', () => {
    const wrapper = shallow(<Search/>);
    expect(wrapper.containsAllMatchingElements([
      <input/>
    ])).to.equal(true);
  });
});

describe('<Search /> Test the output', () => {
  it('should render a form', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('form').hasClass('form-inline')).to.be.true
  });
});


describe('<Search /> Test the states', function() {
  const wrapper = shallow(<Search />);
  it('should change the state on input change event', function() {
    wrapper.find('input').simulate('change', { target: { value: 'react' } });
    expect(wrapper.find('input').get(0).props.value).to.equal('react');
    expect(wrapper.state().repoName).to.equal('react');
  });
});


// xdescribe('<Search /> Test the events', function() {
//   const wrapper = mount(<Search />);
  

//   it('should push URL after form submit', function() {
//     wrapper.find('input').simulate('change', { target: { value: 'northcoders' } });
//     wrapper.find('form').simulate('submit');
//     expect(wraper.prop('onSubmit')).to.eql(handleSubmit);
//     expect(handleSubmit.callCount).to.equal(1)
//     // expect(location.pathname).toEqual('/repos/northcoders')
//     // wrapper.find('form').simulate('submit', { preventDefault: () => {}, target: { value: 'northcoders' } });
//     // expect(Search.prototype.handleSubmit).to.have.property('callCount', 1); 
//     //sinon.spy(browserHistory.prototype, 'push'); 
//     // wrapper.find('form').simulate('submit', { preventDefault: () => {} });
//     // wrapper.find('input').simulate('change', { target: { value: 'northcoders' } });
//     // wrapper.find('form').simulate('submit', { preventDefault: () => {}, target: { value: 'northcoders' } });
//     // expect(browserHistory.prototype.push).to.be.called;
//     //expect(browserHistory.push).to.be.calledWith('/repos/northcoders');
//   });
// });
