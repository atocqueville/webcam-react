import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initialize } from 'redux-form';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import ScrollLock from 'react-scrolllock';

import Grid from '@material-ui/core/Grid';
import './app.css';

import GraphPage from './components/GraphPage';
import Topbar from './components/Topbar';
import initialValues from './components/Formulaire/initialValues';

import * as dbActions from './redux/mySQL/actions';
import { updatePeriod } from './redux/settings/actions';

class App extends React.Component {
    componentDidMount() {
        // this.getNewData(this.props.period);
        this.props.init('sensorForm', initialValues);
    }

    getNewData = (time) => {
        this.props.dbActions.getS(time);
        this.props.dbActions.getT(time);
        this.props.dbActions.getU(time);
        this.props.dbActions.getV(time);
        this.props.dbActions.getW(time);
        this.props.dbActions.getX(time);
    };

    render() {
        const { S, AckS, T, AckT, U, AckU, V, AckV, W, AckW, X, AckX, period, updatePeriod } = this.props;
        const mobile = !isWidthUp('md', this.props.width);

        return (
            <ScrollLock>
                <Grid>
                    <Topbar
                        AckS={AckS} AckT={AckT} AckU={AckU} AckV={AckV} AckW={AckW} AckX={AckX}
                        mobile={mobile}
                        period={period}
                        getNewData={this.getNewData}
                        updatePeriod={updatePeriod}
                    />

                    <GraphPage
                        S={S} T={T} U={U}
                        V={V} W={W} X={X}
                        getNewData={this.getNewData}
                        mobile={mobile}
                        period={period}
                        updatePeriod={updatePeriod}
                    />
                </Grid>
            </ScrollLock>
        );
    }
}

const mapStateToProps = (state) => ({
    S: state.database.S,
    AckS: state.database.AckS,
    T: state.database.T,
    AckT: state.database.AckT,
    U: state.database.U,
    AckU: state.database.AckU,
    V: state.database.V,
    AckV: state.database.AckV,
    W: state.database.W,
    AckW: state.database.AckW,
    X: state.database.X,
    AckX: state.database.AckX,
    period: state.settings.period
});

const mapDispatchToProps = (dispatch) => ({
    dbActions: bindActionCreators(dbActions, dispatch),
    updatePeriod: bindActionCreators(updatePeriod, dispatch),
    init: bindActionCreators(initialize, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withWidth()(App));