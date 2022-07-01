import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import MyFooter from "./Footer";
import '../css/projects.css'
import{Outlet} from "react-router-dom"

function Page(){

    return(
        <div>
            <Header/>
            <Outlet/>
            <MyFooter/>
        </div>

    )
}
export default Page