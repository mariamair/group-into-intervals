/** 
 * This class contains methods to process the data input.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

import { isArray, isMixedTypeArray } from './dataValidator.js'

export class DataProcessingService {
  #isAscending
  #sortedData
  #minValue
  #maxValue

  constructor (data, isAscending = true) {
    // Check valid data input
    if (!isArray(data)) {
      throw new TypeError ('Data has to be an array.')
    }

    if (isMixedTypeArray(data)) {
      throw new TypeError ('All data has to be of the same type')
    }
    // Check type of data input

    // Copy the original array and remove empty slots
    const denseArray = data.flat()

    this.#isAscending = isAscending
    this.#sortedData = this.#isAscending ? this.sortDataAscending(denseArray) : this.sortDataDescending(denseArray)
    this.#minValue = this.#sortedData[0]
    this.#maxValue = this.#sortedData[this.#sortedData.length - 1]

    console.log('\nDATA PROCESSOR ')
    console.log('original data input: ' + data)
    console.log('data sorted (ascending = ' + isAscending + '): ' + this.#sortedData)
  }

  sortDataAscending (data) {
    return data.sort((a,b) => a - b)
  }

  sortDataDescending (data) {
    return data.sort((a,b) => b - a)
  }

  defineIntervals () {
    const numberOfIntervals = this.defineNumberOfIntervals()

    const intervalWidth = this.defineIntervalWidth(this.calculateRange(), numberOfIntervals)

    const intervals = this.#isAscending ? this.defineIntervalBoundariesAscending(numberOfIntervals, intervalWidth) : this.defineIntervalBoundariesDescending(numberOfIntervals, intervalWidth)

    this.fillIntervalsWithData(intervals)
    
    return intervals
  }

  calculateRange () {
    return Math.abs(this.#maxValue - this.#minValue)
  }

  // Calculate the appropriate number of intervals using Sturges' formula (1 + 3.322 * log(number of data points))
  defineNumberOfIntervals () {
    return Math.round(1 + 3.322 * Math.log10(this.#sortedData.length))
  }

  // Calculate the interval width (range / number of intervals)
  defineIntervalWidth (range, numberOfIntervals) {
    let intervalWidth = Math.round(range / numberOfIntervals)

    while (!this.isRangeWithinIntervals(numberOfIntervals, intervalWidth, range)) {
      intervalWidth++
    }

    return intervalWidth
  }

  isRangeWithinIntervals(numberOfIntervals, intervalWidth, range) {
    if (numberOfIntervals * intervalWidth < range) {
      return false
    }
    else {
      return true
    }
  }

  defineIntervalBoundariesAscending(numberOfIntervals, intervalWidth) {
    const intervals = []

    let lowerBoundary = this.#minValue
    for (let i = 0; i < numberOfIntervals; i++) {
      const upperBoundary = lowerBoundary + intervalWidth
      intervals.push({ lowerBoundary, upperBoundary: upperBoundary - 1, data: [] })
      lowerBoundary = upperBoundary
    }

    return intervals
  }

  defineIntervalBoundariesDescending(numberOfIntervals, intervalWidth) {
    const intervals = []

    let upperBoundary = this.#minValue
    for (let i = 0; i < numberOfIntervals; i++) {
      const lowerBoundary = upperBoundary - intervalWidth
      intervals.push({ upperBoundary, lowerBoundary: lowerBoundary + 1 })
      upperBoundary = lowerBoundary
    }

    return intervals
  }

  fillIntervalsWithData(intervals) {
    for (const interval of intervals) {
      interval.data = []
    }

    for (const dataPoint of this.#sortedData) {
      for (let i = 0; i < intervals.length; i++) {
        if (dataPoint >= intervals[i].lowerBoundary && dataPoint <= intervals[i].upperBoundary) {
          intervals[i].data.push(dataPoint)
        }
      }
    }
  }
}
