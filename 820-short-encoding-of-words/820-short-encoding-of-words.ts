function minimumLengthEncoding(words: string[]): number {
return `${words
    .map((s) => s.split("").reverse().join(""))
    .sort((a, b) => (a > b ? -1 : a < b ? 1 : 0))
    .filter((v, i, d) => i === 0 || !d[i - 1].startsWith(v))
    .join("#")}#`.length;
};