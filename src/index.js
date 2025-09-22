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
  try {
      const colorSelector = new ColorSelector()
      return colorSelector.getColorSchemes()
  } catch (error) {
    JSON.stringify(error.message)
  }
}

export function displayColorScheme (colorSchemeId) {
  try {
      const colorSelector = new ColorSelector()
      return colorSelector.getSelectedColorScheme(colorSchemeId)
  } catch (error) {
    JSON.stringify(error.message)
  }
}

export function groupIntoIntervalsAscending (data) {
  try {
      const intervalCreator = new IntervalCreator(data)
      return intervalCreator.getIntervals()
  } catch (error) {
    JSON.stringify(error.message)
  }
}

export function groupIntoIntervalsDescending (data) {
  try {
      const intervalCreator = new IntervalCreator(data, false)
      return intervalCreator.getIntervals()
  } catch (error) {
    JSON.stringify(error.message)
  }
}

export function groupIntoIntervalsWithColorsAscending (data, colorSchemeId) {
  try {
      const dataValidator = new DataValidator()
      dataValidator.isValidColorScheme(colorSchemeId)
    
      const intervalCreator = new IntervalCreator(data)
      const intervals = intervalCreator.getIntervals()
      
      const colorMatcher = new IntervalAndColorMatcher(intervals, colorSchemeId)
      const intervalsWithColors = colorMatcher.getIntervalsWithColors()
    
      return intervalsWithColors
  } catch (error) {
    JSON.stringify(error.message)
  }
}

export function groupIntoIntervalsWithColorsDescending (data, colorSchemeId) {
  try {
      const dataValidator = new DataValidator()
      dataValidator.isValidColorScheme(colorSchemeId)
    
      const intervalCreator = new IntervalCreator(data, false)
      const intervals = intervalCreator.getIntervals()
      
      const colorMatcher = new IntervalAndColorMatcher(intervals, colorSchemeId)
      const intervalsWithColors = colorMatcher.getIntervalsWithColors()
    
      return intervalsWithColors
  } catch (error) {
    JSON.stringify(error.message)
  }
}

export function getIntervalMetadata (data, isAscending) {
  try {
      const intervalCreator = new IntervalCreator(data, isAscending)
      return intervalCreator.getIntervalMetadata()
  } catch (error) {
    JSON.stringify(error.message)
  }
}
