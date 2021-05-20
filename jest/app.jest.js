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

module.exports = { sumNumbers, concatStrings, runCallback };
