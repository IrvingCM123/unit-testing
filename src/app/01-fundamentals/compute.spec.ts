import {compute } from './compute';

let number = -3;
let number1 = 2;

describe('compute', () => {
  it('should return 0 if input is negative', () => {
    const result = compute(number);
    expect(result).toBe(0);
  })

  it ('should increment the input if it is positive', () => {
    const result1 = compute(number1);
    expect(result1).toBe(2);
  })
})

//sf
