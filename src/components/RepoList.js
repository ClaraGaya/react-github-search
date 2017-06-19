import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getReposByName } from '../actions/actions.repos';

import _ from 'underscore';
import RepoCard from './RepoCard';


export class RepoList extends Component {
  componentDidMount () {
    if(this.props.params.search !== undefined) {
      this.props.getReposByName(this.props.params.search);
    }
  }
  componentWillReceiveProps(newProps){
    if(newProps.params.search !== this.props.params.search) {
      this.props.getReposByName(newProps.params.search);
    }
  }
  render() {
    return (
      <section className="repo-list col-sm-9">
        <h3 className="page-title">{this.props.repos.total ? this.props.repos.total +` Repository results` : `Search for repositories`}</h3>
        { 
          _.map(this.props.repos.byId, (repo, i) => { 
            return (
              <RepoCard key={i} {...repo} />
            )      
          }) 
        }
      </section>
    );
  }
}

RepoList.propTypes = {
  getReposByName: PropTypes.func,
};

function mapDispatchToProps (dispatch) {
  return {
    getReposByName: (name) => {
      dispatch(getReposByName(name));
    }
  };
}

function mapStateToProps (state) {
  return {
    repos: state.repos,
    loading: state.repos.loading,
    error: state.repos.error
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(RepoList);


