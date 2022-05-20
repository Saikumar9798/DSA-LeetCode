function rob(nums: number[]): number {
    if(nums.length === 1) return nums[0]
    return Math.max(getMaxRob(nums.slice(0, nums.length-1)), getMaxRob(nums.slice(1)))
};

function getMaxRob( nums: number[], index = nums.length-1, max = -Infinity, visited: any = {}){
    if(index in visited) return visited[index];
    if(index < 0) return null;
    if (index === 0) return nums[0];
    for(let i in nums){
            visited[i] = Math.max(nums[i]+getMaxRob(nums, +i-2, max, visited), getMaxRob(nums,+i-1, max, visited));
            if(visited[i] > max) max = visited[i]
    }
    return max;
}