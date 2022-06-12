function maximumUniqueSubarray(nums: number[]): number {
  let freq = new Array(10001).fill(false);
  let l = 0,
    h = 0,
    currSum = 0,
    maxSum = 0;
  while (h < nums.length) {
    while (freq[nums[h]]) {
      freq[nums[l]] = false;
      currSum -= nums[l++];
    }
    freq[nums[h]] = true;
    currSum += nums[h++];
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}