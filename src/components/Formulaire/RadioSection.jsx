import React from 'react';

import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

const styles = () => ({
    radio: {
        padding: 5
    }
});

class RadioSection extends React.Component {
    handleChange = event => {
        const time = event.target.value;
        this.props.updatePeriod(time);
        this.props.getNewData(time);
    };

    render() {
        const { period } = this.props;

        return (
            <Grid container direction='column' style={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography paragraph variant='subtitle2'> Période </Typography>
                </Grid>

                <Grid item>
                    <Grid container direction='row'>
                        <Grid item xs={2} style={{ display: 'flex', justifyContent: 'center' }}>
                            <RadioGroup
                                value={period}
                                onChange={this.handleChange}
                            >
                                <Radio value='1' classes={{ root: this.props.classes.radio}} />
                                <Radio value='3' classes={{ root: this.props.classes.radio}} />
                                <Radio value='7' classes={{ root: this.props.classes.radio}} />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={5} style={{ display: 'flex', flex: '1 0 auto' }}>
                            <Grid container direction='column' style={{ display: 'flex', flex: '1 0 auto' }}>
                                <Grid item style={{ display: 'flex', flex: '1 0 auto', alignItems: 'center' }}>
                                    <Typography> Un jour </Typography>
                                </Grid>
                                <Grid item style={{ display: 'flex', flex: '1 0 auto', alignItems: 'center' }}>
                                    <Typography> Trois jours </Typography>
                                </Grid>
                                <Grid item style={{ display: 'flex', flex: '1 0 auto', alignItems: 'center' }}>
                                    <Typography> Une semaine </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={2} style={{ display: 'flex', justifyContent: 'center' }}>
                            <RadioGroup
                                value={period}
                                onChange={this.handleChange}
                            >
                                <Radio value='30' classes={{ root: this.props.classes.radio}} />
                                <Radio value='180' classes={{ root: this.props.classes.radio}} />
                                <Radio value='365' classes={{ root: this.props.classes.radio}} />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={3} style={{ display: 'flex', flex: '1 0 auto' }}>
                            <Grid container direction='column' style={{ display: 'flex', flex: '1 0 auto' }}>
                                <Grid item style={{ display: 'flex', flex: '1 0 auto', alignItems: 'center' }}>
                                    <Typography> Un mois </Typography>
                                </Grid>
                                <Grid item style={{ display: 'flex', flex: '1 0 auto', alignItems: 'center' }}>
                                    <Typography> Six mois </Typography>
                                </Grid>
                                <Grid item style={{ display: 'flex', flex: '1 0 auto', alignItems: 'center' }}>
                                    <Typography> Un an </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(RadioSection);