import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import logger from 'redux-logger'
import reducer from "../reducer.js";

const middlewares = [
  thunk
  // logger
];

const enhancer = compose(applyMiddleware(...middlewares));

const configureStore = preloadedState =>
  createStore(reducer, preloadedState, enhancer);

export default configureStore;
