import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}  
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};