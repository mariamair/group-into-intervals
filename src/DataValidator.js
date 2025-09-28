/** 
 * This module contains methods to validate the data input.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 1.0.0
 */

export class DataValidator {

  isArray (dataToValidate) {
    return Array.isArray(dataToValidate)
  }

  isMixedTypeArray (dataToValidate) {
    const typeOfFirstElement = this.getFirstElementType(dataToValidate) 

    const isSameType = (element) => typeof element === typeOfFirstElement

    return !dataToValidate.every(isSameType)
  }

  getFirstElementType (dataToValidate) {
    return typeof dataToValidate[0]
  }

  isValidColorScheme (colorSchemeIds, id) {
    if (!colorSchemeIds.includes(id)) {
      throw new Error ('Not a valid color scheme')
    }
  }
}


