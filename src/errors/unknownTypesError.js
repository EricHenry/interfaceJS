function unknownTypeError(id, invalidProps) {
    this.name = 'unknownTypeError';
    this.message = !!id && !!invalidProps ? 
        `${id}'s props have unknown types. Invalid props: ${invalidProps}.`:
        'Interfaces can only be created with valid types.';
    this.stack = (new Error()).stack;
}

unknownTypeError.prototype = Object.create(Error.prototype);

module.exports = unknownTypeError;