function maxProfit(prices: number[]): number {
    let min = prices[0], max = -Infinity;
    for(let i = 1; i < prices.length; ++i){
        if(prices[i] < min){
            min = prices[i];
            continue;
        }
        else{
            const maxLocal = Math.max(max, prices[i]-min);
            if(maxLocal > max) max = maxLocal
        }
    }
    return max < 0 ? 0 : max;
};