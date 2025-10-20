import { getAllColorSchemes, getColorScheme } from '../src/index.js'

const colorSchemeId = 3
const colorSchemeOutput = JSON.stringify({
  id: 3,
  name: 'violet, yellow, blue',
  hexValues: ['#7532a8', '#d6db42', '#1a02f0'],
  rgbValues: ['rgb(117, 50, 168)', 'rgb(214, 219, 66)', 'rgb(26, 2, 240)']
})

describe('Display color schemes', () => {
  test('should return all color schemes (as JSON)', () => {
    expect(JSON.parse(getAllColorSchemes())).toHaveLength(4)
  })

  test('should contain at least one color scheme object (as JSON)', () => {
    const firstColorScheme = JSON.parse(getAllColorSchemes())[0]
    expect(firstColorScheme).toHaveProperty('id')
    expect(firstColorScheme).toHaveProperty('name')
    expect(firstColorScheme).toHaveProperty('hexValues')
    expect(firstColorScheme).toHaveProperty('rgbValues')
  })

  test('should return selected color scheme (as JSON)', () => {
    expect(getColorScheme(colorSchemeId)).toStrictEqual(colorSchemeOutput)
  })
})
