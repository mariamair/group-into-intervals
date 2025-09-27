/** 
 * This class contains methods to convert between hexadecimal and rgb color values.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 1.0.0
 */

export class ColorConverter {

  /**
   * Convert an RGB string to an array of RGB values.
   * 
   * @param {string} rgbValueString - An RGB string specifying a color.
   * @returns {number[]} - An array with numbers representing the RGB values of a color.
   */
  convertRgbStringToArray (rgbValueString) {
    const separator = /[(),]/
    const convertToInt = (element) => Number.parseInt(element)

    return rgbValueString.split(separator).filter(convertToInt).map(convertToInt)
  }

  /**
   * Convert multiple RGB strings to a nested array of RGB values.
   * 
   * @param {string[]} rgbValueStrings - An array containing multiple RGB value strings.
   * @returns {number{}} - An array containing arrays with numbers representing RGB values.
   */
  convertMultipleRgbStringsToArray (rgbValueStrings) {
    const rgbArray = []

    for(const rgbValueString of rgbValueStrings) {
      rgbArray.push(this.convertRgbStringToArray(rgbValueString))
    }

    return rgbArray
  }

  /**
   * Convert an array of RGB values into a color string with RGB notation.
   *
   * @param {number[]} rgbValueArray - Array with numbers representing RGB values.
   * @returns {string} - An RGB string specifying a color.
   */
  convertRgbArrayToString (rgbValueArray) {
    return 'rgb(' + rgbValueArray[0] + ', ' + rgbValueArray[1] + ', ' + rgbValueArray[2] + ')'
  }

  /**
   * Convert an array of RGB values into a color string with hexadecimal notation.
   * 
   * @param {number[]} rgbValueArray - Array with numbers representing RGB values.
   * @returns {string} - A hexadecimal string specifying a color.
   */
  convertRgbArraytoHexValue (rgbValueArray) {
    return '#' + rgbValueArray[0].toString(16).padStart(2, '0') + rgbValueArray[1].toString(16).padStart(2, '0') + rgbValueArray[2].toString(16).padStart(2, '0')
  }
}
