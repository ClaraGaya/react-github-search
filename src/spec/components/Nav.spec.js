import React from 'react'; 
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Link } from 'react-router';

import Nav from '../../components/Nav';

describe('<Nav />', () => {
  it('renders without exploding', () => {
    shallow(<Nav params={{search: 'test'}}/>);
  });

  it('Test the output', () => {
    const wrapper = shallow(<Nav params={{search: 'test'}}/>);
    expect(wrapper.find('nav').hasClass('navbar')).to.be.true
  });

  it('Test params.search is added to link tag to property', () => {
    const wrapper = shallow(<Nav params={{search: 'test'}}/>);
    expect(wrapper.find(Link).props().to).to.equal('/repos/test');
  });

});