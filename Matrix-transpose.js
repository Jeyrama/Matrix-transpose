/*
Write a function that outputs the transpose of a matrix - 
a new matrix where the columns and rows of the original are swapped.

The input to your function will be an array of matrix rows. 
You can assume that each row has the same length, 
and that the height and width of the matrix are both positive.

For example, the transpose of:
  | 1 2 3 |
  | 4 5 6 |

  is

  | 1 4 |
  | 2 5 |
  | 3 6 |
*/


// Solution

function transpose(matrix) {
  let transposed = [],
    rows = matrix.length,
    cols = matrix[0].length;
   
  for (i = 0; i < cols; i++) {
  transposed[i] = [];
    for (let j = 0; j < rows; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }
  return transposed;
}

// or

function transpose(matrix) {
  return matrix[0].map(function(_, i) {
    return matrix.map(function(_, j) {
      return matrix[j][i];
    });
  });
}