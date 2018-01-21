import { createStore, combineReducers} from 'redux';
import selectedDayReducer from '../reducers/selectedDay'

export default createStore(
    combineReducers({
		selectedDay: selectedDayReducer
    })
);
