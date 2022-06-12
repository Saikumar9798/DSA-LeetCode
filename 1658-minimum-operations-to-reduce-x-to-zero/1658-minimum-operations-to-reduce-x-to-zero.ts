function minOperations(nums: number[], x: number): number {
  const sum = nums.reduce((acc, curr) => acc + curr);
  if (sum === x) return nums.length;
  const target = sum - x;
  let result = -1,
    currSum = 0,
    l = 0,
    r = 0;
  while (r < nums.length) {
    currSum += nums[r];
    while (currSum > target) 
      currSum -= nums[l++];
    if (currSum === target) 
      result = Math.max(result, r - l + 1);
    r++;
  }
  return result === -1 ? -1 : nums.length - result;
}

// function minOperations(nums: number[], x: number): number {
//   const sum = nums.reduce((acc, curr) => acc + curr);
//   if (sum === x) return nums.length;
//   const visited: { [key: string]: number } = { 0: -1 };
//   const target = sum - x;
//   let result = -1,
//     currSum = 0;
//   nums.forEach((num, index) => {
//     currSum += num;
//     visited[currSum] = index;
//     if (currSum - target in visited)
//       result = Math.max(result, index - visited[currSum - target]);
//   });
//   return result === -1 ? -1 : nums.length - result;
// }

// function minOperations(nums: number[], x: number): number {
//   function helper(l: number, r: number, sum: number): number {
//     if (sum > x || l > nums.length-1 || r < 0) return Infinity;
//     if (sum === x) return 0;
//     return (
//       1 +
//       Math.min(helper(l + 1, r, nums[l] + sum), helper(l, r - 1, nums[r] + sum))
//     );
//   }
//   const min = helper(0, nums.length - 1, 0);
//   return helper(0, nums.length - 1, 0) === Infinity ? -1 : min;
// }