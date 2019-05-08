import { GET_S, GET_T, GET_U, GET_V, GET_W, GET_X } from './constants';
import { GET_S_SUCCESS, GET_T_SUCCESS, GET_U_SUCCESS, GET_V_SUCCESS, GET_W_SUCCESS, GET_X_SUCCESS } from './constants';
import { GET_S_FAILURE, GET_T_FAILURE, GET_U_FAILURE, GET_V_FAILURE, GET_W_FAILURE, GET_X_FAILURE } from './constants';

import { S, T } from './initialValue';
import Ack from '../../classes/Ack.js';

const initialState = {
    S: S,
    AckS: new Ack(false, false, false),
    T: T,
    AckT: new Ack(false, false, false),
    U: undefined,
    AckU: new Ack(false, false, false),
    V: undefined,
    AckV: new Ack(false, false, false),
    W: undefined,
    AckW: new Ack(false, false, false),
    X: undefined,
    AckX: new Ack(false, false, false),
};

export default function(state = initialState, action) {
    switch (action.type) {

        /* S */
        case GET_S: {
            return {
                ...state,
                AckS: new Ack(true, false, false)
            };
        }
        case GET_S_SUCCESS: {
            return {
                ...state,
                S: action.data,
                AckS: new Ack(false, true, false)
            };
        }
        case GET_S_FAILURE: {
            return {
                ...state,
                AckS: new Ack(false, false, true)
            };
        }

        /* T */
        case GET_T: {
            return {
                ...state,
                AckT: new Ack(true, false, false)
            };
        }
        case GET_T_SUCCESS: {
            return {
                ...state,
                T: action.data,
                AckT: new Ack(false, true, false)
            };
        }
        case GET_T_FAILURE: {
            return {
                ...state,
                AckT: new Ack(false, false, true)
            };
        }

        /* U */
        case GET_U: {
            return {
                ...state,
                AckU: new Ack(true, false, false)
            };
        }
        case GET_U_SUCCESS: {
            return {
                ...state,
                U: action.data,
                AckU: new Ack(false, true, false)
            };
        }
        case GET_U_FAILURE: {
            return {
                ...state,
                AckU: new Ack(false, false, true)
            };
        }

        /* V */
        case GET_V: {
            return {
                ...state,
                AckV: new Ack(true, false, false)
            };
        }
        case GET_V_SUCCESS: {
            return {
                ...state,
                V: action.data,
                AckV: new Ack(false, true, false)
            };
        }
        case GET_V_FAILURE: {
            return {
                ...state,
                AckV: new Ack(false, false, true)
            };
        }

        /* W */
        case GET_W: {
            return {
                ...state,
                AckW: new Ack(true, false, false)
            };
        }
        case GET_W_SUCCESS: {
            return {
                ...state,
                W: action.data,
                AckW: new Ack(false, true, false)
            };
        }
        case GET_W_FAILURE: {
            return {
                ...state,
                AckW: new Ack(false, false, true)
            };
        }

        /* X */
        case GET_X: {
            return {
                ...state,
                AckX: new Ack(true, false, false)
            };
        }
        case GET_X_SUCCESS: {
            return {
                ...state,
                X: action.data,
                AckX: new Ack(false, true, false)
            };
        }
        case GET_X_FAILURE: {
            return {
                ...state,
                AckX: new Ack(false, false, true)
            };
        }

        default:
            return state;
    }
}
