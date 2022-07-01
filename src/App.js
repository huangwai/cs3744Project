import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Page from "./components/page";
import Home from "./components/Home";
import {Hw1, Hw2, Hw3} from "./components/DummyPages";
import MyProjects from "./components/Projects";
import NotFound from "./components/notFoundPage";


function App(){
// Inside Route correctly route Component One, Two, and Three to url /1, /2 and /3
  return(
      <Routes>
        <Route path ={"/"} element={<Page />}>
          <Route index element={<Home />}/>
            <Route path={"*"} element = {<NotFound />}/>
            <Route path = {"/projects"}>
                <Route index element={<MyProjects />}/>
                <Route path = {"1"} element={<Hw1 />}/>
                <Route path = {"2"} element={<Hw2 />}/>
                <Route path = {"3"} element={<Hw3 />}/>
                <Route path={"*"} element = {<NotFound />}/>
            </Route>

        </Route>
      </Routes>
  )
}

export default App