import 'bootstrap/dist/css/bootstrap.css';
import '../css/projects.css'
import {useNavigate} from 'react-router-dom';

import Homework2 from "./homework2";

/**
 * Projects tab provides information about all the homeworks.
 * Each homework has little description and a image of the homework.
 * When the user clicks on the description. They will be brought to that
 * Homework page
 * @returns {JSX.Element}
 * @constructor
 */


function Hw1Desc(){
    const navigate = useNavigate();

    const navigateToHW1 = () => {
        navigate('/projects/1');
    }
    return(

        <div id = "hw1">
            <h3>Homework 1: NASA Homework</h3>
            <img id="projectImg"
                src={require('../pictures/NASACompimg.png')}/>
            <button onClick={navigateToHW1} id = 'hwdesc1'>Homework 1 involves fetching the json data
                from the NASA API and displaying the
            picture on the screen.</button>
        </div>
    )

}
function Hw2Desc(){
    const navigate = useNavigate();

    const navigateToHW2 = () => {
        navigate('/projects/2');
    }
    return(
        <div id = "hw2">
            <h3>Homework 2: Grid Layout</h3>
            <img id="projectImg"
                 src={require('../pictures/gridLayoutimg.png')}
                 />
            <button onClick={navigateToHW2} id = 'hwdesc2'>Homework 2 includes using
            a Grid Layout within React. The function is given
            a value in which a number of blocks will
            print on the screen. Even number blocks are
            colored green. Odd number blocks are colored yellow.
            And prime number blocks are colored red with
            a solid black border</button>
        </div>
    )

}

function Hw3Desc(){
    const navigate = useNavigate();

    const navigateToHW3 = () => {
        navigate('/projects/3');
    }
    return(
        <div id = "hw3">
            <h3>Homework 3: P5</h3>
            <img id="projectImg"
                 src={require('../pictures/p5img.png')}/>
            <button onClick={navigateToHW3} id = 'hwdesc3'>
                Involves setting up P5 within React.
                I decided to create a game within P5 that incorperates
                many elements in p5.
                First,Click on each circle to delete.
                Second, Play Button - places 5-20 circles in the canvas.
                Third, Reset Button - Clears all the circles from the canvas.
                And lastly, Pop all circles to win the game.Accuracy determined at end

            </button>
        </div>
    )

}

function Hw4Desc(){
    const navigate = useNavigate();

    const navigateToHW4 = () => {
        navigate('/projects/4');
    }
    return(
        <div id = "hw4">
            <h3>Homework 4: D3</h3>
            <img id="projectImg"
                 src={require('../pictures/D3img.png')}/>
            <button onClick={navigateToHW4} id = 'hwdesc4'>
                Homework 4 involves fetching json data
                from  Yahoo finance API and charting a
                multi-line chart in D3. Hovering over
                each point will display the value of
                that specific point.
            </button>
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