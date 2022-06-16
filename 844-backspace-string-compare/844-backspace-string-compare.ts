function backspaceCompare(s: string, t: string): boolean {
    return getFilteredString(s) === getFilteredString(t)
};

function getFilteredString(s: string){
    let filteredS = "";
    for(let letter of s){
        if(letter !== "#") filteredS += letter;
        else filteredS = filteredS.slice(0,filteredS.length-1);
    }
    return filteredS
}