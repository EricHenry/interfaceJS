import { nativeTypes } from './nativeTypes';

/**
 *
 *
 * @param {any} propType
 * @returns
 */
function validTypeDeclaration(propType: string) {
  if (propType.includes('interface')) {
    return true;
  }

  return nativeTypes.indexOf(propType) >= 0;
};

export default validTypeDeclaration;