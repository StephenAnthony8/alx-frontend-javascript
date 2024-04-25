export default class Currency {
  constructor(code, name) {
    for (const item of [code, name]) {
      if (typeof item !== 'string') {
        throw new TypeError('Not a string');
      }
    }
    this._code = code;
    this._name = name;
  }

  /* code */
  get code() {
    return this._code;
  }

  set code(arg) {
    if (typeof arg !== 'string') {
      throw new TypeError('Not a string');
    }
    this._code = arg;
  }

  /* name */
  get name() {
    return this._name;
  }

  set name(arg) {
    if (typeof arg !== 'string') {
      throw new TypeError('Not a string');
    }
    this._name = arg;
  }

  displayFullCurrency() {
    /* returns the attributes in a name (code) format */
    return `${this._name} (${this._code})`;
  }
}
