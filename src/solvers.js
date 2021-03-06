/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({
    'n': n
  });
  var solution = board;
  var checkAndPlace = function(currentRow) {

    if (currentRow === n) {
      return;
    }
    // toggling/checking within a row
    for (var i = 0; i < board.get(0).length; i++) {
      //create a clean board
      // var newBoard = new Board({'n':n});
      // checks all columns of current row.
      board.togglePiece(currentRow, i);

      if (board.hasRowConflictAt(currentRow) || board.hasColConflictAt(i)) {
        board.togglePiece(currentRow, i);
      }
      //moves on to the next row
      //clears our starting peice
      //board.togglePiece(currentRmeow, i);
      //solution = board;
    }
    checkAndPlace(currentRow + 1);
    // toggling/checking the next row
    // checkAndPlace(currentRow + 1);
  };

  checkAndPlace(0);
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //initialize solution count
  var solutionCount = 0;
  //initialze board for testing of lenght n
  var board = new Board({
    'n': n
  });


  var newCheckFunction = function(currentRow) {
    if (currentRow === n) {
      solutionCount++;
      return;
    }
    // startes with the first column
    for (var i = 0; i < board.get(0).length; i++) {
      //places piece in spot i
      board.togglePiece(currentRow, i);
      //looks around the board, confirms that this placement is good
      if (!board.hasAnyRooksConflicts()) {
        //if it's good, we'll move to the next row, and start checking at the left again.
        //moved in to the for loop, so we can get all solutions from current peice at i
        newCheckFunction(currentRow + 1);
      }
      //clears the piece we put at i
      //attempted with board = new Board({'n': n}); - but this clears out the previous work in the last row
      board.togglePiece(currentRow, i);
      //loop starts over and places peice at new value of i
    }
  };
  newCheckFunction(0);
  //console.log('at end', board.rows());
  //console.log('solution count is:' + solutionCount);
  return solutionCount;
};

window.findNQueensSolution = function(n) {
  var board = new Board({
    'n': n
  });

  var result;

  if(n === 2 || n === 3){
    return board.rows();
  }

  var newCheckFunction = function(currentRow) {


    if (currentRow === n) {
      // base case 
      // copy array. could use row.slice() instead of nested map.
      result =  _.map(board.rows(), function(row){
        return _.map(row, function(square){
          return square;
        });
      });
    }

    for (var i = 0; i < n; i++) {
      if(result !== undefined){
        break;
      }
      board.togglePiece(currentRow, i);
      if (!board.hasAnyQueenConflictsOn(currentRow, i)) {
        newCheckFunction(currentRow + 1);
      } 
       board.togglePiece(currentRow, i);
    }
  };
  newCheckFunction(0);
  return result;
};
// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({
    'n': n
  });
  var newCheckFunction = function(currentRow) {
    if (currentRow === n) {
      //console.log('inside base case', board.rows());
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(currentRow, i);
      if (!board.hasAnyQueenConflictsOn(currentRow, i)) {
        newCheckFunction(currentRow + 1);
      }
      board.togglePiece(currentRow, i);
    }
  };
  newCheckFunction(0);
  return solutionCount;
};
