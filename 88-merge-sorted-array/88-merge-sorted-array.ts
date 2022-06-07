/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = m, j = 0; i < nums1.length; ++i, ++j) nums1[i] = nums2[j];
    let gap = Math.ceil(nums1.length / 2);
    while(true){
        let i = 0, j = gap;
        while(j < nums1.length){
            if(nums1[i] > nums1[j]) [nums1[i], nums1[j]] = [nums1[j], nums1[i]];
            ++i; ++j;
        }
        if(gap === 1) break;
        gap = Math.ceil(gap/2);
    }
}