const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const {
    repeatTimes,
    separator = '+',
    addition,
    additionRepeatTimes,
    additionSeparator = '|'
  } = options;

  let additionStr = '';

  if (addition !== undefined) {
    const add = String(addition);
    if (additionRepeatTimes !== undefined) {
      additionStr = Array(additionRepeatTimes).fill(add).join(additionSeparator);
    } else {
      additionStr = add;
    }
  }

  const unit = str + additionStr;

  if (repeatTimes !== undefined) {
    return Array(repeatTimes).fill(unit).join(separator);
  } else {
    return unit;
  }
}

module.exports = {
  repeater
};
