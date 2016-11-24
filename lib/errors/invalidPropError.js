function invalidPropError(id, prop) {
    this.name = 'invalidPropError';
    this.message = !!id && !!prop ? 
        `The ${prop} property is not defined in the ${id} interface`:
        'Interface props need to be defined at the interface creation.';
    this.stack = (new Error()).stack;
}

invalidPropError.prototype = Object.create(Error.prototype);

module.exports = invalidPropError;