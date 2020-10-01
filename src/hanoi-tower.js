module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};
  result.turns = Math.pow(2, disksNumber) - 1;
  result.seconds = Math.trunc(result.turns / (turnsSpeed / 3600));
  return result;
}
