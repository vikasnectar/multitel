const Joi = require('joi');

var validation = {};

validation.checkUserData = async (data) => {
    const schema = Joi.object({
        first_name: Joi.string()
            .required(),
        last_name: Joi.string()
            .required(),

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9@]{3,30}$')).required(),
        email: Joi.string()
            .email()
            .required()
    }).unknown();

    try {

        const value = await schema.validateAsync(data);
        return value;
    }
    catch (err) {
        return err;
    }
}


validation.userLogin = async (data) => {
    const schema = Joi.object({
        password: Joi.string().required(),
        userName: Joi.string()
            .email()
            .required()
    })

    try {

        const value = await schema.validateAsync(data);
        return value;
    }
    catch (err) {
        return err;
    }
}


validation.store = async (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        type: Joi.string().required(),
        address: Joi.string().required(),
        timing: Joi.string().required(),
        userId: Joi.number().required(),
        description: Joi.string(),
        description_en: Joi.string()
    })

    try {

        const value = await schema.validateAsync(data);
        return value;
    }
    catch (err) {
        return err;
    }
}

validation.transaction = async (data) => {
    const schema = Joi.object({
        from: Joi.number().required(),
        to: Joi.number().required(),
        storeId: Joi.number().required(),
        book_qty: Joi.number().required(),
        book_details: Joi.string(),
        received: Joi.number()
    }).unknown();

    try {

        const value = await schema.validateAsync(data);
        return value;
    }
    catch (err) {
        return err;
    }
}


module.exports = validation;