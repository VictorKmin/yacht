const one = require('../one');
const two = require('../two');
const three = require('../three');
const four = require('../four');
const five = require('../five');

describe('Test yacht', () => {

  // I have testData for every single test because some function can change input array

  test('Test function ONE', () => {
    const testData = [
      { input: [], output: 0 },
      { input: [2, 0, 1, 5, 2, 7], output: 6 },
      { input: [2, 1, 5, 2, 7, 4, 10], output: 7 },
      { input: [4, 1, 3], output: 2 },
      { input: [4, 0, 1, 3], output: 5 },
      { input: [2, 4, 2], output: 0 },
      { input: [7, 4], output: 0 },
      { input: [7, 4, 3, 8, 14, 9, 0, 4, 20], output: 36 }
    ];

    for (const { input, output } of testData) {
      const result = one(input);

      expect(result).toBe(output);
    }
  });

  test('Test function TWO', () => {
    const testData = [
      { input: [], output: 0 },
      { input: [2, 0, 1, 5, 2, 7], output: 6 },
      { input: [2, 1, 5, 2, 7, 4, 10], output: 7 },
      { input: [4, 1, 3], output: 2 },
      { input: [4, 0, 1, 3], output: 5 },
      { input: [2, 4, 2], output: 0 },
      { input: [7, 4], output: 0 },
      { input: [7, 4, 3, 8, 14, 9, 0, 4, 20], output: 36 }
    ];

    for (const { input, output } of testData) {
      const result = two(input);

      expect(result).toBe(output);
    }
  });

  test('Test function THREE', () => {
    const testData = [
      { input: [], output: 0 },
      { input: [2, 0, 1, 5, 2, 7], output: 6 },
      { input: [2, 1, 5, 2, 7, 4, 10], output: 7 },
      { input: [4, 1, 3], output: 2 },
      { input: [4, 0, 1, 3], output: 5 },
      { input: [2, 4, 2], output: 0 },
      { input: [7, 4], output: 0 },
      { input: [7, 4, 3, 8, 14, 9, 0, 4, 20], output: 36 }
    ];

    for (const { input, output } of testData) {
      const result = three(input);

      expect(result).toBe(output);
    }
  });

  test('Test function FOUR', () => {
    const testData = [
      { input: [], output: 0 },
      { input: [2, 0, 1, 5, 2, 7], output: 6 },
      { input: [2, 1, 5, 2, 7, 4, 10], output: 7 },
      { input: [4, 1, 3], output: 2 },
      { input: [4, 0, 1, 3], output: 5 },
      { input: [2, 4, 2], output: 0 },
      { input: [7, 4], output: 0 },
      { input: [7, 4, 3, 8, 14, 9, 0, 4, 20], output: 36 }
    ];

    for (const { input, output } of testData) {
      const result = four(input);

      expect(result).toBe(output);
    }
  });

  test('Test function FIVE', () => {
    const testData = [
      { input: [], output: 0 },
      { input: [2, 0, 1, 5, 2, 7], output: 6 },
      { input: [2, 1, 5, 2, 7, 4, 10], output: 7 },
      { input: [4, 1, 3], output: 2 },
      { input: [4, 0, 1, 3], output: 5 },
      { input: [2, 4, 2], output: 0 },
      { input: [7, 4], output: 0 },
      { input: [7, 4, 3, 8, 14, 9, 0, 4, 20], output: 36 }
    ];

    for (const { input, output } of testData) {
      const result = five(input);

      expect(result).toBe(output);
    }
  });

});
