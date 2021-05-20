const sumNumbers = (num1, num2) => {
  return num1 + num2;
};

const concatStrings = (str1, str2) => {
  return str1 + ' ' + str2;
};

const runCallback = (cbk) => {
  setTimeout(() => {
    cbk('potato');
  }, 2000);
};

const runPromise = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, 2000);
  });
};

module.exports = { sumNumbers, concatStrings, runCallback, runPromise };
