import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import CheckboxField from '../../redux/form/CheckboxField';
import CheckboxItem from '../../classes/CheckboxItem';

class CheckboxSection extends React.Component {
    render() {
        const { AckS, AckT, AckU, AckV, AckW, AckX } = this.props;

        const checkboxTab = [
            new CheckboxItem('Chambre parents', 'ST', 'SH', AckS),
            new CheckboxItem('Entrée', 'TT', 'TH', AckT),
            new CheckboxItem('Chambre Arthur', 'UT', 'UH', AckU),
            new CheckboxItem('Extérieur', 'VT', 'VH', AckV),
            new CheckboxItem('Cave', 'WT', 'WH', AckW),
            new CheckboxItem('Sous-sol', 'XT', 'XH', AckX)
        ];

        return (
            <Grid container direction='column'>
                <Grid item>
                    <Grid container direction='row'>
                        <Grid item xs={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography paragraph inline variant='subtitle2'> T </Typography>
                        </Grid>
                        <Grid item xs={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography paragraph inline variant='subtitle2'> Capteur </Typography>
                        </Grid>
                        <Grid item xs={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography paragraph inline variant='subtitle2'> H </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                {checkboxTab.map(item =>
                    <Grid item key={item.location}>
                        <Grid container direction='row'>
                            <Grid item xs={2} style={{ display: 'flex', justifyContent: 'center' }}>
                                <CheckboxField name={item.leftBox} />
                            </Grid>
                            <Grid item xs={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {item.ack.loading &&
                                <CircularProgress size={23} />
                                }
                            </Grid>
                            <Grid item xs={6} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                                <Typography inline> {item.location} </Typography>
                            </Grid>
                            <Grid item xs={2} style={{ display: 'flex', justifyContent: 'center' }}>
                                <CheckboxField name={item.rightBox} />
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        );
    }
}

export default CheckboxSection;