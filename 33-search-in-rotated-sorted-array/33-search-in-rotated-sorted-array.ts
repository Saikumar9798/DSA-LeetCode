function search(nums: number[], target: number): number {
    const [_, pivot] = findPivot(nums);
    const left = binarySearch(nums, 0, pivot-1, target)
    if(left !== -1) return left
    const right = binarySearch(nums, pivot, nums.length-1, target)
    if(right !== -1) return right
    return -1
};

function findPivot(nums: number[], l: number = 0, h: number = nums.length-1){
    let minIndex = 0, min = Infinity; 
    while(l <= h){
      if(nums[l] < nums[h]){
        if(min > nums[l]) minIndex = l;
          min = Math.min(min, nums[l])
        break;
      }
      const m:number = (l+h)/2 | 0;
      if(min > nums[m]) minIndex = m;
        min = Math.min(min, nums[m])
      if(nums[m] >= nums[l]) l = m+1;
      else h = m-1;
    }
    return [min, minIndex];
}

function binarySearch(nums: number[], l: number = 0, h: number = nums.length - 1, target: number) {
  while (l <= h) {
    const m = (l + h) / 2 | 0;
    if (nums[m] === target) return m;
    else if (nums[m] < target) l = m + 1;
    else h = m - 1;
  }
  return -1;
}