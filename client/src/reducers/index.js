import { combineReducers } from 'redux';

import orders from './orders';
import auth from './auth';

export const reducers = combineReducers({ orders, auth });
