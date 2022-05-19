function rob(nums: number[]): number {
    return getMaxRob(nums, nums.length);
};

function getMaxRob( nums: number[], index = nums.length-1, max = -Infinity, visited: any = {}){
    if(index in visited) return visited[index];
    if (index === 0 || nums.length === 1) return nums[0];
    if (index === 1 || nums.length === 2) return Math.max(nums[0], nums[1]);
    for(let i in nums){
        if(+i >= 2){
            visited[i] = Math.max(nums[i]+getMaxRob(nums, +i-2, max, visited), getMaxRob(nums,+i-1, max, visited));
            if(visited[i] > max) max = visited[i]
        }
    }
    return max;
}