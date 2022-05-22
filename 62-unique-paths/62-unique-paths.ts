function uniquePaths(m: number, n: number): number {
    let dpArray = new Array(m).fill([]);
    dpArray.forEach((_,i) =>{
        dpArray[i] = new Array(n).fill(null);
    });
    dpArray[0][0] = 1;
    for(let i = 0; i < m; ++i){
        for(let j = 0; j < n; ++j){
            if(i === 0 || j === 0) dpArray[i][j] = 1;
            else{
                dpArray[i][j] = dpArray[i-1][j] + dpArray[i][j-1];
            }
        }
    }
    return dpArray[m-1][n-1]
};