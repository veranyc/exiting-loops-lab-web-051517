// iterates through array and changes every element to changeValue until the loop reaches stopValue.
// Then we break out of the loop and return the array.

function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break
    }
    array[i] = changeValue
  }
  return array
}


function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue
    }
    array[i] = changeValue
  }
  return array
}


function findBy(array, findFn) {
  for (let i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i]
      }
    }
    return null
  }
