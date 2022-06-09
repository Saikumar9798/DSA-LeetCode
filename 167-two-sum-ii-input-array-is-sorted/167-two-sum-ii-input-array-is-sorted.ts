function twoSum(numbers: number[], target: number): number[] {
    let l = 0, h = numbers.length-1;
    while(l < h){
        if(numbers[l]+numbers[h] === target) return [l+1,h+1];
        else if(numbers[l]+numbers[h] < target) ++l;
        else --h;
    }
};