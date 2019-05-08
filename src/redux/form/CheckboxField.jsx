import React from 'react';
import { Field } from 'redux-form';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core';

const styles = () => ({
    checkbox: {
        padding: 5
    }
});

class CheckboxField extends React.Component {
    renderCheckboxField = field => {
        const {
            input: { onChange, onBlur, value }
        } = field;

        return(
            <Checkbox
                checked={value}
                onChange={onChange}
                onBlur={onBlur}
                classes={{ root: this.props.classes.checkbox}}
            />
        );
    };

    render() {

        return(
            <Field
                name={this.props.name}
                component={this.renderCheckboxField}
            />
        );
    }
}

export default withStyles(styles)(CheckboxField);