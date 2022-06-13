function minimumTotal(triangle: number[][]): number {
    const memo={};
function helper(row: number, index:number){
    if(row===triangle.length) return 0;
    const key = `${row}-${index}`
    if(key in memo) return memo[key]
    memo[key] = Math.min(triangle[row][index+1]+helper(row+1,index+1), triangle[row][index]+helper(row+1, index))
    return memo[key]
}
    return triangle[0][0]+helper(1,0)
};