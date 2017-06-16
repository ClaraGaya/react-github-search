import React from 'react';
import {Link} from 'react-router';

function Nav (props) {
    const search = props.params.search || '';
    return(
        <div className="nav-results">
            <nav className="navbar container">
                <ul className="nav navbar-nav">
                    <li><Link to={`/repos/${search}`} activeClassName="nav-active" onlyActiveOnIndex>Repositories</Link></li>
                    {/*<li><Link to={`/code/${search}`}activeClassName="nav-active" >Code</Link></li>
                    <li><Link to={`/commits/${search}`} activeClassName="nav-active">Commits</Link></li>
                    <li><Link to={`/issues/${search}`} activeClassName="nav-active">Issues</Link></li>
                    <li><Link to={`/wikis/${search}`} activeClassName="nav-active">Wikis</Link></li>
                    <li><Link to={`/users/${search}`}  activeClassName="nav-active">Users</Link></li>*/}
                </ul>
            </nav>
        </div>
    )
}

export default Nav;