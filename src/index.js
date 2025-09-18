/**
 * The main starting point of the module.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

import { IntervalCreator } from './IntervalCreator.js'
import { ColorSelector } from './ColorSelector.js'
import { IntervalAndColorMatcher } from './IntervalAndColorMatcher.js'

export function displayColorSchemes () {
  const colorSelector = new ColorSelector()
  return colorSelector.getColorSchemes()
}

export function groupIntoIntervalsAscending (data) {
  const intervalCreator = new IntervalCreator(data)
  return intervalCreator.getIntervals()
}

export function groupIntoIntervalsDescending (data) {
  const intervalCreator = new IntervalCreator(data, false)
  return intervalCreator.getIntervals()
}

export function groupIntoIntervalsWithOptions (data, selectedColorScheme, isAscending) {
  // Check if selectedColorScheme is within range 1 - 4 and that isAscending is boolean (if it is provided)
  const intervalCreator = new IntervalCreator(data, isAscending)
  const intervals = intervalCreator.getIntervals()
  
  const colorMatcher = new IntervalAndColorMatcher(intervals, selectedColorScheme)
  const intervalsWithColors = colorMatcher.getColors()

  return intervalsWithColors
}

export function getIntervalMetadata (data, isAscending) {
  const intervalCreator = new IntervalCreator(data, isAscending)
  return intervalCreator.getIntervalMetadata()
}


