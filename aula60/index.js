function recursiva(max) {
  console.log(max)
  if (max >= 11299) return
  max++
  recursiva(max)
}

recursiva(0)
