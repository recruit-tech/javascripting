console.time('setTimeout')

setTimeout(() => {
  console.log('callback function is executed!')
  console.timeEnd('setTimeout')
}, 1000)
