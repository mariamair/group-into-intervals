/** 
 * This class contains methods to match colors to the data input.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

import { ColorConverter } from './ColorConverter.js'
import { ColorCreator } from './ColorCreator.js'
import { ColorSelector } from './ColorSelector.js'
import { DataValidator } from './DataValidator.js'

export class IntervalAndColorMatcher {
  #colorConverter = new ColorConverter()
  #intervals
  #numberOfIntervals
  #selectedColors

  constructor (intervals, selectedColorSchemeId) {
    const selectedScheme = this.#getSelectedColorScheme(selectedColorSchemeId)
    this.#selectedColors = this.#colorConverter.convertMultipleRgbStringsToArray(selectedScheme.rgbValues)
    this.#intervals = intervals
    this.#numberOfIntervals = intervals.length
  }

  /**
   * Fetch the color scheme that the user selected.
   *
   * @param {number} id - The color scheme id.
   * @returns {object} - An object specifying the color scheme.
   */
  #getSelectedColorScheme (id) {
    const colorSelector = new ColorSelector()
    return colorSelector.getSelectedColorScheme(id)
  }

  /**
   * Create more colors, based on the selected color scheme, to match the number of intervals.
   *
   * @returns {number[]} - An array containing one color for each interval.
   */
  #getColorsForIntervals () {
    const colorCreator = new ColorCreator()
    return colorCreator.getColors(this.#selectedColors, this.#numberOfIntervals)
  }

  /**
   * Add a color to each interval.
   *
   * @returns {object} - The interval object expanded with colors. 
   */
  addColorToIntervals () {
    const colorList = this.#getColorsForIntervals()

    for (let i = 0; i < this.#intervals.length; i++) {
      this.#intervals[i].color = { hexValue: this.#colorConverter.convertRgbArraytoHexValue(colorList[i]), rgbValue: this.#colorConverter.convertRgbArrayToString(colorList[i]) }
    }
    return this.#intervals
  }
}