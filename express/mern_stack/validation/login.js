import Validator from 'validator';

const validateLoginInput = data => {
    const errors = { found: false };
    let { email, password } = data;

    email = String(email || '');
    password = String(password || '');

    if (!Validator.isEmail(email)) {
        errors.email = 'Email must be valid';
    }

    if (Validator.isEmpty(email)) {
        errors.name = 'Email must be present';
    }

    if (!Validator.isLength(password, { min: 6, max: 30 })) {
        errors.password = 'Password must be between 6 and 30 characters';
    }

    if (Validator.isEmpty(password)) {
        errors.name = 'Password must be present';
    }

    if (errors.email || errors.password) {
        errors.found = true;
    }

    return errors;
};

export default validateLoginInput;