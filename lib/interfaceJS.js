'use strict';

const { invalidPropError, missingPropError, unknownTypesError, wrongTypeError } = require('./errors/_errors.js');

const validTypeDeclaration = propType => {
    if (propType.includes('interface')) {
        return true;
    }

    let validNativeTypes = ['number', 'string', 'boolean', 'undefined', 'null', 'object', 'function', 'symbol'];
    return validNativeTypes.includes(propType);
};

function create(id, props) {

    let invalidProps = Object
        .keys(props)
        .filter(propName => !validTypeDeclaration(props[propName]));

    let hasInvalidProps = (invalidProps.length > 0);
    if (hasInvalidProps) { 
        throw new unknownTypesError(id, invalidProps);
    }


    return {
        id,
        props,
    };
}
 

function implement(interfaceObj, implementingObj) {
    let {id, props} = interfaceObj;
    let newObj = {};
    let proto = {};

    Object.keys(implementingObj)
        .forEach((prop) => { 
            if (!props[prop]) {
                throw new invalidPropError(id, prop);
            }
            if (props[prop] !== typeof implementingObj[prop]) {
                throw new wrongTypeError(id, prop);
            }
            
            if (props[prop] === 'function') {
                proto[prop] = implementingObj[prop];
                return;
            }

            if (props[prop] === 'interface') {
                //todo
            }
            
            newObj[prop] = implementingObj[prop];
        });

    Object.keys(props)
        .forEach(prop => {
            let propertyIsDefined = Object.keys(implementingObj).indexOf(prop) >= 0;
            if (!propertyIsDefined) { 
                throw new missingPropError(id, prop); 
            }
        });

    var toReturn = Object.assign(Object.create(proto), newObj);
    return toReturn;
}

module.exports = {
    create,
    implement,
};
