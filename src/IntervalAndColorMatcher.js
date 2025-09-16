/** 
 * This class contains methods to match colors to the data input.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

import { ColorCreator } from './ColorCreator.js'
import { ColorConverter } from './ColorConverter.js'

export class IntervalAndColorMatcher {
  #colorConverter = new ColorConverter()
  #intervals
  #numberOfIntervals
  #selectedColors

  constructor (selectedColorScheme, intervals, numberOfIntervals) {
    // this.#selectedColors = selectedColorScheme.rgbValues //         rgbValues: ['rgb(190, 32, 32)', 'rgb(117, 50, 168)', 'rgb(26, 2, 240)'] 
    this.#selectedColors = this.convertColorsToArray(selectedColorScheme)
    this.#intervals = intervals
    this.#numberOfIntervals = numberOfIntervals
  }

  getColors () {
    const colorCreator = new ColorCreator()
    return colorCreator.getColors(this.#selectedColors, this.#numberOfIntervals)
  }

  convertRgbStringToArray (rgbString) {
    this.#colorConverter.convertRgbStringToArray(rgbString)
  }

  convertToRgbString (rgbArray) {
    this.#colorConverter.convertRgbArrayToString(rgbArray)
  }

  convertToHexValue (rgbArray) {
    this.#colorConverter.convertRgbArraytoHexValue(rgbArray)
  }

  addColorToIntervals () {
    const colorList = this.getColors()

    for (let i = 0; i < this.#intervals.length; i++) {
      this.#intervals[i].color = { hexValue: this.convertToHexValue(colorList[i]), rgbValue: this.convertToRgbString(colorList[i]) }
    }
    return this.#intervals
  }
}