function longestPalindrome(s: string): string {
  let resIndices = [0, 0];
  let maxLen = 0,
    l = 0,
    r = 0;
  for (let i = 0; i < s.length; ++i) {
    let k = 0;
    while (k < 2) {
      if (k === 0) l = r = i;
      else (l = i), (r = i + 1);
      while (l >= 0 && r < s.length && s[l] === s[r]) {
        if (r - l + 1 > maxLen) {
          resIndices = [l, r];
          maxLen = r - l + 1;
        }
        --l, ++r;
      }
      ++k;
    }
  }
  return s.slice(resIndices[0], resIndices[1] + 1);
}