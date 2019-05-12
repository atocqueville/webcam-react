import { UPDATE_PERIOD, OPEN_SNACK, CLOSE_SNACK } from './constants';

export const updatePeriod = period => ({
    type: UPDATE_PERIOD,
    period
});

export const openSnack = () => ({
    type: OPEN_SNACK
});
export const closeSnack = () => ({
    type: CLOSE_SNACK
});