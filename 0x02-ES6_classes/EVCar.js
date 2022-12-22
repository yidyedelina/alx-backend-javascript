export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color, this._range);
  }
}
