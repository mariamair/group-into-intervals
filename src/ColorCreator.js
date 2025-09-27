/** 
 * This class contains methods to calculate new colors from existing ones.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

export class ColorCreator {
  #colors

  /**
   * Create more colors if there are more intervals than colors in the color scheme. 
   *
   * @param {number[]} colors - An array specifying RGB color values.
   * @param {number} numberOfIntervals - The number of intervals.
   * @returns {number[]} - An array specifying RGB color values.
   */
  getColors (colors, numberOfIntervals) {
    this.#setStartingColors(colors)
    while (this.#hasMoreIntervalsThanColors(numberOfIntervals)){
      this.#createColors()
    }
    return this.#colors
  }

  /** 
   * Set received color scheme colors as starting colors.
   */
  #setStartingColors (colors) {
    this.#colors = colors
  }

  /**
   * Check if there are more interval than colors.
   *
   * @param {number} numberOfIntervals - The number of intervals.
   * @returns {boolean} - True if there are more intervals than colors, false otherwise.
   */
  #hasMoreIntervalsThanColors (numberOfIntervals) {
    if (numberOfIntervals > this.#colors.length) {
      return true
    }
    return false
  }

  /**
   * Create color pairs from the existing colors.
   *
   * @returns {number[][]} An array containing pairs of RGB value arrays.
   */
  #createColorPairs () {
    const colorPairs = []
    for (let i = 0, j = 1; i < this.#colors.length - 1; i++, j++) {
      colorPairs.push([this.#colors[i], this.#colors[j]])
    }
    return colorPairs
  }

  /**
   * Create new colors from the existing ones.
   */
  #createColors () {
    const colorList = []
    const colorPairs = this.#createColorPairs()

    let index = 0
    for (const colorPair of colorPairs) {
      colorList.push(colorPair[0])
      const newColor = this.#calculateMiddleRgbValue(colorPair)
      colorList.push(newColor)
      // For the last pair add the second color as well
      if (index === colorPairs.length - 1) {
        colorList.push(colorPair[1])
      }
      index++
    }
    this.#colors = colorList
  }

/**
 * Calculate the RGB value in between two given RGB values.
 * 
 * @param {number[][]} colorPair - An array containing two arrays of RGB values.
 * @returns {number[]} - An array containing a new RGB value.
 */
  #calculateMiddleRgbValue (colorPair) {
    const middleRgbValue = []
    for (let i = 0; i < 3; i++) {
      const newValue = Math.round(colorPair[0][i] - (colorPair[0][i] - colorPair[1][i]) / 2)
      middleRgbValue.push(newValue)
    }
    return middleRgbValue
  }
}