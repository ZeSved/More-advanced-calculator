const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const zero = document.querySelector('.zero')

const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const equal = document.querySelector('.equal')
const result = document.querySelector('.result')!
const dot = document.querySelector('.dot')
const ce = document.querySelector('.CE')
const negate = document.querySelector('.negate')

let z = false
let numbers: string = '0'
resultName()

one?.addEventListener('click', () => {
  if (numbers.length > 15) return
  if (numbers == '0' && z == false){
    numbers = '1'
    z = false
    resultName()
  } else if (z == true) {
    numbers += '1'
    console.log(numbers)
    console.log(z)
    resultName()
  }
})

two?.addEventListener('click', () => {
  if (numbers.length > 15) return
  if (numbers == '0' && z == false){
    numbers = '2'
    z = false
    resultName()
  } else if (z == true) {
    numbers += '2'
    console.log(numbers)
    console.log(z)
    resultName()
  }
})

three?.addEventListener('click', () => {
  if (numbers.length > 15) return
  if (numbers == '0' && z == false){
    numbers = '3'
    z = true
    resultName()
  } else if (z == true) {
    numbers += '3'
    console.log(numbers)
    console.log(z)
    resultName()
  }
})

four?.addEventListener('click', () => {
  if (numbers.length > 15) return
  if (numbers == '0' && z == false){
    numbers = '4'
    z = true
    resultName()
  } else if (z == true) {
    numbers += '4'
    console.log(numbers)
    console.log(z)
    resultName()
  }
})

five?.addEventListener('click', () => {
  if (numbers.length > 15) return
  if (numbers == '0' && z == false){
    numbers = '5'
    z = true
    resultName()
  } else if (z == true) {
    numbers += '5'
    console.log(numbers)
    console.log(z)
    resultName()
  }
})

six?.addEventListener('click', () => {
  if (numbers.length > 15) return
  if (numbers == '0' && z == false){
    numbers = '6'
    z = true
    resultName()
  } else if (z == true) {
    numbers += '6'
    console.log(numbers)
    console.log(z)
    resultName()
  }
})

seven?.addEventListener('click', () => {
  if (numbers.length > 15) return
  if (numbers == '0' && z == false){
    numbers = '7'
    z = true
    resultName()
  } else if (z == true) {
    numbers += '7'
    console.log(numbers)
    console.log(z)
    resultName()
  }
})

eight?.addEventListener('click', () => {
  if (numbers.length > 15) return
  if (numbers == '0' && z == false){
    numbers = '8'
    z = true
    resultName()
  } else if (z == true) {
    numbers += '8'
    console.log(numbers)
    console.log(z)
    resultName()
  }
})

nine?.addEventListener('click', () => {
  if (numbers.length > 15) return
  if (numbers == '0' && z == false){
    numbers = '9'
    z = true
    resultName()
  } else if (z == true) {
    numbers += '9'
    console.log(numbers)
    console.log(z)
    resultName()
  }
})

zero?.addEventListener('click', () => {
  if (numbers.length > 15) return
  if (numbers == '0' && z == false){
    numbers = '0'
    z = true
    resultName()
  } else if (z == true) {
    numbers += '0'
    console.log(numbers)
    console.log(z)
    resultName()
  }
})

plus?.addEventListener('click', () => {
  if (numbers.length > 15) return
  if (numbers.endsWith('/') || 
  numbers.endsWith('+') || 
  numbers.endsWith('-') || 
  numbers.endsWith('*') || 
  numbers.endsWith('.')) return
  numbers += '+'
  resultName()
})

minus?.addEventListener('click', () => {
  if (numbers.length > 15) return
  if (numbers.endsWith('/') || 
  numbers.endsWith('+') || 
  numbers.endsWith('-') || 
  numbers.endsWith('*') || 
  numbers.endsWith('.')) return
  numbers += '-'
  resultName()
})

multiply?.addEventListener('click', () => {
  if (numbers.length > 15) return
  if (numbers.endsWith('/') || 
  numbers.endsWith('+') || 
  numbers.endsWith('-') || 
  numbers.endsWith('*') || 
  numbers.endsWith('.')) return
  numbers += '*'
  resultName()
})

divide?.addEventListener('click', () => {
  if (numbers.length > 15) return
  if (numbers.endsWith('/') || 
  numbers.endsWith('+') || 
  numbers.endsWith('-') || 
  numbers.endsWith('*') || 
  numbers.endsWith('.')) return
  numbers += '/'
  resultName()
})

dot?.addEventListener('click', () => {
  if (numbers.length > 15) return
  if (numbers.endsWith('/') || 
  numbers.endsWith('+') || 
  numbers.endsWith('-') || 
  numbers.endsWith('*') || 
  numbers.endsWith('.')) return
  numbers += '.'
  resultName()
})

negate?.addEventListener('click', () => {
  // TODO
})

equal?.addEventListener('click', () => {
  let final = Function('return ' + numbers)()
  if (numbers.startsWith('/') || 
  numbers.startsWith('+') || 
  numbers.startsWith('-') || 
  numbers.startsWith('*') || 
  numbers.startsWith('.') ||
  numbers.endsWith('/') || 
  numbers.endsWith('+') || 
  numbers.endsWith('-') || 
  numbers.endsWith('*') || 
  numbers.endsWith('.')){
    result.textContent = 'Error'
    numbers = ''
  } else if (final.length > 15){
    final.splice
  }
  
  else {
    result.textContent = final
    numbers = ''
  }
})

ce?.addEventListener('click', () => {
  z = false
  numbers = '0'
  result.textContent = numbers
})

function resultName() {
  result.textContent = numbers
}