function subarraySum(nums: number[], k: number): number {
  let result = 0, i = 0;
  while (i < nums.length) {
    let indexSum = 0;
    for (let j = i; j < nums.length; ++j) {
      indexSum += nums[j];
      if (indexSum === k) ++result;
    }
    i++;
  }
  return result;
}