import 'bootstrap/dist/css/bootstrap.css';
import '../css/hw1.css'

import React, {Component, useState, useEffect} from "react";

class NasaClass extends Component {
    constructor(props) {
        super(props);

        this.state = {description: "", url: ""}
    }

    updateState = (desc, url) => {
        this.setState({description: desc, url: url})
    }

    getImage = () => {
        const api = "MZwupgqfb2TSs5fb582TMbtyLSfhqy5CBiJRdzGB"
        const url = `https://api.nasa.gov/planetary/apod?api_key=${api}`
        fetch(url).then(response => response.json())
            .then(data => this.updateState(data.explanation, data.url))
    }

    render() {
        return(
            <div>
                <button onClick={this.getImage}>Get Image</button>
                <img src={this.state.url} alt={'Nasa apod api'}/>
                <section>
                    <p>{this.state.description}</p>
                </section>
            </div>
        )
    }
}

//Creates the class component into a hook useState
function HookState()
{
    const [imgData, setImg] = useState({})
    async function getImg(){
        const res = await fetch
        ('https://api.nasa.gov/planetary/apod?api_key=MZwupgqfb2TSs5fb582TMbtyLSfhqy5CBiJRdzGB')
        const result = await res.json()
        setImg(result)
    }

    useEffect(() =>{
        getImg()
    }, [])

    return(
        <>
            <h3>Homework 1:  NASA APOD API</h3>
            <button id = "getImage" onClick = {getImg}>Get Image</button>
            <img id = "nasaImg" src ={imgData.url} alt = {"Nasa APod Api"}/>
            <section>
                <p id ="desc">{imgData.explanation}</p>
            </section>
        </>
    )
}


function NasaComponent() {
    return (
        <div id ="wowzers">
            <HookState/>
        </div>
    );
}

export default NasaComponent;
