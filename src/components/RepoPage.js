import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getRepo, getRepoBranches, getRepoCommits, getRepoReadme } from '../actions/actions.repos';

import _ from 'underscore';


export class RepoPage extends Component {
  componentDidMount () {
    this.props.getRepo(this.props.params.owner, this.props.params.repo)
    this.props.getRepoBranches(this.props.params.owner, this.props.params.repo)
    this.props.getRepoCommits(this.props.params.owner, this.props.params.repo)
    this.props.getRepoReadme(this.props.params.owner, this.props.params.repo)
  }
  render() {
     console.log(this.props.readme)
     
    return (
        <section className="repo-list container">
            <div className="row">
                <div className="col-sm-8">
                    <h1><a href={this.props.repo.html_url}><strong>{this.props.repo.full_name}</strong></a></h1>
                </div>
                <div className="col-sm-4">
                    <ul className="pagehead-actions">
                        <li>{this.props.repo.open_issues_count} Open Issues</li>
                        <li>{this.props.repo.forks_count} Forks</li>
                        <li>{this.props.repo.watchers} Watchers</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <p>{this.props.repo.description}</p>
                    <p><a href={this.props.repo.homepage}>{this.props.repo.homepage}</a></p>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <ul className="nav nav-justified">
                                <li>{this.props.commits_count} commits</li>
                                <li>{this.props.branches_count} branches</li>
                                <li>{} releases</li>
                                <li>{} contributors</li>
                                <li>MIT</li>
                            </ul>
                        </div>
                    </div> 
                </div>
            </div> 
            <div className="row">
                <div className="col-sm-12">
                    <p><a href={this.props.readme.html_url}>see Readme</a></p>
                    <p><a className="btn btn-primary" href={this.props.readme.download_url} download>download Readme.md</a></p>
                </div>
            </div>         
      </section>
    );
  }
}

RepoPage.propTypes = {
    getRepo: PropTypes.func,
    getRepoBranches: PropTypes.func,
    getRepoCommits: PropTypes.func,
    getRepoReadme: PropTypes.func,
    repo: PropTypes.object,
};

function mapDispatchToProps (dispatch) {
  return {
    getRepo: (owner,repo) => {
      dispatch(getRepo(owner,repo));
    },
    getRepoBranches: (owner,repo) => {
      dispatch(getRepoBranches(owner,repo));
    },
    getRepoCommits: (owner,repo) => {
      dispatch(getRepoCommits(owner,repo));
    },
    getRepoReadme: (owner,repo) => {
      dispatch(getRepoReadme(owner,repo));
    }
  };
}

function mapStateToProps (state) {
  return {
    repo: state.repo.repo.data,
    readme: state.repo.repo.readme,
    branches: state.repo.repo.branches,
    commits: state.repo.repo.commits,
    branches_count: state.repo.repo.branches_count,
    commits_count: state.repo.repo.commits_count,
    loading: state.repo.repo.loading,
    error: state.repo.repo.error
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(RepoPage);