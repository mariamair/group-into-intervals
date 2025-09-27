/** 
 * This module contains methods to validate the data input.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

import { ColorSelector } from './ColorSelector.js'

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

  isValidColorScheme (selectedColorScheme) {
    const colorSelector = new ColorSelector()
    const colorSchemes = colorSelector.getAllColorSchemes()
    let validId = false
    for (const scheme of colorSchemes) {
      if (scheme.id === selectedColorScheme) {
        validId = true
      }
    }

    if (!validId) {
      throw new Error ('Not a valid color scheme')
    }
  }
}


