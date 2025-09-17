/** 
 * This class contains methods to process the data input.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

import { isArray, isMixedTypeArray, getFirstElementType } from './dataValidator.js'

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
    this.setSortingOrder(isAscending)
    this.setData(originalData)
    this.setMetaData()
  }

  getIntervals () {
    this.defineIntervalBoundaries()
    this.fillIntervalsWithData()
    return this.#intervals
  }

  getIntervalMetadata () {
    return {
      minValue: this.#isAscending ? this.#minValue : this.#maxValue,
      maxValue: this.#isAscending ? this.#maxValue : this.#minValue,
      range: this.#range,
      numberOfIntervals: this.#numberOfIntervals,
      intervalWidth: this.#intervalWidth
    }
  }

  getSortedArray () {
    return this.#sortedData
  }

  setSortingOrder (isAscending) {
    this.#isAscending = isAscending
  }

  setData (originalData) {
    this.validateData(originalData)

    // Copy the original array and remove empty slots
    this.#denseData = originalData.flat()

    this.#sortedData = this.#isAscending ? this.sortDataAscending() : this.sortDataDescending()
  }

  validateData (originalData) {
    if (!isArray(originalData)) {
      throw new TypeError('Data has to be an array.')
    }

    if (isMixedTypeArray(originalData)) {
      throw new TypeError('All data has to be of the same type')
    }

    if (getFirstElementType(originalData) !== 'number') {
      throw new TypeError('Module only handles numbers')
    }
  }

  sortDataAscending () {
    return this.#denseData.sort((a,b) => a - b)
  }

  sortDataDescending () {
    return this.#denseData.sort((a,b) => b - a)
  }

  setMetaData () {
    this.setMaxAndMinValue()
    this.calculateRange()
    this.calculateNumberOfIntervals()
    this.calculateIntervalWidth()
  }

  setMaxAndMinValue () {
    this.#minValue = this.#sortedData[0]
    this.#maxValue = this.#sortedData[this.#sortedData.length - 1]
  }

  calculateRange () {
    this.#range = Math.abs(this.#maxValue - this.#minValue)
  }

  // Calculate the appropriate number of intervals using Sturges' formula (1 + 3.322 * log(number of data points))
  calculateNumberOfIntervals () {
    this.#numberOfIntervals = Math.round(1 + 3.322 * Math.log10(this.#sortedData.length))
  }

  // Calculate the interval width (range / number of intervals)
  calculateIntervalWidth () {
    let intervalWidth = Math.round(this.#range / this.#numberOfIntervals)

    while (!this.isRangeWithinIntervals(this.#range, this.#numberOfIntervals, intervalWidth )) {
      intervalWidth++
    }

    this.#intervalWidth = intervalWidth
  }

  defineIntervalBoundaries () {
    this.#intervals = this.#isAscending ? this.defineIntervalBoundariesAscending(this.#numberOfIntervals, this.#intervalWidth) : this.defineIntervalBoundariesDescending(this.#numberOfIntervals, this.#intervalWidth)
  }

  isRangeWithinIntervals(range, numberOfIntervals, intervalWidth) {
    if (range < numberOfIntervals * intervalWidth) {
      return true
    }
    return false
  }

  defineIntervalBoundariesAscending(numberOfIntervals, intervalWidth) {
    const intervalBoundaries = []

    let lowerBoundary = this.#minValue
    for (let i = 0; i < numberOfIntervals; i++) {
      const upperBoundary = lowerBoundary + intervalWidth
      intervalBoundaries.push({ lowerBoundary, upperBoundary: upperBoundary - 1 })
      lowerBoundary = upperBoundary
    }

    return intervalBoundaries
  }

  defineIntervalBoundariesDescending(numberOfIntervals, intervalWidth) {
    const intervalBoundaries = []

    let upperBoundary = this.#minValue
    for (let i = 0; i < numberOfIntervals; i++) {
      const lowerBoundary = upperBoundary - intervalWidth
      intervalBoundaries.push({ upperBoundary, lowerBoundary: lowerBoundary + 1 })
      upperBoundary = lowerBoundary
    }

    return intervalBoundaries
  }

  fillIntervalsWithData() {
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
