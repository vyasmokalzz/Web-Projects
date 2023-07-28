// This JavaScript file gets the input values into a 2 dimensional Array.
// Then starts to solve the Sudoku index by index
// 1. First of all store input into a 2 dimensional Array
// 2. Then finds the Index containing 0 element
// 3. Then get's possible values that the index can take by checking for the constrains of sudoku
// 4. Then fill value which satisfies all constrains and moves to the next index.Arrange
// 5. If it accounts for all possible values then backtracking is done

// Uses tree structure to reach the final Answer to the Puzzle

console.log("Started...")

let backtrack = 0;

function start(){
    let arr = make2DArray();    //converts input to numeric 2D 9x9 array

    //Main Algorithm to solve Sudoku here
    //all numbers are stored in arr[][]
    solve(arr);  //main call to solve the arr(Sudoku)
    
    //Display of the Solution
    display(arr);   
}

function make2DArray(){
    let input = document.getElementsByName("array[]");
    
    //Converting Input Value to a 2 dimensional 9x9 array
    let arr = new Array(9);
    for(let i=0; i<9; i++){
        arr[i] = new Array(9);
    }
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            let temp = input[i + 9*j].value;
            if(temp == ''){
                arr[i][j] = 0;
            }
            else{
                arr[i][j] = parseInt(temp);
            }
        }
    }
    return arr;
}

//main solving function that solves the sudoku
function solve(arr){
    box = nextBoxtoFill(arr);
    if(box==false) return true;
    let x = box[0];
    let y = box[1];
    let choices = getChoices(box, arr);
    for(let m of choices){  //for loop running for elements of choices array
        arr[x][y] = m;
        if(solve(arr)) return true; //reccursion is applied 
    }
    backtrack++;
    arr[x][y] = 0;  //if all choices fails will set that box back to 0
    return false;   //and will hence return false and backtrack
}

//Will find next box to fill i.e. having 0 elment will return false if no such box exist meaning sudoku is solved 
function nextBoxtoFill(arr){
    //x represents row
    //y represents column
    for(let x = 0; x<9; x++){
        for(let y = 0; y<9; y++){
            if(arr[x][y]==0) return [x, y];
        }
    }
    return false;
}

//will get the choices arrays that can be filled in that particular box
function getChoices(box, arr){
    let choices = [];
    for(let i = 1; i<10; i++){
        if(checkConstrains(i, box, arr)){
            choices.push(i);
        }
    }
    return choices;
}

//check for constrains
function checkConstrains(n, box, arr){
    x = box[0];
    y = box[1];
    
    //check for row and column constrain
    for(let i = 0; i < 9; i++){
        if(arr[i][y]==n && i!= x){
            return false;
        }
        if(arr[x][i]==n && i!= y){
            return false;
        }
    }
    
    //check for 3x3 sector constrain
    let secx = Math.floor((x/3))*3;
    let secy = Math.floor((y/3))*3;
    for(let i = secx; i<secx+3; i++){
        for(let j = secy; j<secy+3; j++){
            if(arr[i][j]==n && i!=x && i!=y){
                return false;
            }
        }
    }

    return true;
}

//This function will display the final solution array
function display(arr){
    console.log(backtrack);
    let output = document.getElementsByName("array2[]");
    let heading = document.getElementById('sol').style = "display: block";
    let solution_grid = document.getElementById('solution');
    solution_grid.style = "display: grid";
    solution_grid.scrollIntoView();
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            output[i + 9*j].value = arr[i][j];
        }
    }
}