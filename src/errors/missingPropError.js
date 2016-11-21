function missingPropError(id, prop) {
    this.name = 'missingPropError';
    this.message = !!id && !!prop ? 
        `The ${prop} property needs to be defined to implement the ${id} interface.`:
        'Interface props need to be defined.';
    this.stack = (new Error()).stack;
}

missingPropError.prototype = Object.create(Error.prototype);

module.exports = missingPropError;