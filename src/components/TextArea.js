import React , {useState} from "react"



export default function TextArea(){

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


    return(
        <>
    <div className="conatiner">
        <h1>Enter Text To Convert Into UpperText</h1>
        <div className="mb-3">
        <textarea className="form-control" value= {text} onChange = {textchange} id="exampleFormControlTextarea1" rows="7" placeholder="Enter Text"></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2" onClick={btnupclicked}>Convert To Upper Text</button>
      <button className="btn btn-primary mx-2 my-2" onClick={btnloclicked}>Convert To Lower Text</button>
      <button className="btn btn-primary mx-2 my-2" onClick={btnreclicked}>Reset</button>
    </div>
    <div className="conatiner">
       <h1>Text Summary</h1>
       <p>{text.split(" ").length} Word and {text.length} Characters</p>
       <p>{ 0.008 * text.split(" ").length} Minutes Read</p>
    </div>
    <div className="mb-3">
       <h2>Preview</h2>
       <p>{text}</p>
    </div>
    </>
    )
}