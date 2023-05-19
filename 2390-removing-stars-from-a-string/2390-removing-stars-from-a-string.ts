function removeStars(s: string): string {
 let alphabetStack = []
 for(let char of s){
     if(char !== '*'){
         alphabetStack.push(char)
     }
     else alphabetStack.pop()
 }
    return alphabetStack.join('')
};