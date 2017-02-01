import validTypeDeclaration from './.internals/validTypeDec';
import { UnknownTypesError } from './.errors/_errors';

/**
 *
 *
 * @param {any} id
 * @param {any} props
 * @returns
 */
function create(id: string, props: Object) {
  let invalidProps: Array<string> = Object
      .keys(props)
      .filter(propName => !validTypeDeclaration(props[propName]));

  let hasInvalidProps = (invalidProps.length > 0);
  if (hasInvalidProps) {
    throw new UnknownTypesError(id, invalidProps);
  }

  return {
    id,
    props,
  };
}

export default create;