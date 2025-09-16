/**
 * The main starting point of the module.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

import { DataProcessingService } from './IntervalCreator.js'
import { ColorSelector } from './ColorSelector.js'
import { IntervalAndColorMatcher } from './IntervalAndColorMatcher.js'

export function displayColorSchemes () {
  const colorSelector = new ColorSelector()
  return colorSelector.getColorSchemes()
}

export function groupIntoIntervalsAscending (data) {
  const intervalCreator = new DataProcessingService(data)
  return intervalCreator.getIntervals()
}

export function groupIntoIntervalsDescending (data) {
  const intervalCreator = new DataProcessingService(data, false)
  return intervalCreator.getIntervals()
}

export function groupIntoIntervalsWithOptions (data, isAscending, selectedColorScheme) {
  const intervalCreator = new DataProcessingService(data, isAscending)
  const intervals = intervalCreator.getIntervals()
  const numberOfIntervals = intervalCreator.getIntervalMetadata().numberOfIntervals
  
  const colorMatcher = new IntervalAndColorMatcher(selectedColorScheme, intervals, numberOfIntervals)
  const intervalsWithColors = colorMatcher.getColors()

  return intervalsWithColors
}


