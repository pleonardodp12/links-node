const getValidatorError = (error) => {
    if(!error) return null;

    const errorMessages = {}
    error.details.map((detail) => {
        const message = error.details[0].message;
        const key = error.details[0].context.key;
        errorMessages[key] = message;
    });

    return errorMessages
};

module.exports =  { getValidatorError };