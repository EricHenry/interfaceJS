/**
 *
 *
 * @param {any} id
 * @param {any} prop
 */
export default class MissingPropError implements Error {
  name: string = 'missingPropError';
  message: string;
  stack: string;

  constructor(id: string, prop: string) {
    this.message = `The ${prop} property needs to be defined to implement the ${id} interface.`;
    this.stack = (new Error()).stack;
  }
}