import { SET_DAY } from '../constants/';

export const setDay = (selectedDay) => ({
    type: SET_DAY,
    payload: {
        selectedDay
    }
});