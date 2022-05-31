function letterCasePermutation(s: string): string[] {
  function helper(i: number) {
    if (i === s.length) return [""];
    const out = helper(i + 1);
    const result: string[] = [];
    out.forEach((item) => {
      if (s[i].toLocaleLowerCase() !== s[i].toLocaleUpperCase()) {
        result.push(s[i].toLocaleLowerCase() + item);
        result.push(s[i].toLocaleUpperCase() + item);
      } else {
        result.push(s[i] + item);
      }
    });
    return result;
  }
  return helper(0);
}