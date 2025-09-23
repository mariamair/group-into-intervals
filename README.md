# group-into-intervals

A tool that supports statistical analysis of data by grouping data points into intervals.   
- Input an array of numbers and get it grouped for a quick and lightweight analysis.   
- Choose one of four color schemes to go with the intervals and use the result to visualize your data. 


## Statistical background
The number of intervals (a.k.a. classes) is calculated with Sturges' formula `k = 1 + 3.322 * log(number of data points)`.  
The interval width (or class width) is calculated by dividing the range of the dataset with the number of intervals. In case the interval width multiplied with the number of intervals is too small to cover the range ot the dataset, the interval width is increased by 1 until the range is covered.   

For more information about Sturges' rule and criticism of it, see [Wikipedia](https://en.wikipedia.org/wiki/Sturges%27s_rule).

## Installation
To add the module to your application run
```
git submodule add https://github.com/mariamair/group-into-intervals
```

To get the latest update of the module run
```
git submodule update --remote
```

## Usage
The module takes an array of numbers and groups them into intervals. The output is returned as JSON.

### Code examples
Requesting ascending intervals with color scheme #1: 
```js
import { groupIntoIntervalsWithColorsAscending } from '../group-into-intervals/src/index.js'

const colorSchemeId = 1
const input = [1, 3, -5, 17, 3]
const intervals = JSON.parse(groupIntoIntervalsWithColorsAscending(input, colorSchemeId))
```
Will return this object:
```js
[
  {
    lowerBoundary: -5,
    upperBoundary: 2,
    data: [ -5, 1 ],
    color: { hexValue: '#be2020', rgbValue: 'rgb(190, 32, 32)' }
  },
  {
    lowerBoundary: 3,
    upperBoundary: 10,
    data: [ 3, 3 ],
    color: { hexValue: '#7532a8', rgbValue: 'rgb(117, 50, 168)' }
  },
  {
    lowerBoundary: 11,
    upperBoundary: 18,
    data: [ 17 ],
    color: { hexValue: '#1a02f0', rgbValue: 'rgb(26, 2, 240)' }
  }
]
```

### Example for usage of output
Use the output to easily visualize your data, e.g. displaying it as intervals or creating a histogram of your data.  

#### Visualize your data as intervals  
![Output as intervals](./docs/ModuleOutput_Intervals.png)

#### Visualize your data as histogram 
![Output as histogram](./docs/ModuleOutput_Histogram.png)

## API
### Display all color schemes
```js
displayColorSchemes()
```
### Display specific color scheme
```js
displayColorScheme(colorSchemeId)
```
### Get ascending intervals 
- without color:
```js
groupIntoIntervalsAscending(data)
```
- with color:
```js
groupIntoIntervalsWithColorsAscending(data, colorSchemeId)
```
### Get descending intervals 
- without color:
```js
groupIntoIntervalsDescending(data)
```
- with color:
```js
groupIntoIntervalsWithColorsDescending(data, colorSchemeId)
```
### Get interval metadata
Returns the metadata that will be used when your data is grouped into intervals, e.g. range, number of intervals and interval width.   

- Set as `isAscending = true` if the data should be sorted ascending
- Set as `isAscending = false` if the data should be sorted descending
```js
getIntervalMetadata(data, isAscending)
```

## Technical information
The module was developed and tested for Node version 24.1.0.

## Test report summary
For a summary of the latest unit test run, see [the summary of test results](https://github.com/mariamair/test-group-into-intervals/blob/main/reports/summary.md)

## Versions and releases
Version 1.0.0, released 2025-09-30.

## Bugs and issues
If you find any vulnerabilities, bugs or issues, please add them as an issue.

## License
[MIT License](LICENSE)

## Contributing
Interested in contributing to this module? Please see [the contribution guidelines](CONTRIBUTING.md).