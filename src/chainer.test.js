'use strict';

const { chainer } = require('./chainer');

describe('Chainer', () => {
  it('should be a function', () => {
    expect(chainer).toBeInstanceOf(Function);
  });

  it('should apply functions in sequence', () => {
    const double = (x) => x * 2;
    const add = (x) => x + 2;
    const squaring = (x) => Math.pow(x, 2);

    const result = chainer([double, add, squaring])(0);

    expect(result).toBe(4);
  });

  it('should return the same value if no functions provided', () => {
    const result = chainer([])(5);

    expect(result).toBe(5);
  });

  it('should work with one function', () => {
    const double = (x) => x * 2;

    const result = chainer([double])(3);

    expect(result).toBe(6);
  });

  it('should pass result of previous function to next one', () => {
    const add = (x) => x + 1;
    const multiply = (x) => x * 3;

    const result = chainer([add, multiply])(2);

    expect(result).toBe(9);
  });
});
