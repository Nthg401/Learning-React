import NavBar from "./components/NavBar";
import TextArea from "./components/TextArea";
import React ,{ useState } from "react";

export default function App(){
  const [mode , setMode] = useState("light");
  const togglemode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    } 
  }

  return(
    <>
    <NavBar title="PR" about ="About Me" mode={mode} togglemode={togglemode} />
     <div className="container">
    <TextArea mode={mode}/>
    </div>
    </> 
   );
}