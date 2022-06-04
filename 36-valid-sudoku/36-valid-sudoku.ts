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

  function elementRowChecker(num: number, row: number, col: number) {
    for (let j = 0; j < board[0].length; ++j) {
      if (j === col) continue;
      if (+board[row][j] === num) return false;
    }
    return true;
  }

  function elementColChecker(num: number, row: number, col: number) {
    for (let j = 0; j < board.length; ++j) {
      if (j === row) continue;
      if (+board[j][col] === num) return false;
    }
    return true;
  }

  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      if (
        !(
          elementRowChecker(+board[i][j], i, j) &&
          elementColChecker(+board[i][j], i, j)
        )
      )
        return false;
    }
  }

  for (let i = 0; i < board[0].length - 2; i += 3) {
    for (let j = 0; j < board.length - 2; j += 3) {
      if (!boxValidity(i, j)) return false;
    }
  }

  return true;
}