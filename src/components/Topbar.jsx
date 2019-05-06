import React, { Fragment } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';

import ArrowBack from '@material-ui/icons/ArrowBack';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import ChartForm from './ChartForm';

const styles = () => ({
    icon: {
        marginLeft: -12,
        marginRight: 6
    },
    drawerPaper: {
        width: 300,
        paddingTop: '30px'
    }
});

class Topbar extends React.Component {
    state = {
        open: false
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    render() {
        const {
            AckS, AckT, AckU, AckV, AckW, AckX,
            getNewData, period, updatePeriod, mobile, classes
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
                                <Typography inline variant="h6" color="inherit">
                                    Accueil
                                </Typography>
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
                    </Toolbar>
                </AppBar>
                {mobile &&
                    <Drawer
                        variant='temporary'
                        anchor='left'
                        classes={{paper: classes.drawerPaper}}
                        open={this.state.open}
                        onClose={this.handleDrawerToggle}
                    >
                        <ChartForm
                            AckS={AckS} AckT={AckT} AckU={AckU} AckV={AckV} AckW={AckW} AckX={AckX}
                            period={period}
                            updatePeriod={updatePeriod}
                            getNewData={getNewData}
                        />
                    </Drawer>
                }
            </Fragment>
        );
    }
}

export default withStyles(styles)(Topbar);