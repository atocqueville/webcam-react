import React, { Fragment } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';

import ArrowBack from '@material-ui/icons/ArrowBack';
import BarChart from '@material-ui/icons/BarChart';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

import ChartForm from './ChartForm';
import AckLoadingZone from './AckLoadingZone';

const styles = () => ({
    icon: {
        marginLeft: -12,
        marginRight: 6
    },
    drawerPaper: {
        width: 240,
        paddingTop: '15px'
    },
    grow: {
        flexGrow: 1
    }
});

class Topbar extends React.Component {
    state = {
        openLeft: false,
        openRight: false
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ openLeft: !state.openLeft }));
    };

    handleDrawerToggleInfo = () => {
        this.setState(state => ({ openRight: !state.openRight }));
    };

    render() {
        const {
            AckS, AckT, AckU, AckV, AckW, AckX,
            getNewData, period, updatePeriod, openSnack, formValues, mobile, classes
        } = this.props;

        return (
            <Fragment>
                <AppBar position="static">
                    <Toolbar>
                        {!mobile &&
                            <a href='../index.php' style={{ textDecoration: 'none', color: 'white' }}>
                                <IconButton
                                    className={classes.icon}
                                    color="inherit"
                                >
                                    <ArrowBack />
                                </IconButton>
                            </a>
                        }
                        {mobile &&
                                <IconButton
                                    className={classes.icon}
                                    color="inherit"
                                    onClick={this.handleDrawerToggle}
                                >
                                    <MenuIcon />
                                </IconButton>
                        }
                        <Typography inline variant="h6" color="inherit" className={classes.grow}>
                            Accueil
                        </Typography>

                        <AckLoadingZone AckS={AckS} AckT={AckT} AckU={AckU} AckV={AckV} AckW={AckW} AckX={AckX} />

                        <IconButton
                            className={classes.icon}
                            color="inherit"
                            onClick={this.handleDrawerToggleInfo}
                        >
                            <BarChart />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                {mobile &&
                    <Drawer
                        variant='temporary'
                        anchor='left'
                        classes={{ paper: classes.drawerPaper }}
                        open={this.state.openLeft}
                        onClose={this.handleDrawerToggle}
                    >
                        <ChartForm
                            formValues={formValues}
                            period={period}
                            updatePeriod={updatePeriod}
                            getNewData={getNewData}
                            openSnack={openSnack}
                        />
                    </Drawer>
                }
                <Drawer
                    variant='temporary'
                    anchor='right'
                    classes={{ paper: classes.drawerPaper }}
                    open={this.state.openRight}
                    onClose={this.handleDrawerToggleInfo}
                >
                    <Typography>
                        Afficher les min/max des courbes ?
                    </Typography>
                </Drawer>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Topbar);