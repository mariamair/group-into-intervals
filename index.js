/**
 * The main starting point of the module.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

import { DataProcessingService } from './DataProcessingService.js'

const dataService = new DataProcessingService()

// Get data input
const numbers = [1, 3, -5, 7, 8, 4, 17, 9, 3]

// Get number of intervals

// Get color scheme

// Check type of data input

// Sort data
const ascendingData = dataService.sortDataAscending(numbers)
const descendingData = dataService.sortDataDescending(numbers)

// Group data into intervals

// Add color from selected scheme to each interval

// Return data as interval with color scheme
console.log('original data input: ' + numbers)
console.log('data sorted ascending: ' + ascendingData)
console.log('data sorted descending: ' + descendingData)
console.log('intervals: ')
console.log(dataService.defineIntervals(numbers))