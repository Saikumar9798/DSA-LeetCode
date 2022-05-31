function combinationSum3(k: number, n: number): number[][] {
  const result: number[][] = [],
    stack: number[] = [];
  function helper(i: number, sum: number) {
    if (stack.length === k) {
      if (sum === n) result.push([...stack]);
      return;
    }
    while (i < 9) {
      sum += i + 1;
      stack.push(i + 1);
      helper(i + 1, sum);
      sum -= stack.pop() || 0;
      ++i;
    }
  }
  helper(0, 0);
  return result;
}