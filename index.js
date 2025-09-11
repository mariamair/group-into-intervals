/**
 * The main starting point of the module.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

import { DataProcessingService } from './DataProcessingService.js'

// Get data input
const numbers = [1, 3, -5, 7, 8, 4, 17, 9, 3]

// Get sort order (ascending or descending)
const ascending = true

// Get color scheme

// Add color from selected scheme to each interval

// Return data as intervals with color scheme
const dataService = new DataProcessingService(numbers, ascending)
console.log('original data input: ' + numbers)
console.log('data grouped in intervals: ')
console.log(dataService.defineIntervals())