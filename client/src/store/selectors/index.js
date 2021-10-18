import { createSelector } from "reselect";

const selectGlobal = state => state;

const makeAuthrorization = () =>
  createSelector(selectGlobal, state => state.AUTHORIZATION);

const makeIsAuth = () =>
  createSelector(makeAuthrorization(), state => state.IS_AUTH);

export { selectGlobal, makeAuthrorization, makeIsAuth };
