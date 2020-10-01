module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error('arr is not Array');
    const result = [];

  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '--discard-next':
        i += 1;
        break;
      case '--discard-prev':
        if (arr[i - 2] !== '--discard-next') {
          result.pop();
        }
        break;
      case '--double-next':
        if (i + 1 < arr.length) {
          result.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (i - 1 >= 0 && arr[i - 2] !== '--discard-next') {
          result.push(arr[i - 1]);
        }
        break;
      default:
        result.push(arr[i]);
    }
  }
  return result;
    }