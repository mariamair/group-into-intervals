/**
 * The main starting point of the module.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

import { DataProcessingService } from './DataProcessingService.js'
import { ColorSelector } from './ColorSelector.js'

// Get data input
const dataArray = [1, 3, -5, 7, 8, 4, 17, 12, 3]
const shortArray = [1, 3, -5, 17, 3]
const noArray = 13
const sparseArray = [1, 3, -5, , 8, 4, 17, 12, 3]
const mixedArray = [1, 17, 'test', 3, -5, 17, 3]
const textArray = ['Apple', 'Banana', 'Maracuja', 'Lemon', 'Banana']

// Get sort order (ascending or descending)
const isAscending = true

// Get color scheme
const selectedColorScheme = 1
const colorSelector = new ColorSelector()
console.log('Selected color scheme: ' + colorSelector.selectColorScheme(selectedColorScheme).name)
console.log(colorSelector.selectColorScheme(selectedColorScheme))

// Add color from selected scheme to each interval

// Return data as intervals with color scheme
try {
  const dataService = new DataProcessingService(dataArray, isAscending)
  console.log('\ndata grouped in intervals 1 \n---------------------------')
  console.log(dataService.defineIntervals())
  console.log('original data input: ' + dataArray)
  
  console.log('\nSHORT ARRAY')
  const dataServiceShortArray = new DataProcessingService(shortArray, isAscending)
  console.log('\ndata grouped in intervals 2 \n--------------------------- ')
  console.log(dataServiceShortArray.defineIntervals())
  console.log('original data input: ' + shortArray)
  
  const dataServiceDesc = new DataProcessingService(dataArray, false)
  console.log('\ndata grouped in intervals 3 \n--------------------------- ')
  console.log(dataServiceDesc.defineIntervals())
  console.log('original data input: ' + dataArray)
  
  console.log('\nSHORT ARRAY DESC')
  const dataServiceShortArrayDesc = new DataProcessingService(shortArray, false)
  console.log('\ndata grouped in intervals 4 \n--------------------------- ')
  console.log(dataServiceShortArrayDesc.defineIntervals())
  console.log('original data input: ' + shortArray)
  
/*   const dataServiceNoArray = new DataProcessingService(noArray, false)
  console.log('\ndata grouped in intervals 5 \n--------------------------- ')
  console.log(dataServiceNoArray.defineIntervals()) */
  
  console.log('\nSPARSE ARRAY')
  const dataServiceSparseArray = new DataProcessingService(sparseArray, false)
  console.log('\ndata grouped in intervals 6 \n--------------------------- ')
  console.log(dataServiceSparseArray.defineIntervals())
  console.log('original data input: ' + sparseArray)
  
/*   console.log('MIXED ARRAY')
  const dataServiceMixedArray = new DataProcessingService(mixedArray, false)
  console.log('\ndata grouped in intervals 7 \n--------------------------- ')
  console.log(dataServiceMixedArray.defineIntervals()) */
  
/*   console.log('\nTEXT ARRAY')
  const dataServiceTextrray = new DataProcessingService(textArray, false)
  console.log('\ndata grouped in intervals 7 \n--------------------------- ')
  console.log(dataServiceTextrray.defineIntervals())
  console.log('original data input: ' + textArray) */
} catch (error) {
  console.error(error)
}
