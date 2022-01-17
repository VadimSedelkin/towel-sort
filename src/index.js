
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array = [];
  if(!Array.isArray(matrix) || matrix.length === 0)
    return array;
  matrix.forEach((MatrixItem, index) => {
    if(index % 2 === 0)
      MatrixItem.sort((a, b) => a-b);
    else
      MatrixItem.sort((a, b) => b-a);
    MatrixItem.forEach(item => {
      array.push(item);
    });
  })
  return array;
}
