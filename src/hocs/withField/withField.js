import React from 'react';
import propTypes from 'prop-types';
import './withField.scss';

const withField = WrappedComponent => 
    ({ type, name, label, required, value, onChange, fieldErrors, isPristine,  ...rest }) => {
    const touched = isPristine && !isPristine[name];
    const hasErrors = fieldErrors && fieldErrors[name]
    const errorClassName = hasErrors ? 'form__field-error' : 'form__field-hidden';
    const successClassName = !hasErrors ? 'form__field-success' : 'form__field-hidden';
    return (
        <div className="form__field-container">
            <label className="form__field-label" htmlFor={name}>{label}</label>
            <div className="form__field-validation">
                <WrappedComponent className="form__field-control" type={type} name={name} onChange={onChange} value={value} required={required} {...rest} />
                <span className={successClassName}>
                    {(touched && !hasErrors && <img src="/check.png" alt="valid" aria-hidden="true" />)}
                </span>
                <span className={errorClassName} aria-hidden="true" >
                    {(touched && hasErrors) || ''}
                </span>
            </div>
        </div>
    )
};

withField.propTypes = {
    fieldErrors: propTypes.array,
    isPristine: propTypes.bool,
    label: propTypes.string,
    name: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    required: propTypes.bool,
    value: propTypes.string,
};

export default withField;