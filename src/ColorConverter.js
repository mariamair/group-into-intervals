/** 
 * This class contains methods to convert between hexadecimal and rgb values.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

export class ColorConverter {

  convertRgbStringToArray (rgbValueString) {
    const separator = /[(),]/
    const convertToInt = (element) => Number.parseInt(element)

    return rgbValueString.split(separator).filter(convertToInt).map(convertToInt)
  }

  convertMultipleRgbStringsToArray (rgbStringWithMultipleValues) {
    const rgbArray = []

    for(const color of rgbStringWithMultipleValues) {
      rgbArray.push(this.convertRgbStringToArray(color))
    }
    return rgbArray
  }

  convertRgbArrayToString (rgbValueArray) {
    return 'rgb(' + rgbValueArray[0] + ', ' + rgbValueArray[1] + ', ' + rgbValueArray[2] + ')'
  }

  convertRgbArraytoHexValue (rgbValueArray) {
    return '#' + rgbValueArray[0].toString(16).padStart(2, '0') + rgbValueArray[1].toString(16).padStart(2, '0') + rgbValueArray[2].toString(16).padStart(2, '0')
  }
}