/* eslint-disable no-sparse-arrays */
import { getAscendingIntervals, getDescendingIntervals, getAscendingIntervalsWithColors, getDescendingIntervalsWithColors, getIntervalMetadata } from '../src/index.js'

const colorSchemeId = 1

const inputArray = [1, 3, -5, 7, 8, 5, 4, 4, 17, -2, 12, 3]
const outputObject = JSON.stringify([
  { lowerBoundary: -5, upperBoundary: -1, data: [-5, -2] },
  { lowerBoundary: 0, upperBoundary: 4, data: [1, 3, 3, 4, 4] },
  { lowerBoundary: 5, upperBoundary: 9, data: [5, 7, 8] },
  { lowerBoundary: 10, upperBoundary: 14, data: [12] },
  { lowerBoundary: 15, upperBoundary: 19, data: [17] }
])
const outputObjectWithColors = JSON.stringify([
  { lowerBoundary: -5, upperBoundary: -1, data: [-5, -2], color: { hexValue: '#be2020', rgbValue: 'rgb(190, 32, 32)' } },
  { lowerBoundary: 0, upperBoundary: 4, data: [1, 3, 3, 4, 4], color: { hexValue: '#9a2964', rgbValue: 'rgb(154, 41, 100)' } },
  { lowerBoundary: 5, upperBoundary: 9, data: [5, 7, 8], color: { hexValue: '#7532a8', rgbValue: 'rgb(117, 50, 168)' } },
  { lowerBoundary: 10, upperBoundary: 14, data: [12], color: { hexValue: '#481acc', rgbValue: 'rgb(72, 26, 204)' } },
  { lowerBoundary: 15, upperBoundary: 19, data: [17], color: { hexValue: '#1a02f0', rgbValue: 'rgb(26, 2, 240)' } }
])
const outputObjectDescending = JSON.stringify([
  { upperBoundary: 17, lowerBoundary: 13, data: [17] },
  { upperBoundary: 12, lowerBoundary: 8, data: [12, 8] },
  { upperBoundary: 7, lowerBoundary: 3, data: [7, 5, 4, 4, 3, 3] },
  { upperBoundary: 2, lowerBoundary: -2, data: [1, -2] },
  { upperBoundary: -3, lowerBoundary: -7, data: [-5] }
])
const outputObjectDescendingWithColors = JSON.stringify([
  { upperBoundary: 17, lowerBoundary: 13, data: [17], color: { hexValue: '#be2020', rgbValue: 'rgb(190, 32, 32)' } },
  { upperBoundary: 12, lowerBoundary: 8, data: [12, 8], color: { hexValue: '#9a2964', rgbValue: 'rgb(154, 41, 100)' } },
  { upperBoundary: 7, lowerBoundary: 3, data: [7, 5, 4, 4, 3, 3], color: { hexValue: '#7532a8', rgbValue: 'rgb(117, 50, 168)' } },
  { upperBoundary: 2, lowerBoundary: -2, data: [1, -2], color: { hexValue: '#481acc', rgbValue: 'rgb(72, 26, 204)' } },
  { upperBoundary: -3, lowerBoundary: -7, data: [-5], color: { hexValue: '#1a02f0', rgbValue: 'rgb(26, 2, 240)' } }
])

const outputObjectGreenColors = JSON.stringify([
  { lowerBoundary: -5, upperBoundary: -1, data: [-5, -2], color: { hexValue: '#ffffff', rgbValue: 'rgb(255, 255, 255)' } },
  { lowerBoundary: 0, upperBoundary: 4, data: [1, 3, 3, 4, 4], color: { hexValue: '#afe09c', rgbValue: 'rgb(175, 224, 156)' } },
  { lowerBoundary: 5, upperBoundary: 9, data: [5, 7, 8], color: { hexValue: '#5ec138', rgbValue: 'rgb(94, 193, 56)' } },
  { lowerBoundary: 10, upperBoundary: 14, data: [12], color: { hexValue: '#4c972f', rgbValue: 'rgb(76, 151, 47)' } },
  { lowerBoundary: 15, upperBoundary: 19, data: [17], color: { hexValue: '#3a6d25', rgbValue: 'rgb(58, 109, 37)' } }
])

const metadataOutput = JSON.stringify({ minValue: -5, maxValue: 17, range: 22, numberOfIntervals: 5, intervalWidth: 5 })

const sparseArray = [1, 3, -5, , , 8, 4, 12, 3]
const outputObjectSparseArray = JSON.stringify([
  { lowerBoundary: -5, upperBoundary: -1, data: [-5] },
  { lowerBoundary: 0, upperBoundary: 4, data: [1, 3, 3, 4] },
  { lowerBoundary: 5, upperBoundary: 9, data: [8] },
  { lowerBoundary: 10, upperBoundary: 14, data: [12] }
])
const outputObjectWithColorsSparseArray = JSON.stringify([
  { lowerBoundary: -5, upperBoundary: -1, data: [-5], color: { hexValue: '#be2020', rgbValue: 'rgb(190, 32, 32)' } },
  { lowerBoundary: 0, upperBoundary: 4, data: [1, 3, 3, 4], color: { hexValue: '#9a2964', rgbValue: 'rgb(154, 41, 100)' } },
  { lowerBoundary: 5, upperBoundary: 9, data: [8], color: { hexValue: '#7532a8', rgbValue: 'rgb(117, 50, 168)' } },
  { lowerBoundary: 10, upperBoundary: 14, data: [12], color: { hexValue: '#481acc', rgbValue: 'rgb(72, 26, 204)' } }
])

describe('Group input data into intervals', () => {
  test('should return ascending intervals (as JSON)', () => {
    expect(getAscendingIntervals(inputArray)).toStrictEqual(outputObject)
  })

  test('should return ascending intervals without empty slots for sparse array (as JSON)', () => {
    expect(getAscendingIntervals(sparseArray)).toStrictEqual(outputObjectSparseArray)
  })

  test('should return descending intervals (as JSON)', () => {
    expect(getDescendingIntervals(inputArray, false)).toStrictEqual(outputObjectDescending)
  })
})

describe('Group input data into intervals with colors', () => {
  test('should return correct intervals with colors (as JSON)', () => {
    expect(getAscendingIntervalsWithColors(inputArray, colorSchemeId)).toStrictEqual(outputObjectWithColors)
  })

  test('should return correct intervals with colors for sparse array with uneven number of intervals (as JSON)', () => {
    expect(getAscendingIntervalsWithColors(sparseArray, colorSchemeId)).toStrictEqual(outputObjectWithColorsSparseArray)
  })

  test('should return correct descending intervals with colors (as JSON)', () => {
    expect(getDescendingIntervalsWithColors(inputArray, colorSchemeId)).toStrictEqual(outputObjectDescendingWithColors)
  })

  test('should use correct color scheme for intervals (as JSON)', () => {
    const colorSchemeId = 4
    expect(getAscendingIntervalsWithColors(inputArray, colorSchemeId)).toStrictEqual(outputObjectGreenColors)
  })

  test('should return error message for incorrect color scheme id (as JSON)', () => {
    expect(getAscendingIntervalsWithColors(inputArray, 2345)).toEqual(JSON.stringify('Not a valid color scheme'))
  })

  test('should return error message if color scheme id is missing (as JSON)', () => {
    expect(getAscendingIntervalsWithColors(inputArray)).toEqual(JSON.stringify('Not a valid color scheme'))
  })

  test('should return correct metadata (as JSON)', () => {
    expect(getIntervalMetadata(inputArray, false)).toEqual(metadataOutput)
  })
})
