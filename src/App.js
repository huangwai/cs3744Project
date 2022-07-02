import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Page from "./components/page";
import Home from "./components/Home";
import MyProjects from "./components/Projects";
import NotFound from "./components/notFoundPage";
import Homework2 from "./components/homework2";
import P5Comp from "./components/p5"
import NasaComponent from "./components/Homework1";
import ReturnD3 from "./components/d3";


function App(){
// Inside Route correctly route Component One, Two, and Three to url /1, /2 and /3
  return(
      <Routes>
        <Route path ={"/"} element={<Page />}>
          <Route index element={<Home />}/>
            <Route path={"*"} element = {<NotFound />}/>
            <Route path = {"/projects"}>
                <Route index element={<MyProjects />}/>
                <Route path = {"1"} element={<NasaComponent />}/>
                <Route path = {"2"} element={<Homework2 />}/>
                <Route path = {"3"} element={<P5Comp />}/>
                <Route path = {"4"} element={<ReturnD3 />}/>
                <Route path={"*"} element = {<NotFound />}/>
            </Route>

        </Route>
      </Routes>
  )
}

export default App