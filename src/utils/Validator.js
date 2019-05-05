import Joi from 'joi-browser';

class Validator {
    static validate(data, schema){

        const errors = Joi.validate(data, schema, {abortEarly: false});

        console.log(errors);
        const formErrors = Validator.prepareFormErrors(data, errors);
        return formErrors;
    }

    static prepareFormErrors(data, joiErrors){
        const errors = {};

        if(!joiErrors.error){
            return null;
        }

        joiErrors.error.details.forEach( item => {
            const k = item.path[0];
            errors[k] = errors[k] || [];

            errors[k].push(item.message);
        });

        return errors;
    }
}

export default Validator;
