function generateParenthesis(n: number): string[] {
  const result: string[] = [];
  let stack: string[] = [];
  function helper(open: number = n, close: number = n): void {
    if (close < open) return;
    if (!open) {
      let balancedString = stack.join("");
      while (close--) balancedString += ")";
      result.push(balancedString);
      return;
    }
    stack.push("(");
    helper(open - 1, close);
    stack.pop();
    stack.push(")");
    helper(open, close - 1);
    stack.pop();
    return;
  }
  helper();
  return result;
}