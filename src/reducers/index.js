
import { reducer as formReducer } from 'redux-form';
import {combineReducers} from 'redux';
import studentsReducer from './studentsReducer';

export default combineReducers({
    form: formReducer,
    students: studentsReducer
});