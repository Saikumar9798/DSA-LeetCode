function numIslands(grid: string[][]): number {
  const visited: { [key: string]: 1 } = {};
  let islandCount = 0;

  function isValidCell(r: number, c: number) {
    if (r < grid.length && c < grid[0].length && r > -1 && c > -1) return true;
    return false;
  }

  function helper(r: number, c: number) {
    const key = `${r}-${c}`;
    if (!isValidCell(r, c) || key in visited || !+grid[r][c]) return;
    visited[key] = 1;
    helper(r, c + 1);
    helper(r + 1, c);
    helper(r - 1, c);
    helper(r, c - 1);
  }

  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      if (!(`${i}-${j}` in visited) && +grid[i][j]) {
        helper(i, j);
        ++islandCount;
      }
    }
  }

  return islandCount;
}