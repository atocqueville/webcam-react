import React from 'react';
import { reduxForm } from 'redux-form';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Favorite from '@material-ui/icons/Favorite';

import RadioSection from './Formulaire/RadioSection';
import CheckboxSection from './Formulaire/CheckboxSection';

const styles = () => ({
    icon: {
        color: 'orange'
    }
});

class ChartForm extends React.Component {

    addToLocalStorage = () => {
        const { formValues, period, openSnack } = this.props;
        localStorage.setItem('form', JSON.stringify(formValues));
        localStorage.setItem('period', period);

        openSnack();
    };

    render() {
        const { period, getNewData, updatePeriod, classes } = this.props;

        return (
            <Grid container direction='column'>
                <Grid item style={{ position: 'absolute', marginTop: '-12px' }}>
                    <IconButton
                        className={classes.icon}
                        color="secondary"
                        onClick={this.addToLocalStorage}
                    >
                        <Favorite />
                    </IconButton>
                </Grid>
                <Grid item>
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
})(withStyles(styles)(ChartForm));