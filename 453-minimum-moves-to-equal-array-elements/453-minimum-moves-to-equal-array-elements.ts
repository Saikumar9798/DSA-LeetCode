function minMoves(nums: number[]): number {
    let smallest = Infinity;
    const sum = nums.reduce((accum,num)=>{
        smallest = Math.min(num, smallest);
        return accum+num
    },0);
    return sum-nums.length*smallest
};