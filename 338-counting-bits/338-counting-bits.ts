function countBits(n: number): number[] {
    let result = [];
    for(let i = 0; i <= n; ++i)
        result.push(countBitsNumber(i))
    return result
};

function countBitsNumber(n: number, memo={}): number {
    if(n in memo) return memo[n]
    if (n <= 1) return n;
    memo[n] = countBitsNumber(n/2 | 0, memo)
    return n % 2 === 0 ? memo[n] : memo[n] + 1; 
}