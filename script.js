const container = document.querySelector("#container")


function createFlexGrid(gridSize){
    const qtdSquare = gridSize*gridSize;

    //check if already has any square in the grid. If has, delete it to create a new grid
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.remove();
    });
    
    
    const squareSize = 720/gridSize - 3 - 2; //720 was defined as the total sizer of the grid. 3 is the gap and 2 (1 each side) is the border.
    //create new grid
    for(let i = 0; i< qtdSquare; i++){
        const square = document.createElement("div");
        square.classList.add("square");

        //set the actual square size
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseover",() =>{
            square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

             //if opacity wasn't definided, the variable get the 0 value.
            let currentOpacity = parseFloat(square.style.opacity) || 0;

            //progressive darkening effect where each interaction darkens the square by 10%
            if (currentOpacity < 1) {
                currentOpacity += 0.1;
                square.style.opacity = currentOpacity;
            }
    });
        container.appendChild(square);
    }

}   

//the page starts with a 16x16 grid
createFlexGrid(16);


const btnChangeSquares = document.querySelector("#btn");

btnChangeSquares.addEventListener("click", () =>{
     
     const input = prompt("Enter a number from 1 to 100:");
     const number = parseInt(input, 10);
 
     if ( Number.isInteger(number) && number >= 1 && number <= 100) {
         
         userNumber = number;
         createFlexGrid(number);
     } else {
        
         alert("Invalid number! Please, enter a number from 1 to 100 ");
     }

})