function checkValid(matrix: number[][]): boolean {
    
  function rowChecker() {
    for (let i = 0; i < matrix.length; ++i) {
      const visited: { [key: string]: 1 } = {};
      for (let j = 0; j < matrix[0].length; ++j) {
        if (matrix[i][j] in visited) return false;
        else visited[matrix[i][j]] = 1;
      }
    }
    return true;
  }

  function colChecker() {
    for (let i = 0; i < matrix[0].length; ++i) {
      const visited: { [key: string]: 1 } = {};
      for (let j = 0; j < matrix.length; ++j) {
        if (matrix[j][i] in visited) return false;
        else visited[matrix[j][i]] = 1;
      }
    }
    return true;
  }

  return rowChecker() && colChecker();
}