function longestPalindromeSubseq(s: string): number {
    const sReversed = s.split("").reverse().join("");
    return longestCommonSubsequence(s, sReversed);
};

function longestCommonSubsequence(s1 , s2){
   let dp = new Array(s1.length+1).fill(0).map(x=>new Array(s2.length+1).fill(0))
  for(let i=1; i<=s1.length; i++){
      for(let j=1 ; j<=s2.length; j++){
          if(s1[i-1] == s2[j-1]) dp[i][j] = dp[i-1][j-1]+1
          else
              dp[i][j] = Math.max( dp[i-1][j] , dp[i][j-1] )
      }
  }
    return dp[s1.length][s2.length]
}

