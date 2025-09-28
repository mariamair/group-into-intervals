# Contributing
Please be sure to read the contribution guidelines before making a change.

## Getting started
1. Use `git clone` to clone the project.
2. Run `npm install` to install all dependencies.
3. Create a feature branch for the issue you want to solve. 

## Working with the code
1. Create a new feature branch for every issue.
2. Run `git pull` regularly to be sure you are working on the latest version.
3. Use `git add` and `git commit` with clear commit messages to track your changes.
4. When you are done coding the feature, run `git pull`, before you run the tests.
5. When all tests are green, run `git push`.
6. Create a pull request.

## Version control
Git with a [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) is used for version control.

## Testing 
To keep this module as small as possible the project [test-group-into-intervals](https://github.com/mariamair/test-group-into-intervals) is used for testing.
The test project contains all unit tests as well as functionality to create markdown reports of the test results and a simple frontend that shows how the output of this module could be used to visualize data. The frontend makes it possible to do a visual inspection of the color creating functionality.

Be sure to run the unit tests before you create a pull request.

## Code style and linting
ESLint with recommended and stylistic settings is used to improve code quality and consistency.

## Requesting a change (Adding an issue)
When you add an issue, please include the following information:
- The number of the version you are using.
- A description of:
  - what you were trying to do
  - what happened
  - what you think should happen 
  
  
If possible, please add screenshots.


