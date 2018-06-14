import { combineReducers } from 'redux';

import userReducers from './user';

const allReducers = combineReducers({
    userReducers
});

export default allReducers;