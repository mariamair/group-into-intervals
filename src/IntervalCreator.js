/** 
 * This class contains methods to process the data input and group the data into intervals.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 1.0.0
 */

import { DataValidator } from './DataValidator.js'

export class IntervalCreator {
  #isAscending
  #denseData
  #sortedData
  #minValue
  #maxValue
  #intervals
  #intervalWidth
  #numberOfIntervals
  #range

  constructor (originalData, isAscending = true) {
    this.#setSortingOrder(isAscending)
    this.#setData(originalData)
    this.#setMetaData()
  }

  /**
   * Get the data grouped into intervals.
   * 
   * @returns {object} - An object containing the intervals.
   */
  getIntervals () {
    this.#defineIntervalBoundaries()
    this.#fillIntervalsWithData()
    return this.#intervals
  }

  /**
   * Get the metadata that is used for grouping the data into intervals.
   *
   * @returns {object} - An object containing the metadata.
   */
  getIntervalMetadata () {
    return {
      minValue: this.#isAscending ? this.#minValue : this.#maxValue,
      maxValue: this.#isAscending ? this.#maxValue : this.#minValue,
      range: this.#range,
      numberOfIntervals: this.#numberOfIntervals,
      intervalWidth: this.#intervalWidth
    }
  }

  /**
   * Set the sorting order.
   *
   * @param {boolean} isAscending - A boolean specifying the sorting order.
   */
  #setSortingOrder (isAscending) {
    this.#isAscending = isAscending
  }

  /**
   * Set the data that will be used for the intervals and validate it before processing.
   *
   * @param {number[]} originalData - An array of numbers.
   */
  #setData (originalData) {
    this.#validateData(originalData)

    // Copy the original array and remove empty slots
    this.#denseData = originalData.flat()

    this.#sortedData = this.#isAscending ? this.#sortDataAscending() : this.#sortDataDescending()
  }

  /**
   * Validate the input data.
   *
   * @param {number[]} originalData - An array of numbers.
   */
  #validateData (originalData) {
    const dataValidator = new DataValidator()
    if (!dataValidator.isArray(originalData)) {
      throw new TypeError('Data has to be an array.')
    }

    if (dataValidator.isMixedTypeArray(originalData)) {
      throw new TypeError('All data has to be of the same type')
    }

    if (dataValidator.getFirstElementType(originalData) !== 'number') {
      throw new TypeError('Module only handles numbers')
    }
  }

  #sortDataAscending () {
    return this.#denseData.sort((a,b) => a - b)
  }

  #sortDataDescending () {
    return this.#denseData.sort((a,b) => b - a)
  }

  /**
   * Set the metadata used for defining the intervals.
   */
  #setMetaData () {
    this.#setMaxAndMinValue()
    this.#calculateRange()
    this.#calculateNumberOfIntervals()
    this.#calculateIntervalWidth()
  }

  #setMaxAndMinValue () {
    this.#minValue = this.#sortedData[0]
    this.#maxValue = this.#sortedData[this.#sortedData.length - 1]
  }

  #calculateRange () {
    this.#range = Math.abs(this.#maxValue - this.#minValue)
  }

  /**
   * Calculate the appropriate number of intervals using Sturges' formula (1 + 3.322 * log(number of data points))
   */
  #calculateNumberOfIntervals () {
    this.#numberOfIntervals = Math.round(1 + 3.322 * Math.log10(this.#sortedData.length))
  }

  /**
   * Calculate the interval width (range / number of intervals)
   */
  #calculateIntervalWidth () {
    let intervalWidth = Math.round(this.#range / this.#numberOfIntervals)

    while (!this.#isRangeWithinIntervals(intervalWidth)) {
      intervalWidth++
    }

    this.#intervalWidth = intervalWidth
  }

  #defineIntervalBoundaries () {
    this.#intervals = this.#isAscending ? this.#defineIntervalBoundariesAscending(this.#numberOfIntervals, this.#intervalWidth) : this.#defineIntervalBoundariesDescending(this.#numberOfIntervals, this.#intervalWidth)
  }

  /**
   * Check that the number of intervals multiplied with the interval width covers the range of the dataset.
   *
   * @param {number} intervalWidth - The interval width.
   * @returns {boolean} - True if the range is covered, false otherwise.
   */
  #isRangeWithinIntervals(intervalWidth) {
    if (this.#range < this.#numberOfIntervals * intervalWidth) {
      return true
    }
    return false
  }

  /**
   * Define the lower and upper interval boundaries for ascending sorting.
   * 
   * @returns {object[]} - An array containing the intervals with their boundaries.
   */
  #defineIntervalBoundariesAscending() {
    const intervalBoundaries = []

    let lowerBoundary = this.#minValue
    for (let i = 0; i < this.#numberOfIntervals; i++) {
      const upperBoundary = lowerBoundary + this.#intervalWidth
      intervalBoundaries.push({ lowerBoundary, upperBoundary: upperBoundary - 1 })
      lowerBoundary = upperBoundary
    }

    return intervalBoundaries
  }

  /**
   * Define the lower and upper interval boundaries for descending sorting.
   * 
   * @returns {object[]} - An array containing the intervals with their boundaries.
   */
  #defineIntervalBoundariesDescending() {
    const intervalBoundaries = []

    let upperBoundary = this.#minValue
    for (let i = 0; i < this.#numberOfIntervals; i++) {
      const lowerBoundary = upperBoundary - this.#intervalWidth
      intervalBoundaries.push({ upperBoundary, lowerBoundary: lowerBoundary + 1 })
      upperBoundary = lowerBoundary
    }

    return intervalBoundaries
  }

  /**
   * Fill the defined intervals with the data that lies between their boundaries. 
   */
  #fillIntervalsWithData() {
    for (const interval of this.#intervals) {
      interval.data = []
    }

    for (const dataPoint of this.#sortedData) {
      for (let i = 0; i < this.#intervals.length; i++) {
        if (dataPoint >= this.#intervals[i].lowerBoundary && dataPoint <= this.#intervals[i].upperBoundary) {
          this.#intervals[i].data.push(dataPoint)
        }
      }
    }
  }
}
