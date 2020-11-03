const expect = require('expect');

const rpn = require('../src/rpn').rpn;

describe('rpn', () => {
  it('should return 45 when passed in "3 5 10 + *"', () => {
    let result = rpn('3 5 10 + *');
    expect(result).toEqual(45);
  });
});