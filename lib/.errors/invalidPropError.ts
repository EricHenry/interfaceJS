/**
 *
 *
 * @param {any} id
 * @param {any} prop
 */
export default class InvalidPropError implements Error {
  name: string = 'invalidPropError';
  message: string;
  stack: string;

  constructor(id: string, prop: string) {
    this.message = `The ${prop} property is not defined in the ${id} interface`;
    this.stack = (new Error()).stack;
  }
}