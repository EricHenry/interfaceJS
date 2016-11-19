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

    console.log('invalidProps', invalidProps);

    if (invalidProps.length > 0) { /*throw new Error*/console.log(`${id}'s props have unknown types.\n Invalid props: ${invalidProps}`); return;}

    function implement(obj) {
        let newObj = {};
        let proto = {};

        Object.keys(obj)
            .forEach((key) => { 
                if (!props[key]) {
                    throw new Error(`${key} is not defined in the interface`);
                }
                if (props[key] !== typeof obj[key]) {
                    throw new Error(`property ${key} is the wrong type.`);
                }
                
                if (props[key] === 'function') {
                    proto[key] = obj[key];
                    return;
                }

                if (props[key] === 'interface') {

                }
                
                newObj[key] = obj[key];
            });

        Object.keys(props)
            .forEach(key => {
                let propertyIsDefined = Object.keys(obj).indexOf(key) >= 0;

                if (propertyIsDefined) { return; }

                throw new Error(`${key} needs to be defined to implement this interface`);
            });

        var toReturn = Object.assign(Object.create(proto), newObj);
        return toReturn;
    }

    return {
        id,
        props,
        implement, 
    };
}
