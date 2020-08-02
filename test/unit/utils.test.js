import * as utils from '@/utils';

describe('utils', () => {
  test('isValidGridValue', () => {
    const valid = Array.from(new Array(13), (x, i) => i);
    const invalid = [-1, 13];
    valid.forEach(value => {
      expect(utils.isValidGridValue(value)).toBe(true);
    });
    invalid.forEach(value => {
      expect(utils.isValidGridValue(value)).toBe(false);
    });
  });

  test('isBoolean', () => {
    expect(utils.isBoolean(true)).toBe(true);
    expect(utils.isBoolean('')).toBe(false);
  });

  test('isArray', () => {
    expect(utils.isArray([])).toBe(true);
    expect(utils.isArray('')).toBe(false);
  });

  test('isUndefined', () => {
    expect(utils.isUndefined(undefined)).toBe(true);
    expect(utils.isUndefined(null)).toBe(false);
    expect(utils.isUndefined('')).toBe(false);
  });
});
