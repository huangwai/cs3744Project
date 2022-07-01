import 'bootstrap/dist/css/bootstrap.css';
import '../css/projects.css'
/**
 * Projects tab provides information about all the homeworks.
 * Each homework has little description and a image of the homework.
 * When the user clicks on the description. They will be brought to that
 * Homework page
 * @returns {JSX.Element}
 * @constructor
 */

function Hw1Desc(){

    return(
        <div id = "hw1">
            <h3>Homework 1: NASA Homework</h3>
            <p id = 'hw1desc'>Homework 1 involves fetching the json data
                from the NASA API and displaying the
            picture on the screen.</p>
        </div>
    )

}
function Hw2Desc(){
    return(
        <div id = "hw2">
            <h3>Homework 2: Grid Layout</h3>
            <p id = 'hw2desc'>Homework 2 includes using
            a Grid Layout within React. The function is given
            a value in which a number of blocks will
            print on the screen. Even number blocks are
            colored green. Odd number blocks are colored yellow.
            And prime number blocks are colored red with
            a solid black border</p>
            <img src ="../pictures/gridLayoutimg.png"
                 alt ="Grid Layout"
                 width = "460"
            height = "345"/>
        </div>
    )

}

function Hw3Desc(){
    return(
        <div id = "hw3">
            <h3>Homework 3: P5</h3>
            <p id = 'hw3desc'>
                Involves setting up P5 within React.
                I decided to create a game within P5 that incorperates
                many elements in p5.
                First,Click on each circle to delete.
                Second, Play Button - places 5-20 circles in the canvas.
                Third, Reset Button - Clears all the circles from the canvas.
                And lastly, Pop all circles to win the game.Accuracy determined at end

            </p>
        </div>
    )

}

function Hw4Desc(){
    return(
        <div id = "hw4">
            <h3>Homework 4: D3</h3>
            <p id = 'hw4desc'>
                Homework 4 involves fetching json data
                from  Yahoo finance API and charting a
                multi-line chart in D3. Hovering over
                each point will display the value of
                that specific point.
            </p>
        </div>
    )

}

function MyProjects(){

    return(
        <div id = "body">
            <Hw1Desc/>
            <Hw2Desc/>
            <Hw3Desc/>
            <Hw4Desc/>

        </div>

    )
}

export default MyProjects