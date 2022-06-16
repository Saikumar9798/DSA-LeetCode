function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const visited: { [key: string]: 1 } = {};
  const givenColor = image[sr][sc];
  function isValidCell(r: number, c: number): boolean {
    const key = `${r}-${c}`
    if (r >= 0 && r < image.length && c >= 0 && c < image[0].length && !(key in visited) && image[r][c] === givenColor) return true;
    return false
  }
  function helper(r: number, c: number) {
    const key = `${r}-${c}`;
    if (isValidCell(r, c)) {
      visited[key] = 1;
      image[r][c] = color;
      helper(r + 1, c)
      helper(r - 1, c)
      helper(r, c + 1)
      helper(r, c - 1)
    }
  }
  helper(sr, sc);
  return image
};