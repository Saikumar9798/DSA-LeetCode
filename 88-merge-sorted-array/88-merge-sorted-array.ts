/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = m, j = 0; i < nums1.length; ++i, ++j) nums1[i] = nums2[j];
  for (let i = 0, j = m; i <= m; ++i) {
    if (nums1[i] > nums1[j]) {
      [nums1[i], nums1[j]] = [nums1[j], nums1[i]];
      const sorted = nums1.splice(j).sort((a, b) => a - b);
      nums1.push(...sorted);
    }
  }
  // console.log(nums1);
}