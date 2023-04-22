import React , {useState} from "react"
import PropTypes from 'prop-types'



export default function TextArea(props){

const [text,setText] = useState("");


const textchange = (event)=>{
    console.log("value changed")
    setText(event.target.value)
}


const btnupclicked = ()=>{
    // console.log("button clicked")
    let newtext = text.toUpperCase()
    setText(newtext) 
}


const btnloclicked = ()=>{
    // console.log("button clicked")
    let newtext = text.toLowerCase()
    setText(newtext) 
}

const btnreclicked = ()=>{
    // console.log("button clicked")
    let newtext = ""
    setText(newtext) 
}

const btncopy = ()=>{
    let textarea = document.getElementById("Textarea1");
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
}


    return(
        <>
    <div className="conatiner"  style={{backgroundColor : props.mode === "light" ? "white" : "#042743" , color : props.mode === "light" ? "Black" : "White"}}>
        <h1>Enter Text To Convert Into UpperText</h1>
        <div className="mb-3">
        <textarea className="form-control"  style={{backgroundColor : props.mode === "light" ? "white" : "#042743" , color : props.mode === "light" ? "Black" : "White" }} value= {text} onChange = {textchange} id="Textarea1" rows="7" placeholder="Enter Text"></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2" onClick={btnupclicked}>Convert To Upper Text</button>
      <button className="btn btn-primary mx-2 my-2" onClick={btnloclicked}>Convert To Lower Text</button>
      <button className="btn btn-primary mx-2 my-2" onClick={btncopy}>Copy Text</button>
      <button className="btn btn-primary mx-2 my-2" onClick={btnreclicked}>Reset</button>
    </div>
    <div className="conatiner" style={{color : props.mode === "light" ? "Black" : "White"}}>
       <h1>Text Summary</h1>
       <p>{text.split(" ").length} Word and {text.length} Characters</p>
       <p>{ 0.008 * text.split(" ").length} Minutes Read</p>
    </div>
    <div className="mb-3" style={{color : props.mode === "light" ? "Black" : "White"}}>
       <h2>Preview</h2>
       <p>{text.length > 0 ? text : "Enter Text in TextBox To Preview"}</p>
    </div>
    </>
    )
}