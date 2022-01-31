
const sw = process.stdout.columns
const colors = [
  '\x1b[31m', '\x1b[32m', '\x1b[33m', '\x1b[34m', '\x1b[35m','\x1b[36m','\x1b[37m',
]
let w = 0
let d = 5

function draw () {
  setTimeout(draw, 1000 / 10)
  if (w > sw/3 - 1 || w < 0) {
    d = -d
  }
  w += d
  let output = ''

  for (let i = 0; i < w; i++) {
    let r =Math.random()
    let c = Math.floor(Math.random() * colors.length)
    if (r > 0.875) {
      output += colors[c] + '▞'
    }
    else if (r > 0.75 && r <= 0.875) {
      output += ' ▚ '
    }
    else if (r <= 0.75 && r > 0.625) {
      output += ' ▛'
    }
    else if (r <= 0.625 && r > 0.5) {
      output += ' ▙'
    }
    else if (r <= 0.5 && r > 0.375) {
      output += '▟ '
    }
    else if (r <= 0.375 && r > 0.25) {
      output += '▐'
    }
    else if (r <= 0.25 && r > 0.125) {
        output += '▉'
    }
    else if (r <= 0.825 && r > 0.75) {
      output += '▃'
    }
    else if (r <= 1.0 && r > 0.825) {
      output += '▀'
    }
     else {
        output += '▜ '
    }
  }

  console.log(output)
}
draw()
