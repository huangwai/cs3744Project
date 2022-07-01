/*eslint no-undef: 0*/

/**
 * Author: Jimmy Huynh
 * Date: 06/19/2022
 */
//Global variables declared
let circles = []; //creates empty circles array
let hitRate = 0; //hitrate to be calculate
let totalHits = 0; //total hits on canvas

/**
 * creating the canvas here
 * and creates the circles here
 */
function setup(){
    alert("Welcome, here are the features...\n" +
        "1. Click on each circle to delete\n" +
        "2. Play Button - places 5-20 circles in the canvas\n" +
        "3. Reset Button - Clears all the circles from the canvas\n" +
        "4. Pop all circles to win the game\n" +
        "5. Accuracy determined at end\n")
    createCanvas(600,600); //creates canvas

    //resetSketch();
}

//play button represents
function playButton(){
    resetVariables();
    //iterate thru circles list
    for (let index = 0; index < random(5,20); index++)
    {
        //add new circle into the circles list
        circles[index] = new Circle(random(30,width - 30),random(30,height - 30),(random(-3,3)),random(3,-3));
    }
    //console.log("circles length is: " + circles.length) //log circles length
}

//Function for when cursor is clicked on the canvas
//handles if the cursor is clicked on a circles object
//deletes circle if clicked on.
//game runs until no more circles exist
function mouseClicked(){
    for(let index  = 0; index < circles.length; index++){
        //delete circles if mouse clicks on it
        if(circles[index].contains(mouseX,mouseY))
        {
            cursor(CROSS) //changes the cursor to a crosshair

            hitRate = hitRate + 1;
            circles.splice(index,1);
            //console.log("Mouse clicked");
            //console.log("circle length " + circles.length)
        }//end game if all circles were popped
        if(circles.length === 0){
            background(0);
            alert("GOOD JOB... YOU POPPED ALL CIRCLES!!! :)\n" + "Accuracy Rate: " + Math.round((hitRate/totalHits)*100) + "%");
            circles.pop();
            resetVariables();
        }
    }
    //stops recording total hits if game ended
    if(circles.length > 0){
        totalHits++;
        //console.log(totalHits)
    }
}

//Resets the global variables to initial state
function resetVariables(){
    circles = [];
    hitRate = 0;
    totalHits = 0;
}

// creates circles and adds to the circles array
//resets all global variables
function resetButton(){
    resetVariables();
    //console.log("Circle array length is: " + circles.length);
} //end of resetSketch

/**
 * Draws the P5.js file out
 */
function draw(){
    background(128);

    //move and draw the circle in the circles array
    for(let index  = 0; index < circles.length; index++){
        circles[index].move();
        circles[index].display();
    }

}//end of draw function

//Creating a class object called Circles
//handles the movement and displaying of each circle
//Has 3 functions
//move() changes the location of the circle
//display() draws the circle onto the canvas
//contains() returns true if mouse is hovering on a circle
class Circle{
    constructor(x,y,xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.diameter = 50;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.brightness = 255;
    }

    //Shows the circle class inside the canvas page with a style
    display(){
        stroke(255);
        strokeWeight(4);
        noFill();
        circle(this.x, this.y, this.diameter);
    }

    //Checks to see if the mouse(when clicked) is located
    //on a circle object
    contains(x,y){
        //calculates distance between mouse from this circle
        var d = dist(x, y, this.x, this.y)
        return d < (this.diameter/2) ; //return true if distance less than radius
    }


    //move function of circle class
    move() {
        this.x += this.xSpeed; //increment x coordinate
        if (this.x < 30 || this.x > width - 30) {
            this.xSpeed *= -1; //hitting borders flips X distance to negative
        }

        this.y += this.ySpeed; //increment y coordinate
        if (this.y < 30 || this.y > height - 30) {
            this.ySpeed *= -1;
            //hitting borders flips y distance to negative
        }
    }

} //end of class circle

