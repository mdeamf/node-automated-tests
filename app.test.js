const app = require('./app');
test('Somar 1 + 2', () => {
  const result = app.sumNumbers(1, 2);
  expect(result).toEqual(3);
});
