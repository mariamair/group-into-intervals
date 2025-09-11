/** 
 * This class contains function to process the data input.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

export class DataProcessingService {

  sortDataAscending (data) {
    const sorted = Array.from(data)
    return sorted.sort((a,b) => a - b)
  }

  sortDataDescending (data) {
    const sorted = Array.from(data)
    return sorted.sort((a,b) => b - a)
  }

  // Calculate the appropriate number of intervals using Sturges' formula (1 + 3.322 * log(number of data points))
  // Calculate the interval width (range / number of intervals)
  defineIntervals (data) {
    const numberOfIntervals = this.defineNumberOfIntervals(data)
    const sorted = this.sortDataAscending(data)
    const minValue = sorted[0]
    const maxValue = sorted[sorted.length - 1]
    const range = maxValue - minValue
    const intervalWidth = this.defineIntervalWidth(range, numberOfIntervals)

    console.log('numberOfIntervals: ' + numberOfIntervals)
    console.log('intervalWidth: ' + intervalWidth)

    const intervals = []

    let lowerBoundary = minValue
    for(let i = 0; i < numberOfIntervals; i++) {
      const upperBoundary = lowerBoundary + intervalWidth
      intervals.push({ lowerBoundary, upperBoundary: upperBoundary - 1 })
      lowerBoundary = upperBoundary
    }
    
    return intervals
  }

  defineNumberOfIntervals (data) {
    return Math.round(1 + 3.322 * Math.log10(data.length))
  }

  defineIntervalWidth (range, numberOfIntervals) {
    return Math.round(range / numberOfIntervals)
  }

}