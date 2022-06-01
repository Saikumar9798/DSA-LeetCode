function letterCombinations(digits: string): string[] {
  const mappings: { [key: string]: string[] } = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  function helper(i: number): string[] {
    if (i === digits.length) return [""];
    const result: string[] = [];
    const out = helper(i + 1);
    for (let letter of mappings[digits[i]]) {
      out.forEach((comb) => {
        result.push(letter + comb);
      });
    }
    return result;
  }
  if(!digits) return [];
  return helper(0);
}