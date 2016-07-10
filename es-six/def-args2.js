module.exports = function makeImportant(string, multiply = string.length){
  return string + '!'.repeat(multiply);
};
