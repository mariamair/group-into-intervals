/**
 * The main starting point of the module.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

import { DataProcessingService } from './DataProcessingService.js'

// Get data input
const dataArray = [1, 3, -5, 7, 8, 4, 17, 9, 3]
const shortArray = [1, 3, -5, 17, 3]

// Get sort order (ascending or descending)
const isAscending = true

// Get color scheme

// Add color from selected scheme to each interval

// Return data as intervals with color scheme
const dataService = new DataProcessingService(dataArray, isAscending)
console.log('\ndata grouped in intervals 1 \n---------------------------')
console.log(dataService.defineIntervals())

const dataServiceShortArray = new DataProcessingService(shortArray, isAscending)
console.log('\ndata grouped in intervals 2 \n--------------------------- ')
console.log(dataServiceShortArray.defineIntervals())

const dataServiceDesc = new DataProcessingService(dataArray, false)
console.log('\ndata grouped in intervals 3 \n--------------------------- ')
console.log(dataServiceDesc.defineIntervals())

const dataServiceShortArrayDesc = new DataProcessingService(shortArray, false)
console.log('\ndata grouped in intervals 4 \n--------------------------- ')
console.log(dataServiceShortArrayDesc.defineIntervals())
