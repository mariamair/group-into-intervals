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
      return JSON.stringify(colorSelector.getColorSchemes())
  } catch (error) {
    return JSON.stringify(error.message)
  }
}

export function displayColorScheme (colorSchemeId) {
  try {
      const colorSelector = new ColorSelector()
      return JSON.stringify(colorSelector.getSelectedColorScheme(colorSchemeId))
  } catch (error) {
    return JSON.stringify(error.message)
  }
}

export function groupIntoIntervalsAscending (data) {
  try {
      const intervalCreator = new IntervalCreator(data)
      return JSON.stringify(intervalCreator.getIntervals())
  } catch (error) {
    return JSON.stringify(error.message)
  }
}

export function groupIntoIntervalsDescending (data) {
  try {
      const intervalCreator = new IntervalCreator(data, false)
      return JSON.stringify(intervalCreator.getIntervals())
  } catch (error) {
    return JSON.stringify(error.message)
  }
}

export function groupIntoIntervalsWithColorsAscending (data, colorSchemeId) {
  try {
      const dataValidator = new DataValidator()
      dataValidator.isValidColorScheme(colorSchemeId)
    
      const intervalCreator = new IntervalCreator(data)
      const intervals = intervalCreator.getIntervals()
      
      const colorMatcher = new IntervalAndColorMatcher(intervals, colorSchemeId)
      const intervalsWithColors = colorMatcher.addColorToIntervals()
    
      return JSON.stringify(intervalsWithColors)
  } catch (error) {
    return JSON.stringify(error.message)
  }
}

export function groupIntoIntervalsWithColorsDescending (data, colorSchemeId) {
  try {
      const dataValidator = new DataValidator()
      dataValidator.isValidColorScheme(colorSchemeId)
    
      const intervalCreator = new IntervalCreator(data, false)
      const intervals = intervalCreator.getIntervals()
      
      const colorMatcher = new IntervalAndColorMatcher(intervals, colorSchemeId)
      const intervalsWithColors = colorMatcher.addColorToIntervals()
    
      return JSON.stringify(intervalsWithColors)
  } catch (error) {
    return JSON.stringify(error.message)
  }
}

export function getIntervalMetadata (data, isAscending) {
  try {
      const intervalCreator = new IntervalCreator(data, isAscending)
      return JSON.stringify(intervalCreator.getIntervalMetadata())
  } catch (error) {
    return JSON.stringify(error.message)
  }
}
