import arrdictionary from './arrdictionary.js'

console.log('Hello world from index.js')

console.log(idArrayAdd)

let arr = []

idArrayAdd.addEventListener('click', e => {
  console.log(arr, idArrayInput.value)

  arr = arrdictionary.arrayAdd(arr, idArrayInput.value)

  console.log(arr)
  console.log('Inside event listener.')
})

document.body.addEventListener('click', e => {
  console.log('You clicked', e.target.nodeName)
})
