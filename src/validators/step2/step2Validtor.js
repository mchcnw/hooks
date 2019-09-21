const validate = (values) => {
    let errors = {};
    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.firstName) {
        errors.firstName = 'First Name is required';
    }
    if (!values.lastName) {
        errors.lastName = 'Surname is required';
    }
    if (!values.dob) {
        errors.dob = 'Date of Birth is required';
    }
    return errors;
};

export default validate;