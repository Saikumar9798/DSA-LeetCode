function countElements(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const low = nums[0],
    high = nums[nums.length - 1];
  let count = 0;
  nums.forEach((num) => {
    if (num > low && num < high) ++count;
  });
  return count;
}