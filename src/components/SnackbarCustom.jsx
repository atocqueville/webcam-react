import React from 'react';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const styles = () => ({
    success: {
        background: green[600],
    },
    icon: {
        fontSize: 20
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: '10px'
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    }
});

class SimpleSnackbar extends React.Component {

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.props.close();
    };

    render() {
        const { open, classes } = this.props;

        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={1300}
                onClose={this.handleClose}
            >
                <SnackbarContent
                    className={classes.success}
                    message={
                        <span id="message-id" className={classes.message}>
                            <CheckCircleIcon className={classNames(classes.icon, classes.iconVariant)} />
                            Préférences enregistrées
                        </span>
                    }
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </Snackbar>
        );
    }
}

export default withStyles(styles)(SimpleSnackbar);