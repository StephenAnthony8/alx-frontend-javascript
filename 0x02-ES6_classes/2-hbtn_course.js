export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    if (!(students instanceof Array)) {
      throw new TypeError('Students must be an array of string');
    } else {
      for (const count of students) {
        if (typeof count !== 'string') {
          throw new TypeError('Students must be an array of string');
        }
      }
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  /* name */
  get name() {
    return this._name;
  }

  set name(arg) {
    if (typeof arg !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = arg;
  }

  /* length */
  get length() {
    return this._length;
  }

  set length(arg) {
    if (typeof arg !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = arg;
  }

  /* students */
  get students() {
    return this._students;
  }

  set students(arg) {
    if (!(arg instanceof Array)) {
      throw new TypeError('Students must be an array of string');
    } else {
      for (const count of arg) {
        if (typeof count !== 'string') {
          throw new TypeError('Students must be an array of string');
        }
      }
    }
    this._students = arg;
  }
}
