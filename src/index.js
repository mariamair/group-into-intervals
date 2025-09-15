/**
 * The main starting point of the module.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

import { DataProcessingService } from './DataProcessingService.js'
import { ColorSelector } from './ColorSelector.js'

export function displayColorSchemes () {
  const colorSelector = new ColorSelector()
  return colorSelector.getColorSchemes()
}

export function groupIntoIntervals (data) {
  const dataService = new DataProcessingService()
  return dataService.getIntervals(data)
}

export function groupIntoIntervalsWithOptions (data, isAscending, selectedColorScheme) {
  const dataService = new DataProcessingService()
  dataService.setSortingOrder(isAscending)
  dataService.setColorScheme(selectedColorScheme)
  return dataService.getIntervals(data)
}
