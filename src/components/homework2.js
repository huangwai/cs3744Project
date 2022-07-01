/**
 * Author: Jimmy Huynh
 * Date: June 10, 2022
 * Assignment: Homework 2 Exploring React Components
 */
import 'bootstrap/dist/css/bootstrap.css';

import '../css/hw2.css'
//checks for if the number is prime
//return true if prime
//return false if not prime
function isPrime(n){
    //if n is 1 or 0
    if (n <= 1)
        return false;

    //checks if the reminder is 0
    for (let i = 2; i < n; i++)
        if (n % i === 0)
            return false;

    return true;
}

//computes the specified color for each scenario
//prime is red with solid black color
//odd is yellow
//even is green
function colorCompute(i){

    let itemStyle;
    //if prime is true => set backgroundColor to red and solid with
    //solid black border
    if(isPrime(i)){
        itemStyle = {
            backgroundColor: "red",
            border: "solid",
            borderColor: "black",
            borderWidth: "3pt"
        };
        //if number is prime => backgroundColor is green
    } else if(i % 2 === 0){
        itemStyle = {
            backgroundColor: "green",
        };
    }
    //if number is odd => set background to yellow
    else if(i % 2 !== 0){
        itemStyle = {
            backgroundColor: "yellow",
        };
    }
    return itemStyle; //return the color attribute
}

//creating function called Grid() that takes 2 props, startNum
// and endNum for the grid layout
//Takes in 2 props, start and end which justify the starting
//and ending value for the grid layout
function Grid(props){
    const items = []; //create empty array

    //adding to the items array
    for(let i = props.start; i <= props.end; i++){
        items[i] = i;
    }

    //maps the <div objects to create the cells here
    const cells = items.map(obj =>
        <div style={colorCompute(obj)}
             className="item"key ={obj}>{obj}</div>)

    //CSS styles of styling the grid layout
    const myStyle = {
        display: "grid",
        gridTemplateColumns:"repeat(8, 1fr)", //8 items in a single row
        gridGap: "1rem",
    };

    //return the div element
    return (
        <div className="container" style={myStyle}>
            {cells}
        </div>
    )
}//end of grid function

/**
 * Runs the application to display the grid system
 * @returns {JSX.Element}
 * @constructor
 * start is start number
 * end is ending number
 */
function Homework2() {
    return (
        <div id = "hw2grid">
            <h3>Homework 2: Grid Layout</h3>
            <Grid start= {1} end = {79}/>
            <footer>Done by: Jimmy Huynh</footer>
        </div>
    );
}
export default Homework2;