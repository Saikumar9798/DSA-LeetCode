function diagonalSum(mat: number[][]): number {
  let visited: { [key: string]: 1 } = {};
  let sum = 0;
  for (let i = 0; i < mat.length; ++i) {
    if (!(`${i}-${i}` in visited)) {
      sum += mat[i][i];
      visited[`${i}-${i}`] = 1;
    }
  }
  let c = 0,
    r = mat.length - 1;
  while (c < mat[0].length) {
    if (!(`${r}-${c}` in visited)) {
      sum += mat[r][c];
      visited[`${r}-${c}`] = 1;
    }
    ++c;
    --r;
  }
  return sum;
}