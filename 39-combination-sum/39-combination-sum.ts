function combinationSum(candidates: number[], target: number): number[][] {
  let stack: number[] = [],
    combinationSumResult: number[][] = [];
  function helper(target: number, currSum: number, i: number) {
    if (!!!target) {
      combinationSumResult.push([...stack]);
      return;
    }
    if (target < 0) return;
    while (i < candidates.length) {
      stack.push(candidates[i]);
      currSum += candidates[i];
      helper(target - candidates[i], currSum, i);
      currSum -= stack.pop() || 0;
      i++;
    }
  }
  helper(target, 0, 0);
  return combinationSumResult;
}