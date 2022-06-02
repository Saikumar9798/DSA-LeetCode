function containsDuplicate(nums: number[]): boolean {
    const visited = {};
    for(let i = 0; i < nums.length; ++i){
        if(nums[i] in visited) return true;
        visited[nums[i]] = 1;
    }
    return false;
};