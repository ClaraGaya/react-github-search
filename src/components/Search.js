import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      repoName: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {}
  handleChange(e){
    this.setState({repoName: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    browserHistory.push(`/repos/${this.state.repoName}`);
  }
  render() {
  return (
    <form className="form-inline" onSubmit={(e) => this.handleSubmit(e)}>
      <label><i className="fa fa-github" aria-hidden="true"></i></label>
      <input type="text" 
      className="form-control" 
      placeholder="Search"
      value={this.state.repoName}
      onChange={this.handleChange}
      />    
    </form>
  );
  }
}

