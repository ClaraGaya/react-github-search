import { expect } from 'chai';
import * as actions from '../actions/actions.repos';
import { repoReducer } from '../reducers/repo';
import { reposReducer } from '../reducers/repos';

xdescribe('Tests getReposByName',  () => {
    const initialState = {
        byId: {},
        loading: false,
        error: null
    };
    describe('should handle getReposByName', () => {
        it('getReposRequest: does not mutate the initial state', function () {
            const action = actions.getReposRequest();
            const newState = reposReducer(initialState, action);
            expect(newState.loading).to.be.true;
            expect(newState.error).to.be.null;
        });
        it('getReposSuccess: does not mutate the initial state', function () {
            const action = actions.getReposSuccess({items:[]});
            const newState = reposReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.byId).to.not.equal(initialState.byId);
            expect(newState.loading).to.be.false;
            expect(newState.error).to.be.null;
            expect(newState.byId).to.eql({});
        });
        it('getReposError: does not mutate the initial state', function () {
            const action = actions.getReposError();
            const newState = reposReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.be.false;
        });
    });
});

xdescribe('Tests getRepo',  () => {
    const initialState = {
        repo: {
            data:{},
            branches:{},
            branches_count:'',
            commits:{},
            commits_count:'',
            readme:''
        },
        loading: false,
        error: null
    };
    describe('should handle getRepo', () => {
        it('getRepoRequest: does not mutate the initial state', function () {
            const action = actions.getRepoRequest();
            const newState = repoReducer(initialState, action);
            expect(newState.loading).to.be.true;
            expect(newState.error).to.be.null;
        });
        it('getRepoSuccess: does not mutate the initial state', function () {
            const action = actions.getRepoSuccess({});
            const newState = repoReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.repo).to.not.equal(initialState.repo);
            expect(newState.repo.data).to.not.equal(initialState.repo.data);
            expect(newState.loading).to.be.false;
            expect(newState.error).to.be.null;
            expect(newState.repo).to.be.an("object");
            expect(newState.repo.data).to.eql({});
        });
        it('getRepoError: does not mutate the initial state', function () {
            const action = actions.getRepoError();
            const newState = repoReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.be.false;
        });
    });
    describe('should handle getRepoCommits', () => {
        it('getRepoCommitsRequest: does not mutate the initial state', function () {
            const action = actions.getRepoCommitsRequest();
            const newState = repoReducer(initialState, action);
            expect(newState.loading).to.be.true;
            expect(newState.error).to.be.null;
        });
        it('getRepoCommitsSuccess: does not mutate the initial state', function () {
            const action = actions.getRepoCommitsSuccess([]);
            const newState = repoReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.repo).to.not.equal(initialState.commits);
            expect(newState.repo.commits).to.not.equal(initialState.repo.commits);
            expect(newState.repo.commits_count).to.not.equal(initialState.repo.commits_count);
            expect(newState.loading).to.be.false;
            expect(newState.error).to.be.null;
            expect(newState.repo).to.be.an("object");
            expect(newState.repo.commits).to.eql({});
            expect(newState.repo.commits_count).to.be.a("number");
        });
        it('getRepoCommitsError: does not mutate the initial state', function () {
            const action = actions.getRepoCommitsError();
            const newState = repoReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.be.false;
        });
    });
    describe('should handle getRepoBranches', () => {
        it('getRepoBranchesRequest: does not mutate the initial state', function () {
            const action = actions.getRepoBranchesRequest();
            const newState = repoReducer(initialState, action);
            expect(newState.loading).to.be.true;
            expect(newState.error).to.be.null;
        });
        it('getRepoBranchesSuccess: does not mutate the initial state', function () {
            const action = actions.getRepoBranchesSuccess([]);
            const newState = repoReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.repo).to.not.equal(initialState.commits);
            expect(newState.repo.branches).to.not.equal(initialState.repo.branches);
            expect(newState.repo.branchess_count).to.not.equal(initialState.repo.branches_count);
            expect(newState.loading).to.be.false;
            expect(newState.error).to.be.null;
            expect(newState.repo).to.be.an("object");
            expect(newState.repo.branches).to.eql({});
            expect(newState.repo.branches_count).to.be.a("number");
        });
        it('getRepoBranchesError: does not mutate the initial state', function () {
            const action = actions.getRepoBranchesError();
            const newState = repoReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.be.false;
        });
    });
});