class NumMatrix {
  matrix: number[][];
  constructor(matrix: number[][]) {
    this.matrix = new Array(matrix.length)
      .fill(0)
      .map((_) => new Array(matrix[0].length).fill(0));
    for (let i = 0; i < matrix.length; ++i) {
      for (let j = 0; j < matrix[0].length; ++j) {
        if (!i && !j) this.matrix[i][j] = matrix[i][j];
        else if (!i) this.matrix[i][j] = matrix[i][j] + this.matrix[i][j - 1];
        else if (!j) this.matrix[i][j] = matrix[i][j] + this.matrix[i - 1][j];
        else
          this.matrix[i][j] =
            this.matrix[i - 1][j] +
            this.matrix[i][j - 1] -
            this.matrix[i - 1][j - 1] +
            matrix[i][j];
      }
    }
  }
  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return (
      this.matrix[row2][col2] -
      (row1 - 1 >= 0 ? this.matrix[row1 - 1][col2] : 0) -
      (col1 - 1 >= 0 ? this.matrix[row2][col1 - 1] : 0) +
      (col1 - 1 >= 0 && row1 - 1 >= 0 ? this.matrix[row1 - 1][col1 - 1] : 0)
    );
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */