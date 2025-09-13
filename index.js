/**
 * The main starting point of the module.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

import { DataProcessingService } from './DataProcessingService.js'

// Get data input
const dataArray = [1, 3, -5, 7, 8, 4, 17, 12, 3]
const shortArray = [1, 3, -5, 17, 3]
const noArray = 13
const sparseArray = [1, 3, -5, , 8, 4, 17, 12, 3]
const mixedArray = [1, 17, 'test', 3, -5, 17, 3]

// Get sort order (ascending or descending)
const isAscending = true

// Get color scheme

// Add color from selected scheme to each interval

// Return data as intervals with color scheme
try {
  const dataService = new DataProcessingService(dataArray, isAscending)
  console.log('\ndata grouped in intervals 1 \n---------------------------')
  console.log(dataService.defineIntervals())
  console.log('original data input: ' + dataArray)
  
  const dataServiceShortArray = new DataProcessingService(shortArray, isAscending)
  console.log('\ndata grouped in intervals 2 \n--------------------------- ')
  console.log(dataServiceShortArray.defineIntervals())
  console.log('original data input: ' + shortArray)
  
  const dataServiceDesc = new DataProcessingService(dataArray, false)
  console.log('\ndata grouped in intervals 3 \n--------------------------- ')
  console.log(dataServiceDesc.defineIntervals())
  console.log('original data input: ' + dataArray)
  
  const dataServiceShortArrayDesc = new DataProcessingService(shortArray, false)
  console.log('\ndata grouped in intervals 4 \n--------------------------- ')
  console.log(dataServiceShortArrayDesc.defineIntervals())
  console.log('original data input: ' + shortArray)
  
/*   const dataServiceNoArray = new DataProcessingService(noArray, false)
  console.log('\ndata grouped in intervals 5 \n--------------------------- ')
  console.log(dataServiceNoArray.defineIntervals()) */
  
/*   const dataServiceSparseArray = new DataProcessingService(sparseArray, false)
  console.log('\ndata grouped in intervals 6 \n--------------------------- ')
  console.log(dataServiceSparseArray.defineIntervals()) */
  
  const dataServiceMixedArray = new DataProcessingService(mixedArray, false)
  console.log('\ndata grouped in intervals 7 \n--------------------------- ')
  console.log(dataServiceMixedArray.defineIntervals())
} catch (error) {
  console.error(error)
}
