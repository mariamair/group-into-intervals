/** 
 * This class contains methods to match colors to the data input.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

export class ColorSelector {

  selectColorScheme (colorSchemeId) {
    const colorSchemes = [ 
      { 
        id: 1, name: 'red, violet, blue', 
        hexValues: ['#be2020', '#7532a8', '#1a02f0'], 
        rgbValues: ['rgb(190, 32, 32)', 'rgb(117, 50, 168)', 'rgb(26, 2, 240)'] 
      }, {
        id: 2, name: 'red, yellow, blue', 
        hexValues: ['#be2020', '#d6db42', '#1a02f0'], 
        rgbValues: ['rgb(190, 32, 32)', 'rgb(214, 219, 66)', 'rgb(26, 2, 240)'] 
      }, {
        id: 3, name: 'violet, yellow, blue',
        hexValues: ['#7532a8', '#d6db42', '#1a02f0'], 
        rgbValues: ['rgb(117, 50, 168)', 'rgb(214, 219, 66)', 'rgb(26, 2, 240)'] 
      }, {
        id: 4, name: 'white, light green, dark green',
        hexValues: ['#fff', '#5ec138', '#3a6d25'], 
        rgbValues: ['rgb(255, 255, 255)', 'rgb(94, 193, 56)', 'rgb(58, 109, 37)'] 
    }]

    for (const scheme of colorSchemes) {
      if (colorSchemeId === scheme.id) {
        return scheme
      }
    }

    throw Error ('Invalid color scheme')
  }

  addColorSchemeToIntervals (numberOfIntervals, intervals, colorScheme) {
    let numberOfColors = colorScheme.rgbValues.length

    while (!this.hasEnoughColors(numberOfIntervals, numberOfColors)) {
      const newColor = this.adjustColorSchemeToIntervals(colorScheme, numberOfColors)
      colorScheme.hexValues.push(this.convertRgbArraytoHexValue(newColor))
      colorScheme.rgbValues.push(this.convertRgbArrayToString(newColor))
      numberOfColors++
      console.log('numberOfColors: ' + numberOfColors)
    }

    for (let i = 0; i < intervals.length; i++) {
      intervals[i].color = { hexValue: colorScheme.hexValues[i], rgbValue: colorScheme.rgbValues[i] }
    }
  }

  hasEnoughColors (numberOfIntervals, numberOfColors) {
    if (numberOfIntervals > numberOfColors) {
      return false
    }
    return true
  }

  convertRgbStringToArray (rgbValueString) {
    const separator = /[(),]/
    const convertToInt = (element) => Number.parseInt(element)

    return rgbValueString.split(separator).filter(convertToInt).map(convertToInt)
  }

  convertRgbArrayToString (rgbValueArray) {
    return 'rgb(' + rgbValueArray[0] + ', ' + rgbValueArray[1] + ', ' + rgbValueArray[2] + ')'
  }

  convertRgbArraytoHexValue (rgbValueArray) {
    return '#' + rgbValueArray[0].toString(16) + rgbValueArray[1].toString(16) + rgbValueArray[2].toString(16)
  }

  adjustColorSchemeToIntervals (colorScheme, numberOfColors) {
    let indexOfFirstValue = 0
    let indexOfSecondValue = 1

    // Om det är ett jämnt antal börja bakifrån, annars framifrån 
    // OBS! Funkar inte, då blir det samma färger om och om igen
    if (numberOfColors % 2 === 0 ) {
      indexOfFirstValue = colorScheme.rgbValues.length - 2
      indexOfSecondValue = colorScheme.rgbValues.length - 1
    }
    
    const firstRgbValue = colorScheme.rgbValues[indexOfFirstValue]
    const secondRgbValue = colorScheme.rgbValues[indexOfSecondValue]

    return this.calculateMiddleRgbValue(this.convertRgbStringToArray(firstRgbValue), this.convertRgbStringToArray(secondRgbValue))
  }

  calculateMiddleRgbValue ( firstRgbArray, secondRgbArray) {
    const middleRgbValue = []
    for (let i = 0; i < 3; i++) {
      const newValue = Math.round(firstRgbArray[i] - (firstRgbArray[i] - secondRgbArray[i]) / 2)
      middleRgbValue.push(newValue)
      console.log(firstRgbArray[i])
    }
    console.log(middleRgbValue)
    return middleRgbValue
  }
}