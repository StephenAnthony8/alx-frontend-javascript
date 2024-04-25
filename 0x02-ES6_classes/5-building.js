export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  set sqft(arg) {
    this._sqft = arg;
  }

  get sqft() {
    return this._sqft;
  }
}
