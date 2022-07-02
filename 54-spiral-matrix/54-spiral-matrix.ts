function spiralOrder(matrix: number[][]): number[] {
    const result:number[] = [], visited:{[key:string]:1}={};
    function isValidCell(r:number, c:number){
        const key = `${r}-${c}`;
        if(r < 0 || c < 0 || r >= matrix.length || c >= matrix[0].length || key in visited)
            return false;
        return true;
    }
    function helper(r:number = 0, c:number = 0,goingUp:boolean = false):void{
        if(isValidCell(r,c)){
            result.push(matrix[r][c]);
            const key = `${r}-${c}`;
            visited[key] = 1;
            if(goingUp) helper(r-1,c,true);
            helper(r,c+1,false);
            helper(r+1,c,false);
            helper(r,c-1,false);
            helper(r-1,c,true);
        }
    }
    helper()
    return result;
};