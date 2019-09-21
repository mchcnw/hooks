import React from 'react';
import withField from '../../hocs/withField/withField';

const InputField = ({ type, name, required, value, onChange, ...rest }) => {
    return (
        <input type={type} name={name} onChange={onChange} value={value} required={required} {...rest} />
    )
};

export default withField(InputField);