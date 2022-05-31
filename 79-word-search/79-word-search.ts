function exist(board: string[][], word: string): boolean {
  function isValidCell(m: number, n: number, i: number) {
    if (
      m >= board.length ||
      n >= board[0].length ||
      m < 0 ||
      n < 0 ||
      word[i] !== board[m][n] ||
      board[m][n] === "."
    )
      return false;
    return true;
  }

  function helper(m: number, n: number, i: number, search: string): boolean {
    if (search === word) return true;
    if (!isValidCell(m, n, i)) {
      return false;
    }
    const c = board[m][n];
    board[m][n] = ".";
    search += c;
    const res =
      helper(m - 1, n, i + 1, search) ||
      helper(m, n + 1, i + 1, search) ||
      helper(m + 1, n, i + 1, search) ||
      helper(m, n - 1, i + 1, search);
    board[m][n] = c;
    return res;
  }

  let m = 0,
    n = 0;
  while (m < board.length) {
    while (n < board[0].length) {
      const helperRes = helper(m, n, 0, "");
      if (helperRes) return true;
      ++n;
    }
    n = 0;
    ++m;
  }

  return false;
}