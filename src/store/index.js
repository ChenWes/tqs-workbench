import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import allReducers from '../reducers';

const store = createStore(allReducers, applyMiddleware(logger));

export default store;