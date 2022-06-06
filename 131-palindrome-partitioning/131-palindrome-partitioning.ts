function partition(s: string): string[][] {
  const result: string[][] = [],
    stack: string[] = [];
  function helper(index: number) {
    if (index === s.length) result.push([...stack]);
    for (let i = index; i < s.length; ++i) {
      if (checkPalindrome(s.slice(index, i + 1))) {
        stack.push(s.slice(index, i + 1));
        helper(i + 1);
        stack.pop();
      }
    }
  }
  helper(0);
  return result;
}

function checkPalindrome(s: string) {
  for (let i = 0, j = s.length - 1; i < s.length && j > -1; ++i, --j) {
    if (s[i] !== s[j]) return false;
  }
  return true;
}