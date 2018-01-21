import { SET_DAY } from '../constants/';
import moment from 'moment';

const initialState = moment().valueOf();

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case SET_DAY:
            return payload.selectedDay
        default:
            return state
    }
};