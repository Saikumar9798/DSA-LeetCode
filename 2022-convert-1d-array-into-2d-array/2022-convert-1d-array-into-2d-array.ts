function construct2DArray(
  original: number[],
  m: number,
  n: number
): number[][] {
  if (m * n !== original.length) return [];
  const Array2D = new Array(m).fill(0).map((_) => new Array(n).fill(0));
  let k = 0;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      Array2D[i][j] = original[k++];
    }
  }
  return Array2D;
}