function uniquePathsWithObstacles(grid: number[][]): number {
    if(grid[0][0]) return 0;
    grid[0][0] = 1;
     for(let i = 0; i < grid.length; ++i){
         for(let j = 0; j < grid[0].length; ++j){
             if(i === 0 && j === 0) continue;
             if(grid[i][j] === 1) grid[i][j] = null;
             if(i === 0) {
                 if(grid[i][j] !== null)
                    grid[i][j] += grid[i][j-1];
             }
             else if(j === 0) {
                 if(grid[i][j] !== null)
                     grid[i][j] += grid[i-1][j];
             }
             else{
                 if(grid[i][j] !== null)
                    grid[i][j] = grid[i-1][j]+grid[i][j-1];
             }
         }
     }
    console.log(grid)
    return grid[grid.length-1][grid[0].length-1]
};