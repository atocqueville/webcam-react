import React from 'react';
import { Field } from 'redux-form';
import Checkbox from '@material-ui/core/Checkbox';

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

export default CheckboxField;