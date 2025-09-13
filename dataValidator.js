/** 
 * This module contains methods to validate the data input.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

export function isArray (dataToValidate) {
  return Array.isArray(dataToValidate)
}

export function isMixedTypeArray (dataToValidate) {
  const typeOfFirstElement = typeof dataToValidate[0]

  const isSameType = (element) => typeof element === typeOfFirstElement

  return !dataToValidate.every(isSameType)
}

