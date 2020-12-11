const sum = (...args) => args.reduce((a, b) => a + b)

function run () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sum(1, 2, 3, 4, 5, 6))
    }, 1000)
  })
}

async function ola () {
  return await run()
}

ola().then(a => console.log(a))
