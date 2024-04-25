export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(arg) {
    this._name = arg;
  }

  get code() {
    return this._code;
  }

  set code(arg) {
    this._code = arg;
  }

  toString() {
    return `[Object ${this._code}]`;
  }
}
