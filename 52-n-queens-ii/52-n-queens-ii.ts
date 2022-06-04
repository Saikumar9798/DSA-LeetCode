function totalNQueens(n: number): number {
  const result: string[][] = [];
  let queensMatrix = new Array(n).fill(0).map((_) => new Array(n).fill("."));

  function inRange(x: number, min: number, max: number) {
    return (x - min) * (x - max) <= 0;
  }

  function validateQueen(row: number, col: number, i = 1) {
    while (inRange(row - i, 0, n - 1)) {
      if (queensMatrix[row - i][col] === "Q") return false;
      ++i;
    }
    i = 1;
    while (inRange(row - i, 0, n - 1) && inRange(col - i, 0, n - 1)) {
      if (queensMatrix[row - i][col - i] === "Q") return false;
      ++i;
    }
    i = 1;
    while (inRange(row - i, 0, n - 1) && inRange(col + i, 0, n - 1)) {
      if (queensMatrix[row - i][col + i] === "Q") return false;
      ++i;
    }
    return true;
  }
    
  function helper(r: number, queensCount: number = 0): void {
    if (queensCount === n) {
      const nQueensPossibleSolution = [];
      for (let arr of queensMatrix) {
        nQueensPossibleSolution.push(arr.join(""));
      }
      result.push(nQueensPossibleSolution);
      return;
    }
    for (let col = 0; col < n; ++col) {
      if (validateQueen(r, col)) {
        queensMatrix[r][col] = "Q";
        ++queensCount;
        helper(r + 1, queensCount);
        queensMatrix[r][col] = ".";
        --queensCount;
      }
    }
  }

  helper(0);
  return result.length;
}