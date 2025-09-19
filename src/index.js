/**
 * The main starting point of the module.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

import { ColorSelector } from './ColorSelector.js'
import { DataValidator } from './DataValidator.js'
import { IntervalAndColorMatcher } from './IntervalAndColorMatcher.js'
import { IntervalCreator } from './IntervalCreator.js'

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

export function groupIntoIntervalsWithColorsAscending (data, colorSchemeId) {
  const dataValidator = new DataValidator()
  dataValidator.isValidColorScheme(colorSchemeId)

  const intervalCreator = new IntervalCreator(data)
  const intervals = intervalCreator.getIntervals()
  
  const colorMatcher = new IntervalAndColorMatcher(intervals, colorSchemeId)
  const intervalsWithColors = colorMatcher.getIntervalsWithColors()

  return intervalsWithColors
}

export function groupIntoIntervalsWithColorsDescending (data, colorSchemeId) {
  const dataValidator = new DataValidator()
  dataValidator.isValidColorScheme(colorSchemeId)

  const intervalCreator = new IntervalCreator(data, false)
  const intervals = intervalCreator.getIntervals()
  
  const colorMatcher = new IntervalAndColorMatcher(intervals, colorSchemeId)
  const intervalsWithColors = colorMatcher.getIntervalsWithColors()

  return intervalsWithColors
}

export function getIntervalMetadata (data, isAscending) {
  const intervalCreator = new IntervalCreator(data, isAscending)
  return intervalCreator.getIntervalMetadata()
}
