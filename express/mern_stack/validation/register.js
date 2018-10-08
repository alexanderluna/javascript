import Validator from 'validator';

const validateRegisterInput = data => {
    const errors = { found: false };
    let { name, email, password, password2 } = data;

    name = String(name || '');
    email = String(email || '');
    password = String(password || '');
    password2 = String(password2 || '1');

    if (!Validator.isLength(name, { min: 2, max: 30 })) {
        errors.name = 'Name must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(name)) {
        errors.name = 'Name must be present';
    }

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

    if (!Validator.equals(password, password2)) {
        errors.password_match = 'Passwords must match';
    }

    if (errors.name || errors.email || errors.password || errors.password_match) {
        errors.found = true;
    }

    return errors;
};

export default validateRegisterInput;