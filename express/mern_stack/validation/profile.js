import Validator from 'validator';

const validProfileInput = data => {
    const errors = { found: false };
    let { handle, skill, status } = data;

    handle = String(handle || '');
    skill = String(skill || '');
    status = String(status || '');

    if (Validator.isEmpty(handle)) {
        errors.handle = 'Handle must be present';
    }
    if (Validator.isLength(handle, { min: 2, max: 40 })) {
        errors.handle = 'Handle must be between 2 to 40 characters';
    }

    if (Validator.isEmpty(skill)) {
        errors.skill = 'Skill must be present';
    }

    if (Validator.isEmpty(status)) {
        errors.status = 'Status must be present';
    }
    if (errors.handle || errors.skill || errors.status) {
        errors.found = true;
    }

    return errors;
};

export default validProfileInput;