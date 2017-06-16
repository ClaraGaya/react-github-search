import * as actions from '../actions/actions.repos';
import * as types from '../actions/types';
import {expect} from 'chai';

describe('actions.getReposByName', function () {
    it('getReposRequest: returns the expected action', function () {
        const action = actions.getReposRequest();
        expect(action).to.eql({
            type: types.GET_REPOS_REQUEST,
        });
    });
    it('getReposSuccess: returns the expected action', function () {
        const action = actions.getReposSuccess({});
        expect(action).to.eql({
            type: types.GET_REPOS_SUCCESS,
            payload: {}
        });
    });
    it('getReposError: returns the expected action', function () {
        const action = actions.getReposError({});
        expect(action).to.eql({
            type: types.GET_REPOS_ERROR,
            payload: {}
        });
    });
});

describe('actions.getRepo', function () {
    it('getRepoRequest: returns the expected action', function () {
        const action = actions.getRepoRequest();
        expect(action).to.eql({
            type: types.GET_REPO_REQUEST,
        });
    });
    it('getRepoSuccess: returns the expected action', function () {
        const action = actions.getRepoSuccess({});
        expect(action).to.eql({
            type: types.GET_REPO_SUCCESS,
            payload: {}
        });
    });
    it('getRepoError: returns the expected action', function () {
        const action = actions.getRepoError({});
        expect(action).to.eql({
            type: types.GET_REPO_ERROR,
            payload: {}
        });
    });
});

describe('actions.getRepoCommits', function () {
    it('getRepoCommitsRequest: returns the expected action', function () {
        const action = actions.getRepoCommitsRequest();
        expect(action).to.eql({
            type: types.GET_REPO_COMMITS_REQUEST,
        });
    });
    it('getRepoCommitsSuccess: returns the expected action', function () {
        const action = actions.getRepoCommitsSuccess({});
        expect(action).to.eql({
            type: types.GET_REPO_COMMITS_SUCCESS,
            payload: {}
        });
    });
    it('getRepoCommitsError: returns the expected action', function () {
        const action = actions.getRepoCommitsError({});
        expect(action).to.eql({
            type: types.GET_REPO_COMMITS_ERROR,
            payload: {}
        });
    });
});

describe('actions.getRepoBranches', function () {
    it('getRepoBranchesRequest: returns the expected action', function () {
        const action = actions.getRepoBranchesRequest();
        expect(action).to.eql({
            type: types.GET_REPO_BRANCHES_REQUEST,
        });
    });
    it('getRepoBranchesSuccess: returns the expected action', function () {
        const action = actions.getRepoBranchesSuccess({});
        expect(action).to.eql({
            type: types.GET_REPO_BRANCHES_SUCCESS,
            payload: {}
        });
    });
    it('getRepoBranchesError: returns the expected action', function () {
        const action = actions.getRepoBranchesError({});
        expect(action).to.eql({
            type: types.GET_REPO_BRANCHES_ERROR,
            payload: {}
        });
    });
});