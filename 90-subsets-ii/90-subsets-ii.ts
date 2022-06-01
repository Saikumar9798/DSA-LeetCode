function subsetsWithDup(nums: number[]): number[][] {
  let result: number[][] = [],
    stack: number[] = [];
  nums.sort();
  function helper(i: number) {
    if (i === nums.length) {
      result.push([...stack]);
      return;
    }
    // Consider element to be added
    stack.push(nums[i]);
    helper(i + 1);
    stack.pop();

    // Not consider element to be added
    while (nums[i] === nums[i + 1]) ++i;
    helper(i + 1);
  }
  helper(0);
  return result;
}