function combine(n: number, k: number): number[][] {
  let stack: number[] = [],
    result: number[][] = [];
  function helper(i: number) {
    if (stack.length === k) {
      result.push([...stack]);
      return null;
    }
    while (i < n) {
      stack.push(i + 1);
      helper(i + 1);
      stack.pop();
      ++i;
    }
  }
  helper(0);
  return result;
}