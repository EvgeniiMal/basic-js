module.exports = function countCats(matrix) {
  let ears = 0;
  matrix.flat().forEach(el =>{
    if (el == '^^'){
      ears++;
    };
  });
  return ears;
};
