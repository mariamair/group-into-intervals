# Test results
**Latest run:** Mon Oct 20 2025 23:05

## Display color schemes

| Test | Status |
|------|--------|
| should return all color schemes (as JSON) | ✅ |
| should contain at least one color scheme object (as JSON) | ✅ |
| should return selected color scheme (as JSON) | ✅ |


## Validate input array

| Test | Status |
|------|--------|
| should be array | ✅ |
| should not be mixed array | ✅ |
| should be array of numbers | ✅ |


## Group input data into intervals

| Test | Status |
|------|--------|
| should return ascending intervals (as JSON) | ✅ |
| should return ascending intervals without empty slots for sparse array (as JSON) | ✅ |
| should return descending intervals (as JSON) | ✅ |
| should return correct intervals with colors (as JSON) | ✅ |
| should return correct intervals with colors for sparse array with uneven number of intervals (as JSON) | ✅ |
| should return correct descending intervals with colors (as JSON) | ✅ |
| should use correct color scheme for intervals (as JSON) | ✅ |
| should return error message for incorrect color scheme id (as JSON) | ✅ |
| should return error message if color scheme id is missing (as JSON) | ✅ |
| should return correct metadata (as JSON) | ✅ |
