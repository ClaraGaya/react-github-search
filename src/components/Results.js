import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Nav from './Nav';


export default class Results extends Component {
  render () {
    return (
      <main>
        <Nav params={this.props.params}/>
        <div className="container">
          <div className="row">
              {this.props.children}
          </div>
        </div>
      </main>
    );
  }
}

Results.propTypes = {
  Nav: PropTypes.element,
  children: PropTypes.element,
};