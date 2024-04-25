export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(arg) {
    this._size = arg;
  }

  get location() {
    return this._location;
  }

  set location(arg) {
    this._location = arg;
  }

  toString() {
    return `${this._location}`;
  }

  valueOf() {
    return this._size;
  }
}
