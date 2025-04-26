const assert = require('assert');
const Calculator = require('../src/calculator');

describe('Test my Calculator - add funtion', function () {
  let mycalc;

  this.beforeEach(function () {
    mycalc = new Calculator
  })

  it('test adding positive numbers', function () {
    assert.equal(mycalc.add(2, 5), 7);
  })

  it('test adding a positive and a negative number', function () {
    assert.equal(mycalc.add(2, -7), -5);
  })

  it('test adding a negative number', function () {
    assert.equal(mycalc.add(-6, -3), -9);
  })

  it('test adding by zero', function () {
    assert.equal(mycalc.add(-6, 0), -6);
  })

})

describe('Test my Calculator - subtract funtion', function () {
  let mycalc;

  this.beforeEach(function () {
    mycalc = new Calculator
  })

  it('test subtracting positive numbers', function () {
    assert.equal(mycalc.subtract(9, 1),8);
  })

  it('test subtracting a positive and a negative number', function () {
    assert.equal(mycalc.subtract(7, -3), 10);
  })

  it('test subtracting a negative number', function () {
    assert.equal(mycalc.subtract(-4, -1), -3);
  })

  it('test subtracting by zero', function () {
    assert.equal(mycalc.subtract(-7, 0), -7);
  })
})

describe('Test my Calculator - multiply funtion', function () {
  let mycalc;

  this.beforeEach(function () {
    mycalc = new Calculator
  })

  it('test multiplying positive numbers', function () {
    assert.equal(mycalc.multiply(2, 1),2);
  })

  it('test multiplying a positive and a negative number', function () {
    assert.equal(mycalc.multiply(4, -6), -24);
  })

  it('test multiplying a negative number', function () {
    assert.equal(mycalc.multiply(-4, -1), 4);
  })

  it('test multiplying by zero', function () {
    assert.equal(mycalc.multiply(-7, 0), 0);
  })
})

describe('Test my Calculator - divide funtion', function () {
  let mycalc;

  this.beforeEach(function () {
    mycalc = new Calculator
  })

  it('test dividing positive numbers', function () {
    assert.equal(mycalc.divide(6, 2),3);
  })

  it('test dividing a positive and a negative number', function () {
    assert.equal(mycalc.divide(30, 6), 5);
  })

  it('test dividing a negative number', function () {
    assert.equal(mycalc.divide(-12, -6), 2);
  })

  it('test dividing by zero', function () {
    assert.equal(mycalc.divide(-7, 0), "Cannot divide by zero");
  })
})