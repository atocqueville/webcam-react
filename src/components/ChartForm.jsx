import React from 'react';
import { reduxForm } from 'redux-form';

import Grid from '@material-ui/core/Grid';
import RadioSection from './Formulaire/RadioSection';
import CheckboxSection from './Formulaire/CheckboxSection';

class ChartForm extends React.Component {
    render() {
        const {
            AckS, AckT, AckU, AckV, AckW, AckX,
            getNewData, period, updatePeriod
        } = this.props;

        return (
            <Grid container direction='column'>
                <Grid item style={{ paddingTop: '20px' }}>
                    <RadioSection getNewData={getNewData} period={period} updatePeriod={updatePeriod} />
                </Grid>
                <Grid item style={{ paddingTop: '20px' }}>
                    <CheckboxSection AckS={AckS} AckT={AckT} AckU={AckU} AckV={AckV} AckW={AckW} AckX={AckX} />
                </Grid>
            </Grid>
        );
    }
}

export default reduxForm({
    form: 'sensorForm',
    destroyOnUnmount: false
})(ChartForm);