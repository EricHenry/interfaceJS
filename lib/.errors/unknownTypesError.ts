/**
 *
 *
 * @param {any} id
 * @param {any} invalidProps
 */
export default class UnknownTypesError implements Error {
  name: string = 'unknownTypeError';
  message: string;
  stack: string;

  constructor(id: string, invalidProps: Array<string>){
    this.message = `${id}'s props have unknown types. Invalid props: ${invalidProps}.`;
    this.stack = (new Error()).stack;
  }
}