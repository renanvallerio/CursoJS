const h1 = document.querySelector('.container h1')
const date = new Date()

function getDayOfWeekText(dayOfWeek) {
  let dayOfWeekText

  switch (dayOfWeek) {
    case 0:
      return (dayOfWeekText = 'Sunday')
    case 1:
      return (dayOfWeekText = 'Monday')
    case 2:
      return (dayOfWeekText = 'Tuesday')
    case 3:
      return (dayOfWeekText = 'Wednesday')
    case 4:
      return (dayOfWeekText = 'Thursday')
    case 5:
      return (dayOfWeekText = 'Friday')
    case 6:
      return (dayOfWeekText = 'Saturday')
    default:
      return (dayOfWeekText = '')
  }
}

function getMonthText(month) {
  let monthText

  switch (month) {
    case 0:
      return (monthText = 'January')
    case 1:
      return (monthText = 'February')
    case 2:
      return (monthText = 'March')
    case 3:
      return (monthText = 'April')
    case 4:
      return (monthText = 'May')
    case 5:
      return (monthText = 'June')
    case 6:
      return (monthText = 'July')
    case 7:
      return (monthText = 'August')
    case 8:
      return (monthText = 'September')
    case 9:
      return (monthText = 'October')
    case 10:
      return (monthText = 'November')
    case 11:
      return (monthText = 'December')
    default:
      return (monthText = '')
  }
}

function zeroLeft(num) {
  return num >= 10 ? num : `0${num}`
}

h1.innerHTML = `${getDayOfWeekText(date.getDay())}, 
${getMonthText(date.getMonth())}  
${date.getDate()}, 
${date.getFullYear()} at
${zeroLeft(date.getHours())}:${zeroLeft(date.getMinutes())}`

// simple
const h2 = document.querySelector('h2')
const data = new Date()
h2.innerHTML = `${data.toLocaleDateString('en', { dateStyle: `full` })} at 
${zeroLeft(date.getHours())}:${zeroLeft(date.getMinutes())}`
