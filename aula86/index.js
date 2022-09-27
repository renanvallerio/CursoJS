function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo, cb) {
  setTimeout(() => {
    console.log(msg)
    if (cb) cb()
  }, tempo)
}
