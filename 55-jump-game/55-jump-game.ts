function canJump(nums: number[]): boolean {
    const numsLen = nums.length;
    if(numsLen === 1) return true;
    let maxDistance = -Infinity;
    for(let i = 0; i < numsLen; ++i){
        if(!nums[i] && maxDistance <= i) return false;
        maxDistance = Math.max(maxDistance, i+nums[i]);
        if(maxDistance >= numsLen-1) return true;
    }
    return false;
}