import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Search from './Search';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <Search />
                        </div>
                        <nav className="col-sm-4">
                            <ul className="pull-right nav navbar-nav">
                                <li></li>           
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
  Search: PropTypes.element,
};

