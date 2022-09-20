import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to UpperCase !!","success")
  };

  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to LowerCase !!","success")
  };
  const handleClearClick= () => {
    // console.log("Uppercase was clicked" + text);
    let newText = ""
    setText(newText);
    props.showAlert(" Text Cleared !!","success")
  };

  const handleCopyClick=()=>{
      console.log("copy clicked");
      var text=document.getElementById("mybox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert(" Text Copied to clipboard !!","success")
  }
  
  const handleOnChange = (event) => {
    console.log("OnChange was clicked");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color:props.mode==="light"?"black":"white"}}>
      <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{backgroundColor:props.mode==="light"?"white":"#0f2444",color:props.mode==="light"?"#0f2444":"white"}} onChange={handleOnChange} id="mybox"rows="10" ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UppeCase </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text </button>
      </div>

      <div className="container" style={{color:props.mode==="light"?"black":"white"}}>
          <h2>Your text summary</h2>
          <p>{text.split(" ").length} Words and {text.length} Characters</p>
          <p>{0.008*text.split(" ").length} Minutes to read </p>
          <h3>Preview</h3>
          <p>{text}</p>
      </div>
    </>
  );
}
