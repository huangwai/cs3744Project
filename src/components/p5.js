/*eslint no-undef: 0*/

import React, {Component} from "react";
import p5 from 'p5'

//Global variables declared
let circles = []; //creates empty circles array
let hitRate = 0; //hitrate to be calculate
let totalHits = 0; //total hits on canvas

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


class P5Comp extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()  // createRef provides a way to include
                                        // any third-party DOM element into our React
    }

    // This is your sketch for P5, add your sketch correctly and make sure
    // your P5 sketch is correctly renders inside your app.
    Sketch = (p)=>{

        p.setup = ()=> {
            p.createCanvas(600,600); //creates canvas

        }
        p.draw = ()=>{
            p.background(128);

        }
    }
    componentDidMount() {
        // This is the time that we create a new P5 object and attach it to our dom reference
        new p5(this.Sketch, this.myRef.current)
    }
    render() {
        //We use this div as our reference for the element we want to add as a child
        return (
            <>
                <h3>Homework 3: P5</h3>
                <div ref={this.myRef}>
                </div>
            </>
        );
    }
}

export default P5Comp