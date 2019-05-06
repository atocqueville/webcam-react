import { GET_S, GET_S_SUCCESS, GET_S_FAILURE } from './constants';
import { GET_T, GET_T_SUCCESS, GET_T_FAILURE } from './constants';
import { GET_U, GET_U_SUCCESS, GET_U_FAILURE } from './constants';
import { GET_V, GET_V_SUCCESS, GET_V_FAILURE } from './constants';
import { GET_W, GET_W_SUCCESS, GET_W_FAILURE } from './constants';
import { GET_X, GET_X_SUCCESS, GET_X_FAILURE } from './constants';

export const getS = (time) => ({
    type: GET_S,
    time
});
export const getSSuccess = (data) => ({
    type: GET_S_SUCCESS,
    data
});
export const getSFailure = () => ({
    type: GET_S_FAILURE
});

export const getT = (time) => ({
    type: GET_T,
    time
});
export const getTSuccess = (data) => ({
    type: GET_T_SUCCESS,
    data
});
export const getTFailure = () => ({
    type: GET_T_FAILURE
});

export const getU = (time) => ({
    type: GET_U,
    time
});
export const getUSuccess = (data) => ({
    type: GET_U_SUCCESS,
    data
});
export const getUFailure = () => ({
    type: GET_U_FAILURE
});

export const getV = (time) => ({
    type: GET_V,
    time
});
export const getVSuccess = (data) => ({
    type: GET_V_SUCCESS,
    data
});
export const getVFailure = () => ({
    type: GET_V_FAILURE
});

export const getW = (time) => ({
    type: GET_W,
    time
});
export const getWSuccess = (data) => ({
    type: GET_W_SUCCESS,
    data
});
export const getWFailure = () => ({
    type: GET_W_FAILURE
});

export const getX = (time) => ({
    type: GET_X,
    time
});
export const getXSuccess = (data) => ({
    type: GET_X_SUCCESS,
    data
});
export const getXFailure = () => ({
    type: GET_X_FAILURE
});