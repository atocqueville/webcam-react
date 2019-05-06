import { UPDATE_PERIOD } from './constants';

export const updatePeriod = period => ({
    type: UPDATE_PERIOD,
    period
});