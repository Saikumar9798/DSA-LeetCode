function solveSudoku(board: string[][]): void {
  const rowElements: { [key: string]: { [key: string]: number } } = {};
  const colElements: { [key: string]: { [key: string]: number } } = {};
  const boxElements: { [key: string]: { [key: string]: number } } = {};
  let returnFlag = false;

  // Row Elements Object
  for (let i = 0; i < board.length; ++i) {
    const elements: { [key: string]: 1 } = {};
    for (let j = 0; j < board[0].length; ++j) {
      if (board[i][j] !== ".") elements[`${board[i][j]}`] = 1;
    }
    rowElements[i] = elements;
  }

  // Column Elements Object
  for (let i = 0; i < board[0].length; ++i) {
    const elements: { [key: string]: 1 } = {};
    for (let j = 0; j < board.length; ++j) {
      if (board[j][i] !== ".") elements[`${board[j][i]}`] = 1;
    }
    colElements[i] = elements;
  }

  // Box elements
  for (let i = 0, l = 0; i < board.length; i += 3) {
    for (let j = 0; j < board[0].length; j += 3) {
      const elements: { [key: string]: 1 } = {};
      for (let k = i; k < i + 3; ++k) {
        for (let g = j; g < j + 3; ++g) {
          if (board[k][g] !== ".") elements[board[k][g]] = 1;
        }
      }
      boxElements[l++] = elements;
    }
  }

  // Check if number can be placed in sudoku puzzle
  function checkIsNumberValid(
    num: number,
    r: number,
    c: number,
    boxNumber: number
  ) {
    if (
      !(num in rowElements[r]) &&
      !(num in colElements[c]) &&
      !(num in boxElements[boxNumber])
    )
      return true;
    return false;
  }

  function getBoxNumber(r: number, c: number) {
    let boxNumber = 0;
    if (r < 3 && c < 3) boxNumber = 0;
    else if (r < 3 && c >= 3 && c < 6) boxNumber = 1;
    else if (r < 3 && c >= 6) boxNumber = 2;
    else if (r > 2 && r < 6 && c < 3) boxNumber = 3;
    else if (r > 2 && r < 6 && c >= 3 && c < 6) boxNumber = 4;
    else if (r > 2 && r < 6 && c >= 6) boxNumber = 5;
    else if (r > 5 && c < 3) boxNumber = 6;
    else if (r > 5 && c >= 3 && c < 6) boxNumber = 7;
    else boxNumber = 8;
    return boxNumber;
  }

  function helper(r: number, c: number) {
    if (returnFlag) return;
    if (r === board.length) {
      returnFlag = true;
      return;
    }
    if (c === board[0].length) {
      helper(r + 1, 0);
      return;
    }
    const boxNumber = getBoxNumber(r, c);
    if (board[r][c] === ".") {
      for (let i = 1; i <= 9; ++i) {
        if (checkIsNumberValid(i, r, c, boxNumber)) {
          board[r][c] = i + "";
          boxElements[boxNumber][i] = 1;
          rowElements[r][i] = 1;
          colElements[c][i] = 1;
          helper(r, c + 1);
          if (!returnFlag) {
            board[r][c] = ".";
            delete boxElements[boxNumber][i];
            delete rowElements[r][i];
            delete colElements[c][i];
          }
          else return;
        }
      }
    } else helper(r, c + 1);
  }
  helper(0, 0);
}