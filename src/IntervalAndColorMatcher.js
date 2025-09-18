/** 
 * This class contains methods to match colors to the data input.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

import { ColorCreator } from './ColorCreator.js'
import { ColorConverter } from './ColorConverter.js'
import { ColorSelector } from './ColorSelector.js'

export class IntervalAndColorMatcher {
  #colorConverter = new ColorConverter()
  #intervals
  #numberOfIntervals
  #selectedColors

  constructor (selectedColorSchemeId, intervals) {
    const selectedScheme = this.getSelectedColorScheme(selectedColorSchemeId)
    this.#selectedColors = this.convertRgbStringToArray(selectedScheme.rgbValues)
    this.#intervals = intervals
    this.#numberOfIntervals = intervals.length
  }

  getSelectedColorScheme (id) {
    const colorSelector = new ColorSelector()
    return colorSelector.getSelectedColorScheme(id)
  }

  getColors () {
    const colorCreator = new ColorCreator()
    return colorCreator.getColors(this.#selectedColors, this.#numberOfIntervals)
  }

  convertRgbStringToArray (rgbStringWithMultipleValues) {
    return this.#colorConverter.convertMultipleRgbStringsToArray(rgbStringWithMultipleValues)
  }

  convertToRgbString (rgbArray) {
    return this.#colorConverter.convertRgbArrayToString(rgbArray)
  }

  convertToHexValue (rgbArray) {
    return this.#colorConverter.convertRgbArraytoHexValue(rgbArray)
  }

  addColorToIntervals () {
    const colorList = this.getColors()

    for (let i = 0; i < this.#intervals.length; i++) {
      this.#intervals[i].color = { hexValue: this.convertToHexValue(colorList[i]), rgbValue: this.convertToRgbString(colorList[i]) }
    }
    return this.#intervals
  }
}