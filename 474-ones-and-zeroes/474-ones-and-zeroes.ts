function findMaxForm(strs: string[], m: number, n: number): number {
    let dp = {}
    function getMaxForm(index: number, m: number, n: number){
        const arg = `${index}-${m}-${n}`
        if( dp[arg] ) return dp[arg]
        if((index < 0) || m < 0 || n < 0) {
            dp[arg] = 0;
            return dp[arg] 
        }
        let considerCount = 0, skipCount = 0, [zero,one] = getOneZeroCount(strs[index]);
        if(m >= zero   && n >= one)
            considerCount = 1+getMaxForm(index-1, m-zero, n-one);
        skipCount = getMaxForm(index-1, m, n);
        dp[arg] =  Math.max(considerCount, skipCount)
        return  dp[arg]
    }
    return getMaxForm(strs.length-1, m, n)
};

function getOneZeroCount(num: string){
    let zero = 0, one = 0;
    for(let number of num){
        if(number === "0") zero++;
        else one++
    };
    return [zero,one];
}