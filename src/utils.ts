export const queue = (callback: (...args) => void, time: number) => {
  const queue: any[][] = [] // eslint-disable-line
  let interval

  return (...args: any[]) => {
    // eslint-disable-line
    queue.push(args)

    if (interval) return

    interval = setInterval(() => {
      if (queue.length === 0) {
        clearInterval(interval)
      }

      const next = queue.shift()

      if (!next) return

      callback(...next)
    }, time)
  }
}
