import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

class AckLoadingZone extends React.Component {
    render() {
        const { AckS, AckT, AckU, AckV, AckW, AckX } = this.props;

        let count = 0;
        if (AckS.loading) count++;
        if (AckT.loading) count++;
        if (AckU.loading) count++;
        if (AckV.loading) count++;
        if (AckW.loading) count++;
        if (AckX.loading) count++;

        return (
            <Grid style={{ display: 'flex', alignItems: 'center', paddingRight: '10px' }}>
                {count !== 0 &&
                    <Grid>
                        <CircularProgress size={35} color='inherit' />
                    </Grid>
                }
                {count !== 0 &&
                    <Typography variant='h6' color='inherit' style={{ position:'relative', right: '22px' }}>
                        {count}
                    </Typography>
                }
            </Grid>
        );
    }
}

export default AckLoadingZone;