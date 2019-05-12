import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Chart from './Chart';
import ChartForm from './ChartForm';
import initialValues from './Formulaire/initialValues';

class GraphPage extends React.Component {
    state = {
        innerHeight: window.innerHeight
    };
    
    static defaultProps = {
        formValues: initialValues
    };

    componentDidMount() {
        window.addEventListener('resize', () => this.setState({ innerHeight: window.innerHeight }));
    }

    render() {
        const {
            S, T, U, V, W, X,
            formValues,
            getNewData,
            mobile,
            period, updatePeriod, openSnack
        } = this.props;
        
        return (
            <Grid container direction='row' style={{ display: 'flex', flex: '1 0 auto' }}>
                {!mobile &&
                    <Grid item xs={3} style={{ display: 'flex', flex: '1 0 auto', padding: '30px', justifyContent: 'center' }}>
                        <ChartForm
                            formValues={formValues}
                            period={period}
                            getNewData={getNewData}
                            updatePeriod={updatePeriod}
                            openSnack={openSnack}
                        />
                    </Grid>
                }

                {!mobile &&
                    <Grid item xs={9} style={{ display: 'flex', flex: '1 0 auto', padding: '30px', height: innerHeight - 64 }}>
                        <Paper style={{ display: 'flex', flex: '1 0 auto', width: '100%' }}>
                            <Chart
                                S={S} T={T} U={U} V={V} W={W} X={X}
                                formValues={formValues}
                                mobile={mobile}
                            />
                        </Paper>
                    </Grid>
                }

                {mobile &&
                    <Grid item style={{ display: 'flex', flex: '1 0 auto', width: '100%', height: innerHeight - 64 }}>
                        <Chart
                            S={S} T={T} U={U} V={V} W={W} X={X}
                            formValues={formValues}
                            mobile={mobile}
                        />
                    </Grid>
                }
            </Grid>
        );
    }
}

export default GraphPage;