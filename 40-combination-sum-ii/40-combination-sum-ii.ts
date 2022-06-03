function combinationSum2(candidates: number[], target: number): number[][] {
  let stack: number[] = [],
    result: number[][] = [];
  candidates.sort();
  const helper = (i: number, currSum: number) => {
    if (i === candidates.length) {
      if (currSum === target) result.push([...stack]);
      return;
    }
      if(currSum > target) return;
    currSum += candidates[i];
    stack.push(candidates[i]);
    helper(i + 1, currSum);

    while (candidates[i] === candidates[i + 1]) ++i;
    currSum -= stack.pop() || 0;
    helper(i + 1, currSum);
  };
  helper(0, 0);
  return result;
}