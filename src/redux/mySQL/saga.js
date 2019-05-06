import axios from 'axios/index';
import { put, takeLatest } from 'redux-saga/es/effects';

import { GET_S, GET_T, GET_U, GET_V, GET_W, GET_X } from './constants';
import * as graphActions from './actions';

function* fetchS(action) {
    const request = `query_alex.php?temps=${action.time}&capteur=S`;
    
    try {
        const response = yield axios.get(request);
        yield put(graphActions.getSSuccess(response.data));
    } catch (e) {
        yield put(graphActions.getSFailure());
    }
}

function* fetchT(action) {
    const request = `query_alex.php?temps=${action.time}&capteur=T`;

    try {
        const response = yield axios.get(request);
        yield put(graphActions.getTSuccess(response.data));
    } catch (e) {
        yield put(graphActions.getTFailure());
    }
}

function* fetchU(action) {
    const request = `query_alex.php?temps=${action.time}&capteur=U`;

    try {
        const response = yield axios.get(request);
        yield put(graphActions.getUSuccess(response.data));
    } catch (e) {
        yield put(graphActions.getUFailure());
    }
}

function* fetchV(action) {
    const request = `query_alex.php?temps=${action.time}&capteur=V`;

    try {
        const response = yield axios.get(request);
        yield put(graphActions.getVSuccess(response.data));
    } catch (e) {
        yield put(graphActions.getVFailure());
    }
}

function* fetchW(action) {
    const request = `query_alex.php?temps=${action.time}&capteur=W`;

    try {
        const response = yield axios.get(request);
        yield put(graphActions.getWSuccess(response.data));
    } catch (e) {
        yield put(graphActions.getWFailure());
    }
}

function* fetchX(action) {
    const request = `query_alex.php?temps=${action.time}&capteur=X`;

    try {
        const response = yield axios.get(request);
        yield put(graphActions.getXSuccess(response.data));
    } catch (e) {
        yield put(graphActions.getXFailure());
    }
}

function* mySaga() {
    yield takeLatest(GET_S, fetchS);
    yield takeLatest(GET_T, fetchT);
    yield takeLatest(GET_U, fetchU);
    yield takeLatest(GET_V, fetchV);
    yield takeLatest(GET_W, fetchW);
    yield takeLatest(GET_X, fetchX);
}

export default mySaga;