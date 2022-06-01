function subsets(nums: number[]): number[][] {
  let result: number[][] = [],
    stack: number[] = [];
  function helper(i: number) {
    if (i === nums.length) {
      result.push([...stack]);
      return;
    }
    stack.push(nums[i]);
    helper(i + 1);
    stack.pop();
    helper(i + 1);
  }
  helper(0);
  return result;
}