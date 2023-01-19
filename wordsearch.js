const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    return false;
  
  };
  
  const wordsearchExample = [
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ];
  
  const transpose = function(matrix) {
    matrixArr = [];
    for (let col = 0; col < matrix.length; col++) {
      let rows = [];
      for (let row = 0; row < matrix.length; row++) {
        rows.push(matrix[row][col]);
      }
      matrixArr.push(rows);
    }
    return matrixArr;
  };
  
  console.log(transpose(wordsearchExample));
  
  
  
  module.exports = wordSearch;
  module.exports = transpose;