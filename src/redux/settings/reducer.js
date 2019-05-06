import { UPDATE_PERIOD } from './constants';

const initialState = {
    period: '3'
};

export default function(state = initialState, action) {
    switch (action.type) {

        case UPDATE_PERIOD:
            return {
                ...state,
                period: action.period
            };

        default:
            return state;
    }
}
