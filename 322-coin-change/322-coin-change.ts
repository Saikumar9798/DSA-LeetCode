function coinChange(coins: number[], amount: number): number {
    return getMinCoins(coins, amount) === Infinity? -1 : getMinCoins(coins, amount);
};

function getMinCoins(coins,amount){
    const dpArray = new Array(amount+1).fill(Infinity);
    dpArray[0] = 0;
    for(let i = 1; i < dpArray.length; ++i){
        coins.forEach((num: number) => {
            if(i-num >= 0)
                dpArray[i] = Math.min( 1+dpArray[i-num], dpArray[i]);
        })
    }
    return dpArray[dpArray.length-1]
}