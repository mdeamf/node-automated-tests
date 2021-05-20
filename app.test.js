const app = require('./app');

test('Somar 1 + 2 = 3', () => {
  const result = app.sumNumbers(1, 2);
  expect(result).toEqual(3);
});

test('Somar 0 + 0 = 0', () => {
  const result = app.sumNumbers(0, 0);
  expect(result).toEqual(0);
});
