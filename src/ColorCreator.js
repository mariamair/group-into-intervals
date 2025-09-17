/** 
 * This class contains methods to calculate new colors from existing ones.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

export class ColorCreator {
  #colors

  // Setting the default to 9 because more values give colors that are too similar.
  getColors (colors, numberOfIntervals = 9) {
    this.setStartingColors(colors)
    while (this.hasMoreIntervalsThanColors(numberOfIntervals)){
      this.createColors()
    }
    return this.#colors
  }

  setStartingColors (colors) {
    this.#colors = colors
  }

  hasMoreIntervalsThanColors (numberOfIntervals) {
    if (numberOfIntervals > this.#colors.length) {
      return true
    }
    return false
  }

  createColorPairs () {
    const colorPairs = []
    for (let i = 0, j = 1; i < this.#colors.length - 1; i++, j++) {
      colorPairs.push([this.#colors[i], this.#colors[j]])
    }
    return colorPairs
  }

  createColors () {
    const colorList = []
    const colorPairs = this.createColorPairs()

    let index = 0
    for (const colorPair of colorPairs) {
      colorList.push(colorPair[0])
      const newColor = this.calculateMiddleRgbValue(colorPair)
      colorList.push(newColor)
      // For the last pair add the second color as well
      if (index === colorPairs.length - 1) {
        colorList.push(colorPair[1])
      }
      index++
    }
    this.#colors = colorList
  }

  calculateMiddleRgbValue (colorPair) {
    const middleRgbValue = []
    for (let i = 0; i < 3; i++) {
      const newValue = Math.round(colorPair[0][i] - (colorPair[0][i] - colorPair[1][i]) / 2)
      middleRgbValue.push(newValue)
    }
    return middleRgbValue
  }
}