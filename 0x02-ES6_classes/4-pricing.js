import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    if (!(typeof amount === 'number')) {
      throw new TypeError('Not a Number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Not a Currency Object');
    }

    this._amount = amount;
    this._currency = currency;
  }

  // amount
  get amount() {
    return this.amount;
  }

  set amount(arg) {
    if (!(typeof arg === 'number')) {
      throw new TypeError('Not a Number');
    }
    this._amount = arg;
  }

  // currency
  get currency() {
    return this.currency;
  }

  set currency(arg) {
    if (!(arg instanceof Currency)) {
      throw new TypeError('Not a Currency Object');
    }
    this._currency = arg;
  }

  displayFullPrice() {
    // returns the attributes in format amount currency
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    for (const num of [amount, conversionRate]) {
      if (!(num instanceof Number)) {
        throw new TypeError('Not a number');
      }
    }
    return (amount * conversionRate);
  }
}
