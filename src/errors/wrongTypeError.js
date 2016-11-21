function wrongTypeError(id, prop) {
    this.name = 'wrongTypeError';
    this.message = !!id && !!prop ? 
        `The ${prop} property is the wrong type for the ${id} interface.`:
        'Properties must be the correct type to implement';
    this.stack = (new Error()).stack;
}

wrongTypeError.prototype = Object.create(Error.prototype);

module.exports = wrongTypeError;