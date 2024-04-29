//       ***********************
//            INSTRUCTIONS
//       ***********************

// 1. Read the code below one block at a time.
// 2. Look for the @TODOs, and figure out how to fix them.
    // next to each @TODO you will find tasks that need to be finished

// The variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.
let currentMarker = 'X'
let board = [["", "", ""], ["", "", ""], ["", "", ""]]



// this "handleClick" function is called when a box is clicked. Here, "element" will hold the same value as "this" does in the HTML. 
// "this" is a special word in JS but "element" could have been "thing" or "el" or whatever we wanted it to be as long as we use it again in the "console.log" statement
const handleClick = (element) => {

  // this uses the "log" method on the "console" to log out the element's id so we can see it with our human eyes
  console.log(`The element you clicked on has an id:  ${element.id}`)

  // NOTE TO SELF: If you were to add content to an element in the index.html file, the innerHTML prints in the browser console, and program will stop there.
  // console.log(document.getElementById(element.id).innerHTML) => to witness the innerHTML 


  // this next line prevents an X being changed to an O or an O being changed to an X by...
  //  checking to see if the square clicked has anything in it, if not continue
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}









// BIG NOTE: In the following function, you can pass `id` as a parameter into the function. 
// 1. The element was passed to handleClick function when you used "this" in index.html
// 2. You can access `id` of elements because BUILT-IN
// 3. The id was passed to addMarker in handleClick

// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {

  // @TODO-1: Open the console tab in your Chrome Inspector Tool and click on the top-left square to see what's logged to the console. 
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  
  // @TODO-2: Build a line of code that will set the innerHTML property of the element that was clicked to the "currentMarker"
  // I used getElementbyId b/c id was passed into the function as a parameter
  
  // @TODO-2.5: MIX & MATCH, You will need the following pieces of code to build that line:
  // = currentMarker
  // .getElementById(id)
  // document
  // .innerHTML 

  document.getElementById(id).innerHTML = currentMarker;

  const row = parseInt(id.charAt(0))
  const column = parseInt(id.charAt(2))
  board[row][column] = currentMarker

  checkForWin()

}

const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    window.alert(`Player ${currentMarker} won!`)
  } else {
    changeMarker()
  }
}

const horizontalWin = () => {
  // Your code here to check for horizontal wins
  if ((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") 
  || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")
  || (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X")
  || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")
  || (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X")
  || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")
  ) {
    return true
  } else {
    return false
  }
}

const verticalWin = () => {
  // Your code here to check for vertical wins
  if ((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") 
  || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")
  || (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X")
  || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")
  || (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X")
  || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")
  ) {
    return true
  } else {
    return false
  }
}

const diagonalWin = () => {
  // Your code here to check for diagonal wins
  if ((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") 
  || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
  || (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X")
  || (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")
  ) {
    return true
  } else {
    return false
  }
}


// This "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}










// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {
  
  // @TODO-3: To make your "Restart" button work you'll need to build a line of code here that:
      // collects all of the "td" elements into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp  

  const squares = document.getElementsByTagName("TD");    
  
  // @TODO-3.5: MIX & MATCH, You will need the following pieces of code to build that line:
  // squares
  // .getElementsByTagName("TD")
  // =
  // document
  // const
  
  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i=0; i < squares.length; i++) {

    // will log out the id of each square as it loops over them.
    console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null
  }  

  board = [["", "", ""], ["", "", ""], ["", "", ""]]
}