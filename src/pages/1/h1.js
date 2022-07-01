//When button is clicked
function done(){
    document.getElementById("AJAXButton").addEventListener("click",requestWithFetch)

}

//Returns the date value inputted by user
function getDate()
{
    return document.getElementById('dateInput').value
}

function genRequest()
{
    const apiKey = "api_key=4L06EtS1j3AebFPJXgyWPS0KWc5oLx9xFP64VWlg"
    let date = getDate()
    console.log(typeof(date))
    date = (date !== "")?`date=${date}`:""//Ternary Operation
    console.log(date)

    return "https://api.nasa.gov/planetary/apod?" + apiKey + "&" + date.toString()
}

// Fetch Request
function requestWithFetch()
{
    const reqUrl = genRequest()

    fetch(reqUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const{url,copyright,date,explanation,hdurl,media_type,service_version,title} = data
            console.log(url)
            document.getElementById('imgHolder').src = url
            document.getElementById('desc').textContent = explanation
        })
        .catch(error => {console.log(error)})
}
