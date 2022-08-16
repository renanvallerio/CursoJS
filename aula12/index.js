let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let varAC = varA

varA = varB
varB = varC
varC = varAC

/* 
[varA, varB, varC] = [varB, varC, varA]
*/

console.log(varA, varB, varC);