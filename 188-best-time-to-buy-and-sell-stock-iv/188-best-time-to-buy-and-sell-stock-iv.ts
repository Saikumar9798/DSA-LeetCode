function maxProfit(k: number, prices: number[]): number {
      const dp: { [key: string]: number } = {};
      function helper(index: number, buy: boolean, capacity: number): number {
        if (index === prices.length || !capacity) return 0;
        const key = `${index}-${buy}-${capacity}`;
        if (key in dp) return dp[key];
        if (buy)
          dp[key] = Math.max(
            -prices[index] + helper(index + 1, false, capacity),
            helper(index + 1, true, capacity)
          );
        else
          dp[key] = Math.max(
            prices[index] + helper(index + 1, true, capacity - 1),
            helper(index + 1, false, capacity)
          );
        return dp[key];
      }
      return helper(0, true, k);
};