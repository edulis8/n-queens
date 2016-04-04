# N-Queens

I completed this project (using recursion, of course) when I was a student at [Hack Reactor Remote](http://www.hackreactor.com/remote-beta/).

JavaScript Algorithm Challenge: Given an N*N chessboard, how many queens can you place on the board without them threatening each other? 

## Structure:

The repository consist of 

- backbone app
- test Specs files.

### BoardViewer - backbone

The boardviewer is backbone app allowing to visualize an N*N chessboard and interact with it. The chessboard will detect invalid boards by highlighting the rows, columns and/or diagonals (major or minors) with conlficts.

to run it, simply open `BoardViewer.html` with your browser

### SpecRunner - mocha

The specrunner contain both the tests for the BoardViewer, and in particular for the

- Empty board
- Board with row conflicts
- Board with column conflicts
- Board with major diagonal conflicts
- Board with minor diagonal conflicts

as well as test for the solvers:

- Finds a valid n-queens solution for n of 0-7
- Finds the number of valid n-queens solutions for n of 0-8

### Testing

Tests are made with the [Mocha](https://github.com/mochajs/mocha) testing framework.
Test are located in the ./spec directory. To run the Just open the spec runner file with chrome.

```
SpecRunner.html
```
