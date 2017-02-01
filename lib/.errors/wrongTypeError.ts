/**
 *
 *
 * @param {any} id
 * @param {any} prop
 */
export default class WrongTypeError implements Error {
  name: string = 'wrongTypeError';
  message: string;
  stack: string;

  constructor(id: string, prop: string) {
    this.message = `The ${prop} property is the wrong type for the ${id} interface.`;
    this.stack = (new Error()).stack;
  }
}