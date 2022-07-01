import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import '../css/projects.css'
import{Outlet} from "react-router-dom"

function Page(){

    return(
        <div>
            <Header/>
            <Outlet/>
            <p id = "footer">CS 3744: Final Project -
                Done By Jimmy Huynh</p>
        </div>

    )
}
export default Page