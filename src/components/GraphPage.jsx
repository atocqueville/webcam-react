import React from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Chart from './Chart';
import ChartForm from './ChartForm';

class GraphPage extends React.Component {
    render() {
        const {
            S, ST, SH, AckS,
            T, TT, TH, AckT,
            U, UT, UH, AckU,
            V, VT, VH, AckV,
            W, WT, WH, AckW,
            X, XT, XH, AckX,
            getNewData, mobile,
            period, updatePeriod
        } = this.props;

        return (
            <Grid container direction='row' style={{ display: 'flex', flex: '1 0 auto' }}>
                {!mobile &&
                    <Grid item xs={3} style={{ display: 'flex', flex: '1 0 auto', padding: '30px', justifyContent: 'center' }}>
                        <ChartForm
                            AckS={AckS} AckT={AckT} AckU={AckU} AckV={AckV} AckW={AckW} AckX={AckX}
                            getNewData={getNewData}
                            period={period}
                            updatePeriod={updatePeriod}
                        />
                    </Grid>
                }

                {!mobile &&
                    <Grid item xs={9} style={{ display: 'flex', flex: '1 0 auto', padding: '30px', height: 'calc(100vh - 64px)' }}>
                        <Paper style={{ display: 'flex', flex: '1 0 auto', width: '100%' }}>
                            <Chart
                                S={S} ST={ST} SH={SH}
                                T={T} TT={TT} TH={TH}
                                U={U} UT={UT} UH={UH}
                                V={V} VT={VT} VH={VH}
                                W={W} WT={WT} WH={WH}
                                X={X} XT={XT} XH={XH}
                                mobile={mobile}
                            />
                        </Paper>
                    </Grid>
                }

                {mobile &&
                    <Grid item style={{ display: 'flex', flex: '1 0 auto', width: '100%', height: 'calc(100vh - 64px)' }}>
                        <Chart
                            S={S} ST={ST} SH={SH}
                            T={T} TT={TT} TH={TH}
                            U={U} UT={UT} UH={UH}
                            V={V} VT={VT} VH={VH}
                            W={W} WT={WT} WH={WH}
                            X={X} XT={XT} XH={XH}
                            mobile={mobile}
                        />
                    </Grid>
                }
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({
    ST: formValueSelector('sensorForm')(state, 'ST'),
    SH: formValueSelector('sensorForm')(state, 'SH'),
    TT: formValueSelector('sensorForm')(state, 'TT'),
    TH: formValueSelector('sensorForm')(state, 'TH'),
    UT: formValueSelector('sensorForm')(state, 'UT'),
    UH: formValueSelector('sensorForm')(state, 'UH'),
    VT: formValueSelector('sensorForm')(state, 'VT'),
    VH: formValueSelector('sensorForm')(state, 'VH'),
    WT: formValueSelector('sensorForm')(state, 'WT'),
    WH: formValueSelector('sensorForm')(state, 'WH'),
    XT: formValueSelector('sensorForm')(state, 'XT'),
    XH: formValueSelector('sensorForm')(state, 'XH'),
});

export default connect(mapStateToProps)(GraphPage);