function permute(nums: number[]): number[][] {
  function helper(i: number) {
    if (i === nums.length) return [[]];
    const result: number[][] = [];
    const perms = helper(i + 1);
    perms.forEach((perm) => {
      for (let j = 0; j <= perm.length; ++j) {
        result.push([...perm.slice(0, j), nums[i], ...perm.slice(j)]);
      }
    });
    return result;
  }
  return helper(0);
}