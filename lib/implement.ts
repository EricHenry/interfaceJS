import { InvalidPropError, WrongTypeError, MissingPropError } from './.errors/_errors';

interface interfaceDeclaration {
  id: string,
  props: Array<string>
}

/**
 *
 *
 * @param {Object} interfaceObj
 * @param {Object} implementingObj
 * @returns
 */
function implement(intfc: interfaceDeclaration, implementingObj: Object) {
  let { id, props } = intfc;
  let newObj = {};
  let proto = {};

  Object
    .keys(implementingObj)
    .forEach((prop) => {
      if (!props[prop]) {
        throw new InvalidPropError(id, prop);
      }
      if (props[prop] !== typeof implementingObj[prop]) {
        throw new WrongTypeError(id, prop);
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

  Object
    .keys(props)
    .forEach(prop => {
      let propertyIsDefined = Object.keys(implementingObj).indexOf(prop) >= 0;
      if (!propertyIsDefined) {
        throw new MissingPropError(id, prop);
      }
    });

  var toReturn = Object.assign(Object.create(proto), newObj);
  return toReturn;
}

export default implement;