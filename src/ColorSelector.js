/** 
 * This class contains the color schemes.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 1.1.0
 */

export class ColorSelector {
  #colorSchemes = [ 
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

  /**
   * Get all color schemes.
   * 
   * @returns {object[]} - An array containing all color scheme objects.
   */
  getAllColorSchemes() {
    return this.#colorSchemes
  }

  /**
   * Get a specific color scheme, if the color scheme id is valid.
   *
   * @param {number} id - A color scheme id.
   * @returns {object} - An object specifying the color scheme.
   */
  getColorScheme(id) {
    this.#validateId(id)
    const colorSchemeArray = this.#colorSchemes.filter((element) => element.id === id)
    return colorSchemeArray[0]
  }

  /**
   * Validate the color scheme id.
   *
   * @param {number} id - The color scheme id.
   */
  #validateId(id) {
    const colorSchemeIds = this.#getColorSchemeIds()
    if (!colorSchemeIds.includes(id)) {
      throw new Error ('Not a valid color scheme')
    }
  }

  /**
   * Get the ids of all color schemes.
   *
   * @returns {number[]} - An array containing the ids.
   */
  #getColorSchemeIds() {
    return this.#colorSchemes.map((element) => element.id)
  }
}
