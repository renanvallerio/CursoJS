const number = Number(prompt('Type a Number: '))
const titleNumber = document.getElementById('title-number')
const text = document.getElementById('text')

titleNumber.innerHTML = number
text.innerHTML = 
`
<p>Square root: ${Math.sqrt(number)}</p>
<p>${number} is Interger: ${Number.isInteger(number)}</p>
<p>Is NaN: ${isNaN(number)}</p>
<p>Rounding down ${Math.floor(number)}</p>
<p>Rounding up ${Math.ceil(number)}</p>
<p>With 2 decimal places ${number.toFixed(2)}</p>
`