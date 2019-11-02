import React from 'react';
import propTypes from 'prop-types';
import withField from '../../hocs/withField/withField';

const renderOptions = (options) => {
    return options.map(opt => {
        return (
            <option value={opt.value} key={opt.value}>{opt.label}</option>
        )
    })
}

const SelectField = ({ name, label, placeholder, options, onChange, value, isPristine, fieldErrors, required, ...rest }) => {
    return (
        <select name={name} placeholder={placeholder} onChange={onChange} value={value} required={required} {...rest}>
        <option value=''>{placeholder}</option>
            {renderOptions(options)}
        </select>
    )
};


SelectField.propTypes = {
    options: propTypes.array.isRequired,
    placeholder: propTypes.string,
};

export default withField(SelectField);