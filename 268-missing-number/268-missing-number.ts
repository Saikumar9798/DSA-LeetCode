function missingNumber(nums: number[]): number {
  const sum = nums.reduce((accum, curr) => accum + curr, 0);
  const trueSum = (nums.length * (nums.length + 1)) / 2;
  return trueSum - sum;
}