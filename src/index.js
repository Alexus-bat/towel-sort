
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  for (let i in matrix) {
    if (i%2 == 0) {
      for (let j of matrix[i]) {
        arr.push(j);
      }
    } else {
      for (let j of matrix[i].reverse()) {
        arr.push(j);
      }
    }
  }
  return arr;
}
