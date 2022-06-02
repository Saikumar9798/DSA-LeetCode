function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const visited = {};
    for(let i = 0; i < nums.length; ++i){
        if(nums[i] in visited){
            if(i-visited[nums[i]] <= k) return true;
        }
        visited[nums[i]] = i;
    }
    return false;
};