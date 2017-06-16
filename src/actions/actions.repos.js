import * as types from './types';
import axios from 'axios';

import {ROOT} from '../../config';


// Action creator for geting all repos by a given name
export function getReposByName(name){
    return function (dispatch) {
        dispatch(getReposRequest(name));
        axios
            .get(`${ROOT}/search/repositories?q=${name}`)
            .then(res => {
                dispatch(getReposSuccess(res.data));
            })
            .catch(err => {
                dispatch(getReposError(err));
            });
    };
}

export function getReposRequest () {
    return {
        type: types.GET_REPOS_REQUEST
    };
}

export function getReposSuccess (repos) {
    return {
        type: types.GET_REPOS_SUCCESS,
        payload: repos
    };
}

export function getReposError (err) {
    return {
        type: types.GET_REPOS_ERROR,
        payload: err
    };
}


// Action creator for geting a single repo given its id
export function getRepo(owner,repo){
    return function (dispatch) {
        dispatch(getRepoRequest(owner,repo));
        axios
            .get(`${ROOT}/repos/${owner}/${repo}`)
            .then(res => {
                dispatch(getRepoSuccess(res.data));
            })
            .catch(err => {
                dispatch(getRepoError(err));
            });
    };
}

export function getRepoRequest () {
    return {
        type: types.GET_REPO_REQUEST
    };
}

export function getRepoSuccess (repo) {
    return {
        type: types.GET_REPO_SUCCESS,
        payload: repo
    };
}

export function getRepoError (err) {
    return {
        type: types.GET_REPO_ERROR,
        payload: err
    };
}

// GET /repos/:owner/:repo/branches

export function getRepoBranches(owner,repo){
    return function (dispatch) {
        dispatch(getRepoBranchesRequest(owner,repo));
        axios
            .get(`${ROOT}/repos/${owner}/${repo}/branches`)
            .then(res => {
                dispatch(getRepoBranchesSuccess(res.data));
            })
            .catch(err => {
                dispatch(getRepoBranchesError(err));
            });
    };
}

export function getRepoBranchesRequest () {
    return {
        type: types.GET_REPO_BRANCHES_REQUEST
    };
}

export function getRepoBranchesSuccess (branches) {
    return {
        type: types.GET_REPO_BRANCHES_SUCCESS,
        payload: branches
    };
}

export function getRepoBranchesError (err) {
    return {
        type: types.GET_REPO_BRANCHES_ERROR,
        payload: err
    };
}

// GET repository commits
export function getRepoCommits(owner,repo){
    return function (dispatch) {
        dispatch(getRepoCommitsRequest(owner,repo));
        axios
            .get(`${ROOT}/repos/${owner}/${repo}/branches`)
            .then(res => {
                dispatch(getRepoCommitsSuccess(res.data));
            })
            .catch(err => {
                dispatch(getRepoCommitsError(err));
            });
    };
}

export function getRepoCommitsRequest () {
    return {
        type: types.GET_REPO_COMMITS_REQUEST
    };
}

export function getRepoCommitsSuccess (commits) {
    return {
        type: types.GET_REPO_COMMITS_SUCCESS,
        payload: commits
    };
}

export function getRepoCommitsError (err) {
    return {
        type: types.GET_REPO_COMMITS_ERROR,
        payload: err
    };
}


// GET /repos/:owner/:repo/readme

// GET repository commits
export function getRepoReadme(owner,repo){
    return function (dispatch) {
        dispatch(getRepoReadmeRequest(owner,repo));
        axios
            .get(`${ROOT}/repos/${owner}/${repo}/readme`)
            .then(res => {
                dispatch(getRepoReadmeSuccess(res.data));
            })
            .catch(err => {
                dispatch(getRepoReadmeError(err));
            });
    };
}

export function getRepoReadmeRequest () {
    return {
        type: types.GET_REPO_README_REQUEST
    };
}

export function getRepoReadmeSuccess (commits) {
    return {
        type: types.GET_REPO_README_SUCCESS,
        payload: commits
    };
}

export function getRepoReadmeError (err) {
    return {
        type: types.GET_REPO_README_ERROR,
        payload: err
    };
}

