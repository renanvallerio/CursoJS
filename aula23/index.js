/* 
&& -> false && true -> false "O valor mesmo"
|| -> true || false -> vai retornar "O valor verdadeiro"

FALSY
*false
0
'' "" ``
null / undefined
NaN
*/

const a = 0
const b = null
const c = 'false'
const d = false
const e = NaN

console.log(a || 'Verdadeiro' || b || c || d || e)
