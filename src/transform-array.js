const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  const controlCommands = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
  ];

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  let lastDiscardedIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];

    switch (cur) {
      case '--discard-next': {
        if (i + 1 < arr.length) {
          lastDiscardedIndex = i + 1;
          i++;
        }
        break;
      }

      case '--discard-prev': {
        const prevIdx = i - 1;
        if (
          prevIdx >= 0 &&
          prevIdx !== lastDiscardedIndex &&
          !controlCommands.includes(arr[prevIdx]) &&
          result.length > 0
        ) {
          result.pop();
        }
        break;
      }

      case '--double-next': {
        const nextIdx = i + 1;
        if (nextIdx < arr.length && !controlCommands.includes(arr[nextIdx])) {
          result.push(arr[nextIdx]);
        }
        break;
      }

      case '--double-prev': {
        const prevIdx = i - 1;
        if (
          prevIdx >= 0 &&
          prevIdx !== lastDiscardedIndex &&
          !controlCommands.includes(arr[prevIdx])
        ) {
          result.push(arr[prevIdx]);
        }
        break;
      }

      default: {
        result.push(cur);
      }
    }
  }

  return result;
}

module.exports = {
  transform
};
