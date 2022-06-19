function findMatches(term: string, products: string[]): string[] { 
    const matches = products.filter((product) => {
        return product.slice(0, term.length) === term;
    })
    return matches.slice(0, 3);   
}


function suggestedProducts(products: string[], searchWord: string): string[][] {
    const searchLetters = searchWord.split('');
    products.sort();  // Sort Lexigraphicly  
    return searchLetters.reduce((acc: string[][], l, index) => { 
        const searchTerm = searchLetters.slice(0, index+1).join(''); // each iteration add 1 character to the searchTerm.
         acc.push(findMatches(searchTerm, products)); 
         return acc;
    }, [])

};