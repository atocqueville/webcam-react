import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import database from './mySQL/reducer';
import settings from './settings/reducer';

export default combineReducers({
    database,
    settings,
    form: formReducer
});