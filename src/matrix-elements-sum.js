const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const cols = matrix[0].length;
  const rows = matrix.length;

  for (let col = 0; col < cols; col++) {
    if (matrix[0][col] === 0) continue;
    sum += matrix[0][col];

    for (let row = 1; row < rows; row++) {
      if (matrix[row - 1][col] === 0) break;
      sum += matrix[row][col];
    }
  }

  return sum;

}

module.exports = {
  getMatrixElementsSum
};
