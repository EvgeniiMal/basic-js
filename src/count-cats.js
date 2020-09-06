module.exports = function countCats(matrix) {
  let ears = 0;
  matrix.forEach(element => {
    element.forEach(el => {
      if (el === '^^') ears += 1;
    });
  });
  return ears;
};
