const app = require('./app.jest');
console.log(app);

test('[NUMBER] 1 + 2 = 3', () => {
  const result = app.sumNumbers(1, 2);
  expect(result).toEqual(3);
});

test('[NUMBER] 0 + 0 = 0', () => {
  const result = app.sumNumbers(0, 0);
  expect(result).toEqual(0);
});

test('[NUMBER] 5 + 6 > 9', () => {
  const result = app.sumNumbers(5, 6);
  expect(result).toBeGreaterThan(9);
});

test('[NUMBER] 1 + 3 >= 4', () => {
  const result = app.sumNumbers(1, 3);
  expect(result).toBeGreaterThanOrEqual(4);
});

test('[NUMBER] 10 + 1 < 15', () => {
  const result = app.sumNumbers(10, 1);
  expect(result).toBeLessThan(15);
});

test('[NUMBER] 50 + 40 <= 100', () => {
  const result = app.sumNumbers(50, 40);
  expect(result).toBeLessThanOrEqual(100);
});

test('[STRING] "my name" contains "my" and "name"', () => {
  const result = app.concatStrings('my', 'name');
  expect(result).toMatch(/my/gm);
  expect(result).toMatch(/name/gm);
});

test('[STRING] "your name" doesnt contain "my" but contains "name"', () => {
  const result = app.concatStrings('your', 'name');
  expect(result).not.toMatch(/my/gm);
  expect(result).toMatch(/name/gm);
});
