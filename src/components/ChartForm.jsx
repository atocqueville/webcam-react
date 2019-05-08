import React from 'react';
import { reduxForm } from 'redux-form';

import Grid from '@material-ui/core/Grid';
import RadioSection from './Formulaire/RadioSection';
import CheckboxSection from './Formulaire/CheckboxSection';

class ChartForm extends React.Component {
    render() {
        const { getNewData, period, updatePeriod } = this.props;

        return (
            <Grid container direction='column'>
                <Grid item style={{ paddingTop: '20px' }}>
                    <RadioSection getNewData={getNewData} period={period} updatePeriod={updatePeriod} />
                </Grid>
                <Grid item style={{ paddingTop: '20px' }}>
                    <CheckboxSection />
                </Grid>
            </Grid>
        );
    }
}

export default reduxForm({
    form: 'sensorForm',
    destroyOnUnmount: false
})(ChartForm);