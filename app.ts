const equal = document.querySelector('.equal')
const result = document.querySelector('.result')!
const dot = document.querySelector('.dot')
const ce = document.querySelector('.CE')
const c = document.querySelector('.C')

const numberList = document.querySelectorAll('.number')
const arithmeticList = document.querySelectorAll('.arith')

let eq: boolean = false
let startz: boolean = false
let final: any
let numbers: string = '0'
let temp1
const arithmeticArr = ['+', '-', '*', '/']
const numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

resultName()

numberList.forEach(child => {
  child.addEventListener('click', () => {
    numberOperation(child.textContent!)
  })
})

arithmeticList.forEach(child => {
  child.addEventListener('click', () => {
    arithmeticsOperation(child.textContent!)
  })
})

function numberOperation(num: string) {
  if (numbers.length > 71) return

  if (numbers == '0' && startz == false) {
    numbers = num
    startz = true
  } else {
    numbers += num
  }

  eq = false
  resultName()
}

function arithmeticsOperation(op: string) {
  if (numbers.length > 71) return

  const operationsArr = ['/', '+', '-', '*']
  for (let i = 0; i < operationsArr.length; i++) {
    if (numbers.endsWith(operationsArr[i])) return
  }

  numbers += op
  resultName()
}

otherButtons()
function otherButtons() { // Dot, equal, CE, Potency, C, Negate
  dot?.addEventListener('click', () => {
    if (numbers.length > 71) return

    for (let i = 0; i < arithmeticArr.length; i++) {
      if (numbers.endsWith(arithmeticArr[i])) return
    }

    numbers += '.'
    resultName()
  })

  equal?.addEventListener('click', () => {
    if (!eq) {
      for (let i = 0; i < arithmeticArr.length; i++) {
        if (numbers.startsWith(arithmeticArr[i])
          || numbers.endsWith(arithmeticArr[i])) {
          result.textContent = 'Error'
          numbersReset()
          return
        }
      }

      // final = numbers.split('').map(v => arithmeticArr.includes(v) ? ` ${v} ` : v).join('').split(' ').reduce((pV, cV, i) => pV (arithmeticArr.includes(cV) ? cV : ) i + 1)
      final = Function('return ' + numbers)()
      result.textContent = final
      numbersReset()
      eq = true
    } else return
  })

  ce?.addEventListener('click', () => {
    startz = false
    numbers = '0'
    resultName()
  })

  c?.addEventListener('click', () => {
    if (!startz) return
    else {
      numbers = numbers.slice(0, -1)
      resultName()
    }

    if (result.textContent == '') {
      startz = false
      numbers = '0'
      resultName()
    }
  })
}

function resultName() {
  result.textContent = numbers
}

function numbersReset() {
  numbers = ''
}