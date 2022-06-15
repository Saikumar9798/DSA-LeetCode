/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    words.sort((a, b) => a.length - b.length);
    
    const map = new Map();
    
    let res = 1;
    
    for (const word of words) {
        const n = word.length;
        let max = 1;
        
        for (let i = 0; i < n; i++) {
            const front = word.substring(0, i);
            const back = word.substring(i + 1);
            
            const removed = front + back;
            
            if (map.has(removed)) {
                max = Math.max(max, map.get(removed) + 1);
            }
        }
        
        map.set(word, max);
        
        res = Math.max(res, max);
    }
    
    return res;
};