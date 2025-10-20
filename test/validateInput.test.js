import { IntervalCreator } from '../src/IntervalCreator'

const noArray = 13
const mixedArray = [1, 3, -5, 17, 'test', 3]
const textArray = ['apple', 'banana', 'pineapple']

describe('Validate input array', () => {
  test('should be array', () => {
    expect(() => { new IntervalCreator(noArray) }).toThrow()
  })

  test('should not be mixed array', () => {
    expect(() => { new IntervalCreator(mixedArray) }).toThrow()
  })

  test('should be array of numbers', () => {
    expect(() => { new IntervalCreator(textArray) }).toThrow()
  })
})
