//Home Component
import 'bootstrap/dist/css/bootstrap.css';
import '../css/home.css'
function Home(){
return(
    <>
        <hr
            style={{
                color: "grey",
                backgroundColor: "grey",
                height: 3
            }}
        />
        <div id = "homeBody">
            <h2 id = "name">I'm Jimmy Huynh</h2>
            <img
                id = "profileImg"
                src={require('../pictures/profile.JPG')}
            width={300}
            height={300}/>
            <h5 id = "quote">“Do or do not. There is no try.” - Master Yoda</h5>
            <img/>
            <p id = "info">
                Hello, my name is Jimmy Huynh,
                I am a rising senior majoring in Computer Science at Virginia Tech.
                This semester I’m currently taking courses on Computer Systems, Data Algorithms,
                developing my own application in SWE Capstone.
                I’ve completed projects related to mobile application development, created and utilized
                various data structures like Linked Lists and Stacks,
                and I’ve collaborated on many team projects from past semesters. I’m proficient in
                Javascript, java Python, Kotlin, C, and Git.
                I hope to utilize and further advance my skills in problem-solving and communications
                to perform more diligently in the future.
            </p>


        </div>
        <hr
            style={{
                color: "grey",
                backgroundColor: "grey",
                height: 3
            }}
        />

    </>
)
}

export default Home