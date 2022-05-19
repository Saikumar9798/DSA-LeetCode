type visitedArrayItemType = [number,number,number]

function findShortestSubArray(nums: number[]): number {
    let visited = {};
    let curr = -Infinity, degree = 0, currCount = 0, currMax = 0;
    nums.forEach((num:number, index:number)=>{
        if(num in visited) {
            visited[num][2] = index;
            visited[num][0]++;
        }
        else visited[num] = [1,index];
    })
    const descendingArray:any = Object.values(visited).sort((a:any,b:any)=>{
        if(b[0] > a[0]) return 1;
        else if(a[0] === b[0]) return (a[2]-a[1])-(b[2]-b[1]);
        else return -1;
    })
    return descendingArray[0][2] ? descendingArray[0][2] - descendingArray[0][1]+1 : 1;
};