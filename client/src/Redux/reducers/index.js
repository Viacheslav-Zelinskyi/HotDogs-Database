import { combineReducers } from 'redux';
import items from './hotdogs';
import { reducer as form } from 'redux-form'

export default combineReducers({
	items,
	form
});
