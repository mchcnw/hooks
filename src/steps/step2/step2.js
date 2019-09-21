import React, {useState,useEffect, useContext} from 'react';
import {withRouter} from 'react-router-dom'
import {initialState, actions} from '../../modules/step2';
import {step2Validate} from '../../validators';
import {InputField, SelectField} from '../../components';
import {StoreContext} from '../../contexts';
import './step2.scss';


const setPristineState = (fields, isPristine) => {
    const result = {}
    Object.keys(fields).forEach(k => result[k] = isPristine);
    return result;
}

const Step2 = (props) => {
    const [data, setData] = useState(initialState);
    const pristineState = setPristineState(initialState, true); 
    const [isPristine, setPristine] = useState(pristineState);
    const [state, dispatch] = useContext(StoreContext);
    const [{ fieldErrors }, setErrors] = useState({ fieldErrors: {}, isValid: true });
    const { history } = props;
    const nationalities = [
        {
            value: 'irish',
            label: 'Irish'
        },
        {
            value: 'american',
            label: 'American'
        },
        {
            value: 'french',
            label: 'French'
        },
    ]

    useEffect(() => {
        setData(state);
    }, [state]);

    const handleSubmit = (event) => {
        const inValidFields = step2Validate(data);
        setPristine(setPristineState(data, false));
        if (Object.keys(inValidFields).length !== 0) {
            setErrors({ fieldErrors: inValidFields, isValid: false });
        } else {
            history.push('/step3');
            dispatch(actions.submitFormData(data));
        }
    };


    const handleChange = (event) => {
        event.persist();
        if (event.target && event.target.name) {
            setData(data => {
                return { ...data, [event.target.name]: event.target.value  };
            });

            setPristine(isPristine => {
                return { ...isPristine, [event.target.name]: false };
            });

            if(fieldErrors[event.target.name]) { // only update validation if field has been updated
                const inValidFields = step2Validate(data);
                setErrors({ fieldErrors: inValidFields, isValid: !Object.keys(inValidFields).length });
            }
        }
    };

    return (
        <form className="step2__form-container">
            <InputField name="firstName" type="text" label="First Name" onChange={handleChange} value={data.firstName} required={true} isPristine={isPristine} fieldErrors={fieldErrors} />
            <InputField name="lastName" type="text" label="Surname" onChange={handleChange} value={data.lastName} required={true} isPristine={isPristine} fieldErrors={fieldErrors} />
            <InputField name="dob" type="date" label="Date of Birth" onChange={handleChange} value={data.dob} required={true} isPristine={isPristine} fieldErrors={fieldErrors} />
            <SelectField name="nationality" label="Nationality" placeholder="Choose Nationality" onChange={handleChange}
                value={data.nationality} required={true} options={nationalities} isPristine={isPristine} fieldErrors={fieldErrors} />
            <InputField name="email" label="Email Address" type="email" onChange={handleChange} value={data.email} required={true} isPristine={isPristine} fieldErrors={fieldErrors} />
            <InputField name="occupation" label="Occupation" type="text" onChange={handleChange} value={data.occupation} required={true} isPristine={isPristine} fieldErrors={fieldErrors} />
            <input type="button" value="Submit" onClick={handleSubmit} className="step2__form-submit" />
        </form>
    );
};

export default withRouter(Step2);