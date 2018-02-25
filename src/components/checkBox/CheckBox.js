import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class CheckBox extends React.Component {
    
    render() {
        const {label, name} = this.props;

        return (
            <label className = 'checkbox__label'>{label}
                <input className = 'checkbox__in' type = 'checkbox' name = {name}/>
            </label>
        );
    }
}


FormField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string
};