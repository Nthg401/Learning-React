import NavBar from "./components/NavBar";
import TextArea from "./components/TextArea";
import React ,{ useState } from "react";
import Alert  from "./components/Alert";
import About from "./components/About";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App(){
  const [mode , setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message , type)=>{
     setAlert(
   {
  msg : message,
  type : type
});

setTimeout (()=>{
 setAlert(null)
},1500)
  }

  const togglemode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled","success");
    } 
  }



  return(
    <>
    <Router>
    <NavBar title="PR" about ="About Me" mode={mode} togglemode={togglemode} />
    <Alert alert={alert} />
     <div className="container my-5">
     <Routes>
        <Route path="/Home" element={<Home/>}>
        </Route>
          <Route path="/About" element={<About />}>
          </Route>
          <Route path="/TextArea" element={<TextArea mode={mode} showAlert={showAlert}/>}>
          </Route>
        </Routes>
    </div>
    </Router>
    </> 
   );
}