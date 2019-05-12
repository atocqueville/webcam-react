import { UPDATE_PERIOD, OPEN_SNACK, CLOSE_SNACK } from './constants';

const initialState = {
    period: localStorage.getItem('period') ? localStorage.getItem('period') : '3',
    snackOpened: false
};

export default function(state = initialState, action) {
    switch (action.type) {

        case OPEN_SNACK:
            return {
                ...state,
                snackOpened: true
            };

        case CLOSE_SNACK:
            return {
                ...state,
                snackOpened: false
            };

        case UPDATE_PERIOD:
            return {
                ...state,
                period: action.period
            };

        default:
            return state;
    }
}
