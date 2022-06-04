function isValidSudoku(board: string[][]): boolean {
  function boxValidity(r: number, c: number): boolean {
    const boxElements = [];
    for (let i = r; i < r + 3; ++i) {
      for (let j = c; j < c + 3; ++j) {
        if (board[i][j] !== ".") boxElements.push(board[i][j]);
      }
    }
    return boxElements.length === [...new Set(boxElements)].length;
  }

  for (let i = 0; i < board[0].length - 2; i += 3) {
    for (let j = 0; j < board.length - 2; j += 3) {
      if (!boxValidity(i, j)) return false;
    }
  }

  for (let i = 0; i < board.length; ++i) {
    const visited: { [key: string]: 1 } = {};
    for (let j = 0; j < board[0].length; ++j) {
      if (board[i][j] in visited) return false;
      else if (board[i][j] !== ".") visited[board[i][j]] = 1;
      else continue;
    }
  }

  for (let i = 0; i < board[0].length; ++i) {
    const visited: { [key: string]: 1 } = {};
    for (let j = 0; j < board.length; ++j) {
      if (board[j][i] in visited) return false;
      else if (board[j][i] !== ".") visited[board[j][i]] = 1;
      else continue;
    }
  }

  return true;
}