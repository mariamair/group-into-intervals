/**
 * The main starting point of the module.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 1.1.0
 */

import { ColorSelector } from './ColorSelector.js'
import { IntervalAndColorMatcher } from './IntervalAndColorMatcher.js'
import { IntervalCreator } from './IntervalCreator.js'

/**
 * Get all color schemes.
 *
 * @returns {object[]} - An array of objects in JSON format specifying the color schemes.
 */
export function getAllColorSchemes() {
  try {
    const colorSelector = new ColorSelector()
    return JSON.stringify(colorSelector.getAllColorSchemes())
  } catch (error) {
    return JSON.stringify(error.message)
  }
}

/**
 * Get a specific color scheme.
 *
 * @param {number} colorSchemeId - The number of the requested color scheme.
 * @returns {object} - An object in JSON format specifying the color scheme.
 */
export function getColorScheme(colorSchemeId) {
  try {
    const colorSelector = new ColorSelector()
    return JSON.stringify(colorSelector.getColorScheme(colorSchemeId))
  } catch (error) {
    return JSON.stringify(error.message)
  }
}

/**
 * Get the input data grouped in ascending intervals.
 *
 * @param {number[]} data - An array of numbers.
 * @returns {object} - An object in JSON format containing the intervals.
 */
export function getAscendingIntervals(data) {
  try {
    const intervalCreator = new IntervalCreator(data)
    return JSON.stringify(intervalCreator.getIntervals())
  } catch (error) {
    return JSON.stringify(error.message)
  }
}

/**
 * Get the input data grouped in descending intervals.
 *
 * @param {number[]} data - An array of numbers.
 * @returns {object} - An object in JSON format containing the intervals.
 */
export function getDescendingIntervals(data) {
  try {
    const intervalCreator = new IntervalCreator(data, false)
    return JSON.stringify(intervalCreator.getIntervals())
  } catch (error) {
    return JSON.stringify(error.message)
  }
}

/**
 * Get the input data grouped in ascending intervals with a color specified for each interval.
 * 
 * @param {number[]} data - An array of numbers.
 * @param {number} colorSchemeId - The id of the requested color scheme.
 * @returns {object} - An object in JSON format containing the intervals with colors.
 */
export function getAscendingIntervalsWithColors(data, colorSchemeId) {
  try {
    const intervalCreator = new IntervalCreator(data)
    const intervals = intervalCreator.getIntervals()
      
    const colorMatcher = new IntervalAndColorMatcher(intervals, colorSchemeId)
    const intervalsWithColors = colorMatcher.addColorToIntervals()
    
    return JSON.stringify(intervalsWithColors)
  } catch (error) {
    return JSON.stringify(error.message)
  }
}

/**
 * Get the input data grouped in descending intervals with a color specified for each interval.
 *
 * @param {number[]} data - An array of numbers.
 * @param {number} colorSchemeId - The id of the requested color scheme.
 * @returns {object} - An object in JSON format containing the intervals with colors.
 */
export function getDescendingIntervalsWithColors(data, colorSchemeId) {
  try {
    const intervalCreator = new IntervalCreator(data, false)
    const intervals = intervalCreator.getIntervals()
      
    const colorMatcher = new IntervalAndColorMatcher(intervals, colorSchemeId)
    const intervalsWithColors = colorMatcher.addColorToIntervals()
    
    return JSON.stringify(intervalsWithColors)
  } catch (error) {
    return JSON.stringify(error.message)
  }
}

/**
 * Get the metadata that is used for grouping the data into intervals.
 *
 * @param {number[]} data - An array of numbers
 * @param {boolean} isAscending - True for ascending, false for descending sorting.
 * @returns {object} - An object in JSON format containing the metadata.
 */
export function getIntervalMetadata(data, isAscending) {
  try {
    const intervalCreator = new IntervalCreator(data, isAscending)
    return JSON.stringify(intervalCreator.getIntervalMetadata())
  } catch (error) {
    return JSON.stringify(error.message)
  }
}
