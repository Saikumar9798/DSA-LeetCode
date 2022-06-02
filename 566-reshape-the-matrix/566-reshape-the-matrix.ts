function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  if (r * c != mat.length * mat[0].length) return mat;
  const outMatrix: number[][] = new Array(r)
    .fill(0)
    .map((_) => new Array(c).fill(0));
  let g = 0,
    k = 0;
  for (let i = 0; i < r; ++i) {
    for (let j = 0; j < c; ++j) {
      outMatrix[i][j] = mat[g][k];
      k++;
      if (k === mat[0].length) {
        (k = 0), g++;
      }
    }
  }
  return outMatrix;
}