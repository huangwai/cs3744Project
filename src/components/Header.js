import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import '../css/nav.css'
export default function Header(){
    /**
     * Use the Link component (https://reactrouter.com/docs/en/v6/components/link)
     * to link your nav bar to the corresponding component.
     *
     */
    return(
        <>
            <nav>
                <Link to ={"/"}>Home</Link> {""}
                <Link to ={"/projects"}> Projects </Link>{""}
            </nav>
        </>
    )
}
