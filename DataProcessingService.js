/** 
 * This class contains function to process the data input.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

export class DataProcessingService {
  #sortedData

  constructor (data, sortAscending = true) {
    // Check valid data input
    // Check type of data input

    this.#sortedData = sortAscending ? this.sortDataAscending(data) : this.sortDataDescending(data)
    console.log('data sorted (ascending = ' + sortAscending + '): ' + this.#sortedData)
  }

  sortDataAscending (data) {
    return Array.from(data).sort((a,b) => a - b)
  }

  sortDataDescending (data) {
    return Array.from(data).sort((a,b) => b - a)
  }

  defineIntervals () {
    const numberOfIntervals = this.defineNumberOfIntervals()

    const minValue = this.#sortedData[0]
    const maxValue = this.#sortedData[this.#sortedData.length - 1]
    const range = maxValue - minValue
    const intervalWidth = this.defineIntervalWidth(range, numberOfIntervals)

    console.log('minValue: ' + minValue)
    console.log('maxValue: ' + maxValue)
    console.log('numberOfIntervals: ' + numberOfIntervals)
    console.log('intervalWidth: ' + intervalWidth)

    const intervals = []

    let lowerBoundary = minValue
    for(let i = 0; i < numberOfIntervals; i++) {
      const upperBoundary = lowerBoundary + intervalWidth
      intervals.push({ lowerBoundary, upperBoundary: upperBoundary - 1, data: [] })
      lowerBoundary = upperBoundary
    }

    this.fillIntervalsWithData(intervals)
    
    return intervals
  }

  // Calculate the appropriate number of intervals using Sturges' formula (1 + 3.322 * log(number of data points))
  defineNumberOfIntervals () {
    return Math.round(1 + 3.322 * Math.log10(this.#sortedData.length))
  }

  // Calculate the interval width (range / number of intervals)
  defineIntervalWidth (range, numberOfIntervals) {
    return Math.round(range / numberOfIntervals)
  }

  fillIntervalsWithData(intervals) {
    for (const dataPoint of this.#sortedData) {
      for (let i = 0; i < intervals.length; i++) {
        if (dataPoint >= intervals[i].lowerBoundary && dataPoint <= intervals[i].upperBoundary) {
          intervals[i].data.push(dataPoint)
        }
      }
    }
  }
}
